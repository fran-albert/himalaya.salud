import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      role: "Paciente",
      content:
        "Himalaya Salud cambió completamente mi experiencia médica. Ahora tengo toda mi información al alcance de mi mano y puedo compartirla fácilmente con mis médicos.",
      rating: 5,
    },
    {
      name: "Dr. Carlos Mendoza",
      role: "Médico Cardiólogo",
      content:
        "Como profesional de la salud, valoro enormemente la facilidad con la que puedo acceder al historial completo de mis pacientes. Es una herramienta indispensable.",
      rating: 5,
    },
    {
      name: "Clínica San Rafael",
      role: "Institución Médica",
      content:
        "La implementación fue sencilla y nuestros pacientes están encantados con el acceso digital a sus historias clínicas. Definitivamente recomendamos Himalaya Salud.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-xl text-muted-foreground">
            Testimonios reales de pacientes e instituciones que confían en nosotros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="font-semibold text-accent">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
