import { Button } from "@/components/ui/button"

export function InstitutionsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">Para Instituciones Médicas</h2>
            <p className="text-xl text-muted-foreground mb-6">
              Una solución gratuita y fácil de implementar para instituciones pequeñas y medianas
            </p>
            <p className="text-muted-foreground mb-8">
              Ofrecemos herramientas completas de gestión que permiten a las instituciones médicas digitalizar sus
              procesos, mejorar la atención al paciente y optimizar sus operaciones de manera eficiente y segura.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Conocer más</Button>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg p-8 text-center">
              <div className="w-32 h-32 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-accent mb-4">Digitalización Médica Integral</h3>
              <p className="text-muted-foreground">Transformamos la gestión médica con tecnología de vanguardia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
