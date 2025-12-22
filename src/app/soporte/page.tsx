"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Clock,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Send,
  Headphones,
  Sparkles,
} from "lucide-react";

export default function SupportPage() {
  const supportEmail = "soporte@himalayasalud.com.ar";
  const heroRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".support-title", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".support-subtitle", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });

      gsap.from(".support-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        stagger: 0.15,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Error al enviar");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Error al enviar el mensaje");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Headphones className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Estamos para ayudarte
              </span>
            </div>

            <h1 className="support-title text-4xl md:text-6xl font-bold mb-6">
              Soporte{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Técnico
              </span>
            </h1>

            <p className="support-subtitle text-xl text-muted-foreground mb-8">
              ¿Tenés alguna consulta o necesitás ayuda? Completá el formulario y te
              responderemos lo antes posible.
            </p>

            {/* Quick contact */}
            <div className="support-subtitle inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card border border-border">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href={`mailto:${supportEmail}`}
                className="font-medium text-foreground hover:text-primary transition-colors"
              >
                {supportEmail}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="support-card border-0 shadow-2xl bg-gradient-to-br from-card to-card/80 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                <CardContent className="p-6 md:p-8">
                  {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">¡Mensaje enviado!</h3>
                      <p className="text-muted-foreground mb-6 max-w-sm">
                        Te enviamos un email de confirmación. Nuestro equipo te
                        responderá en las próximas 24-48 horas.
                      </p>
                      <Button variant="outline" onClick={() => setStatus("idle")}>
                        Enviar otra consulta
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h2 className="font-semibold text-lg">Formulario de Contacto</h2>
                          <p className="text-sm text-muted-foreground">
                            Completá todos los campos
                          </p>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        {status === "error" && (
                          <div className="flex items-center gap-3 p-4 bg-red-500/10 text-red-500 rounded-xl border border-red-500/20">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <span className="text-sm">{errorMessage}</span>
                          </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="name">Nombre</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Tu nombre completo"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              disabled={status === "loading"}
                              className="h-12"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="tu@email.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              disabled={status === "loading"}
                              className="h-12"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="subject">Asunto</Label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="Ej: Consulta sobre el servicio"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            disabled={status === "loading"}
                            className="h-12"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Mensaje</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Describí tu consulta en detalle..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={status === "loading"}
                            className="min-h-[150px] resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all"
                        >
                          {status === "loading" ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Enviando...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Enviar mensaje
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hours Card */}
              <Card className="support-card border-0 shadow-xl bg-gradient-to-br from-card to-card/80">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-amber-500" />
                    </div>
                    <h3 className="font-semibold">Horarios de Atención</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Lunes a Viernes</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Zona horaria</span>
                      <span className="font-medium">Argentina (ART)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time Card */}
              <Card className="support-card border-0 shadow-xl bg-gradient-to-br from-card to-card/80">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h3 className="font-semibold">Tiempo de Respuesta</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Nuestro equipo se esfuerza por responder todas las consultas en
                    el menor tiempo posible.
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="font-medium">24-48 horas hábiles</span>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Hint */}
              <div className="support-card p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground mb-3">
                  ¿Tenés preguntas frecuentes?
                </p>
                <a
                  href="/informacion#faq"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  Visitá nuestra sección de FAQ
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
