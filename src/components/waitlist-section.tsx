"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Calendar, ArrowRight } from "lucide-react";

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log("Email submitted:", email);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full animate-float animate-delay-100"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary/10 rounded-full animate-float animate-delay-300"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 bg-accent/10 rounded-full animate-pulse-glow animate-delay-200"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary/5 rounded-full animate-float animate-delay-500"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-fade-in-up animate-delay-100">
            <span className="text-shimmer">Tu salud</span>{" "}
            <span className="text-foreground">en tus manos</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-balance animate-fade-in-up animate-delay-200">
            Revolucionamos la gestión digital de historiales médicos
          </p>

          <p className="text-lg text-muted-foreground mb-12 text-balance max-w-2xl mx-auto animate-fade-in-up animate-delay-300">
            Creamos una plataforma interoperable que te permite acceder,
            gestionar y compartir tu información médica de forma segura desde
            cualquier lugar.
          </p>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 mb-12 max-w-2xl mx-auto glass-effect hover-lift animate-bounce-in animate-delay-500">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-accent mr-3 animate-pulse-glow" />
              <span className="text-lg font-semibold text-accent">
                Proyecto en Desarrollo
              </span>
            </div>
            <p className="text-muted-foreground">
              Estamos trabajando intensamente para lanzar la plataforma en{" "}
              <span className="font-semibold text-foreground">Junio 2026</span>
            </p>
          </div>

          {!isSubmitted ? (
            <div className="max-w-md mx-auto animate-fade-in-up animate-delay-300">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Únete a la Lista de Espera
              </h3>
              <p className="text-muted-foreground mb-6">
                Déjanos tu email para recibir más información y ser el primero
                en acceder
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5 group-focus-within:text-primary transition-all duration-300 group-focus-within:animate-pulse-glow" />
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-12 h-14 text-lg border-2 border-border focus:border-primary transition-all duration-300 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/70 focus:bg-background/80"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-semibold bg-accent hover:bg-accent/90 text-accent-foreground rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
                >
                  <span className="relative z-10">Solicitar Información</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </form>

              <p className="text-sm text-muted-foreground mt-4 animate-fade-in-up animate-delay-500">
                Tu información está segura con nosotros. No compartimos datos
                personales.
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto animate-bounce-in">
              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 glass-effect">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  ¡Gracias por tu interés!
                </h3>
                <p className="text-muted-foreground">
                  Te contactaremos pronto con más información sobre Himalaya
                  Salud.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
