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
  FileText,
  Headset,
  HeartPulse,
  Mail,
  MessageCircle,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BRAND, SHADOW } from "@/lib/brand-tokens";
import { FEATURES } from "@/lib/feature-flags";
import { appStoreUrl, googlePlayUrl, whatsappUrl } from "@/lib/social-links";
import { MinimalHome } from "@/components/minimal-home";

const C = BRAND;

type Funcion = {
  id: string;
  icon: LucideIcon;
  tab: string;
  title: string;
  desc: string;
  features: string[];
  image: string;
  imageAlt: string;
};

const SHOT = { width: 660, height: 1434 };

const funciones: Funcion[] = [
  {
    id: "ficha",
    icon: HeartPulse,
    tab: "Ficha de emergencia",
    title: "Lo que un médico necesita saber de vos, en una pantalla",
    desc: "Grupo sanguíneo, alergias, enfermedades, medicación, implantes, obra social y médico de cabecera. La cargás una vez y la editás cuando cambia algo.",
    features: [
      "Se guarda en tu teléfono. Himalaya no la ve ni la almacena",
      "La compartís como texto o PDF por WhatsApp o mail, cuando vos quieras",
      "Sirve para una guardia, un viaje o cualquier tipo de emergencia de salud",
    ],
    image: "/images/app/sos/ficha.png",
    imageAlt: "Ficha de emergencia en SOS Protegete: grupo sanguíneo, alergias, enfermedades y medicación",
  },
  {
    id: "estudios",
    icon: FileText,
    tab: "Mis estudios",
    title: "Tus estudios, ordenados y a mano",
    desc: "Análisis, imágenes, recetas, informes y vacunas. Los subís vos desde la cámara, la galería o un PDF: son estudios autoingresados y no constituyen una historia clínica.",
    features: [
      "Buscá por nombre y filtrá por tipo, año, especialidad, médico o lugar",
      "Cada estudio puede tener varios archivos (PDF, JPG o PNG)",
      "Compartí cualquier archivo por WhatsApp o mail con un toque",
      "Quedan en tu teléfono, no en nuestros servidores",
    ],
    image: "/images/app/sos/estudios.png",
    imageAlt: "Detalle de un estudio en SOS Protegete, con los botones Ver y Compartir",
  },
  {
    id: "mediciones",
    icon: Activity,
    tab: "Mis mediciones",
    title: "Anotá tus mediciones y mirá cómo van",
    desc: "Presión, glucemia, peso, sueño, frecuencia cardíaca, saturación de oxígeno, temperatura y más.",
    features: [
      "Historial y gráfico por cada tipo de medición",
      "Útil para llevarle al médico lo que te pidió controlar",
      "También se guardan sólo en tu teléfono",
    ],
    image: "/images/app/sos/mediciones.png",
    imageAlt: "Mis Mediciones en SOS Protegete: presión arterial, glucemia, peso y más",
  },
];

const sosSteps = [
  {
    n: "1",
    title: "Toma tu ubicación",
    desc: "Al activarse, la app toma tu posición GPS en ese momento.",
  },
  {
    n: "2",
    title: "Llama a tus contactos principales",
    desc: "Tus 3 contactos principales reciben una llamada y un WhatsApp. La llamada les avisa que estás en una situación crítica o grave. Sale siempre del mismo número: pediles que lo agenden para reconocer la llamada.",
  },
  {
    n: "3",
    title: "Avisa a tus contactos secundarios",
    desc: "Tus 3 contactos secundarios reciben un WhatsApp que les avisa que necesitás ayuda urgente, con tu ubicación y un link para ver cómo llegar.",
  },
];

const empresaPasos = [
  "Nos pasás la nómina: nombre y celular de cada persona",
  "Cada una recibe un WhatsApp con su invitación y activa la app en dos minutos",
  "Elige sus propios contactos de emergencia; la empresa no ve sus datos de salud",
  "Un único cobro mensual por cantidad de personas",
];

const respaldo = ["Cumple las Leyes 25.326 y 26.529"];

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
      {children}
    </span>
  );
}

