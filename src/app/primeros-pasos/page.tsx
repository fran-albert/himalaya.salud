import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { HelpBlock, StoreLinks } from "@/components/site-ui";
import { GettingStartedPaths, GuideStep } from "@/components/getting-started";
import { FaqList } from "@/components/faq-list";

export const metadata: Metadata = {
  title: "Cómo empezar paso a paso",
  description: "Elegí cómo empezar con Himalaya Salud: contratar un plan, activar el beneficio de tu empresa o preparar la app y tus contactos de emergencia.",
  alternates: { canonical: "/primeros-pasos" },
  openGraph: {
    title: "Cómo empezar paso a paso | Himalaya Salud",
    url: "/primeros-pasos",
    description: "Desde tu cuenta hasta tus contactos preparados. Seguí la guía que necesitás.",
  },
};

const problems = [
  { id: "plan", question: "Entré a la app y mi plan no aparece", answer: "Revisá que hayas ingresado con el mismo correo con el que contrataste o aceptaste el beneficio. Confirmar el correo no significa que el plan esté activo. Si pagaste, revisá el estado del pago; si te invitó tu empresa, completá la activación desde ese correo. Consultanos antes de volver a comprar." },
  { id: "password", question: "No recuerdo mi contraseña", answer: "En el inicio de sesión elegí la opción para recuperar la contraseña. Revisá el correo de esa cuenta, incluida la carpeta de spam. Si el enlace venció, solicitá uno nuevo." },
  { id: "contact", question: "Mi contacto todavía no figura como Validado", answer: "Revisá que el teléfono esté bien cargado. Pedile a tu contacto que abra el enlace de verificación, confirme su número y acepte. Si la solicitud expiró, volvé a enviar la verificación desde la app. Si sigue sin poder validarse, escribinos para revisar qué ocurre." },
  { id: "test", question: "¿Tengo que activar una alerta para configurar la app?", answer: "No necesitás activar una alerta para recorrer la configuración. Si querés hacer una prueba real, coordiná antes con tus contactos y avisales que estás bien: pueden recibir mensajes y llamadas, y la prueba puede consumir un uso del plan." },
];

