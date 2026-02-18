"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  ShieldAlert,
  Search,
  FileUp,
  MapPin,
  Phone,
  Siren,
  Check,
  ChevronDown,
  Mail,
  Loader2,
  AlertCircle,
  Sparkles,
  Clock,
  CalendarCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function WaitlistForm({ id, className }: { id?: string; className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al registrar");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Error al registrar"
      );
    }
  };

  if (status === "success") {
    return (
      <div
        id={id}
        className={`flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 ${className ?? ""}`}
      >
        <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
        <p className="text-sm text-emerald-700 dark:text-emerald-400">
          ¡Listo! Te agregamos a la lista. Revisá tu email.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`space-y-3 ${className ?? ""}`}
    >
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-500/10 text-red-500 rounded-lg text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="tu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-11 h-12 text-base"
            required
            disabled={status === "loading"}
          />
        </div>
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-12 px-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25 whitespace-nowrap"
        >
          {status === "loading" ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Quiero acceder primero
              <ArrowRight className="ml-2 w-4 h-4" />
            </>
          )}
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Primer mes gratis. Sin tarjeta. No compartimos tus datos.
      </p>
    </form>
  );
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-content > *",
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out" }
        );

        gsap.fromTo(
          ".hero-mockup",
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
        );

        document.querySelectorAll(".scroll-reveal").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 85%", once: true },
            }
          );
        });
      });

      return () => ctx.revert();
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      q: "¿Qué incluye cada plan?",
      a: "El Plan Botón de Pánico ($2.500/mes) incluye alertas de emergencia con GPS a tus contactos. El Plan Estándar ($5.000/mes) suma búsqueda de médicos, farmacias y hospitales, más un portal para subir tus estudios médicos.",
    },
    {
      q: "¿Cómo funciona el botón de pánico?",
      a: "Con un solo toque, tus contactos de emergencia reciben tu ubicación GPS exacta, una llamada automática y un SMS. Podés configurar hasta 5 contactos (familiares, amigos, tu médico).",
    },
    {
      q: "¿Qué puedo buscar en Servicios de Salud?",
      a: "Podés buscar médicos por especialidad, obra social y cercanía. También farmacias, hospitales y ambulancias cerca tuyo. Incluye ficha completa de cada profesional con datos verificados del registro AMR.",
    },
    {
      q: "¿Mis datos están seguros?",
      a: "Sí. Usamos encriptación AES-256 (nivel bancario), autenticación segura y cumplimos con la Ley 25.326 de Protección de Datos Personales. Tus datos de salud son tratados como datos sensibles.",
    },
    {
      q: "¿Cuándo se lanza la app?",
      a: "El lanzamiento está previsto para Junio 2026. Si te anotás en la lista de espera, vas a ser de los primeros en acceder y recibís beneficios de early adopter.",
    },
    {
      q: "¿Voy a poder acceder a mi historia clínica de hospitales y clínicas?",
      a: "Sí, estamos trabajando en eso. Próximamente vamos a lanzar el Plan Full que te permite acceder a tu historia clínica de instituciones adheridas. Arrancamos con un piloto en Rosario y después expandimos a todo el país.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* ===================== HERO ===================== */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Content */}
            <div className="hero-content">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Lanzamiento Junio 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Tu salud, organizada{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  en un solo lugar
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Encontrá médicos, farmacias y hospitales cerca tuyo. Subí tus
                estudios y tenelos siempre a mano. Y en caso de emergencia, tus
                contactos reciben tu ubicación con un solo toque.
              </p>

              <WaitlistForm id="waitlist" className="max-w-lg" />
            </div>

            {/* Right - Mockup */}
            <div className="hero-mockup relative flex justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-full blur-3xl opacity-50" />
              <div className="relative w-full max-w-[280px]">
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-gray-900">
                  <Image
                    src="/images/app/Home.png"
                    alt="Himalaya Salud - App de servicios de salud"
                    width={400}
                    height={800}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
        </div>
      </section>

      {/* ===================== PROBLEMA ===================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué necesitás Himalaya Salud?
            </h2>
            <p className="text-lg text-muted-foreground">
              Tres problemas reales que resolvemos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Search,
                problem: "No encontrás un médico cuando lo necesitás",
                solution:
                  "Buscá por especialidad, obra social y cercanía. Con datos verificados del registro AMR.",
                color: "text-blue-500",
                bg: "from-blue-500/10 to-cyan-500/10",
              },
              {
                icon: FileUp,
                problem: "Tus estudios están desperdigados",
                solution:
                  "Subí tus estudios al Portal Paciente y tenelos siempre a mano. Organizados con etiquetas.",
                color: "text-violet-500",
                bg: "from-violet-500/10 to-purple-500/10",
              },
              {
                icon: ShieldAlert,
                problem: "En una emergencia, nadie sabe tus datos médicos",
                solution:
                  "Un toque y tus contactos reciben tu ubicación GPS, llamada y SMS. Automáticamente.",
                color: "text-red-500",
                bg: "from-red-500/10 to-rose-500/10",
              },
            ].map((item, i) => (
              <div key={i} className="scroll-reveal">
                <Card className="h-full border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center mb-4`}
                    >
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <p className="font-semibold text-foreground mb-2">
                      {item.problem}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.solution}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PLANES ===================== */}
      <section id="planes" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Elegí tu plan
            </h2>
            <p className="text-lg text-muted-foreground">
              Primer mes gratis en cualquier plan. Sin tarjeta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plan Botón de Pánico */}
            <div className="scroll-reveal">
              <Card className="h-full border-2 border-border hover:border-primary/50 transition-colors shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                        <Siren className="w-5 h-5 text-red-500" />
                      </div>
                      <h3 className="text-xl font-bold">Botón de Pánico</h3>
                    </div>

                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold">$2.500</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-6">
                      Primer mes gratis
                    </p>

                    <ul className="space-y-3 mb-6">
                      {[
                        "Alerta de emergencia con un toque",
                        "GPS en tiempo real a tus contactos",
                        "Llamada + SMS automáticos (Twilio)",
                        "Hasta 5 contactos de emergencia",
                        "Pantalla de confirmación anti-accidental",
                      ].map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-muted-foreground">
                      Plan anual: pagás 10 meses, usás 12.
                    </p>
                  </div>

                  {/* Mockup */}
                  <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-6 flex justify-center">
                    <div className="w-40 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-xl">
                      <Image
                        src="/images/app/BotonDePanico.png"
                        alt="Botón de Pánico"
                        width={200}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Plan Estándar */}
            <div className="scroll-reveal">
              <Card className="h-full border-2 border-primary shadow-xl overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                <div className="absolute -top-0 right-4 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold px-3 py-1 rounded-b-lg">
                  Recomendado
                </div>
                <CardContent className="p-0">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Search className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Estándar</h3>
                    </div>

                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold">$5.000</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-6">
                      Primer mes gratis
                    </p>

                    <ul className="space-y-3 mb-6">
                      {[
                        "Todo lo del Botón de Pánico",
                        "Buscar médicos por especialidad y obra social",
                        "Buscar farmacias, hospitales y ambulancias",
                        "Portal Paciente: subí tus estudios",
                        "Datos verificados del registro AMR",
                        "Mapa con instituciones cercanas",
                      ].map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs text-muted-foreground">
                      Plan anual: pagás 10 meses, usás 12.
                    </p>
                  </div>

                  {/* Mockup */}
                  <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-6 flex justify-center">
                    <div className="w-40 rounded-2xl overflow-hidden border-4 border-gray-800 shadow-xl">
                      <Image
                        src="/images/app/Home.png"
                        alt="Servicios de Salud"
                        width={200}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Coming soon */}
          <div className="scroll-reveal max-w-4xl mx-auto mt-8">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
              <Clock className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">
                  Próximamente: Plan Full
                </span>{" "}
                — Accedé a tu historia clínica de instituciones adheridas.
                Piloto en Rosario con Grupo Oroño.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CÓMO FUNCIONA ===================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cómo funciona
            </h2>
            <p className="text-lg text-muted-foreground">
              En 3 pasos empezás a usar Himalaya Salud
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                icon: CalendarCheck,
                title: "Anotate en la lista de espera",
                description:
                  "Dejanos tu email y te avisamos apenas se lance la app. Los primeros 200 reciben beneficios.",
              },
              {
                step: "2",
                icon: Sparkles,
                title: "Descargá la app y elegí tu plan",
                description:
                  "Registrate en 2 minutos. Elegí Botón de Pánico o Estándar. El primer mes es gratis.",
              },
              {
                step: "3",
                icon: MapPin,
                title: "Empezá a usar",
                description:
                  "Buscá médicos cerca tuyo, subí tus estudios y configurá tus contactos de emergencia.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="scroll-reveal text-center relative"
              >
                {/* Connector line (not on last item) */}
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
                )}

                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white mb-4 shadow-lg">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="faq" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="scroll-reveal border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="scroll-reveal text-center mt-8">
            <p className="text-sm text-muted-foreground">
              ¿Más preguntas?{" "}
              <Link
                href="/soporte"
                className="text-primary hover:underline font-medium"
              >
                Escribinos
              </Link>{" "}
              o visitá la{" "}
              <Link
                href="/informacion"
                className="text-primary hover:underline font-medium"
              >
                página de información completa
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="scroll-reveal max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sé de los primeros en acceder
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Lanzamiento en Junio 2026. Anotate ahora y recibí beneficios de
              early adopter.
            </p>

            <WaitlistForm className="max-w-lg mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
