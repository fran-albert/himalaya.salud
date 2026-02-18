"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Stethoscope,
  Users,
  Clock,
  MapPin,
  Shield,
  Star,
  CheckCircle2,
  Smartphone,
  BadgeCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProfesionalesPage() {
  useEffect(() => {
    let ctx: gsap.Context | undefined;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".hero-content > *",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
          }
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
    }, 50);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, []);

  return (
    <div className="flex flex-col">
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 py-12">
          <div className="max-w-3xl mx-auto text-center hero-content">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted border border-border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
                Para profesionales de la salud
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Que tus pacientes{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                te encuentren
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
              Registrate gratis en Himalaya Salud y aparecé en los resultados de
              búsqueda de miles de pacientes que buscan profesionales por
              especialidad, obra social y cercanía.
            </p>

            <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
              Sin costo. Sin comisiones. Vos gestionás tu perfil, tus horarios y
              tus datos.
            </p>

            <Link href="/soporte">
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25"
              >
                Quiero registrarme
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground mt-3">
              Escribinos y te guiamos en el registro. Lanzamiento Junio 2026.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== BENEFICIOS ===================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Por qué estar en Himalaya Salud?
            </h2>
            <p className="text-lg text-muted-foreground">
              Los pacientes buscan médicos por especialidad, obra social y
              ubicación. Si estás registrado, te van a encontrar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {[
              {
                icon: Users,
                title: "Más visibilidad",
                description:
                  "Aparecés en los resultados de búsqueda de pacientes que necesitan tu especialidad. Sin pagar publicidad.",
                color: "text-blue-500",
                bg: "from-blue-500/10 to-cyan-500/10",
              },
              {
                icon: BadgeCheck,
                title: "Perfil profesional completo",
                description:
                  "Mostrá tu especialidad, obras sociales que atendés, dirección, teléfono y horarios de atención.",
                color: "text-emerald-500",
                bg: "from-emerald-500/10 to-green-500/10",
              },
              {
                icon: Shield,
                title: "100% gratuito",
                description:
                  "Sin costo de registro, sin comisiones, sin cuota mensual. Vos gestionás tu perfil como quieras.",
                color: "text-violet-500",
                bg: "from-violet-500/10 to-purple-500/10",
              },
            ].map((item, i) => (
              <div key={i} className="scroll-reveal">
                <Card className={`border-0 shadow-lg ${i === 0 ? "bg-gray-900 text-white md:-rotate-1" : "bg-card"}`}>
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${i === 0 ? "rounded-full" : "rounded-xl"} bg-gradient-to-br ${item.bg} flex items-center justify-center mb-4`}
                    >
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <h3 className={`font-semibold text-lg mb-2 ${i === 0 ? "text-white" : ""}`}>{item.title}</h3>
                    <p className={`text-sm ${i === 0 ? "text-gray-400" : "text-muted-foreground"}`}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== QUÉ VEN LOS PACIENTES ===================== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Qué ven los pacientes de vos?
            </h2>
            <p className="text-lg text-muted-foreground">
              Tu ficha profesional incluye toda la información que un paciente
              necesita para elegirte.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Stethoscope,
                  label: "Especialidad y subespecialidades",
                },
                { icon: MapPin, label: "Dirección del consultorio con mapa" },
                { icon: Clock, label: "Horarios de atención" },
                { icon: Shield, label: "Obras sociales y prepagas" },
                { icon: Smartphone, label: "Teléfono y contacto directo" },
                { icon: Star, label: "Matrícula profesional" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CÓMO FUNCIONA ===================== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cómo registrarte
            </h2>
            <p className="text-lg text-muted-foreground">
              En 3 pasos tu perfil está visible para los pacientes
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-0">
            {[
              {
                step: "1",
                title: "Creá tu cuenta",
                description:
                  "Descargá la app y registrate como profesional de la salud. Solo necesitás tu matrícula y datos básicos.",
              },
              {
                step: "2",
                title: "Completá tu perfil",
                description:
                  "Agregá tu especialidad, obras sociales, dirección del consultorio, teléfono y horarios de atención.",
              },
              {
                step: "3",
                title: "Empezá a recibir pacientes",
                description:
                  "Tu perfil aparece en los resultados de búsqueda. Los pacientes te contactan directamente.",
              },
            ].map((item, i) => (
              <div key={i} className="scroll-reveal flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10">
                    <span className="text-sm font-bold text-primary">{item.step}</span>
                  </div>
                  {i < 2 && <div className="w-px flex-1 bg-border" />}
                </div>
                <div className={i === 2 ? "pb-0" : "pb-10"}>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ PROFESIONALES ===================== */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-14 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-border">
            {[
              {
                q: "¿Tiene algún costo?",
                a: "No. El registro y uso de la plataforma es 100% gratuito para profesionales de la salud. No hay comisiones ni cuotas mensuales.",
              },
              {
                q: "¿Quién puede registrarse?",
                a: "Cualquier profesional de la salud con matrícula habilitante: médicos, odontólogos, kinesiólogos, psicólogos, nutricionistas, y más.",
              },
              {
                q: "¿Puedo editar mi información después?",
                a: "Sí, podés actualizar tu perfil en cualquier momento: cambiar horarios, agregar obras sociales, actualizar dirección o teléfono.",
              },
              {
                q: "¿Cómo me contactan los pacientes?",
                a: "Los pacientes ven tu ficha con teléfono, dirección y horarios. Te contactan directamente por teléfono o se acercan al consultorio.",
              },
              {
                q: "¿Cuándo se lanza?",
                a: "El lanzamiento está previsto para Junio 2026. Podés pre-registrarte ahora para estar listo desde el día uno.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="scroll-reveal py-5 px-4"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">{faq.q}</p>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gray-950 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="scroll-reveal max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Tus próximos pacientes{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ya te están buscando
              </span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Registrate gratis y que te encuentren por especialidad, obra social
              y cercanía.
            </p>

            <Link href="/soporte">
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25"
              >
                Quiero registrarme
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              ¿Tenés dudas?{" "}
              <Link
                href="/soporte"
                className="text-primary hover:underline font-medium"
              >
                Escribinos
              </Link>{" "}
              y te ayudamos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
