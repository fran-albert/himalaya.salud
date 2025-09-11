"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Shield, Zap, Heart, FileText, Users } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="inicio" className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 tech-grid ai-gradient animate-gradient"></div>

      <div className="absolute inset-0 pointer-events-none">
        {mounted && (
          <>
            <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: "0s" }}>
              <Heart className="w-8 h-8 text-primary/30 animate-pulse" />
            </div>
            <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
              <FileText className="w-6 h-6 text-secondary/40 animate-pulse" />
            </div>
            <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "4s" }}>
              <Users className="w-10 h-10 text-accent/20 animate-pulse" />
            </div>

            <div
              className="absolute top-1/3 left-0 w-2 h-2 bg-primary rounded-full animate-data-flow"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute top-1/2 left-0 w-1 h-1 bg-secondary rounded-full animate-data-flow"
              style={{ animationDelay: "5s" }}
            ></div>
            <div
              className="absolute top-2/3 left-0 w-3 h-3 bg-accent/50 rounded-full animate-data-flow"
              style={{ animationDelay: "10s" }}
            ></div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-shimmer">Tu salud</span>,<span className="text-accent"> en tus manos</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-pretty">
            Revolucionamos la salud digital con
            <span className="text-accent font-semibold"> tecnología avanzada</span>
          </p>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Accedé a tu historia clínica digital de forma simple, segura e interoperable
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground animate-pulse-glow hover-lift group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:animate-spin" />
              Comenzar ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent glass-effect hover-lift"
            >
              Ver más
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center group hover-lift">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mb-4 animate-pulse-glow">
                <Smartphone className="w-10 h-10 text-primary group-hover:animate-bounce" />
              </div>
              <h3 className="font-semibold text-accent mb-2 text-lg">Acceso móvil</h3>
              <p className="text-muted-foreground text-sm">Tu historia clínica disponible en cualquier momento</p>
            </div>

            <div className="flex flex-col items-center text-center group hover-lift" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl flex items-center justify-center mb-4 animate-pulse-glow">
                <Shield className="w-10 h-10 text-secondary group-hover:animate-pulse" />
              </div>
              <h3 className="font-semibold text-accent mb-2 text-lg">Seguridad total</h3>
              <p className="text-muted-foreground text-sm">Protección avanzada de tus datos médicos</p>
            </div>

            <div className="flex flex-col items-center text-center group hover-lift" style={{ animationDelay: "0.4s" }}>
              <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center mb-4 animate-pulse-glow">
                <Heart className="w-10 h-10 text-accent group-hover:animate-pulse" />
              </div>
              <h3 className="font-semibold text-accent mb-2 text-lg">Salud integral</h3>
              <p className="text-muted-foreground text-sm">Gestión completa de tu bienestar y salud</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
