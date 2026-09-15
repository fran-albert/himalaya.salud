import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Users,
  Smartphone,
  ShieldCheck,
  FileText,
  Building2,
  Mail,
  CreditCard,
  HeartPulse,
  MapPin,
} from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import { StoreLinks, HelpBlock } from "@/components/site-ui";
import { FaqList } from "@/components/faq-list";
import { PlanCatalog, PlanCatalogLoading } from "@/components/plan-catalog";
import { homeFaqs } from "@/lib/faq-content";
import { FEATURES } from "@/lib/feature-flags";
import { MinimalHome } from "@/components/minimal-home";
import { GettingStartedPaths } from "@/components/getting-started";

const steps = [
  {
    title: "Elegí tu plan en la web",
    text: "Revisá qué incluye, creá tu cuenta o ingresá a la que ya tenés y contratá con Mercado Pago.",
  },
  {
    title: "Ingresá a la app",
    text: "Cuando tu plan esté activo, descargá Himalaya Salud y entrá con la misma cuenta.",
  },
  {
    title: "Dejá tus contactos listos",
    text: "Agregá las personas que querés avisar, revisá sus confirmaciones y los permisos de la app.",
  },
];
export default function Home() {
  if (FEATURES.minimalSite) return <MinimalHome />;
  return (
    <div className="h-page">
      <section className="h-hero" aria-labelledby="hero-title">
        <div className="h-container h-hero-grid">
          <div className="h-hero-copy">
            <span className="h-eyebrow">
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#70C9A6",
                }}
              />
              Tu salud en tus manos
            </span>
            <h1 id="hero-title">
              Avisá a tus contactos cuando <em>necesitás ayuda.</em>
            </h1>
            <p>
              Activá el Botón de Pánico para compartir tu ubicación con las
              personas que elegiste. Contratá desde la web y después ingresá a
              la app con la misma cuenta.
            </p>
            <div className="h-actions">
              <TrackedLink
                className="h-button"
                href="#planes"
                event="plans_view_clicked"
                origin="hero"
              >
                Ver planes y contratar{" "}
                <ArrowRight size={18} aria-hidden="true" />
              </TrackedLink>
              <Link className="h-button h-button-outline" href="#empresas">
                Para mi empresa
              </Link>
            </div>
            <p className="h-hero-access">
              ¿Ya tenés un plan?{" "}
              <Link href="/primeros-pasos">Continuá a la app</Link>
            </p>
          </div>
          <div className="h-hero-visual">
            <Image
              src="/images/app/mano-inicio-clara.png"
              width={568}
              height={870}
              alt="Himalaya Salud en un celular, con acceso al Botón de Pánico, portal, mediciones y servicios"
              priority
              sizes="(max-width: 767px) 257px, (max-width: 1023px) 295px, 340px"
            />
            <div className="h-hero-note">
              <Users size={25} aria-hidden="true" />
              <div>
                <strong>Tu red de confianza</strong>
                <small>Las personas que vos elegís</small>
              </div>
            </div>
          </div>
        </div>
        <div className="h-hero-bottom">
          <div className="h-container">
            <span>
              <CreditCard size={16} />
              Contratación web con Mercado Pago
            </span>
            <span>
              <Smartphone size={16} />
              Disponible en iPhone y Android
            </span>
            <span>
              <ShieldCheck size={16} />
              Tu cuenta, también en la app
            </span>
          </div>
        </div>
      </section>

      <section id="como-empezar" className="h-section">
        <div className="h-container">
          <div className="h-heading">
            <span className="h-eyebrow">De la web a tu celular</span>
            <h2>Te acompañamos, paso a paso.</h2>
            <p>
              Primero activás tu plan. Después preparás la app para que pueda
              avisar a tus contactos.
            </p>
          </div>
          <div className="h-steps">
            {steps.map((step, i) => (
              <article className="h-step" key={step.title}>
                <span className="h-step-number">0{i + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <GettingStartedPaths />
        </div>
      </section>

      <section id="producto" className="h-section h-product">
        <div className="h-container">
          <div className="h-product-grid" id="emergencia">
            <div className="h-product-screen">
              <Image
                src="/images/app/app-boton-panico.png"
                alt="Pantalla real del Botón de Pánico de Himalaya Salud"
                width={1284}
                height={2778}
                sizes="218px"
              />
            </div>
            <div className="h-product-copy">
              <span className="h-eyebrow">Botón de Pánico</span>
              <h2>Que las personas que elegiste sepan que necesitás ayuda.</h2>
              <p>
                Mantené presionado el botón durante tres segundos para activar
                una alerta y compartir tu ubicación.
              </p>
              <ul className="h-check-list">
                <li>
                  <Check />
                  Hasta tres contactos principales, con llamada y WhatsApp.
                </li>
                <li>
                  <Check />
                  Hasta tres contactos secundarios, con aviso por WhatsApp.
                </li>
                <li>
                  <Check />
                  Vos elegís qué información disponible de tu salud compartir.
                </li>
              </ul>
              <Link href="/primeros-pasos#contactos" className="h-text-link">
                Cómo preparar mis contactos <ArrowRight size={16} />
              </Link>
              <p className="h-disclaimer" style={{ marginTop: 24 }}>
                Himalaya avisa a tus contactos. No reemplaza un servicio de
                emergencias, una obra social ni una ART. La entrega de las
                alertas depende de la conectividad y la configuración del
                servicio.
              </p>
            </div>
          </div>
          <div className="h-more-tools">
            <div className="h-tools-heading">
              <div>
                <span className="h-eyebrow">Más que una alerta</span>
                <h3>Tu salud, en un solo lugar.</h3>
              </div>
              <p>
                Además del Botón de Pánico, Himalaya reúne herramientas para
                guardar, seguir y encontrar tu información de salud.
              </p>
            </div>
            <div className="h-feature-bands">
              <article className="h-feature-band">
                <div className="h-feature-copy">
                  <span className="h-feature-number">01</span>
                  <span className="h-eyebrow"><FileText size={15} aria-hidden="true" /> Portal del Paciente</span>
                  <h3>Tus estudios, ordenados y siempre a mano.</h3>
                  <p>
                    Guardá documentos de salud y volvé a encontrarlos cuando
                    los necesites, desde la misma app.
                  </p>
                  <ul className="h-feature-points">
                    <li><Check aria-hidden="true" /> Cargá estudios, recetas y certificados.</li>
                    <li><Check aria-hidden="true" /> Buscá por texto o por etiquetas.</li>
                    <li><Check aria-hidden="true" /> Consultá cada documento desde tu celular.</li>
                  </ul>
                  <Link href="#planes" className="h-text-link">
                    Ver qué incluye cada plan <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="h-feature-visual">
                  <div className="h-app-screen">
                    <Image
                      src="/images/app/app-portal-paciente.png"
                      alt="Pantalla real del Portal del Paciente de Himalaya Salud"
                      width={1284}
                      height={2778}
                      sizes="(max-width: 767px) 78vw, 350px"
                    />
                  </div>
                  <span>Pantalla real de la app</span>
                </div>
              </article>

              <article className="h-feature-band h-feature-band-reverse">
                <div className="h-feature-copy">
                  <span className="h-feature-number">02</span>
                  <span className="h-eyebrow"><HeartPulse size={15} aria-hidden="true" /> Mis Mediciones</span>
                  <h3>Registrá tus valores y seguí su evolución.</h3>
                  <p>
                    Conservá tus mediciones manuales en un historial
                    cronológico para consultarlas cuando quieras.
                  </p>
                  <ul className="h-feature-points">
                    <li><Check aria-hidden="true" /> Agregá una nueva medición.</li>
                    <li><Check aria-hidden="true" /> Revisá fecha, valor y observaciones.</li>
                    <li><Check aria-hidden="true" /> Editá o eliminá registros propios.</li>
                  </ul>
                </div>
                <div className="h-feature-visual">
                  <div className="h-app-screen">
                    <Image
                      src="/images/app/app-mis-mediciones.png"
                      alt="Pantalla real de Mis Mediciones de Himalaya Salud"
                      width={1284}
                      height={2778}
                      sizes="(max-width: 767px) 78vw, 350px"
                    />
                  </div>
                  <span>Pantalla real de la app</span>
                </div>
              </article>

              <article className="h-feature-band">
                <div className="h-feature-copy">
                  <span className="h-feature-number">03</span>
                  <span className="h-eyebrow"><MapPin size={15} aria-hidden="true" /> Servicios de Salud</span>
                  <h3>Encontrá servicios cerca de donde estás.</h3>
                  <p>
                    Explorá el mapa, elegí el tipo de servicio y ubicá opciones
                    en la zona que te interesa.
                  </p>
                  <ul className="h-feature-points">
                    <li><Check aria-hidden="true" /> Buscá instituciones, laboratorios y farmacias.</li>
                    <li><Check aria-hidden="true" /> Usá tu ubicación o movete por el mapa.</li>
                    <li><Check aria-hidden="true" /> Alterná entre mapa y listado.</li>
                  </ul>
                </div>
                <div className="h-feature-visual">
                  <div className="h-app-screen">
                    <Image
                      src="/images/app/showcase-servicios.jpg"
                      alt="Pantalla real de Servicios de Salud de Himalaya Salud"
                      width={1206}
                      height={2484}
                      sizes="(max-width: 767px) 78vw, 350px"
                    />
                  </div>
                  <span>Pantalla real de la app</span>
                </div>
              </article>
            </div>
            <p className="h-tools-note">Las funciones disponibles dependen de las prestaciones de tu plan.</p>
          </div>
          {FEATURES.instituciones && (
            <Link
              href="/contacto?tipo=institucion"
              className="h-text-link"
              style={{ marginTop: 24 }}
            >
              Información para instituciones de salud <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </section>

      <section
        id="planes"
        className="h-section h-plans-section"
        aria-labelledby="plans-title"
      >
        <div className="h-container">
          <div className="h-heading">
            <span className="h-eyebrow">Planes Himalaya</span>
            <h2 id="plans-title">Elegí tu plan de Himalaya.</h2>
            <p>
              Compará las funciones incluidas. Contratá en la web y usá la misma
              cuenta en la app.
            </p>
          </div>
          <Suspense fallback={<PlanCatalogLoading />}>
            <PlanCatalog />
          </Suspense>
          <article id="empresas" className="h-business-band h-anchor">
            <div className="h-business-icon">
              <Building2 size={30} aria-hidden="true" />
            </div>
            <div className="h-business-copy">
              <span className="h-eyebrow">Himalaya para empresas</span>
              <h3>Un beneficio para tu equipo.</h3>
              <p>
                Una propuesta según la cantidad de personas. Cada integrante
                recibe su invitación por correo y activa su acceso a la app.
              </p>
            </div>
            <div className="h-business-actions">
              <TrackedLink
                className="h-button h-button-white"
                href="/contacto?tipo=empresa"
                event="business_contact_clicked"
                origin="business_plan"
              >
                Consultar propuesta <ArrowRight size={18} aria-hidden="true" />
              </TrackedLink>
              <Link href="/beneficio-empresarial">
                Ya recibí una invitación
              </Link>
            </div>
          </article>
          <p className="h-plans-existing">
            ¿Ya tenés un plan activo?{" "}
            <Link href="/primeros-pasos">Continuá a la app</Link>
          </p>
        </div>
      </section>

      <section id="descargar" className="h-section h-access">
        <div className="h-container h-access-grid">
          <div className="h-access-copy">
            <span className="h-eyebrow">Ya tengo acceso</span>
            <h2>
              ¿Ya tenés tu plan?
              <br />
              Prepará tu app.
            </h2>
            <p>
              Descargá Himalaya Salud, ingresá con la misma cuenta y configurá
              tus contactos de emergencia.
            </p>
            <StoreLinks origin="home_access" />
            <Link className="h-text-link" href="/primeros-pasos">
              Ver la guía de primeros pasos <ArrowRight size={16} />
            </Link>
          </div>
          <article className="h-invite">
            <Building2 size={30} aria-hidden="true" />
            <h3>¿Tu empresa te dio acceso?</h3>
            <p>
              Abrí la invitación que recibiste por correo y activá tu beneficio.
              Si ya tenés una cuenta con ese correo, usala para continuar.
            </p>
            <Link className="h-text-link" href="/beneficio-empresarial">
              Cómo activar mi beneficio <ArrowRight size={16} />
            </Link>
          </article>
        </div>
      </section>

      <section className="h-section">
        <div className="h-container">
          <div className="h-heading">
            <span className="h-eyebrow">Antes de empezar</span>
            <h2>Resolvamos tus dudas.</h2>
          </div>
          <FaqList faqs={homeFaqs} />
          <Link href="/faq" className="h-text-link" style={{ marginTop: 24 }}>
            Todas las preguntas frecuentes <ArrowRight size={16} />
          </Link>
          <div id="quienes" className="h-about h-anchor">
            <div>
              <span className="h-eyebrow">Quiénes somos</span>
              <h2>Tecnología para estar más cerca.</h2>
            </div>
            <p>
              Somos Himalaya Salud, una empresa argentina de software enfocada
              en salud y prevención. Creamos herramientas para que puedas avisar
              a tu red de confianza y tener tu información de salud a mano,
              desde tu celular.
            </p>
          </div>
          <HelpBlock />
          <p style={{ textAlign: "center", fontSize: 13, marginTop: 20 }}>
            <Link href="/contacto" className="h-text-link">
              <Mail size={15} />
              También podés dejarnos una consulta por correo
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
