import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-16 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Empezá a usar Himalaya Salud hoy mismo</h2>
        <p className="text-xl mb-8 opacity-90">
          Únete a miles de usuarios que ya transformaron su experiencia de salud
        </p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Crear mi cuenta
        </Button>
      </div>
    </section>
  )
}
