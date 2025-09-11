"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, FileText, Users, Shield } from "lucide-react"
import { useEffect, useState } from "react"

export function FeaturesSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    {
      icon: Heart,
      title: "Salud Personalizada",
      description: "Seguimiento completo de tu historial médico con análisis detallados y personalizados.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-600",
    },
    {
      icon: Users,
      title: "Interoperabilidad Total",
      description: "Conectividad seamless con todos los sistemas de salud y profesionales médicos.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-600",
    },
    {
      icon: FileText,
      title: "Historial Completo",
      description: "Acceso instantáneo a todos tus registros médicos organizados y actualizados.",
      gradient: "from-primary/20 to-secondary/20",
      iconColor: "text-primary",
    },
    {
      icon: Shield,
      title: "Seguridad Avanzada",
      description: "Protección de nivel hospitalario que garantiza la privacidad de tu información.",
      gradient: "from-accent/20 to-secondary/20",
      iconColor: "text-accent",
    },
  ]

  return (
    <section id="funcionalidades" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30"></div>

      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 animate-float">
            <div className="w-3 h-3 bg-primary/30 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute bottom-20 left-10 animate-float" style={{ animationDelay: "3s" }}>
            <div className="w-2 h-2 bg-secondary/40 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-accent">Tecnología </span>
            <span className="text-shimmer">Avanzada</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Revolucionamos la gestión de salud con tecnología de vanguardia y seguridad hospitalaria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`text-center hover-lift glass-effect border-0 bg-gradient-to-br ${feature.gradient} group relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative z-10">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                  <feature.icon
                    className={`w-10 h-10 ${feature.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <CardTitle className="text-accent group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-shimmer transition-all duration-300">
              99.9%
            </div>
            <div className="text-muted-foreground">Disponibilidad</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 group-hover:text-shimmer transition-all duration-300">
              &lt;1s
            </div>
            <div className="text-muted-foreground">Tiempo de carga</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:text-shimmer transition-all duration-300">
              256-bit
            </div>
            <div className="text-muted-foreground">Encriptación</div>
          </div>
          <div className="group">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:text-shimmer transition-all duration-300">
              24/7
            </div>
            <div className="text-muted-foreground">Soporte médico</div>
          </div>
        </div>
      </div>
    </section>
  )
}
