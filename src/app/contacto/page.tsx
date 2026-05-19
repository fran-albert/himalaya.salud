"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";
import {
  Mail,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Send,
  ArrowRight,
  User,
  Building2,
  Briefcase,
} from "lucide-react";
import { BRAND, SHADOW } from "@/lib/brand-tokens";
import { FEATURES } from "@/lib/feature-flags";

export default function ContactPage() {
  const contactEmail = "contacto@himalayasalud.com.ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "paciente",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const tipo = new URLSearchParams(window.location.search).get("tipo");
    if (tipo === "empresa") {
      setFormData((p) => ({
        ...p,
        type: "empresa",
        subject: p.subject || "Consulta — Plan empresas",
      }));
    } else if (tipo === "institucion" && FEATURES.instituciones) {
      setFormData((p) => ({
        ...p,
        type: "institucion",
        subject: p.subject || "Consulta — Adhesión institucional",
      }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar");
      }

      track("contact_form_submitted", {
        form: "contact",
        audience: formData.type,
      });
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", type: "paciente", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Error al enviar el mensaje");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: BRAND.bg,
    border: `1px solid ${BRAND.teal50}`,
    borderRadius: "8px",
    color: BRAND.textBody,
    padding: "12px 14px",
    fontSize: "0.95rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.15s, box-shadow 0.15s",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "0.78rem",
    fontWeight: 600,
    color: BRAND.textCaption,
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "0.5rem",
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.bg }}>
      <div className="container mx-auto px-4 pt-24 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <aside className="lg:col-span-5 space-y-10">
              <div className="space-y-4">
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-[0.22em]"
                  style={{ color: BRAND.mint900 }}
                >
                  Estamos para escucharte
                </span>
                <h1
                  className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
                  style={{ color: BRAND.teal700 }}
                >
                  Ponete en contacto
                </h1>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: BRAND.textBody }}
                >
                  ¿Tenés consultas sobre el Plan Emergencia{FEATURES.instituciones ? " o querés implementar Himalaya en tu institución" : ""}? Escribinos y un asesor te contactará a la brevedad.
                </p>
              </div>

              <a
                href={`mailto:${contactEmail}`}
                className="flex items-start gap-4 group"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{
                    backgroundColor: BRAND.teal50,
                    color: BRAND.teal700,
                    borderRadius: "12px",
                  }}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-0.5">
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.18em]"
                    style={{ color: BRAND.textCaption }}
                  >
                    Correo electrónico
                  </p>
                  <p
                    className="text-base font-semibold transition-colors"
                    style={{ color: BRAND.textBody }}
                  >
                    {contactEmail}
                  </p>
                </div>
              </a>

              <div
                className="p-6"
                style={{
                  backgroundColor: BRAND.bgSecondary,
                  border: `1px solid ${BRAND.teal50}`,
                  borderRadius: "16px",
                  boxShadow: SHADOW.card,
                }}
              >
                <h4
                  className="font-semibold text-base mb-2"
                  style={{ color: BRAND.teal700 }}
                >
                  ¿Buscás respuestas rápidas?
                </h4>
                <p className="text-sm mb-3" style={{ color: BRAND.textBody }}>
                  Antes de escribirnos, te recomendamos revisar nuestro centro de ayuda donde respondemos las dudas más comunes.
                </p>
                <Link
                  href="/faq"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold group"
                  style={{ color: BRAND.teal700 }}
                >
                  Ver preguntas frecuentes
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </aside>

            <div className="lg:col-span-7">
              <div
                className="overflow-hidden"
                style={{
                  backgroundColor: BRAND.bg,
                  border: `1px solid ${BRAND.teal50}`,
                  borderRadius: "16px",
                  boxShadow: SHADOW.card,
                }}
              >
                <div className="p-6 md:p-10">
                  {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div
                        className="w-16 h-16 flex items-center justify-center mb-6"
                        style={{
                          backgroundColor: BRAND.mint50,
                          color: BRAND.mint900,
                          borderRadius: "50%",
                        }}
                      >
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3
                        className="text-2xl font-bold mb-3 tracking-tight"
                        style={{ color: BRAND.teal700 }}
                      >
                        ¡Mensaje recibido!
                      </h3>
                      <p
                        className="text-base mb-6 max-w-sm"
                        style={{ color: BRAND.textBody }}
                      >
                        Gracias por escribirnos. Un miembro de nuestro equipo te contactará en las próximas 24 horas hábiles.
                      </p>
                      <button
                        type="button"
                        onClick={() => setStatus("idle")}
                        className="inline-flex items-center justify-center text-sm font-semibold transition-colors"
                        style={{
                          backgroundColor: BRAND.bg,
                          color: BRAND.teal700,
                          border: `1px solid ${BRAND.teal700}`,
                          padding: "10px 18px",
                          borderRadius: "8px",
                        }}
                      >
                        Enviar otro mensaje
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" style={labelStyle}>
                            Nombre completo
                          </label>
                          <input
                            id="name"
                            name="name"
                            placeholder="Tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={status === "loading"}
                            style={inputStyle}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = BRAND.teal700;
                              e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND.teal50}`;
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = BRAND.teal50;
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" style={labelStyle}>
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="tu@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={status === "loading"}
                            style={inputStyle}
                            onFocus={(e) => {
                              e.currentTarget.style.borderColor = BRAND.teal700;
                              e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND.teal50}`;
                            }}
                            onBlur={(e) => {
                              e.currentTarget.style.borderColor = BRAND.teal50;
                              e.currentTarget.style.boxShadow = "none";
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" style={labelStyle}>
                          Teléfono{" "}
                          <span
                            style={{
                              color: BRAND.textCaption,
                              fontWeight: 500,
                            }}
                          >
                            (opcional)
                          </span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          inputMode="tel"
                          autoComplete="tel"
                          placeholder="+54 9 341 123 4567"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={status === "loading"}
                          style={inputStyle}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = BRAND.teal700;
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND.teal50}`;
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = BRAND.teal50;
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      <div>
                        <span style={labelStyle}>¿Cómo podemos ayudarte?</span>
                        <div
                          className={
                            FEATURES.instituciones
                              ? "grid grid-cols-3 gap-3"
                              : "grid grid-cols-2 gap-3"
                          }
                        >
                          {[
                            { value: "paciente", label: "Paciente", Icon: User },
                            ...(FEATURES.instituciones
                              ? [{ value: "institucion", label: "Institución", Icon: Building2 }]
                              : []),
                            { value: "empresa", label: "Empresa", Icon: Briefcase },
                          ].map(({ value, label, Icon }) => {
                            const active = formData.type === value;
                            return (
                              <button
                                key={value}
                                type="button"
                                onClick={() => setFormData((p) => ({ ...p, type: value }))}
                                className="flex items-center justify-center gap-2 transition-all"
                                style={{
                                  padding: "12px 8px",
                                  borderRadius: "8px",
                                  border: `1px solid ${active ? BRAND.teal700 : BRAND.teal50}`,
                                  backgroundColor: active ? BRAND.teal50 : BRAND.bg,
                                  color: active ? BRAND.teal700 : BRAND.textCaption,
                                  fontWeight: 600,
                                  fontSize: "0.85rem",
                                }}
                              >
                                <Icon className="w-4 h-4" />
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" style={labelStyle}>
                          Asunto
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          placeholder="Ej: Consulta sobre el Plan Emergencia"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          disabled={status === "loading"}
                          style={inputStyle}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = BRAND.teal700;
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND.teal50}`;
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = BRAND.teal50;
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      <div>
                        <label htmlFor="message" style={labelStyle}>
                          Mensaje
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Contanos más sobre tu necesidad..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          disabled={status === "loading"}
                          style={{
                            ...inputStyle,
                            minHeight: "140px",
                            resize: "vertical",
                            fontFamily: "inherit",
                          }}
                          onFocus={(e) => {
                            e.currentTarget.style.borderColor = BRAND.teal700;
                            e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND.teal50}`;
                          }}
                          onBlur={(e) => {
                            e.currentTarget.style.borderColor = BRAND.teal50;
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        />
                      </div>

                      {status === "error" && (
                        <div
                          className="flex items-center gap-3 px-4 py-3"
                          style={{
                            backgroundColor: "#FDECEE",
                            color: BRAND.danger,
                            border: `1px solid ${BRAND.danger}33`,
                            borderRadius: "8px",
                          }}
                        >
                          <AlertCircle className="w-5 h-5 flex-shrink-0" />
                          <span className="text-sm font-medium">{errorMessage}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="w-full inline-flex items-center justify-center text-base font-semibold transition-all"
                        style={{
                          backgroundColor: BRAND.teal700,
                          color: "#FFFFFF",
                          padding: "14px 22px",
                          borderRadius: "8px",
                          opacity: status === "loading" ? 0.7 : 1,
                          cursor: status === "loading" ? "wait" : "pointer",
                        }}
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Enviando consulta...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Enviar mensaje
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
