"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { track } from "@vercel/analytics";
import {
  Activity,
  Ambulance,
  ArrowRight,
  Bone,
  Building2,
  Check,
  CreditCard,
  FileText,
  FlaskConical,
  HeartPulse,
  Mail,
  MapPin,
  MessageCircle,
  Pill,
  ShieldAlert,
  ShieldCheck,
  Smile,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BRAND, SHADOW } from "@/lib/brand-tokens";
import { FEATURES } from "@/lib/feature-flags";
import { MinimalHome } from "@/components/minimal-home";

const C = BRAND;

type ProductoTab = {
  id: string;
  icon: LucideIcon;
  tab: string;
  title: string;
  desc: string;
  features: string[];
  image: string;
  imageAlt: string;
};

const productosTabs: ProductoTab[] = [
  {
    id: "panico",
    icon: ShieldAlert,
    tab: "Botón de emergencia",
    title: "Pedí ayuda con un solo toque",
    desc: "Una EMERGENCIA no avisa, mejor estar preparados. MANTENÉ PRESIONADO 3 SEGUNDOS Y TU CELULAR ACTÚA POR VOS.",
    features: [
      "Avisa a tus 3 contactos de confianza con tu ubicación GPS exacta",
      "Compartí tu info de tu Portal del Paciente y Mis Mediciones por WhatsApp al instante",
      "Funciona aunque tengas la app cerrada",
      "Pensado para vos y para toda tu familia",
    ],
    image: "/images/app/showcase-sos.png",
    imageAlt: "Pantalla del botón de emergencia de Himalaya Salud",
  },
  {
    id: "portal",
    icon: FileText,
    tab: "Portal del paciente",
    title: "Tu información médica, siempre con vos",
    desc: "Llevá estudios, análisis y recetas en el bolsillo, listos para cualquier consulta.",
    features: [
      "Subí estudios, análisis, recetas e imágenes sin límite",
      "Etiquetá y encontrá cualquier documento en segundos",
      "Compartilo con tu médico cuando lo necesites",
      "Disponible para vos y los tuyos",
    ],
    image: "/images/app/showcase-portal.jpg",
    imageAlt: "Portal del paciente de Himalaya Salud",
  },
  {
    id: "mediciones",
    icon: Activity,
    tab: "Mis mediciones",
    title: "Seguí tu salud en el tiempo",
    desc: "Presión, glucemia, peso y más, con un historial claro que entendés de un vistazo.",
    features: [
      "Cargá tus valores en segundos",
      "Visualizá tu evolución con gráficos simples",
      "Detectá tendencias antes de que sean un problema",
      "Llevá el control de toda la familia",
    ],
    image: "/images/app/showcase-mediciones.jpg",
    imageAlt: "Dashboard de mediciones de Himalaya Salud",
  },
  {
    id: "servicios",
    icon: MapPin,
    tab: "Servicios de salud",
    title: "Salud cerca tuyo, en todo el país",
    desc: "Encontrá lo que necesitás, geolocalizado y con la ruta directa en Google Maps.",
    features: [
      "Buscá por especialidad o necesidad",
      "Filtrá por obra social y cercanía",
      "Abrí la ruta directo en Google Maps",
    ],
    image: "/images/app/showcase-servicios.jpg",
    imageAlt: "Mapa de servicios de salud de Himalaya Salud",
  },
];

const serviciosCategorias: { icon: LucideIcon; label: string }[] = [
  { icon: Building2, label: "Instituciones médicas" },
  { icon: Bone, label: "Kinesiólogos" },
  { icon: Smile, label: "Odontólogos" },
  { icon: FlaskConical, label: "Laboratorios" },
  { icon: Pill, label: "Farmacias" },
  { icon: Ambulance, label: "Ambulancias" },
];