function Captura({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={SHOT.width}
      height={SHOT.height}
      priority={priority}
      sizes="(max-width: 640px) 220px, (max-width: 1024px) 260px, 300px"
      className={`h-auto w-[220px] sm:w-[260px] lg:w-[300px] ${className ?? ""}`}
      style={{
        position: "relative",
        zIndex: 1,
        borderRadius: 28,
        border: `1px solid ${C.teal50}`,
        boxShadow: SHADOW.hero,
      }}
    />
  );
}

function FeatureSection({
  funcion,
  reverse,
  background,
}: {
  funcion: Funcion;
  reverse?: boolean;
  background: string;
}) {
  return (
    <section
      id={funcion.id}
      className="py-16 md:py-24"
      style={{ backgroundColor: background }}
    >
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
          <div
            className={`relative flex items-center justify-center ${
              reverse ? "lg:order-2" : ""
            }`}
          >
            <Captura src={funcion.image} alt={funcion.imageAlt} />
          </div>

          <div className={`stagger ${reverse ? "lg:order-1" : ""}`}>
            <div className="mb-4">
              <Eyebrow>{funcion.tab}</Eyebrow>
            </div>
            <h2
              className="mt-1 text-3xl font-extrabold sm:text-4xl"
              style={{
                color: C.teal900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              {funcion.title}
            </h2>
            <p
              className="mt-4 max-w-xl text-lg"
              style={{ color: C.textCaption, lineHeight: 1.55 }}
            >
              {funcion.desc}
            </p>
            <ul className="mt-6 grid gap-3">
              {funcion.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
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
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreButtons({ where }: { where: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track(`${where}_descargar_ios`)}
        className="inline-flex items-center gap-3 transition-transform lift"
        style={{
          backgroundColor: "#FFFFFF",
          color: C.teal900,
          border: `1px solid ${C.teal50}`,
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
        href={googlePlayUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track(`${where}_descargar_android`)}
        className="inline-flex items-center gap-3 transition-transform lift"
        style={{
          backgroundColor: "#FFFFFF",
          color: C.teal900,
          border: `1px solid ${C.teal50}`,
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
          <span className="block text-base font-bold">Google Play</span>
        </span>
      </a>
    </div>
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
      if (s.id === "inicio") return;
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
          className="container mx-auto px-4"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div className="stagger lg:order-2">
              <Image
                src="/branding/sos-protegete/logo-horizontal.svg"
                alt="SOS Protegete"
                width={1680}
                height={700}
                priority
                className="h-auto w-[220px] sm:w-[260px]"
              />
              <div className="mt-4">
                <span
                  className="inline-block"
                  style={{
                    ...eyebrowStyle,
                    fontSize: 14,
                    letterSpacing: "2.2px",
                    color: C.danger,
                    backgroundColor: "#FDECEC",
                    padding: "8px 14px",
                    borderRadius: 8,
                  }}
                >
                  Botón de pánico
                </span>
              </div>
              <h1
                className="mt-6 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
                style={{
                  color: C.teal900,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.02,
                }}
              >
                Un toque, y los tuyos saben que{" "}
                <span style={{ color: C.mint700 }}>necesitás ayuda urgente</span>.
              </h1>
              <p
                className="mt-6 max-w-xl text-lg"
                style={{ color: C.textCaption, lineHeight: 1.55 }}
              >
                Mantené apretado el botón 3 segundos: la app llama y avisa a los
                6 contactos que elegiste, con tu ubicación. Tu ficha de
                emergencia, tus estudios y tus mediciones quedan guardados en
                tu teléfono.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="#descargar"
                  onClick={() => track("home_hero_descargar")}
                  className="inline-flex w-full items-center justify-center gap-2 text-sm font-semibold transition-all sm:w-auto"
                  style={{
                    backgroundColor: C.teal700,
                    color: "#FFFFFF",
                    padding: "14px 22px",
                    borderRadius: 8,
                  }}
                >
                  <Smartphone size={16} />
                  Descargar la app
                </Link>
                <Link
                  href="#empresas"
                  className="inline-flex w-full items-center justify-center gap-2 text-sm font-semibold transition-all sm:w-auto"
                  style={{
                    backgroundColor: "transparent",
                    color: C.teal700,
                    padding: "14px 22px",
                    borderRadius: 8,
                    border: `1.5px solid ${C.teal50}`,
                  }}
                >
                  Para empresas
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
                      avisa hasta a 6 contactos
                    </div>
                    <div>3 con llamada y WhatsApp, 3 por WhatsApp</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:order-1">
              <Image
                src="/images/app/sos/mano-app-sos-protegete.png"
                alt="Mano sosteniendo un celular con la pantalla del botón de pánico de SOS Protegete"
                width={568}
                height={870}
                priority
                sizes="(max-width: 640px) 250px, (max-width: 1024px) 300px, 345px"
                className="h-auto w-[250px] sm:w-[300px] lg:w-[345px]"
              />
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
                Himalaya Salud, la empresa detrás de{" "}
                <span style={{ color: C.mint700 }}>SOS Protegete</span>.
              </h2>
            </div>
            <div>
              <p
                className="text-lg"
                style={{ color: C.textCaption, lineHeight: 1.6 }}
              >
                Somos una empresa argentina de software especializada en
                salud. Desarrollamos, publicamos y damos soporte a SOS
                Protegete: una app para que vos y tu familia tengan cómo pedir
                ayuda en una situación grave, sin depender de nadie más que de
                tus propios contactos.
              </p>
              <div
                className="mt-6 flex items-start gap-3"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${C.teal50}`,
                  borderLeft: `4px solid ${C.mint700}`,
                  borderRadius: 12,
                  padding: "16px 18px",
                }}
              >
                <Headset
                  size={22}
                  style={{ color: C.mint700, flexShrink: 0, marginTop: 2 }}
                />
                <p style={{ color: C.textBody, lineHeight: 1.55 }}>
                  <strong style={{ color: C.teal900 }}>
                    Soporte humano.
                  </strong>{" "}
                  Si tenés una duda o un problema con la app, te responde una
                  persona del equipo de Himalaya, por WhatsApp o por mail. Sin
                  bots ni menús automáticos.
                </p>
              </div>
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

      {/* ——— 3. La app ——— */}
      <section id="producto" className="pt-16 md:pt-24">
        <div className="container mx-auto px-4">
          <div className="stagger max-w-2xl">
            <Eyebrow size="lg">La app</Eyebrow>
            <h2
              className="mt-4 text-3xl font-extrabold sm:text-4xl"
              style={{
                color: C.teal900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Lo que hace SOS Protegete.
            </h2>
            <p
              className="mt-4 text-lg"
              style={{ color: C.textCaption, lineHeight: 1.55 }}
            >
              Cuatro cosas, sin vueltas: avisa a tus contactos, guarda tu ficha
              de emergencia, guarda tus estudios y anota tus mediciones. Todo lo
              de salud queda en tu teléfono.
            </p>
          </div>
        </div>
      </section>

      {/* ——— 4. Botón de pánico ——— */}
      <section
        id="emergencia"
        className="py-16 md:py-24"
        style={{
          background: `linear-gradient(180deg, ${C.bg} 0%, #FFF5F5 100%)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
            <div className="stagger lg:order-2">
              <p
                className="text-3xl font-extrabold sm:text-4xl"
                style={{ color: C.danger, letterSpacing: "-0.02em" }}
              >
                Botón de pánico
              </p>
              <p
                className="mt-4 max-w-xl text-lg"
                style={{ color: C.textCaption, lineHeight: 1.55 }}
              >
                Mantené presionado{" "}
                <strong style={{ color: C.textBody }}>3 segundos</strong>, para
                que no se dispare sin querer. Después, la app hace el resto.
              </p>
              <p
                className="mt-8 text-xs font-bold uppercase"
                style={{ letterSpacing: "1.6px", color: C.danger }}
              >
                Un toque, 3 acciones en orden
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
              <div
                className="mt-8 grid gap-3 text-sm"
                style={{ color: C.textBody, lineHeight: 1.5 }}
              >
                <p>
                  <strong style={{ color: C.teal900 }}>¿Fue sin querer?</strong>{" "}
                  Desde la app avisás que estás bien y tus contactos reciben un
                  mensaje de falsa alarma.
                </p>
                <p style={{ color: C.textCaption }}>
                  Ante una urgencia médica llamá al{" "}
                  <strong style={{ color: C.textBody }}>911</strong>. El botón
                  avisa a tu familia; no reemplaza a la ambulancia.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:order-1">
              <Captura
                src="/images/app/sos/boton-sos-protegete.png"
                alt="Pantalla del botón de pánico de SOS Protegete, con los contactos que van a recibir el aviso"
                className="!w-[240px] sm:!w-[280px] lg:!w-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ——— 4b. Contactos ——— */}
      <section id="contactos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2">
            <div className="relative flex items-center justify-center">
              <Captura
                src="/images/app/sos/contactos.png"
                alt="Contactos SOS en SOS Protegete: cada contacto acepta la invitación antes de recibir avisos"
              />
            </div>
            <div className="stagger">
              <div className="mb-4">
                <Eyebrow>Tus contactos</Eyebrow>
              </div>
              <h2
                className="mt-1 text-3xl font-extrabold sm:text-4xl"
                style={{
                  color: C.teal900,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                }}
              >
                Vos elegís quién recibe el aviso
              </h2>
              <p
                className="mt-4 max-w-xl text-lg"
                style={{ color: C.textCaption, lineHeight: 1.55 }}
              >
                Cargás hasta 6 contactos: familia, pareja, un vecino, quien
                quieras. Cada uno recibe una invitación por WhatsApp y la
                acepta. Recién entonces empieza a recibir tus avisos.
              </p>
              <ul className="mt-6 grid gap-3">
                {[
                  "Los 3 principales reciben llamada y WhatsApp; los demás, WhatsApp",
                  "A cada principal le escribís el mensaje que va a escuchar en la llamada, por ejemplo «Necesito ayuda urgente». Hasta 250 caracteres, y lo podés escuchar antes de guardarlo",
                  "Le mandás el número de SOS Protegete para que lo agenden y reconozcan la llamada",
                  "Podés cambiarlos cuando quieras desde la app",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
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
            </div>
          </div>
        </div>
      </section>

      {/* ——— 5. Ficha · Estudios · Mediciones ——— */}
      {funciones.map((f, i) => (
        <FeatureSection
          key={f.id}
          funcion={f}
          reverse={i % 2 === 0}
          background={i % 2 === 0 ? C.bgSecondary : C.bg}
        />
      ))}

      {/* ——— 6. Tus datos de salud ——— */}
      <section
        id="privacidad"
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
              <ShieldCheck size={26} />
            </span>
            <h2
              className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold sm:text-4xl"
              style={{
                color: "#FFFFFF",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              Tus datos de salud se quedan{" "}
              <span style={{ color: C.verdeClaro }}>en tu teléfono</span>.
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-base sm:text-lg"
              style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}
            >
              SOS Protegete no guarda tu ficha, tus estudios ni tus mediciones
              en ningún servidor. Cuando activás el botón, tus contactos
              reciben el aviso y tu ubicación. Tu información médica la
              compartís vos, cuando quieras, desde la app.
            </p>
            <p
              className="mx-auto mt-4 max-w-xl text-base sm:text-lg"
              style={{ color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}
            >
              Lo que cargás son datos autoingresados: los escribís y los subís
              vos.{" "}
              <strong style={{ color: "#FFFFFF" }}>
                No constituyen una historia clínica
              </strong>{" "}
              ni la reemplazan.
            </p>
            <p
              className="mx-auto mt-8 max-w-2xl text-sm"
              style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}
            >
              Himalaya Salud no es una ART, una obra social ni un servicio de
              emergencias médicas. SOS Protegete avisa a tus contactos: no
              reemplaza al 911, al 107/SAME ni a la atención médica.
            </p>
          </div>
        </div>
      </section>

      {/* ——— 7. Empresas ——— */}
      <section
        id="empresas"
        className="py-16 md:py-24"
        style={{ backgroundColor: C.bgSecondary }}
      >
        <div className="container mx-auto px-4">
          <div className="stagger mb-12 max-w-2xl">
            <Eyebrow>Para empresas</Eyebrow>
            <h2
              className="mt-4 text-3xl font-extrabold sm:text-4xl"
              style={{
                color: C.teal900,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
              }}
            >
              SOS Protegete como beneficio para tu gente.
            </h2>
            <p
              className="mt-4 text-lg"
              style={{ color: C.textCaption, lineHeight: 1.55 }}
            >
              Pensado para equipos que trabajan en la calle, personal de campo
              y empresas que quieren cuidar a su gente también fuera del
              horario de trabajo.
            </p>
          </div>

          <div className="stagger grid items-stretch gap-6 lg:grid-cols-2">
            <div
              className="flex flex-col p-7 md:p-10 lift"
              style={{
                backgroundColor: C.teal900,
                borderRadius: 24,
                boxShadow: SHADOW.cardHover,
                color: "#FFFFFF",
              }}
            >
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: C.verdeClaro }}
              >
                <Building2 size={16} />
                Cómo funciona
              </span>
              <ul
                className="mt-6 grid gap-3"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.14)",
                  paddingTop: 24,
                }}
              >
                {empresaPasos.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: "rgba(255,255,255,0.88)", lineHeight: 1.5 }}
                  >
                    <Check
                      size={16}
                      style={{ color: C.verdeClaro, flexShrink: 0, marginTop: 2 }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contacto?tipo=empresa"
                onClick={() => track("home_cta_empresas")}
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-all"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: C.teal900,
                  padding: "14px 22px",
                  borderRadius: 8,
                }}
              >
                Pedir una propuesta
                <ArrowRight size={16} />
              </Link>
            </div>

            <div
              className="flex flex-col p-7 md:p-10"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${C.teal50}`,
                borderRadius: 24,
                boxShadow: SHADOW.card,
              }}
            >
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: C.teal700 }}
              >
                <ShieldAlert size={16} />
                ¿Tu empresa ya te lo dio?
              </span>
              <p
                className="mt-6 text-lg font-semibold"
                style={{ color: C.teal900, lineHeight: 1.45 }}
              >
                Buscá el WhatsApp de SOS Protegete con tu invitación y tocá
                «Activar mi beneficio».
              </p>
              <p
                className="mt-4 text-base"
                style={{ color: C.textCaption, lineHeight: 1.6 }}
              >
                El link te lleva a descargar la app y entrar con tu número. En
                dos minutos cargás tus contactos y ya estás protegido. Si no te
                llegó el mensaje, preguntá en tu empresa o escribinos.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("home_empresas_whatsapp_ayuda")}
                className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-all"
                style={{
                  color: C.teal700,
                  padding: "14px 22px",
                  borderRadius: 8,
                  border: `1.5px solid ${C.teal50}`,
                }}
              >
                <MessageCircle size={16} />
                Escribinos por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 8. Descargar la app ——— */}
      <section id="descargar" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div
            className="relative overflow-hidden px-6 py-12 md:px-10 md:py-16"
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
            <div
              className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]"
              style={{ position: "relative", zIndex: 1 }}
            >
              <div className="stagger">
                <Eyebrow color={C.verdeClaro}>Descargá la app</Eyebrow>
                <h2
                  className="mt-5 max-w-2xl text-3xl font-extrabold sm:text-4xl"
                  style={{
                    color: "#FFFFFF",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                  }}
                >
                  SOS Protegete, para iPhone y Android.
                </h2>
                <p
                  className="mt-4 max-w-lg text-base"
                  style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}
                >
                  Si tu empresa te invitó, entrá desde el link del WhatsApp: la
                  app ya sabe quién sos y te deja activar el beneficio.
                </p>
                <div className="mt-8">
                  <StoreButtons where="home_cta" />
                </div>
              </div>
              <div className="relative hidden items-center justify-center lg:flex">
                <Captura
                  src="/images/app/sos/boton-sos-protegete.png"
                  alt="SOS Protegete avisando a los contactos durante una emergencia"
                  className="!w-[260px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ——— 9. Contacto ——— */}
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
                ¿Dudas? <span style={{ color: C.mint700 }}>Escribinos</span>.
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
                  href={whatsappUrl}
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
                      Escribinos y te respondemos
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
              <Eyebrow color={C.verdeClaro}>Para empresas</Eyebrow>
              <h3
                className="mt-4 text-2xl font-extrabold"
                style={{ color: "#FFFFFF", letterSpacing: "-0.02em" }}
              >
                SOS Protegete para tu equipo.
              </h3>
              <p
                className="mt-4 text-base"
                style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.6 }}
              >
                Contanos cuántas personas son y te mandamos una propuesta. Un
                único cobro mensual por cantidad de personas, sin contratos
                largos.
              </p>
              <Link
                href="/contacto?tipo=empresa"
                onClick={() => track("home_cta_empresas_contacto")}
                className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-all"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: C.teal900,
                  padding: "13px 22px",
                  borderRadius: 8,
                }}
              >
                Pedir una propuesta
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

      `}</style>
    </div>
  );
}