export default function PrimerosPasos() {
  return (
    <div className="h-page">
      <div className="h-container">
        <div className="h-subhero">
          <Link href="/" className="h-breadcrumb"><ArrowLeft size={14} />Inicio</Link><br />
          <span className="h-eyebrow">Guía para empezar</span>
          <h1>Dejá tu app lista,<br />paso a paso.</h1>
          <p>Elegí dónde estás hoy. Te acompañamos desde la activación de tu cuenta hasta la preparación de tus contactos.</p>
        </div>
        <GettingStartedPaths />
        <div className="h-guide-layout h-guide-body">
          <div className="h-guide-main">
            <section id="contratar" className="h-guide-section" aria-labelledby="contract-title">
              <div className="h-guide-section-heading">
                <span className="h-eyebrow">Si todavía no tenés un plan</span>
                <h2 id="contract-title">Primero, activá tu acceso.</h2>
                <p>Si tu empresa te asignó un beneficio, seguí la <Link href="/beneficio-empresarial">guía empresarial</Link>. Si ya tenés un plan activo, <a href="#preparar-app">continuá con la app</a>.</p>
              </div>
              <ol className="h-guide-steps">
                <GuideStep number="01" title="Elegí el plan que necesitás">
                  <p>Compará las funciones y el precio. Tocá “Ver plan” para abrir su detalle y revisar la opción de contratación.</p>
                  <Link href="/#planes" className="h-text-link">Ver los planes <ArrowRight size={16} /></Link>
                </GuideStep>
                <GuideStep number="02" title="Creá tu cuenta o ingresá">
                  <p>Continuá en el portal de Himalaya. Si creás una cuenta, usá un correo al que tengas acceso y completá la confirmación que recibís. Si ya tenés cuenta, ingresá con ella.</p>
                  <p className="h-guide-note"><strong>Guardá ese correo:</strong> vas a usar la misma cuenta en la app.</p>
                </GuideStep>
                <GuideStep number="03" title="Completá la contratación">
                  <p>Seguí el pago con Mercado Pago y revisá su confirmación. Cuando el plan esté activo, continuá con los pasos de abajo.</p>
                  <p>Si el pago queda pendiente, esperá su resultado y consultanos si necesitás ayuda. No repitas la compra mientras siga en proceso.</p>
                </GuideStep>
              </ol>
            </section>

            <section id="preparar-app" className="h-guide-section" aria-labelledby="prepare-title">
              <div className="h-guide-section-heading">
                <span className="h-eyebrow">Con tu plan activo</span>
                <h2 id="prepare-title">Ahora, prepará tu app.</h2>
                <p>Estos pasos sirven tanto si contrataste vos como si recibiste el beneficio de tu empresa. La configuración de contactos corresponde a los planes que incluyen el Botón de Pánico.</p>
              </div>
              <ol className="h-guide-steps">
                <GuideStep number="01" title="Instalá Himalaya Salud">
                  <p>Elegí Google Play si tenés Android, como Samsung o Motorola. Si tenés un iPhone, elegí App Store. Si ya la instalaste, abrí la app.</p>
                  <StoreLinks origin="first_steps" />
                </GuideStep>
                <GuideStep number="02" title="Ingresá con la misma cuenta">
                  <p>Usá el correo y la contraseña con los que contrataste o activaste el beneficio empresarial. Revisá que tu plan aparezca activo.</p>
                  <p>Tu acceso está asociado a esa cuenta. No necesitás crear otra ni contratar de nuevo por instalar la app.</p>
                </GuideStep>
                <GuideStep number="03" title="Elegí a quién avisar" id="contactos">
                  <p>Entrá a <strong>Botón de pánico → Contactos de emergencias</strong>. Agregá a una persona de confianza, completá sus datos y elegí el tipo de contacto.</p>
                  <div className="h-contact-types">
                    <div><strong>Primario</strong><span>Recibe llamada y WhatsApp.</span></div>
                    <div><strong>Secundario</strong><span>Recibe el aviso por WhatsApp.</span></div>
                  </div>
                  <p>Avisale que lo elegiste y revisá que su número esté correcto.</p>
                  <figure className="h-guide-figure h-guide-mobile-screen">
                    <Image src="/images/app/app-boton-panico.png" width={1284} height={2778} sizes="180px" alt="Buscá Contactos de emergencias en Configuraciones, debajo del Botón de Pánico." />
                    <figcaption>Las opciones están debajo del botón.</figcaption>
                  </figure>
                </GuideStep>
                <GuideStep number="04" title="Pedile que confirme" id="verificacion">
                  <p>Tocá <strong>“Enviar verificación”</strong>. Tu contacto recibe un enlace por WhatsApp: tiene que abrirlo, confirmar su número y aceptar.</p>
                  <p className="h-guide-note"><strong>Revisá que figure “Validado” y esté activo.</strong> Guardar un número no alcanza: la persona tiene que aceptar recibir tus avisos.</p>
                </GuideStep>
                <GuideStep number="05" title="Revisá la configuración" id="configuracion">
                  <p>Revisá los permisos de ubicación que solicita la app y la conexión a internet. En <strong>“Configurar botón de pánico”</strong>, elegí qué información disponible querés compartir con tus contactos.</p>
                  <p>Para una prueba real, coordiná antes con ellos. Una alerta puede enviar mensajes y llamadas, y consumir un uso de tu plan.</p>
                </GuideStep>
              </ol>
              <div className="h-guide-review">
                <span className="h-eyebrow">Antes de usar el botón</span>
                <h3>Repasá estos tres puntos en tu app.</h3>
                <ul className="h-check-list">
                  {["Tu plan está activo en la cuenta correcta.", "Tus contactos elegidos están activos y validados.", "Revisaste ubicación, conexión e información a compartir."].map(text => <li key={text}><Check aria-hidden="true" />{text}</li>)}
                </ul>
                <p>El botón avisa a tus contactos. Himalaya no envía una ambulancia ni reemplaza a los servicios de emergencia.</p>
              </div>
            </section>
          </div>
          <aside className="h-guide-sidebar h-guide-sticky">
            <h2>En esta guía</h2>
            <nav className="h-guide-index" aria-label="Secciones de primeros pasos">
              <a href="#contratar">Contratar mi plan <ArrowRight size={15} /></a>
              <a href="#preparar-app">Instalar e ingresar <ArrowRight size={15} /></a>
              <a href="#contactos">Agregar contactos <ArrowRight size={15} /></a>
              <a href="#verificacion">Validar contactos <ArrowRight size={15} /></a>
              <a href="#ayuda">Resolver una dificultad <ArrowRight size={15} /></a>
            </nav>
            <figure className="h-guide-figure">
              <Image src="/images/app/app-boton-panico.png" width={1284} height={2778} sizes="190px" alt="Pantalla del Botón de Pánico: debajo del botón aparecen Contactos de emergencias y Configurar botón de pánico." />
              <figcaption>Buscá las opciones de configuración debajo del botón.</figcaption>
            </figure>
          </aside>
        </div>
        <section id="ayuda" className="h-guide-faq" aria-labelledby="help-title">
          <span className="h-eyebrow">Si algo te traba</span>
          <h2 id="help-title">Seguimos con vos.</h2>
          <FaqList faqs={problems} />
          <HelpBlock />
        </section>
      </div>
    </div>
  );
}