const sosSteps = [
  {
    n: "1",
    title: "Te geolocaliza",
    desc: "Tu ubicación GPS exacta, al instante.",
  },
  {
    n: "2",
    title: "Avisa a tus 3 contactos",
    desc: "Las personas de confianza que vos elegís.",
  },
  {
    n: "3",
    title: "Manda tu info por WhatsApp",
    desc: "A tu médico, institución o ambulancia.",
  },
  {
    n: "4",
    title: "Comparte tus datos de tu Portal del Paciente y Mis Mediciones",
    desc: "Toda tu info clínica, compartida al instante.",
  },
];

const infoMedicaChips = ["Portal Paciente", "Mis Mediciones"];

const planIncluye = [
  "Botón de emergencia — 4 activaciones por mes",
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

function Eyebrow({
  children,
  color,
  size = "sm",
}: {
  children: React.ReactNode;
  color?: string;
  size?: "sm" | "lg";
}) {
  const isLg = size === "lg";
  return (
    <span
      style={{
        ...eyebrowStyle,
        color: color ?? C.teal700,
        fontSize: isLg ? 14 : 11,
        letterSpacing: isLg ? "2.2px" : "1.8px",
        gap: isLg ? 12 : 10,
      }}
    >
      <span
        style={{
          width: isLg ? 22 : 18,
          height: isLg ? 3 : 2,
          borderRadius: 2,
          backgroundColor: color ?? C.mint500,
        }}
      />
      {children}
    </span>
  );
}

export default function Home() {
  if (FEATURES.minimalSite) {
    return <MinimalHome />;
  }
  return <HomeFull />;
}

function HomeFull() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

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
        className="pt-24 pb-16 md:pt-28 md:pb-24"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <div
          aria-hidden
          className="blob-rotate"
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
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="stagger">
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
                Un botón de emergencia que avisa a tu familia, tus estudios médicos
                ordenados y los servicios de salud cerca tuyo. Todo en una sola
                app, pensada para Argentina.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="#planes"
                  onClick={() => track("home_cta_hero_probar")}
                  className="inline-flex w-full items-center justify-center gap-2 text-sm font-semibold transition-all sm:w-auto sm:justify-start"
                  style={{
                    backgroundColor: C.teal700,
                    color: "#FFFFFF",
                    padding: "14px 22px",
                    borderRadius: 8,
                    boxShadow: SHADOW.card,
                  }}
                >
                  Probar la app
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="#producto"
                  className="inline-flex w-full items-center justify-center gap-2 text-sm font-semibold transition-all sm:w-auto sm:justify-start"
                  style={{
                    backgroundColor: "transparent",
                    color: C.teal700,
                    padding: "14px 22px",
                    borderRadius: 8,
                    border: `1.5px solid ${C.teal50}`,
                  }}
                >
                  Ver producto
                </Link>
              </div>
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
                      EMERGENCIA
                    </div>
                    <div>avisa a tus contactos</div>
                  </div>
                </div>
                {FEATURES.hci && (
                  <>
                    <div
                      style={{
                        width: 1,
                        height: 36,
                        backgroundColor: C.teal50,
                      }}
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
                      <div
                        className="text-xs"
                        style={{ color: C.textCaption }}
                      >
                        <div style={{ fontWeight: 600, color: C.textBody }}>
                          muy pronto
                        </div>
                        <div>historia clínica interoperable</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:mt-12">
              <Image
                src="/images/app/hero-inicio.jpg"
                alt="App Himalaya Salud en la pantalla de inicio"
                width={1206}
                height={2474}
                priority
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
                className="float-y h-auto w-[220px] sm:w-[260px] lg:w-[300px]"
                style={{
                  borderRadius: 28,
                  border: `1px solid ${C.teal50}`,
                  boxShadow: SHADOW.hero,
                }}
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
                    EMERGENCIA · 3 SEG
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
        className="py-14 md:py-24"
        style={{
          backgroundColor: C.bgSecondary,
          borderTop: `1px solid ${C.teal50}`,
          borderBottom: `1px solid ${C.teal50}`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="stagger">
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
      <section id="producto" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="stagger mb-12 max-w-2xl">
            <Eyebrow size="lg">Producto</Eyebrow>
            <h2
              className="mt-4 text-3xl font-extrabold sm:text-4xl"
              style={{
                color: C.teal900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Una app, todo lo que necesitás en una{" "}
              <strong style={{ color: C.danger, fontWeight: 900 }}>
                EMERGENCIA
              </strong>
              .
            </h2>
            <p
              className="mt-4 text-lg"
              style={{ color: C.textCaption, lineHeight: 1.55 }}
            >
              Pensada para que vos y tu familia dispongan de una herramienta
              sencilla y eficaz en una{" "}
              <strong style={{ color: C.danger, fontWeight: 800 }}>
                EMERGENCIA
              </strong>
              .
            </p>
          </div>
          {/* Tabs */}
          <div
            className="grid grid-cols-2 gap-2 sm:gap-3 lg:flex lg:flex-wrap lg:justify-center"
            role="tablist"
            aria-label="Productos de Himalaya Salud"
          >
            {productosTabs.map((p, i) => {
              const Icon = p.icon;
              const isActive = i === activeTab;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(i)}
                  className="flex w-full items-center justify-center gap-2 text-sm font-semibold transition-all lg:inline-flex lg:w-auto lg:flex-shrink-0 lg:justify-start"
                  style={{
                    padding: "11px 18px",
                    borderRadius: 999,
                    backgroundColor: isActive ? C.teal700 : C.bg,
                    color: isActive ? "#FFFFFF" : C.textCaption,
                    border: `1px solid ${isActive ? C.teal700 : C.teal50}`,
                    boxShadow: isActive ? SHADOW.card : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = C.mint50;
                      e.currentTarget.style.color = C.teal700;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.backgroundColor = C.bg;
                      e.currentTarget.style.color = C.textCaption;
                    }
                  }}
                >
                  <Icon size={17} />
                  {p.tab}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          {(() => {
            const p = productosTabs[activeTab];
            const Icon = p.icon;
            const esServicios = p.id === "servicios";
            return (
              <div
                key={p.id}
                className="tab-panel mt-8 grid items-center gap-8 overflow-hidden p-6 sm:p-8 md:gap-10 lg:grid-cols-2 lg:p-10"
                style={{
                  backgroundColor: C.bg,
                  border: `1px solid ${C.teal50}`,
                  borderRadius: 24,
                  boxShadow: SHADOW.card,
                }}
              >
                <div className="relative flex min-h-[300px] items-center justify-center lg:min-h-[360px]">
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      width: 360,
                      height: 360,
                      borderRadius: "50%",
                      background: `radial-gradient(circle, ${C.mint50} 0%, transparent 70%)`,
                    }}
                  />
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    width={900}
                    height={1600}
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 280px"
                    className="tab-img h-auto w-[220px] sm:w-[260px] lg:w-[280px]"
                    style={{
                      position: "relative",
                      zIndex: 1,
                      borderRadius: 22,
                      border: `1px solid ${C.teal50}`,
                      boxShadow: SHADOW.hero,
                    }}
                  />
                </div>

                <div>
                  <span
                    className="inline-flex items-center justify-center"
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 16,
                      backgroundColor: C.mint50,
                      color: C.teal700,
                    }}
                  >
                    <Icon size={26} />
                  </span>
                  <h3
                    className="mt-5 text-2xl font-extrabold sm:text-3xl"
                    style={{ color: C.teal900, letterSpacing: "-0.02em" }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="mt-3 text-lg"
                    style={{ color: C.textCaption, lineHeight: 1.55 }}
                  >
                    {p.desc}
                  </p>
                  <ul className="mt-6 grid gap-3">
                    {p.features.map((f, fi) => (
                      <li
                        key={f}
                        className="tab-feat flex items-start gap-3"
                        style={{ animationDelay: `${120 + fi * 80}ms` }}
                      >
                        <span
                          className="flex flex-shrink-0 items-center justify-center"
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            backgroundColor: C.mint50,
                            color: C.mint700,
                            marginTop: 1,
                          }}
                        >
                          <Check size={14} strokeWidth={3} />
                        </span>
                        <span
                          className="text-base"
                          style={{ color: C.textBody, lineHeight: 1.5 }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {esServicios && (
                    <div className="mt-7 flex flex-wrap gap-2">
                      {serviciosCategorias.map((cat, ci) => {
                        const CatIcon = cat.icon;
                        return (
                          <span
                            key={cat.label}
                            className="tab-feat inline-flex items-center gap-1.5 text-sm font-semibold"
                            style={{
                              backgroundColor: C.mint50,
                              color: C.teal900,
                              padding: "7px 14px",
                              borderRadius: 999,
                              animationDelay: `${360 + ci * 60}ms`,
                            }}
                          >
                            <CatIcon size={14} style={{ color: C.teal700 }} />
                            {cat.label}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ——— 4. Botón de emergencia ——— */}
      <section
        id="emergencia"
        className="py-16 md:py-24"
        style={{
          background: `linear-gradient(180deg, ${C.bg} 0%, #FFF5F5 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
            <div className="stagger">
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
                avisamos a tus contactos de confianza con tu ubicación, y envía
                la info de tu{" "}
                <strong style={{ color: C.textBody }}>Portal del Paciente</strong>{" "}
                y <strong style={{ color: C.textBody }}>Mis Mediciones</strong>.
              </p>
              <p
                className="mt-8 text-xs font-bold uppercase"
                style={{ letterSpacing: "1.6px", color: C.danger }}
              >
                Un toque, 4 acciones automáticas
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
                No podés evitar que pase una emergencia. Sí podés estar
                preparado —{" "}
                <span style={{ color: C.mint700 }}>vos y tu familia</span>.
              </p>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                aria-hidden
                className="pulse-blob"
                style={{
                  position: "absolute",
                  width: 440,
                  height: 440,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${C.danger}26 0%, ${C.danger}08 60%, transparent 80%)`,
                }}
              />
              <Image
                src="/images/app/sos-panico.png"
                alt="Pantalla del botón de emergencia de Himalaya Salud"
                width={1206}
                height={2452}
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 280px, 320px"
                className="float-y h-auto w-[240px] sm:w-[280px] lg:w-[320px]"
                style={{
                  position: "relative",
                  zIndex: 1,
                  borderRadius: 28,
                  border: `1px solid ${C.teal50}`,
                  boxShadow: SHADOW.hero,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ——— 4b. Tu info médica ——— */}
      <section
        className="py-16 md:py-24"
        style={{
          backgroundColor: C.teal900,
          color: "#FFFFFF",
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
          <div className="stagger mx-auto max-w-3xl text-center">
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
              Tu info de tu Portal del Paciente y Mis Mediciones, lista para
              cuando <span style={{ color: C.verdeClaro }}>no podés hablar</span>
              .
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
        className="py-16 md:py-24"
        style={{ backgroundColor: C.bgSecondary }}
      >
        <div className="container mx-auto px-4">
          <div className="stagger mb-12 text-center">
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
            className="stagger mx-auto max-w-lg p-7 md:p-10 lift"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${C.teal50}`,
              borderRadius: 24,
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

      {/* ——— 6. Próximo lanzamiento — HCI (gated por feature flag) ——— */}
      {FEATURES.hci && (
        <section
          id="hci"
          className="py-16 md:py-24"
          style={{
            backgroundColor: C.teal900,
            color: "#FFFFFF",
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
      )}

      {/* ——— 7. Instituciones (gated por feature flag) ——— */}
      {FEATURES.instituciones && (
        <section id="instituciones" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div
              className="mx-auto max-w-3xl px-6 py-10 text-center md:px-10 md:py-14"
              style={{
                backgroundColor: C.bgSecondary,
                border: `1px solid ${C.teal50}`,
                borderRadius: 24,
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
                Estamos integrando instituciones de salud para que la
                información clínica viaje con cada paciente. ¿Tu institución
                quiere ser parte?
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
      )}

      {/* ——— 7b. Descargar la app ——— */}
      <section id="descargar" className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div
            className="relative overflow-hidden px-6 py-12 text-center md:px-10 md:py-16"
            style={{
              backgroundColor: C.teal900,
              borderRadius: 28,
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
            <div className="stagger" style={{ position: "relative", zIndex: 1 }}>
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
                Disponible muy pronto para iOS y Android.
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
        className="py-16 md:py-24"
        style={{
          backgroundColor: C.bgSecondary,
          borderTop: `1px solid ${C.teal50}`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="stagger">
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
              className="flex flex-col justify-center p-7 md:p-10"
              style={{
                backgroundColor: C.teal900,
                borderRadius: 24,
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
        @keyframes svcIn {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to { opacity: 1; transform: none; }
        }
        @keyframes tabPanelIn {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes tabImgIn {
          from { opacity: 0; transform: translateX(-22px) scale(0.97); }
          to { opacity: 1; transform: none; }
        }
        @keyframes tabFeatIn {
          from { opacity: 0; transform: translateX(14px); }
          to { opacity: 1; transform: none; }
        }
        .tab-panel {
          animation: tabPanelIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .tab-img {
          animation: tabImgIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .tab-feat {
          animation: tabFeatIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .tab-panel, .tab-img, .tab-feat {
            animation: none;
          }
        }
        .js-anim section.reveal .svc-chip {
          opacity: 0;
        }
        .js-anim section.reveal.reveal-visible .svc-chip {
          animation: svcIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .js-anim section.reveal .svc-chip,
          .js-anim section.reveal.reveal-visible .svc-chip {
            opacity: 1;
            animation: none;
          }
        }

        /* — Stagger por elemento dentro de una sección — */
        .js-anim section.reveal .stagger > * {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }
        .js-anim section.reveal.reveal-visible .stagger > * {
          opacity: 1;
          transform: none;
        }
        .js-anim section.reveal-visible .stagger > *:nth-child(1)  { transition-delay:   0ms; }
        .js-anim section.reveal-visible .stagger > *:nth-child(2)  { transition-delay:  90ms; }
        .js-anim section.reveal-visible .stagger > *:nth-child(3)  { transition-delay: 180ms; }
        .js-anim section.reveal-visible .stagger > *:nth-child(4)  { transition-delay: 260ms; }
        .js-anim section.reveal-visible .stagger > *:nth-child(5)  { transition-delay: 340ms; }
        .js-anim section.reveal-visible .stagger > *:nth-child(6)  { transition-delay: 420ms; }
        .js-anim section.reveal-visible .stagger > *:nth-child(7)  { transition-delay: 500ms; }
        .js-anim section.reveal-visible .stagger > *:nth-child(8)  { transition-delay: 580ms; }
        @media (prefers-reduced-motion: reduce) {
          .js-anim section.reveal .stagger > *,
          .js-anim section.reveal.reveal-visible .stagger > * {
            opacity: 1;
            transform: none;
            transition: none;
          }
        }

        /* — Float continuo (más lento que los badges) — */
        @keyframes lsFloatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .float-y {
          animation: lsFloatSlow 6s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .float-y { animation: none; }
        }

        /* — Pulse del blob rojo detrás del celular SOS — */
        @keyframes pulseBlob {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.08); opacity: 0.85; }
        }
        .pulse-blob {
          animation: pulseBlob 2.6s ease-in-out infinite;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .pulse-blob { animation: none; }
        }

        /* — Rotación lenta de blobs decorativos del fondo — */
        @keyframes blobRotate {
          from { transform: rotate(0deg) scale(1); }
          50%  { transform: rotate(180deg) scale(1.05); }
          to   { transform: rotate(360deg) scale(1); }
        }
        .blob-rotate {
          animation: blobRotate 22s linear infinite;
          transform-origin: center;
        }
        @media (prefers-reduced-motion: reduce) {
          .blob-rotate { animation: none; }
        }

        /* — Tilt 3D sutil al hover en cards .lift — */
        @media (hover: hover) and (pointer: fine) {
          .lift:hover {
            transform: perspective(900px) translateY(-6px) rotateX(2deg);
          }
        }
      `}</style>
    </div>
  );
}
