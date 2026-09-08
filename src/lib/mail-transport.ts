import "server-only";
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import type { MailSender } from "./contact-service";

export function isMailPreview() {
  return (
    process.env.CONTACT_MAIL_MODE === "preview" &&
    process.env.NODE_ENV === "development"
  );
}
export function createMailSender(): MailSender {
  // Nunca permitir confirmaciones simuladas en una versión de producción.
  if (process.env.CONTACT_MAIL_MODE === "preview") {
    if (!isMailPreview()) throw new Error("MAIL_PREVIEW_REQUIRES_DEVELOPMENT");
    return async (mail) => {
      const [{ mkdir, writeFile, readFile }, { join }, { randomUUID }] =
        await Promise.all([
          import("node:fs/promises"),
          import("node:path"),
          import("node:crypto"),
        ]);
      const directory = join(process.cwd(), ".mail-preview");
      const logo = await readFile(
        join(process.cwd(), "public/branding/himalaya-email-logo.png"),
      );
      const previewHtml = mail.html.replace(
        "https://www.himalayasalud.com.ar/branding/himalaya-email-logo.png",
        "data:image/png;base64," + logo.toString("base64"),
      );
      await mkdir(directory, { recursive: true });
      const id = Date.now() + "-" + randomUUID();
      await writeFile(
        join(directory, id + ".json"),
        JSON.stringify(mail, null, 2),
        { mode: 0o600 },
      );
      await writeFile(join(directory, id + ".html"), previewHtml, {
        mode: 0o600,
      });
    };
  }
  if (!process.env.SES_ACCESS_KEY_ID || !process.env.SES_SECRET_ACCESS_KEY)
    throw new Error("MAIL_NOT_CONFIGURED");
  const ses = new SESv2Client({
    region: process.env.AWS_REGION || "us-east-1",
    credentials: {
      accessKeyId: process.env.SES_ACCESS_KEY_ID,
      secretAccessKey: process.env.SES_SECRET_ACCESS_KEY,
    },
    // Evitar reintentos automáticos de envíos cuya aceptación pudo quedar incierta.
    maxAttempts: 1,
    requestHandler: { connectionTimeout: 5000, requestTimeout: 10000 },
  });
  return async (mail) => {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: `Himalaya Salud <${process.env.MAIL_FROM || "noreply@himalayasalud.com.ar"}>`,
        Destination: { ToAddresses: [mail.to] },
        ReplyToAddresses: [mail.replyTo],
        Content: {
          Simple: {
            Subject: { Data: mail.subject, Charset: "UTF-8" },
            Body: {
              Html: { Data: mail.html, Charset: "UTF-8" },
              Text: { Data: mail.text, Charset: "UTF-8" },
            },
          },
        },
      }),
    );
  };
}
