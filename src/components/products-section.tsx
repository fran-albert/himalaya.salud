import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Building, User } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: Heart,
      title: "Historia Clínica Digital para Mascotas",
      description: "Libreta sanitaria completa y gestión integral de veterinaria para el cuidado de tus mascotas.",
    },
    {
      icon: Building,
      title: "Gestión de Clínica",
      description: "ABM de Pacientes, Especialidades, Médicos y Portal del Paciente para instituciones médicas.",
    },
    {
      icon: User,
      title: "Historia Clínica Personal",
      description: "Tu salud digital en tus manos. Acceso completo a tu información médica desde cualquier lugar.",
    },
  ]

  return (
    <section id="productos" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">
            Más soluciones para la salud y el bienestar
          </h2>
          <p className="text-xl text-muted-foreground">
            Descubrí toda nuestra gama de productos diseñados para transformar la experiencia de salud
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <product.icon className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-accent text-lg">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
