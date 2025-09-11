import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section id="precios" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Un plan simple y accesible</h2>
          <p className="text-xl text-muted-foreground">
            Tu historia clínica digital siempre disponible, sin límites y con total seguridad
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="text-center border-primary/20 shadow-lg">
            <CardHeader className="pb-8">
              <CardTitle className="text-2xl text-accent">Plan Mensual</CardTitle>
              <div className="text-4xl font-bold text-primary">$2.990</div>
              <p className="text-muted-foreground">por mes</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Historia clínica digital completa</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Acceso desde cualquier dispositivo</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Integración con instituciones médicas</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Seguridad de nivel bancario</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Soporte técnico 24/7</span>
                </div>
              </div>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mt-6">
                Suscribirme ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
