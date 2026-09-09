import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { WhatsappIcon } from "@/components/whatsapp-icon";
import { TrackedLink } from "@/components/tracked-link";
import { businessWhatsappUrl } from "@/lib/site-links";
import { contactEmail, whatsappUrl } from "@/lib/social-links";
import { FEATURES } from "@/lib/feature-flags";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string }>;
}) {
  const { tipo } = await searchParams;
  const audience =
    tipo === "empresa"
      ? "empresa"
      : tipo === "institucion" && FEATURES.instituciones
        ? "institucion"
        : "persona";
  const company = audience === "empresa";
  const preview =
    process.env.CONTACT_MAIL_MODE === "preview" &&
    process.env.NODE_ENV === "development";
  return (
    <div className="h-page">
      <div className="h-container h-contact-grid">
        <aside className="h-contact-intro">
          <span className="h-eyebrow">
            {company ? "Himalaya para empresas" : "Estamos para ayudarte"}
          </span>
          <h1>
            {company ? "Hablemos de tu equipo." : "Estamos del otro lado."}
          </h1>
          <p>
            {company
              ? "Contanos sobre tu empresa y cuántas personas recibirían el beneficio. Te ayudamos a conocer las opciones."
              : "Consultanos por tu cuenta, tu plan o tus primeros pasos en Himalaya. Elegí cómo contactarnos."}
          </p>
          <TrackedLink
            href={company ? businessWhatsappUrl : whatsappUrl}
            className="h-contact-channel"
            event="whatsapp_clicked"
            origin={company ? "contact_business" : "contact"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon width={27} height={27} />
            <span>
              <strong>341 242 9819</strong>
              <small>Abrir WhatsApp con una consulta</small>
            </span>
          </TrackedLink>
          <a href={`mailto:${contactEmail}`} className="h-contact-channel">
            <Mail size={26} aria-hidden="true" />
            <span>
              <strong>{contactEmail}</strong>
              <small>Abrir mi correo</small>
            </span>
          </a>
          <div className="h-contact-aside">
            <h2>
              {company
                ? "¿Te invitaron desde tu empresa?"
                : "¿Ya tenés un plan activo?"}
            </h2>
            <p>
              {company
                ? "Tu beneficio se activa desde el correo de invitación."
                : "La guía te acompaña para ingresar a la app y preparar tus contactos."}
            </p>
            <Link
              href={company ? "/beneficio-empresarial" : "/primeros-pasos"}
              className="h-text-link"
            >
              Ver cómo empezar <ArrowRight size={16} />
            </Link>
          </div>
        </aside>
        <ContactForm audience={audience} preview={preview} />
      </div>
    </div>
  );
}
