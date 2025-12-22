import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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

    // Notificar a soporte sobre nuevo interesado
    await transporter.sendMail({
      from: `"Himalaya Salud" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "Nuevo registro en Waitlist",
      html: `
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
    });

    // Confirmación al usuario
    await transporter.sendMail({
      from: `"Himalaya Salud" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "¡Estás en la lista! - Himalaya Salud",
      html: `
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
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error en waitlist:", error);
    return NextResponse.json(
      { error: "Error al registrar. Intentá de nuevo." },
      { status: 500 }
    );
  }
}
