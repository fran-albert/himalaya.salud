import { z } from "zod";

const singleLine = (max: number) =>
  z
    .string()
    .trim()
    .min(1)
    .max(max)
    .refine((v) => !/[\r\n]/.test(v));
export const contactSchema = z
  .object({
    name: singleLine(100),
    email: z.string().trim().email().max(254),
    phone: z
      .string()
      .trim()
      .max(40)
      .regex(/^[\d\s+().-]*$/)
      .optional()
      .default(""),
    type: z
      .enum(["persona", "paciente", "empresa", "institucion"])
      .default("persona"),
    subject: singleLine(160),
    message: z.string().trim().min(5).max(5000),
    company: z.string().trim().max(150).optional().default(""),
    teamSize: z
      .enum(["", "1-10", "11-50", "51-200", "201+", "a-definir"])
      .optional()
      .default(""),
    website: z.string().max(0).optional().default(""),
  })
  .superRefine((data, ctx) => {
    if (data.type === "empresa" && !data.company)
      ctx.addIssue({
        code: "custom",
        path: ["company"],
        message: "Ingresá el nombre de tu empresa.",
      });
  });

export type OutgoingMail = {
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  text: string;
};
export type MailSender = (mail: OutgoingMail) => Promise<void>;
export type ContactResult =
  | { success: true; confirmationSent: boolean }
  | { success: false; error: string; status: number };

export function escapeHtml(value: string) {
  return value.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
}
function emailLayout(title: string, body: string) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="margin:0;background:#F8F9FA;color:#212529;font-family:Inter,Arial,Helvetica,sans-serif"><table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:32px 16px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px"><tr><td align="center" style="padding:0 0 28px"><img src="https://www.himalayasalud.com.ar/branding/himalaya-email-logo.png" width="210" alt="Himalaya Salud" style="display:block;max-width:100%;height:auto"></td></tr><tr><td style="background:white;border:1px solid #D6E4E4;border-top:4px solid #70C9A6;border-radius:12px;padding:32px 24px"><h1 style="font-size:28px;line-height:1.2;letter-spacing:-.7px;color:#0C606E;margin:0 0 24px">${escapeHtml(title)}</h1><div style="font-size:16px;line-height:1.65;overflow-wrap:anywhere">${body}</div></td></tr><tr><td align="center" style="padding:24px 12px;font-size:12px;line-height:1.8;color:#52666B">Himalaya Salud · Tu salud en tus manos<br><a href="https://wa.me/5493412429819?text=Hola%2C%20necesito%20ayuda%20con%20mi%20consulta%20a%20Himalaya%20Salud." style="color:#0C606E">WhatsApp · 341 242 9819</a><br><a href="mailto:contacto@himalayasalud.com.ar" style="color:#0C606E">contacto@himalayasalud.com.ar</a></td></tr></table></td></tr></table></body></html>`;
}
export function buildContactEmails(
  data: z.infer<typeof contactSchema>,
  supportEmail: string,
): [OutgoingMail, OutgoingMail] {
  const typeLabel =
    data.type === "empresa"
      ? "Empresa"
      : data.type === "institucion"
        ? "Institución"
        : "Consulta";
  const fields: [string, string][] = [
    ["Nombre", data.name],
    ["Correo", data.email],
    ["Tipo", typeLabel],
    ["Asunto", data.subject],
  ];
  if (data.phone) fields.push(["Teléfono", data.phone]);
  if (data.type === "empresa") {
    fields.push(["Empresa", data.company]);
    if (data.teamSize)
      fields.push([
        "Cantidad de personas",
        data.teamSize === "a-definir" ? "A definir" : data.teamSize,
      ]);
  }
  const supportText =
    fields.map(([label, value]) => label + ": " + value).join("\n") +
    "\n\nMensaje:\n" +
    data.message;
  const supportHtml =
    fields
      .map(
        ([label, value]) =>
          `<p style="margin:0 0 10px"><strong>${label}:</strong> ${escapeHtml(value)}</p>`,
      )
      .join("") +
    `<hr style="border:0;border-top:1px solid #D6E4E4;margin:24px 0"><p><strong>Mensaje</strong></p><div style="white-space:pre-wrap">${escapeHtml(data.message)}</div>`;
  const confirmationText = `Hola ${data.name},\n\nRecibimos tu consulta. Nuestro equipo la revisará y te responderá a este correo.\n\nPodés responder este mensaje para agregar información.\n\nHimalaya Salud\nWhatsApp: 341 242 9819\ncontacto@himalayasalud.com.ar`;
  const confirmationHtml = `<p>Hola ${escapeHtml(data.name)},</p><p>Recibimos tu consulta. Nuestro equipo la revisará y te responderá a este correo.</p><p>Podés responder este mensaje para agregar información.</p><p style="margin-top:28px">Gracias por escribirnos,<br><strong style="color:#0C606E">Himalaya Salud</strong></p>`;
  return [
    {
      to: supportEmail,
      replyTo: data.email,
      subject: `[Web · ${typeLabel}] ${data.subject}`,
      text: supportText,
      html: emailLayout("Nueva consulta desde la web", supportHtml),
    },
    {
      to: data.email,
      replyTo: supportEmail,
      subject: "Recibimos tu consulta · Himalaya Salud",
      text: confirmationText,
      html: emailLayout("Gracias por escribirnos.", confirmationHtml),
    },
  ];
}
export async function processContact(
  input: unknown,
  send: MailSender,
  supportEmail: string,
): Promise<ContactResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    const messages: Record<string, string> = {
      name: "Completá tu nombre (hasta 100 caracteres).",
      email: "Revisá que el correo electrónico esté escrito correctamente.",
      phone:
        "Revisá el teléfono: usá números, espacios, +, guiones o paréntesis.",
      subject: "Completá el asunto en una línea, con hasta 160 caracteres.",
      message: "Escribí un mensaje de entre 5 y 5000 caracteres.",
      company: "Completá el nombre de tu empresa (hasta 150 caracteres).",
      teamSize: "Elegí una de las opciones de cantidad de personas.",
      type: "Elegí el motivo de tu consulta.",
    };
    return {
      success: false,
      status: 400,
      error:
        messages[String(parsed.error.issues[0]?.path[0])] ||
        "Revisá los campos de la consulta.",
    };
  }
  const [notification, confirmation] = buildContactEmails(
    parsed.data,
    supportEmail,
  );
  try {
    await send(notification);
  } catch {
    return {
      success: false,
      status: 503,
      error:
        "No pudimos confirmar el envío. Intentá más tarde o escribinos por WhatsApp.",
    };
  }
  try {
    await send(confirmation);
    return { success: true, confirmationSent: true };
  } catch {
    return { success: true, confirmationSent: false };
  }
}
