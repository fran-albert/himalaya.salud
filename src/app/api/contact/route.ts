import { NextRequest, NextResponse } from "next/server";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

// Cliente de AWS SES. La policy IAM (himalaya-web-ses) restringe el From a noreply@himalayasalud.com.ar.
const ses = new SESv2Client({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY || "",
  },
});

const MAIL_FROM = process.env.MAIL_FROM || "noreply@himalayasalud.com.ar";
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "contacto@himalayasalud.com.ar";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, type } = body;
    const phoneClean = typeof phone === "string" ? phone.trim() : "";

    const typeLabels: Record<string, string> = {
      paciente: "Paciente",
      institucion: "Institución de salud",
      empresa: "Empresa (plan empresas)",
    };
    const typeLabel = typeLabels[type as string] ?? "Sin especificar";

    // Validación
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Email inválido" },
        { status: 400 }
      );
    }

    // Email a soporte (replyTo apunta al usuario para responderle directo)
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: `Himalaya Salud <${MAIL_FROM}>`,
        Destination: { ToAddresses: [CONTACT_EMAIL] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: `[Soporte · ${typeLabel}] ${subject}`, Charset: "UTF-8" },
            Body: {
              Html: {
                Charset: "UTF-8",
                Data: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8FDFA1, #70C9A6); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">Nueva Consulta de Soporte</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phoneClean ? `<p><strong>Teléfono:</strong> ${phoneClean}</p>` : ""}
            <p><strong>Tipo de contacto:</strong> ${typeLabel}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p><strong>Mensaje:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #8FDFA1;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #888; font-size: 12px; text-align: center; margin-top: 20px;">
            Enviado desde himalayasalud.com.ar
          </p>
        </div>
      `,
              },
            },
          },
        },
      })
    );

    // Confirmación al usuario
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: `Himalaya Salud <${MAIL_FROM}>`,
        Destination: { ToAddresses: [email] },
        Content: {
          Simple: {
            Subject: { Data: "Recibimos tu consulta - Himalaya Salud", Charset: "UTF-8" },
            Body: {
              Html: {
                Charset: "UTF-8",
                Data: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8FDFA1, #70C9A6); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">¡Gracias por contactarnos!</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <p>Hola <strong>${name}</strong>,</p>
            <p>Recibimos tu consulta y te responderemos en 24-48 horas hábiles.</p>
            <p><strong>Tu consulta:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #8FDFA1;">
              <p><strong>Asunto:</strong> ${subject}</p>
              <p>${message.replace(/\n/g, "<br>")}</p>
            </div>
            <p style="margin-top: 20px;">Saludos,<br><strong>Equipo de Himalaya Salud</strong></p>
          </div>
        </div>
      `,
              },
            },
          },
        },
      })
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
