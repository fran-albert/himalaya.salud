"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { track } from "@vercel/analytics";
import {
  Activity,
  ArrowRight,
  Building2,
  Check,
  CreditCard,
  FileText,
  HeartPulse,
  Mail,
  MapPin,
  MessageCircle,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BRAND, SHADOW } from "@/lib/brand-tokens";

const C = BRAND;

type Producto = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const productos: Producto[] = [
  {
    icon: ShieldAlert,
    title: "Botón de pánico",
    desc: "Mantené presionado 3 segundos y avisamos a tus contactos de confianza con tu ubicación y datos médicos relevantes.",
  },
  {
    icon: FileText,
    title: "Portal del paciente",
    desc: "Subí estudios, análisis, recetas e imágenes médicas sin límites. Etiquetá y encontrá todo en segundos.",
  },
  {
    icon: MapPin,
    title: "Servicios de salud",
    desc: "Salud cerca tuyo en todo el país, geolocalizada y con ruta en Google Maps.",
  },
  {
    icon: Activity,
    title: "Mis mediciones",
    desc: "Registrá presión, glucemia, peso y más. Seguí tu evolución en el tiempo con un historial claro.",
  },
];

const serviciosCategorias = [
  "Instituciones médicas",
  "Kinesiólogos",
  "Odontólogos",
  "Laboratorios",
  "Farmacias",
  "Ambulancias",
];

const sosSteps = [
  {
    n: "1",
    title: "Te geolocaliza",
    desc: "Tu ubicación GPS exacta, al instante.",
  },
  {
    n: "2",
    title: "Llama al 911",
    desc: "Llamada automática al servicio de emergencias.",
  },
  {
    n: "3",
    title: "Avisa a tus 3 contactos",
    desc: "Las personas de confianza que vos elegís.",
  },
  {
    n: "4",
    title: "Manda tu info por WhatsApp",
    desc: "A tu médico, institución o ambulancia.",
  },
  {
    n: "5",
    title: "Comparte tus datos de salud",
    desc: "Grupo sanguíneo, alergias, medicación y antecedentes.",
  },
];

const infoMedicaChips = [
  "Grupo sanguíneo",
  "Alergias",
  "Medicación",
  "Antecedentes",
  "Donante de órganos",
  "Obra social",
];

const planIncluye = [
  "Botón de pánico — 4 activaciones por mes",
  "Portal del paciente sin límites de almacenamiento",
  "Servicios de salud geolocalizados",
  "Mis mediciones con historial completo",
  "Soporte humano, equipo argentino",
];

const respaldo = [
  "Hecho en Argentina",
  "Cumple las Leyes 25.326 y 26.529",
];

const eyebrowStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "1.8px",
  textTransform: "uppercase",
  color: C.teal700,
};

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return (
    <span style={{ ...eyebrowStyle, color: color ?? C.teal700 }}>
      <span
        style={{
          width: 18,
          height: 2,
          borderRadius: 2,
          backgroundColor: color ?? C.mint500,
        }}
      />
      {children}
    </span>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const sections = Array.from(
      root.querySelectorAll<HTMLElement>("section")
    );

    if (prefersReduced) {
      sections.forEach((s) => s.classList.add("reveal-visible"));
      return;
    }

    root.classList.add("js-anim");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    sections.forEach((s) => {
      s.classList.add("reveal");
      if (s.getBoundingClientRect().top < window.innerHeight * 0.9) {
        s.classList.add("reveal-visible");
      } else {
        observer.observe(s);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      style={{ backgroundColor: C.bg, color: C.textBody }}
    >
      {/* ——— 1. Inicio ——— */}
      <section
        id="inicio"
        style={{ position: "relative", overflow: "hidden", padding: "112px 0 96px" }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "-18%",
            top: "-10%",
            width: "60%",
            height: "80%",
            background: `radial-gradient(ellipse at center, ${C.mint500}2E 0%, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        <div
          className="container mx-auto px-4"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <Eyebrow>Tu salud en tus manos · Prevención digital</Eyebrow>
              <h1
                className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
                style={{
                  color: C.teal900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.02,
                }}
              >
                Prevención que viaja{" "}
                <span style={{ color: C.mint700 }}>siempre con vos</span>.
              </h1>
              <p
                className="mt-6 max-w-xl text-lg"
                style={{ color: C.textCaption, lineHeight: 1.55 }}
              >
                Un botón de pánico que avisa a tu familia, tus estudios médicos
                ordenados y los servicios de salud cerca tuyo. Todo en una sola
                app, pensada para Argentina.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#planes"
                  onClick={() => track("home_cta_hero_probar")}
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all"
                  style={{
                    backgroundColor: C.teal700,
                    color: "#FFFFFF",
                    padding: "13px 22px",
                    borderRadius: 8,
                    boxShadow: SHADOW.card,
                  }}
                >
                  Probar 30 días gratis
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#producto"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all"
                  style={{
                    backgroundColor: "transparent",
                    color: C.teal700,
                    padding: "13px 22px",
                    borderRadius: 8,
                    border: `1.5px solid ${C.teal50}`,
                  }}
                >
                  Ver producto
                </Link>
              </div>
              <p className="mt-4 text-xs" style={{ color: C.textCaption }}>
                Sin tarjeta para empezar · Después ARS&nbsp;15.000/mes ·
                cancelás cuando quieras
              </p>

              <div
                className="mt-9 flex items-center gap-6 pt-6"
                style={{ borderTop: `1px solid ${C.teal50}` }}
              >
                <div className="flex items-center gap-3">
                  <strong
                    style={{
                      fontSize: 30,
                      fontWeight: 800,
                      color: C.teal700,
                      lineHeight: 1,
                    }}
                  >
                    3 seg
                  </strong>
                  <div className="text-xs" style={{ color: C.textCaption }}>
                    <div style={{ fontWeight: 600, color: C.textBody }}>
                      activación SOS
                    </div>
                    <div>avisa a tus contactos</div>
                  </div>
                </div>
                <div
                  style={{ width: 1, height: 36, backgroundColor: C.teal50 }}
                />
                <div className="flex items-center gap-3">
                  <strong
                    style={{
                      fontSize: 30,
                      fontWeight: 800,
                      color: C.teal700,
                      lineHeight: 1,
                    }}
                  >
                    HCI
                  </strong>
                  <div className="text-xs" style={{ color: C.textCaption }}>
                    <div style={{ fontWeight: 600, color: C.textBody }}>
                      muy pronto
                    </div>
                    <div>historia clínica interoperable</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <Image
                src="/images/app/hero-inicio.png"
                alt="App Himalaya Salud en la pantalla de inicio"
                width={1350}
                height={2652}
                priority
                className="h-auto w-[260px] sm:w-[300px]"
                style={{ filter: `drop-shadow(${SHADOW.hero})` }}
              />
              <div
                className="absolute right-0 top-16 flex items-center gap-3"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${C.teal50}`,
                  borderRadius: 14,
                  padding: "12px 16px",
                  boxShadow: SHADOW.cardHover,
                  animation: "lsFloat 4.2s ease-in-out infinite",
                  animationDelay: "0.8s",
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    backgroundColor: C.danger,
                    boxShadow: `0 0 0 0 ${C.danger}80`,
                    animation: "lsPulse 1.6s infinite",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "1.4px",
                      color: C.danger,
                    }}
                  >
                    SOS · 3 SEG
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: C.teal900,
                      lineHeight: 1.2,
                    }}
                  >
                    Avisá a tus contactos
                    <br />
                    con un toque
                  </div>
                </div>
              </div>
              <div
                className="absolute flex items-center gap-2"
                style={{
                  left: -14,
                  top: "42%",
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${C.teal50}`,
                  borderRadius: 999,
                  padding: "8px 14px",
                  boxShadow: SHADOW.card,
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.teal900,
                  animation: "lsFloat 5s ease-in-out infinite",
                }}
              >
                <FileText size={14} style={{ color: C.teal700 }} />
                Estudios siempre con vos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 2. Quiénes somos ——— */}
      <section
        id="quienes"
        style={{
          backgroundColor: C.bgSecondary,
          borderTop: `1px solid ${C.teal50}`,
          borderBottom: `1px solid ${C.teal50}`,
          padding: "88px 0",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Quiénes somos</Eyebrow>
              <h2
                className="mt-4 text-3xl font-extrabold sm:text-4xl"
                style={{
                  color: C.teal900,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                Una innovación en{" "}
                <span style={{ color: C.mint700 }}>prevención digital</span>.
              </h2>
            </div>
            <div>
              <p
                className="text-lg"
                style={{ color: C.textCaption, lineHeight: 1.6 }}
              >
                Somos una empresa especializada en software de salud.
                Desarrollamos, implementamos y damos soporte a un sistema
                integral que opera desde tu celular, enfocado en la{" "}
                <strong style={{ color: C.textBody }}>prevención</strong> y la
                respuesta ante situaciones de emergencia.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {respaldo.map((r) => (
                  <span
                    key={r}
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: `1px solid ${C.teal50}`,
                      borderRadius: 999,
                      padding: "8px 16px",
                      color: C.textBody,
                    }}
                  >
                    <ShieldCheck size={15} style={{ color: C.mint700 }} />
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 3. Producto ——— */}
      <section id="producto" style={{ padding: "96px 0" }}>
        <div className="container mx-auto px-4">
          <div className="mb-12 max-w-2xl">
            <Eyebrow>Producto</Eyebrow>
            <h2
              className="mt-4 text-3xl font-extrabold sm:text-4xl"
              style={{
                color: C.teal900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Una app, todo lo que necesitás{" "}
              <span style={{ color: C.mint700 }}>para tu salud</span>.
            </h2>
            <p
              className="mt-4 text-lg"
              style={{ color: C.textCaption, lineHeight: 1.55 }}
            >
              Pensada para que vos y tu familia tengan la información médica
              importante a un toque.
            </p>
          </div>
          <div
            className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-4"
            style={{
              gap: 1,
              backgroundColor: C.teal50,
              border: `1px solid ${C.teal50}`,
              borderRadius: 16,
            }}
          >
            {productos.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex flex-col gap-4 lift"
                  style={{
                    backgroundColor: "#FFFFFF",
                    padding: "32px 28px",
                    minHeight: 240,
                  }}
                >
                  <span
                    className="flex items-center justify-center"
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      backgroundColor: C.mint50,
                      color: C.teal700,
                    }}
                  >
                    <Icon size={24} />
                  </span>
                  <h3
                    className="mt-auto text-xl font-bold"
                    style={{ color: C.teal900, letterSpacing: "-0.015em" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: C.textCaption, lineHeight: 1.55 }}
                  >
                    {p.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
          >
            <span
              className="text-xs font-bold uppercase"
              style={{ letterSpacing: "1.4px", color: C.textCaption }}
            >
              Servicios de salud incluye
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {serviciosCategorias.map((cat) => (
                <span
                  key={cat}
                  className="inline-flex items-center gap-1.5 text-sm font-medium"
                  style={{
                    backgroundColor: C.mint50,
                    color: C.mint900,
                    padding: "6px 14px",
                    borderRadius: 999,
                  }}
                >
                  <MapPin size={13} />
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ——— 4. Botón de pánico ——— */}
      <section
        id="emergencia"
        style={{
          background: `linear-gradient(180deg, ${C.bg} 0%, #FFF5F5 100%)`,
          padding: "96px 0",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Eyebrow color={C.danger}>Botón de pánico</Eyebrow>
              <h2
                className="mt-4 text-3xl font-extrabold sm:text-4xl"
                style={{
                  color: C.teal900,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                Cuando cada segundo cuenta.
              </h2>
              <p
                className="mt-6 max-w-xl text-lg"
                style={{ color: C.textCaption, lineHeight: 1.55 }}
              >
                Mantené presionado{" "}
                <strong style={{ color: C.textBody }}>3 segundos</strong> y
                avisamos a tus contactos de confianza con tu ubicación,
                condiciones médicas y la información relevante.
              </p>
              <p
                className="mt-8 text-xs font-bold uppercase"
                style={{ letterSpacing: "1.6px", color: C.danger }}
              >
                Un toque, 5 acciones automáticas
              </p>
              <ol className="mt-5 grid gap-0">
                {sosSteps.map((step, i) => (
                  <li
                    key={step.n}
                    className="flex gap-4"
                    style={{
                      paddingBottom: i === sosSteps.length - 1 ? 0 : 20,
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <span
                        className="flex items-center justify-center font-bold"
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          backgroundColor: C.teal700,
                          color: "#FFFFFF",
                          fontSize: 15,
                          flexShrink: 0,
                        }}
                      >
                        {step.n}
                      </span>
                      {i !== sosSteps.length - 1 && (
                        <span
                          style={{
                            width: 2,
                            flex: 1,
                            marginTop: 4,
                            backgroundColor: C.teal50,
                          }}
                        />
                      )}
                    </div>
                    <div style={{ paddingTop: 4 }}>
                      <div
                        className="text-base font-bold"
                        style={{ color: C.teal900 }}
                      >
                        {step.title}
                      </div>
                      <div
                        className="mt-0.5 text-sm"
                        style={{ color: C.textCaption }}
                      >
                        {step.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <p
                className="mt-8 text-lg font-semibold"
                style={{ color: C.teal900, lineHeight: 1.45 }}
              >
                No podés evitar que pase. Sí podés estar preparado —{" "}
                <span style={{ color: C.mint700 }}>vos y tu familia</span>.
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  width: 440,
                  height: 440,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${C.danger}1A 0%, ${C.danger}05 60%, transparent 80%)`,
                }}
              />
              <Image
                src="/images/app/sos-panico.png"
                alt="Pantalla del botón de pánico de Himalaya Salud"
                width={1000}
                height={1800}
                className="h-auto w-[280px] sm:w-[320px]"
                style={{
                  position: "relative",
                  zIndex: 1,
                  filter: `drop-shadow(${SHADOW.hero})`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ——— 4b. Tu info médica ——— */}
      <section
        style={{
          backgroundColor: C.teal900,
          color: "#FFFFFF",
          padding: "96px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: "-10%",
            bottom: "-30%",
            width: "50%",
            height: "100%",
            background: `radial-gradient(ellipse at center, ${C.mint500}24 0%, transparent 60%)`,
          }}
        />
        <div
          className="container mx-auto px-4"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="mx-auto flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: "rgba(255,255,255,0.1)",
                color: C.verdeClaro,
              }}
            >
              <HeartPulse size={26} />
            </span>
            <h2
              className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold sm:text-4xl"
              style={{
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Tu info médica, lista para cuando{" "}
              <span style={{ color: C.verdeClaro }}>no podés hablar</span>.
            </h2>
            <p
              className="mx-auto mt-4 max-w-xl text-base"
              style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}
            >
              Cargás lo que quieras, una sola vez. En una emergencia se comparte
              automáticamente con quien te asiste.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {infoMedicaChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    borderRadius: 999,
                    padding: "9px 16px",
                    color: "#FFFFFF",
                  }}
                >
                  <Check
                    size={14}
                    strokeWidth={3}
                    style={{ color: C.verdeClaro }}
                  />
                  {chip}
                </span>
              ))}
            </div>
            <p
              className="mx-auto mt-10 max-w-xl text-2xl font-bold italic"
              style={{ color: "#FFFFFF", lineHeight: 1.35 }}
            >
              “En una emergencia, el celular habla por vos.”
            </p>
          </div>
        </div>
      </section>

      {/* ——— 5. Planes ——— */}
      <section
        id="planes"
        style={{ backgroundColor: C.bgSecondary, padding: "96px 0" }}
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <Eyebrow>Planes</Eyebrow>
            <h2
              className="mt-4 text-3xl font-extrabold sm:text-4xl"
              style={{
                color: C.teal900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Un plan, todo incluido.
            </h2>
          </div>

          <div
            className="mx-auto max-w-lg lift"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${C.teal50}`,
              borderRadius: 24,
              padding: 40,
              boxShadow: SHADOW.cardHover,
            }}
          >
            <div className="flex items-center justify-between">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: C.teal700 }}
              >
                <ShieldAlert size={16} />
                Plan Emergencia
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  backgroundColor: C.mint50,
                  color: C.mint900,
                  padding: "5px 10px",
                  borderRadius: 999,
                }}
              >
                Disponible
              </span>
            </div>

            <div className="mt-6 flex items-end gap-2">
              <span
                style={{
                  fontSize: 44,
                  fontWeight: 800,
                  color: C.teal900,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                }}
              >
                ARS&nbsp;15.000
              </span>
              <span
                className="pb-1 text-sm"
                style={{ color: C.textCaption }}
              >
                /mes
              </span>
            </div>
            <p className="mt-2 text-sm" style={{ color: C.mint900 }}>
              30 días gratis · sin tarjeta · cancelás cuando quieras
            </p>

            <ul
              className="mt-7 grid gap-3"
              style={{ borderTop: `1px solid ${C.teal50}`, paddingTop: 24 }}
            >
              {planIncluye.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm"
                  style={{ color: C.textBody }}
                >
                  <Check size={16} style={{ color: C.mint700 }} />
                  {item}
                </li>
              ))}
            </ul>

            <p
              className="mt-4 text-xs"
              style={{ color: C.textCaption, lineHeight: 1.5 }}
            >
              ¿Necesitás más activaciones? Se pueden contratar aparte.
            </p>

            <Link
              href="/contacto"
              onClick={() => track("home_cta_plan_emergencia")}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold transition-all"
              style={{
                backgroundColor: C.teal700,
                color: "#FFFFFF",
                padding: "14px 22px",
                borderRadius: 8,
              }}
            >
              Empezar gratis
              <ArrowRight size={16} />
            </Link>

            <div
              className="mt-5 flex items-center justify-center gap-2 pt-5"
              style={{ borderTop: `1px solid ${C.teal50}` }}
            >
              <CreditCard size={15} style={{ color: C.textCaption }} />
              <span className="text-xs" style={{ color: C.textCaption }}>
                Pagás de forma segura con{" "}
                <strong style={{ color: "#009EE3" }}>Mercado&nbsp;Pago</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 6. Próximo lanzamiento — HCI ——— */}
      <section
        id="hci"
        style={{
          backgroundColor: C.teal900,
          color: "#FFFFFF",
          padding: "96px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: "-10%",
            top: "-20%",
            width: "50%",
            height: "80%",
            background: `radial-gradient(ellipse at center, ${C.mint500}26 0%, transparent 60%)`,
          }}
        />
        <div
          className="container mx-auto px-4"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="inline-flex items-center gap-2"
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                backgroundColor: "rgba(255,255,255,0.1)",
                color: C.verdeClaro,
                padding: "6px 12px",
                borderRadius: 999,
              }}
            >
              <Sparkles size={13} />
              Próximo lanzamiento · Muy pronto
            </span>
            <h2
              className="mt-6 text-3xl font-extrabold sm:text-4xl"
              style={{
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Historia Clínica{" "}
              <span style={{ color: C.verdeClaro }}>Interoperable</span>.
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-lg"
              style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}
            >
              Tu historia clínica completa, accesible y portable entre
              instituciones de salud. Una sola información médica que llevás
              con vos, siempre con tu permiso explícito.
            </p>
          </div>
        </div>
      </section>

      {/* ——— 7. Instituciones ——— */}
      <section id="instituciones" style={{ padding: "96px 0" }}>
        <div className="container mx-auto px-4">
          <div
            className="mx-auto max-w-3xl text-center"
            style={{
              backgroundColor: C.bgSecondary,
              border: `1px solid ${C.teal50}`,
              borderRadius: 24,
              padding: "56px 40px",
            }}
          >
            <span
              className="mx-auto flex items-center justify-center"
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: C.mint50,
                color: C.teal700,
              }}
            >
              <Building2 size={26} />
            </span>
            <h2
              className="mt-6 text-3xl font-extrabold"
              style={{
                color: C.teal900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Sumando instituciones a la red.
            </h2>
            <p
              className="mx-auto mt-4 max-w-xl text-lg"
              style={{ color: C.textCaption, lineHeight: 1.6 }}
            >
              Estamos integrando instituciones de salud para que la información
              clínica viaje con cada paciente. ¿Tu institución quiere ser parte?
            </p>
            <Link
              href="/contacto?tipo=institucion"
              onClick={() => track("home_cta_institucional")}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold transition-all"
              style={{
                backgroundColor: C.teal700,
                color: "#FFFFFF",
                padding: "13px 22px",
                borderRadius: 8,
              }}
            >
              Quiero adherir mi institución
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ——— 7b. Descargar la app ——— */}
      <section id="descargar" style={{ padding: "0 0 96px" }}>
        <div className="container mx-auto px-4">
          <div
            className="relative overflow-hidden text-center"
            style={{
              backgroundColor: C.teal900,
              borderRadius: 28,
              padding: "64px 40px",
              boxShadow: SHADOW.cta,
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                right: "-10%",
                top: "-30%",
                width: "50%",
                height: "100%",
                background: `radial-gradient(ellipse at center, ${C.mint500}26 0%, transparent 60%)`,
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Eyebrow color={C.verdeClaro}>Descargá la app</Eyebrow>
              <h2
                className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold sm:text-4xl"
                style={{
                  color: "#FFFFFF",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                Llevá tu salud, y la de los tuyos,{" "}
                <span style={{ color: C.verdeClaro }}>siempre con vos</span>.
              </h2>
              <p
                className="mx-auto mt-4 max-w-lg text-base"
                style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}
              >
                30 días gratis, sin tarjeta. Disponible muy pronto para iOS y
                Android.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="#"
                  onClick={() => track("home_cta_descargar_ios")}
                  className="inline-flex items-center gap-3 transition-transform lift"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: C.teal900,
                    borderRadius: 12,
                    padding: "12px 22px",
                  }}
                >
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor" aria-hidden>
                    <path d="M17.6 13.7c0-3.3 2.7-4.9 2.8-5-1.5-2.2-3.9-2.5-4.7-2.5-2-.2-3.9 1.2-4.9 1.2-1 0-2.6-1.2-4.3-1.1-2.2 0-4.2 1.3-5.3 3.3-2.3 4-.6 9.8 1.6 13 1.1 1.6 2.4 3.3 4.1 3.3 1.6-.1 2.3-1 4.3-1s2.5 1 4.3 1c1.8 0 2.9-1.6 4-3.2 1.3-1.8 1.8-3.6 1.8-3.7-.1 0-3.6-1.4-3.6-5.3zM14.4 4.2c.9-1 1.5-2.5 1.3-3.9-1.3.1-2.8.8-3.7 1.9-.8.9-1.5 2.4-1.3 3.8 1.4.1 2.8-.7 3.7-1.8z" />
                  </svg>
                  <span className="text-left">
                    <span
                      className="block text-[10px] font-semibold uppercase"
                      style={{ letterSpacing: "0.5px", color: C.textCaption }}
                    >
                      Descargar en
                    </span>
                    <span className="block text-base font-bold">App Store</span>
                  </span>
                </a>
                <a
                  href="#"
                  onClick={() => track("home_cta_descargar_android")}
                  className="inline-flex items-center gap-3 transition-transform lift"
                  style={{
                    backgroundColor: "#FFFFFF",
                    color: C.teal900,
                    borderRadius: 12,
                    padding: "12px 22px",
                  }}
                >
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="currentColor" aria-hidden>
                    <path d="M2.1 1.1C1.7 1.5 1.5 2.1 1.5 2.9v20.2c0 .8.2 1.4.6 1.8l11.5-11.4L2.1 1.1zm12.7 11.4 3.4-3.4-12-7L2 5.7l12.8 6.8zM4.4 25.4c.4 0 .8-.1 1.2-.4l13.7-7.8-3.5-3.5-11.4 11.7zm15.1-12.5-2.7-1.6-3.7 3.7 3.7 3.7 2.7-1.5c1.6-.9 1.6-2.4 0-3.3z" />
                  </svg>
                  <span className="text-left">
                    <span
                      className="block text-[10px] font-semibold uppercase"
                      style={{ letterSpacing: "0.5px", color: C.textCaption }}
                    >
                      Disponible en
                    </span>
                    <span className="block text-base font-bold">
                      Google Play
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 8. Contacto ——— */}
      <section
        id="contacto"
        style={{
          backgroundColor: C.bgSecondary,
          borderTop: `1px solid ${C.teal50}`,
          padding: "96px 0",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Contacto</Eyebrow>
              <h2
                className="mt-4 text-3xl font-extrabold sm:text-4xl"
                style={{
                  color: C.teal900,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                Estamos para{" "}
                <span style={{ color: C.mint700 }}>ayudarte</span>.
              </h2>
              <div className="mt-7 grid gap-3">
                <a
                  href="mailto:contacto@himalayasalud.com.ar"
                  className="flex items-center gap-4 transition-all lift"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${C.teal50}`,
                    borderRadius: 16,
                    padding: "18px 20px",
                  }}
                >
                  <span
                    className="flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: C.mint50,
                      color: C.teal700,
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={20} />
                  </span>
                  <span>
                    <span
                      className="block text-base font-semibold"
                      style={{ color: C.teal900 }}
                    >
                      Email
                    </span>
                    <span
                      className="block text-sm"
                      style={{ color: C.textCaption }}
                    >
                      contacto@himalayasalud.com.ar
                    </span>
                  </span>
                </a>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("home_contacto_whatsapp")}
                  className="flex items-center gap-4 transition-all lift"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${C.teal50}`,
                    borderRadius: 16,
                    padding: "18px 20px",
                  }}
                >
                  <span
                    className="flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: C.mint50,
                      color: C.teal700,
                      flexShrink: 0,
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </span>
                  <span>
                    <span
                      className="block text-base font-semibold"
                      style={{ color: C.teal900 }}
                    >
                      WhatsApp
                    </span>
                    <span
                      className="block text-sm"
                      style={{ color: C.textCaption }}
                    >
                      Escribinos y te ayudamos al instante
                    </span>
                  </span>
                </a>
                <Link
                  href="/contacto"
                  className="flex items-center gap-4 transition-all lift"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: `1px solid ${C.teal50}`,
                    borderRadius: 16,
                    padding: "18px 20px",
                  }}
                >
                  <span
                    className="flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: C.mint50,
                      color: C.teal700,
                      flexShrink: 0,
                    }}
                  >
                    <MessageCircle size={20} />
                  </span>
                  <span>
                    <span
                      className="block text-base font-semibold"
                      style={{ color: C.teal900 }}
                    >
                      Formulario de contacto
                    </span>
                    <span
                      className="block text-sm"
                      style={{ color: C.textCaption }}
                    >
                      Contanos tu consulta con el detalle que necesites
                    </span>
                  </span>
                </Link>
              </div>
            </div>

            <div
              className="flex flex-col justify-center"
              style={{
                backgroundColor: C.teal900,
                borderRadius: 24,
                padding: 40,
                color: "#FFFFFF",
              }}
            >
              <Eyebrow color={C.verdeClaro}>Plan empresas</Eyebrow>
              <h3
                className="mt-4 text-2xl font-extrabold"
                style={{ color: "#FFFFFF", letterSpacing: "-0.02em" }}
              >
                El Plan Emergencia para tu equipo.
              </h3>
              <p
                className="mt-4 text-base"
                style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}
              >
                Ofrecé el Plan Emergencia a tus empleados con un único cobro
                por cantidad. Contanos cuántas personas son y armamos una
                propuesta a medida.
              </p>
              <Link
                href="/contacto?tipo=empresa"
                onClick={() => track("home_cta_plan_empresas")}
                className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-all"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: C.teal900,
                  padding: "13px 22px",
                  borderRadius: 8,
                }}
              >
                Consultar plan empresas
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes lsPulse {
          0% { box-shadow: 0 0 0 0 ${C.danger}99; }
          70% { box-shadow: 0 0 0 14px ${C.danger}00; }
          100% { box-shadow: 0 0 0 0 ${C.danger}00; }
        }
        @keyframes lsFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .lift {
          transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.25s ease;
        }
        .lift:hover {
          transform: translateY(-4px);
        }
        @media (prefers-reduced-motion: reduce) {
          .lift { transition: none; }
          .lift:hover { transform: none; }
        }
        .js-anim .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        .js-anim .reveal.reveal-visible {
          opacity: 1;
          transform: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .js-anim .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
