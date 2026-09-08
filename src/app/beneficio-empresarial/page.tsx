import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { HelpBlock } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Activar tu beneficio empresarial",
  description:
    "Activá el beneficio de Himalaya Salud asignado por tu empresa desde el correo de invitación y continuá a la app.",
  alternates: { canonical: "/beneficio-empresarial" },
  openGraph: {
    title: "Tu beneficio empresarial | Himalaya Salud",
    url: "/beneficio-empresarial",
    description:
      "Usá tu invitación, activá tu beneficio y continuá con la misma cuenta.",
  },
};
export default function BeneficioEmpresarial() {
  return (
    <div className="h-page">
      <div className="h-container">
        <div className="h-subhero">
          <Link href="/" className="h-breadcrumb">
            <ArrowLeft size={14} />
            Inicio
          </Link>
          <br />
          <span className="h-eyebrow">Mi empresa me dio acceso</span>
          <h1>
            Tu beneficio empieza
            <br />
            con una invitación.
          </h1>
          <p>
            Si tu empresa te asignó un plan, activalo desde el correo que
            recibiste. Ese enlace conecta tu cuenta con el beneficio
            empresarial.
          </p>
        </div>
        <div className="h-guide-layout">
          <ol className="h-guide-steps">
            <li className="h-guide-step">
              <span className="h-step-number">01</span>
              <div>
                <h2>Buscá el correo de invitación</h2>
                <p>
                  Revisá la dirección que informaste a tu empresa, incluida la
                  carpeta de spam. La invitación indica qué empresa te asignó el
                  beneficio.
                </p>
              </div>
            </li>
            <li className="h-guide-step">
              <span className="h-step-number">02</span>
              <div>
                <h2>Abrí “Activar mi cuenta”</h2>
                <p>
                  Usá el botón del correo y seguí las instrucciones con el mismo
                  email al que llegó la invitación. Si ya tenés una cuenta con
                  ese correo, continuá con ella.
                </p>
                <p>
                  Para usar ese beneficio no necesitás contratar un plan
                  individual. Si la activación te pide una nueva compra,
                  consultanos antes de seguir.
                </p>
              </div>
            </li>
            <li className="h-guide-step">
              <span className="h-step-number">03</span>
              <div>
                <h2>Continuá a la app</h2>
                <p>
                  Una vez activado el beneficio, ingresá con esa cuenta y
                  configurá tus contactos de emergencia.
                </p>
                <Link href="/primeros-pasos" className="h-button">
                  Ver los primeros pasos <ArrowRight size={17} />
                </Link>
              </div>
            </li>
          </ol>
          <aside className="h-guide-sidebar">
            <Mail size={28} color="#0C606E" style={{ marginBottom: 20 }} />
            <h2>¿El correo no llegó?</h2>
            <p>
              Confirmá con tu empresa qué dirección usó para invitarte. Si el
              enlace venció o el correo no coincide, pedí que revisen la
              invitación.
            </p>
            <Link href="/contacto" className="h-text-link">
              Necesito ayuda con mi acceso <ArrowRight size={16} />
            </Link>
            <hr />
            <p>
              Esta página es una guía. La activación se realiza desde el enlace
              personal que recibiste por correo.
            </p>
          </aside>
        </div>
        <div style={{ paddingBottom: 64 }}>
          <HelpBlock />
        </div>
      </div>
    </div>
  );
}
