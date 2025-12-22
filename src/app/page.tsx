"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeatureCard3D } from "@/components/feature-card-3d";
import {
  ArrowRight,
  HeartPulse,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
  Lock,
  Globe,
  Clock,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero animations
        gsap.fromTo(".hero-title",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
        );

        gsap.fromTo(".hero-subtitle",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power4.out" }
        );

        gsap.fromTo(".hero-cta",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "power4.out" }
        );

        gsap.fromTo(".hero-badge",
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, delay: 0.9, ease: "back.out(1.7)" }
        );

        // Floating elements
        gsap.to(".float-element", {
          y: -20,
          duration: 2,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
          stagger: 0.3,
        });


        // Product section animation
        gsap.fromTo(".product-content",
          { x: -80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: productRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );

        gsap.fromTo(".product-card",
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: productRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );

        // CTA section animation
        gsap.fromTo(".cta-content",
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating elements */}
        <div className="absolute top-20 left-[10%] float-element">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
            <HeartPulse className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="absolute top-40 right-[15%] float-element">
          <div className="w-14 h-14 rounded-xl bg-secondary/10 backdrop-blur-sm border border-secondary/20 flex items-center justify-center">
            <ShieldCheck className="w-7 h-7 text-secondary" />
          </div>
        </div>
        <div className="absolute bottom-32 left-[20%] float-element">
          <div className="w-12 h-12 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/20 flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-accent" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Plataforma de Salud Digital
              </span>
            </div>

            {/* Title */}
            <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Tu salud
              </span>
              <br />
              <span className="text-foreground">en tus manos</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Software de salud digital que revoluciona la gestión de historiales
              médicos con{" "}
              <span className="text-foreground font-medium">
                seguridad, accesibilidad e interoperabilidad.
              </span>
            </p>

            {/* CTA buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/soporte">
                <Button
                  size="lg"
                  className="group h-14 px-8 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                >
                  Contactanos
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              ¿Qué hacemos?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transformamos la gestión de salud con tecnología de vanguardia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: HeartPulse,
                title: "Digitalización de la Salud",
                description:
                  "Creamos herramientas que facilitan el acceso y la gestión de la información médica de forma intuitiva.",
                gradient: "from-red-500/20 to-pink-500/20",
                iconColor: "text-red-500",
              },
              {
                icon: ShieldCheck,
                title: "Seguridad y Privacidad",
                description:
                  "Priorizamos la protección de datos sensibles con encriptación de nivel bancario y cumplimiento normativo.",
                gradient: "from-emerald-500/20 to-teal-500/20",
                iconColor: "text-emerald-500",
              },
              {
                icon: Smartphone,
                title: "Acceso Móvil",
                description:
                  "Aplicaciones intuitivas para gestionar tu salud desde cualquier dispositivo, en cualquier momento.",
                gradient: "from-blue-500/20 to-cyan-500/20",
                iconColor: "text-blue-500",
              },
              {
                icon: Globe,
                title: "Interoperabilidad",
                description:
                  "Conexión seamless entre diferentes sistemas de salud para un historial médico unificado.",
                gradient: "from-violet-500/20 to-purple-500/20",
                iconColor: "text-violet-500",
              },
              {
                icon: Clock,
                title: "Disponibilidad 24/7",
                description:
                  "Acceso ininterrumpido a tu información médica cuando más lo necesites.",
                gradient: "from-amber-500/20 to-orange-500/20",
                iconColor: "text-amber-500",
              },
              {
                icon: Zap,
                title: "Tecnología Avanzada",
                description:
                  "Utilizamos las últimas tecnologías para ofrecer una experiencia rápida y moderna.",
                gradient: "from-primary/20 to-secondary/20",
                iconColor: "text-primary",
              },
            ].map((feature, index) => (
              <FeatureCard3D
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                iconColor={feature.iconColor}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section
        ref={productRef}
        className="py-24 md:py-32 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="product-content">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Lock className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">
                  Historia Clínica Digital
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Tu historial médico,
                <br />
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  siempre contigo
                </span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Nuestra plataforma permite a pacientes y profesionales de la salud
                acceder a un registro médico unificado, seguro y siempre disponible.
                Creemos en un cuidado de la salud informado y centrado en el paciente.
              </p>

              <div className="space-y-4">
                {[
                  "Registro médico unificado y accesible",
                  "Encriptación de datos de nivel bancario",
                  "Interoperabilidad con sistemas de salud",
                  "Gestión de turnos y recetas digitales",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/soporte">
                  <Button className="group" size="lg">
                    Solicitar información
                    <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="product-card relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-3xl" />
              <Card className="relative border-0 shadow-2xl bg-gradient-to-br from-card to-card/80 backdrop-blur-sm overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <HeartPulse className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Himalaya Salud</h3>
                      <p className="text-sm text-muted-foreground">
                        Historia Clínica Digital
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Registros médicos", value: "Ilimitados" },
                      { label: "Almacenamiento seguro", value: "En la nube" },
                      { label: "Acceso", value: "24/7 disponible" },
                      { label: "Soporte", value: "Dedicado" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-border/50 last:border-0"
                      >
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                    <p className="text-sm text-center">
                      <span className="font-semibold text-primary">
                        Lanzamiento: Junio 2026
                      </span>
                      <br />
                      <span className="text-muted-foreground">
                        Únete a la lista de espera
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="cta-content max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              ¿Listo para transformar
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                tu gestión de salud?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8">
              Contactanos para más información o unite a nuestra lista de espera
              para ser de los primeros en acceder.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/soporte">
                <Button
                  size="lg"
                  className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25"
                >
                  Contactar ahora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              ¿Tenés dudas?{" "}
              <Link
                href="/soporte"
                className="text-primary hover:underline font-medium"
              >
                Escribinos
              </Link>{" "}
              y te respondemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
