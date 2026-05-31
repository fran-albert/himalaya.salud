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
    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email requerido" },
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

    // Notificar a soporte sobre nuevo interesado (replyTo al interesado para responderle directo)
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: `Himalaya Salud <${MAIL_FROM}>`,
        Destination: { ToAddresses: [CONTACT_EMAIL] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: "Nuevo registro en Waitlist", Charset: "UTF-8" },
            Body: {
              Html: {
                Charset: "UTF-8",
                Data: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8FDFA1, #70C9A6); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">Nuevo Interesado</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <p>Se registró un nuevo email en la lista de espera:</p>
            <div style="background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #8FDFA1;">
              <p style="font-size: 18px; margin: 0;"><a href="mailto:${email}">${email}</a></p>
            </div>
          </div>
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
            Subject: { Data: "¡Estás en la lista! - Himalaya Salud", Charset: "UTF-8" },
            Body: {
              Html: {
                Charset: "UTF-8",
                Data: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8FDFA1, #70C9A6); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">¡Bienvenido a Himalaya Salud!</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <p>Gracias por tu interés en nuestra plataforma de gestión de salud.</p>
            <p>Te agregamos a nuestra lista de espera y serás de los primeros en enterarte cuando lancemos.</p>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <p style="font-size: 24px; margin: 0;">🚀</p>
              <p style="font-weight: bold; margin: 10px 0 0 0;">Lanzamiento: Junio 2026</p>
            </div>
            <p>Mientras tanto, podés seguirnos para estar al día con las novedades.</p>
            <p>Saludos,<br><strong>Equipo de Himalaya Salud</strong></p>
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
    console.error("Error en waitlist:", error);
    return NextResponse.json(
      { error: "Error al registrar. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
