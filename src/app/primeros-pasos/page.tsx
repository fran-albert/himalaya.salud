import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HelpBlock, StoreLinks } from "@/components/site-ui";

export const metadata: Metadata = {
  title: "Primeros pasos",
  description:
    "Ingresá a Himalaya Salud con tu cuenta, descargá la app y prepará tus contactos de emergencia.",
  alternates: { canonical: "/primeros-pasos" },
  openGraph: {
    title: "Primeros pasos | Himalaya Salud",
    url: "/primeros-pasos",
    description: "Tu plan activo, tu misma cuenta y tus contactos preparados.",
  },
};
export default function PrimerosPasos() {
  return (
    <div className="h-page">
      <div className="h-container">
        <div className="h-subhero">
          <Link href="/" className="h-breadcrumb">
            <ArrowLeft size={14} />
            Inicio
          </Link>
          <br />
          <span className="h-eyebrow">Ya tengo un plan</span>
          <h1>
            Tu acceso es el comienzo.
            <br />
            Dejemos tu app lista.
          </h1>
          <p>
            Seguí estos pasos cuando tu plan esté activo. Usá la misma cuenta
            con la que contrataste o activaste tu beneficio.
          </p>
        </div>
        <div className="h-guide-layout">
          <ol className="h-guide-steps">
            <li className="h-guide-step">
              <span className="h-step-number">01</span>
              <div>
                <h2>Descargá Himalaya Salud</h2>
                <p>
                  Elegí la tienda de tu celular. Si ya tenés la app instalada,
                  podés abrirla y continuar.
                </p>
                <StoreLinks origin="first_steps" />
              </div>
            </li>
            <li className="h-guide-step">
              <span className="h-step-number">02</span>
              <div>
                <h2>Ingresá con tu misma cuenta</h2>
                <p>
                  Usá los datos de la cuenta con la que contrataste. Si tu
                  empresa te invitó, usá el correo de esa invitación después de
                  activar el beneficio.
                </p>
                <p>
                  Si el plan no aparece, revisá que estés en la cuenta correcta
                  y que la contratación esté confirmada antes de iniciar otra
                  compra.
                </p>
              </div>
            </li>
            <li className="h-guide-step">
              <span className="h-step-number">03</span>
              <div>
                <h2>Elegí a quiénes avisar</h2>
                <p>
                  En el Botón de Pánico, agregá tus contactos de emergencia.
                  Podés definir hasta tres principales y tres secundarios.
                  Revisá las confirmaciones que solicita la app y avisales que
                  los elegiste.
                </p>
                <p>
                  La activación del plan no reemplaza este paso: tus contactos
                  tienen que estar configurados.
                </p>
              </div>
            </li>
            <li className="h-guide-step">
              <span className="h-step-number">04</span>
              <div>
                <h2>Revisá permisos e información</h2>
                <p>
                  Revisá los permisos que solicita la app, especialmente la
                  ubicación, y qué información querés compartir con tus
                  contactos según tu plan.
                </p>
                <p>
                  Antes de hacer una prueba del botón, coordiná con tus
                  contactos: una alerta real puede enviar avisos y consumir un
                  uso.
                </p>
              </div>
            </li>
          </ol>
          <aside className="h-guide-sidebar">
            <h2>¿Venís por tu empresa?</h2>
            <p>
              Primero necesitás activar el beneficio desde tu invitación
              personal.
            </p>
            <Link href="/beneficio-empresarial" className="h-text-link">
              Ver cómo activarlo <ArrowRight size={16} />
            </Link>
            <hr />
            <h2>¿No podés ingresar?</h2>
            <p>
              Usá la recuperación de contraseña desde el inicio de sesión. Si el
              problema continúa, contanos qué te aparece en pantalla.
            </p>
            <Link href="/contacto" className="h-text-link">
              Pedir ayuda <ArrowRight size={16} />
            </Link>
            <hr />
            <p className="h-form-fine">
              El Botón de Pánico avisa a tus contactos. No reemplaza a los
              servicios de emergencia.
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
