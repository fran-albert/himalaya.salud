"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { track } from "@vercel/analytics";
import { FEATURES } from "@/lib/feature-flags";

type Audience = "persona" | "empresa" | "institucion";
export function ContactForm({
  audience,
  preview,
}: {
  audience: Audience;
  preview: boolean;
}) {
  const [type, setType] = useState<Audience>(audience);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState({
    confirmationSent: false,
    preview: false,
  });
  const busy = useRef(false);
  const resultHeading = useRef<HTMLHeadingElement>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    busy.current = true;
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok || !data.success)
        throw new Error(
          data.error ||
            "No pudimos confirmar el envío. Escribinos por WhatsApp si el problema continúa.",
        );
      setResult({
        confirmationSent: data.confirmationSent === true,
        preview: data.preview === true,
      });
      setStatus("success");
      if (!data.preview) track("contact_form_accepted", { audience: type });
      requestAnimationFrame(() => resultHeading.current?.focus());
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "No pudimos confirmar el envío. Tus datos siguen en el formulario.",
      );
      setStatus("error");
    } finally {
      busy.current = false;
    }
  }
  return (
    <div className="h-form-card">
      {preview && (
        <div className="h-preview">
          <strong>Vista previa local.</strong> Al completar este formulario se
          guardan dos correos de muestra. No se envía ningún mensaje.
        </div>
      )}
      {status === "success" ? (
        <div className="h-success" role="status">
          <CheckCircle2 size={40} aria-hidden="true" />
          <h2 ref={resultHeading} tabIndex={-1}>
            {result.preview ? "Prueba completada." : "Tu consulta fue enviada."}
          </h2>
          <p>
            {result.preview
              ? "Los correos de recepción y confirmación quedaron guardados para revisión. No se enviaron correos reales."
              : "La consulta fue aceptada por nuestro servicio de correo. El equipo te responderá a la dirección que indicaste."}
          </p>
          {!result.preview && (
            <p>
              {result.confirmationSent
                ? "También enviamos una confirmación a tu correo. Si no la encontrás, revisá spam."
                : "No pudimos enviar el correo de confirmación, pero tu consulta ya fue aceptada. No hace falta que la repitas."}
            </p>
          )}
          <button
            className="h-button h-button-outline"
            type="button"
            onClick={() => setStatus("idle")}
          >
            Escribir otra consulta
          </button>
        </div>
      ) : (
        <>
          <h2>Dejanos tu consulta</h2>
          <p className="h-form-lead">Te respondemos al correo que indiques.</p>
          <form
            className="h-contact-form"
            onSubmit={submit}
            aria-busy={status === "loading"}
          >
            <fieldset disabled={status === "loading"}>
              <legend>¿Sobre qué querés consultar?</legend>
              <div className="h-radio-options">
                {[
                  { value: "persona", label: "Mi cuenta o un plan" },
                  { value: "empresa", label: "Mi empresa" },
                  ...(FEATURES.instituciones
                    ? [{ value: "institucion", label: "Mi institución" }]
                    : []),
                ].map((o) => (
                  <label key={o.value}>
                    <input
                      type="radio"
                      name="type"
                      value={o.value}
                      checked={type === o.value}
                      onChange={() => setType(o.value as Audience)}
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="h-fields-pair">
              <div className="h-field">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Tu nombre"
                  disabled={status === "loading"}
                />
              </div>
              <div className="h-field">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="nombre@correo.com"
                  disabled={status === "loading"}
                />
              </div>
            </div>
            {type === "empresa" && (
              <div className="h-fields-pair">
                <div className="h-field">
                  <label htmlFor="company">Empresa</label>
                  <input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    required
                    maxLength={150}
                    placeholder="Nombre de la empresa"
                    disabled={status === "loading"}
                  />
                </div>
                <div className="h-field">
                  <label htmlFor="teamSize">
                    Personas <small>(opcional)</small>
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    defaultValue=""
                    disabled={status === "loading"}
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="1-10">1 a 10</option>
                    <option value="11-50">11 a 50</option>
                    <option value="51-200">51 a 200</option>
                    <option value="201+">Más de 200</option>
                    <option value="a-definir">Todavía no lo sé</option>
                  </select>
                </div>
              </div>
            )}
            <div className="h-field">
              <label htmlFor="phone">
                Teléfono <small>(opcional)</small>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={40}
                placeholder="Código de área y número"
                disabled={status === "loading"}
              />
            </div>
            <div className="h-field">
              <label htmlFor="subject">Asunto</label>
              <input
                key={type}
                id="subject"
                name="subject"
                maxLength={160}
                required
                defaultValue={
                  type === "empresa"
                    ? "Consulta por el plan empresarial"
                    : type === "institucion"
                      ? "Consulta institucional"
                      : ""
                }
                placeholder="¿En qué podemos ayudarte?"
                disabled={status === "loading"}
              />
            </div>
            <div className="h-field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                required
                minLength={5}
                maxLength={5000}
                rows={5}
                placeholder={
                  type === "empresa"
                    ? "Contanos qué necesitás para tu equipo."
                    : "Contanos tu consulta. No incluyas contraseñas ni datos de tu tarjeta."
                }
                disabled={status === "loading"}
              />
            </div>
            <div className="h-honeypot" aria-hidden="true">
              <label htmlFor="website">Sitio web</label>
              <input
                id="website"
                name="website"
                autoComplete="off"
                tabIndex={-1}
              />
            </div>
            {status === "error" && (
              <div className="h-message h-message-error" role="alert">
                {error} Tus datos siguen en el formulario.
              </div>
            )}
            <p className="h-form-fine">
              Usaremos estos datos para responder tu consulta.{" "}
              <Link href="/politica-de-privacidad">
                Ver política de privacidad
              </Link>
              .
            </p>
            <button
              type="submit"
              className="h-button"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2
                    size={18}
                    className="animate-spin"
                    aria-hidden="true"
                  />
                  Procesando consulta…
                </>
              ) : (
                <>
                  {preview ? "Probar formulario" : "Enviar consulta"}
                  <ArrowRight size={17} aria-hidden="true" />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
