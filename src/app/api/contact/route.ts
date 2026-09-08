import { NextRequest, NextResponse } from "next/server";
import { processContact } from "@/lib/contact-service";
import { createMailSender, isMailPreview } from "@/lib/mail-transport";

export const runtime = "nodejs";
export async function POST(request: NextRequest) {
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { error: "Formato de consulta inválido." },
      { status: 415 },
    );
  if (Number(request.headers.get("content-length")) > 24000)
    return NextResponse.json(
      { error: "La consulta es demasiado larga." },
      { status: 413 },
    );
  let input: unknown;
  try {
    const body = await request.text();
    if (body.length > 24000)
      return NextResponse.json(
        { error: "La consulta es demasiado larga." },
        { status: 413 },
      );
    input = JSON.parse(body);
  } catch {
    return NextResponse.json(
      { error: "No se pudo leer la consulta." },
      { status: 400 },
    );
  }
  try {
    // El transporte se crea al intentar enviar, después de validar los campos.
    const result = await processContact(
      input,
      (mail) => createMailSender()(mail),
      process.env.CONTACT_EMAIL || "contacto@himalayasalud.com.ar",
    );
    if (!result.success) {
      if (result.status === 503)
        console.error("CONTACT_SUPPORT_DELIVERY_UNCONFIRMED");
      return NextResponse.json(
        { error: result.error },
        { status: result.status },
      );
    }
    if (!result.confirmationSent) console.warn("CONTACT_ACKNOWLEDGMENT_FAILED");
    return NextResponse.json({ ...result, preview: isMailPreview() });
  } catch {
    console.error("CONTACT_REQUEST_FAILED");
    return NextResponse.json(
      { error: "No pudimos completar la consulta. Escribinos por WhatsApp." },
      { status: 503 },
    );
  }
}
