import test from "node:test";
import assert from "node:assert/strict";
import {
  processContact,
  type OutgoingMail,
} from "../src/lib/contact-service.ts";

const sample = {
  name: "Prueba Web",
  email: "revision@example.com",
  subject: "Consulta de prueba",
  message: "Necesito información del acceso.",
  type: "persona",
};
const support = "contacto@himalayasalud.com.ar";
test("consulta válida: primero soporte, luego confirmación con Reply-To y texto", async () => {
  const mails: OutgoingMail[] = [];
  const result = await processContact(
    sample,
    async (mail) => {
      mails.push(mail);
    },
    support,
  );
  assert.deepEqual(result, { success: true, confirmationSent: true });
  assert.equal(mails.length, 2);
  assert.equal(mails[0].to, support);
  assert.equal(mails[0].replyTo, sample.email);
  assert.equal(mails[1].to, sample.email);
  assert.equal(mails[1].replyTo, support);
  assert.match(mails[0].text, /Necesito información/);
  assert.match(mails[1].text, /Recibimos tu consulta/);
  assert.ok(
    mails.every(
      (mail) => mail.html.includes("<html lang=") && mail.text.length > 50,
    ),
  );
});
test("fallo en soporte: no confirma una consulta que no se aceptó", async () => {
  let attempts = 0;
  const result = await processContact(
    sample,
    async () => {
      attempts++;
      throw new Error("Provider unavailable");
    },
    support,
  );
  assert.equal(result.success, false);
  assert.equal(attempts, 1);
  if (!result.success) assert.equal(result.status, 503);
});
test("fallo solo en confirmación: acepta la consulta y no repite el envío a soporte", async () => {
  let attempts = 0;
  const result = await processContact(
    sample,
    async () => {
      if (++attempts === 2) throw new Error("Confirmation failed");
    },
    support,
  );
  assert.deepEqual(result, { success: true, confirmationSent: false });
  assert.equal(attempts, 2);
});
test("valida tipos, campos vacíos, tamaños, empresa y honeypot antes de enviar", async () => {
  const invalid = [
    null,
    [],
    {},
    { name: { html: "bad" } },
    { name: "   " },
    { email: "invalid" },
    { subject: "Asunto\r\nBcc: bad@example.com" },
    { message: "x".repeat(5001) },
    { type: "empresa", company: " " },
    { website: "bot.example" },
    { phone: "<img>" },
    { teamSize: "unknown" },
  ];
  for (const change of invalid) {
    const payload =
      change === null || Array.isArray(change)
        ? change
        : { ...sample, ...change };
    // El caso {} es válido al combinarlo; probarlo como objeto vacío.
    const input =
      change && !Array.isArray(change) && Object.keys(change).length === 0
        ? {}
        : payload;
    let attempts = 0;
    const result = await processContact(
      input,
      async () => {
        attempts++;
      },
      support,
    );
    assert.equal(result.success, false, JSON.stringify(change));
    assert.equal(attempts, 0);
  }
});
test("empresa: conserva empresa y cantidad; persona: ignora datos empresariales ocultos", async () => {
  let messages: OutgoingMail[] = [];
  await processContact(
    {
      ...sample,
      type: "empresa",
      company: "Empresa de prueba",
      teamSize: "11-50",
    },
    async (mail) => {
      messages.push(mail);
    },
    support,
  );
  assert.match(messages[0].text, /Empresa: Empresa de prueba/);
  assert.match(messages[0].text, /Cantidad de personas: 11-50/);
  messages = [];
  await processContact(
    { ...sample, company: "Dato oculto", teamSize: "11-50" },
    async (mail) => {
      messages.push(mail);
    },
    support,
  );
  assert.doesNotMatch(messages[0].text, /Dato oculto|Cantidad de personas/);
});
test("escapa HTML de todos los campos y no reenvía el mensaje a la dirección ingresada", async () => {
  const mails: OutgoingMail[] = [];
  const payload = {
    ...sample,
    name: 'Persona <b>"A"</b>',
    subject: "Consulta <img src=x>",
    message: '<a href="https://example.org">Enlace no confiable</a> & texto',
    type: "empresa",
    company: "Empresa <script>alert(1)</script>",
  };
  await processContact(
    payload,
    async (mail) => {
      mails.push(mail);
    },
    support,
  );
  assert.doesNotMatch(
    mails[0].html,
    /<script>|<b>|<img src=x>|<a href="https:\/\/example.org"/,
  );
  assert.match(mails[0].html, /&lt;script&gt;/);
  assert.match(mails[0].html, /&amp; texto/);
  assert.doesNotMatch(mails[1].html, /Enlace no confiable|example.org/);
});
