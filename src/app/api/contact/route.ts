import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configurar transporter con SMTP de Hostinger
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, type } = body;

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

    // Email a soporte
    await transporter.sendMail({
      from: `"Himalaya Salud" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `[Soporte · ${typeLabel}] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8FDFA1, #70C9A6); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0;">Nueva Consulta de Soporte</h1>
          </div>
          <div style="padding: 30px; background: #f9f9f9; border-radius: 0 0 10px 10px;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
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
    });

    // Confirmación al usuario
    await transporter.sendMail({
      from: `"Himalaya Salud" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Recibimos tu consulta - Himalaya Salud",
      html: `
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
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error enviando email:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
