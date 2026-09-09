import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Mail } from "lucide-react";
import { HelpBlock } from "@/components/site-ui";
import { GuideStep } from "@/components/getting-started";
import { FaqList } from "@/components/faq-list";

export const metadata: Metadata = {
  title: "Activar tu beneficio empresarial paso a paso",
  description: "Buscá tu invitación, activá el beneficio de tu empresa con el mismo correo y prepará Himalaya Salud en tu celular. Guía paso a paso.",
  alternates: { canonical: "/beneficio-empresarial" },
  openGraph: {
    title: "Tu beneficio empresarial | Himalaya Salud",
    url: "/beneficio-empresarial",
    description: "De tu invitación a la app: activá tu beneficio y prepará tus contactos.",
  },
};

const problems = [
  { id: "email", question: "No encuentro la invitación", answer: "Revisá spam y promociones. Confirmá con tu empresa qué dirección de correo usó para invitarte. Si no coincide con la tuya, pedí que revisen el dato antes de crear otra cuenta." },
  { id: "link", question: "El enlace venció o no funciona", answer: "Pedí ayuda a tu empresa o escribinos para revisar la invitación. No uses el enlace de otra persona: cada invitación está asociada a su destinatario." },
  { id: "existing", question: "Ya tengo cuenta, ¿tengo que crear otra?", answer: "Si tu cuenta usa el mismo correo de la invitación, continuá con ella desde el enlace recibido. Si usa otro correo, consultanos para revisar el acceso antes de crear una cuenta nueva o contratar un plan." },
  { id: "payment", question: "La app me pide comprar un plan", answer: "Para usar el beneficio asignado por tu empresa no necesitás contratar otro plan. Revisá que completaste la invitación y que ingresaste con ese mismo correo. Si sigue apareciendo la compra, escribinos antes de pagar." },
];

export default function BeneficioEmpresarial() {
  return (
    <div className="h-page">
      <div className="h-container">
        <div className="h-subhero">
          <Link href="/" className="h-breadcrumb"><ArrowLeft size={14} />Inicio</Link><br />
          <span className="h-eyebrow">Mi empresa me dio acceso</span>
          <h1>Tu beneficio,<br />paso a paso.</h1>
          <p>Himalaya es una app para tu celular. Activá el plan que te asignó tu empresa y aprendé a usar las herramientas incluidas.</p>
        </div>
        <div className="h-benefit-intro">
          <Building2 size={30} aria-hidden="true" />
          <div><h2>Empezá por la invitación de tu correo.</h2><p>Ese enlace asocia tu cuenta con el beneficio empresarial. Para usarlo, no necesitás contratar un plan individual.</p></div>
          <Link href="/primeros-pasos#preparar-app" className="h-text-link">Ya activé mi beneficio <ArrowRight size={16} /></Link>
        </div>
        <div className="h-guide-layout h-guide-body">
          <section className="h-guide-main" aria-labelledby="activate-title">
            <div className="h-guide-section-heading"><span className="h-eyebrow">De la invitación a tu celular</span><h2 id="activate-title">Así activás tu acceso.</h2></div>
            <ol className="h-guide-steps">
              <GuideStep number="01" title="Buscá tu invitación" id="invitacion">
                <p>Abrí el correo de Himalaya que indica qué empresa te asignó el beneficio. Buscalo en la dirección que informaste a tu empresa; revisá también spam o promociones.</p>
                <p className="h-guide-note"><strong>Usá ese mismo correo en todo el recorrido.</strong> Es el que vincula tu cuenta con el plan de tu empresa.</p>
              </GuideStep>
              <GuideStep number="02" title="Tocá “Activar mi cuenta”" id="activar">
                <p>Abrí el botón de tu invitación y seguí las instrucciones. Si necesitás crear la cuenta, hacelo con ese correo. Si ya tenés una cuenta con la misma dirección, elegí iniciar sesión y continuá con ella.</p>
                <p>Si te solicita confirmar el correo, completá esa confirmación y continuá con la activación del beneficio.</p>
              </GuideStep>
              <GuideStep number="03" title="Comprobá que el beneficio esté activo" id="beneficio">
                <p>Revisá la confirmación de tu acceso y el plan asignado. Confirmar el correo y activar un beneficio son pasos distintos.</p>
                <p>Si no aparece tu plan o te pide una compra, consultanos antes de seguir. No necesitás volver a pagar por el beneficio que ya te asignaron.</p>
              </GuideStep>
              <GuideStep number="04" title="Instalá la app y dejala preparada" id="continuar">
                <p>Ingresá con esa misma cuenta. Nuestra guía te muestra dónde descargar la app y cómo agregar y validar contactos si tu plan incluye el Botón de Pánico.</p>
                <Link href="/primeros-pasos#preparar-app" className="h-button">Seguir con la configuración <ArrowRight size={17} /></Link>
              </GuideStep>
            </ol>
          </section>
          <aside className="h-guide-sidebar">
            <Mail size={28} color="#0C606E" style={{ marginBottom: 20 }} aria-hidden="true" />
            <h2>Tené a mano</h2>
            <ul className="h-guide-supplies"><li>Acceso al correo que informaste a tu empresa.</li><li>Tu invitación personal de Himalaya.</li><li>Tu celular con conexión a internet.</li></ul>
            <hr />
            <h2>¿Para qué sirve el botón?</h2>
            <p>Si tu plan lo incluye, permite avisar a las personas de confianza que elegís y compartir tu ubicación cuando necesitás ayuda.</p>
            <p>Antes de usarlo, agregás tus contactos y ellos aceptan recibir tus avisos.</p>
            <Link href="/primeros-pasos#contactos" className="h-text-link">Cómo preparar mis contactos <ArrowRight size={16} /></Link>
            <hr />
            <p className="h-form-fine">El botón avisa a tus contactos. No reemplaza a los servicios de emergencia.</p>
          </aside>
        </div>
        <section className="h-guide-faq" aria-labelledby="business-help-title">
          <span className="h-eyebrow">Ayuda con tu invitación</span>
          <h2 id="business-help-title">Si no podés avanzar.</h2>
          <FaqList faqs={problems} />
          <p className="h-guide-personal-link">La activación se realiza desde tu enlace personal recibido por correo. Esta guía te acompaña durante el proceso.</p>
          <HelpBlock />
        </section>
      </div>
    </div>
  );
}
