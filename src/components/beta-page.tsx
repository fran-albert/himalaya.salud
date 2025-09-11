"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Zap, Mail, ArrowRight, Sparkles, Construction, Users, Bell } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function BetaPage() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Aquí podrías integrar con un servicio como Mailchimp, ConvertKit, etc.
      console.log("Email added to whitelist:", email)
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute inset-0 ai-gradient animate-gradient opacity-20"></div>
      
      {/* Partículas flotantes */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: "0s" }}>
            <Heart className="w-8 h-8 text-primary/20 animate-pulse" />
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
            <Shield className="w-6 h-6 text-secondary/30 animate-pulse" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "4s" }}>
            <Zap className="w-10 h-10 text-accent/20 animate-pulse" />
          </div>
          <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: "6s" }}>
            <Sparkles className="w-7 h-7 text-primary/25 animate-pulse" />
          </div>
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Badge BETA */}
        <div className="flex justify-center mb-8">
          <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 px-6 py-2 text-lg font-semibold animate-pulse-glow">
            <Construction className="w-5 h-5 mr-2" />
            VERSIÓN BETA
          </Badge>
        </div>

        {/* Logo y título principal */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 relative">
              <Image
                src="/logo-himalaya-salud.svg"
                alt="Himalaya Salud"
                fill
                className="object-contain animate-pulse-glow"
              />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-balance">
            <span className="text-shimmer">Tu salud</span>,
            <br />
            <span className="text-accent">en tus manos</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Estamos construyendo el futuro de la 
            <span className="text-accent font-semibold"> salud digital</span>
          </p>
        </div>

        {/* Mensaje BETA */}
        <Card className="max-w-4xl mx-auto mb-12 glass-effect border-accent/20">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Bell className="w-8 h-8 text-accent mr-3 animate-pulse" />
              <h2 className="text-2xl font-bold text-accent">Proyecto en Desarrollo</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              Esta es una <strong>versión BETA</strong> de Himalaya Salud. 
              Estamos trabajando intensamente para crear la plataforma de salud digital más avanzada.
            </p>
            <p className="text-muted-foreground">
              <strong>⚠️ Nada es oficial aún.</strong> Todo el contenido y funcionalidades están en desarrollo activo.
            </p>
          </CardContent>
        </Card>

        {/* Formulario de Whitelist */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="glass-effect border-primary/20 hover-lift">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse-glow" />
                <h3 className="text-3xl font-bold text-primary mb-2">
                  Únete a la Lista de Espera
                </h3>
                <p className="text-muted-foreground text-lg">
                  Sé de los primeros en acceder cuando lancemos oficialmente
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 h-12 text-lg border-primary/20 focus:border-primary"
                    />
                    <Button 
                      type="submit" 
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow hover-lift group h-12 px-8"
                    >
                      <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Unirme
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Te notificaremos cuando esté lista la versión oficial
                  </p>
                </form>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-500 animate-pulse" />
                  </div>
                  <h4 className="text-xl font-semibold text-green-600 mb-2">
                    ¡Gracias por unirte!
                  </h4>
                  <p className="text-muted-foreground">
                    Te contactaremos pronto con novedades exclusivas
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features preview */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-accent">
            Lo que estamos construyendo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-effect border-primary/20 hover-lift group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Shield className="w-8 h-8 text-primary group-hover:animate-pulse" />
                </div>
                <h4 className="font-semibold text-primary mb-2 text-lg">Historia Clínica Digital</h4>
                <p className="text-muted-foreground text-sm">
                  Acceso seguro y completo a tu información médica
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-secondary/20 hover-lift group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Zap className="w-8 h-8 text-secondary group-hover:animate-spin" />
                </div>
                <h4 className="font-semibold text-secondary mb-2 text-lg">Interoperabilidad</h4>
                <p className="text-muted-foreground text-sm">
                  Conectividad total entre profesionales y centros médicos
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-accent/20 hover-lift group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <Heart className="w-8 h-8 text-accent group-hover:animate-pulse" />
                </div>
                <h4 className="font-semibold text-accent mb-2 text-lg">Salud Integral</h4>
                <p className="text-muted-foreground text-sm">
                  Gestión completa de tu bienestar y prevención
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer simple */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground">
            © 2024 Himalaya Salud S.A. - Proyecto en desarrollo
          </p>
        </div>
      </div>
    </div>
  )
}