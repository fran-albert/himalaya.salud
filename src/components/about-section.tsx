export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-8">Nosotros</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Himalaya Salud nació con la misión de empoderar a los pacientes y revolucionar la gestión de la información
            médica a través de la tecnología.
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            Creemos que cada persona tiene el derecho de acceder a su información de salud de manera simple, segura y
            desde cualquier lugar. Trabajamos incansablemente para crear soluciones que conecten pacientes, médicos e
            instituciones en un ecosistema digital integrado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">Innovación</h3>
              <p className="text-muted-foreground">
                Utilizamos la tecnología más avanzada para crear soluciones que realmente impacten
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">Transparencia</h3>
              <p className="text-muted-foreground">
                Creemos en la comunicación clara y honesta con nuestros usuarios y partners
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-accent mb-2">Accesibilidad</h3>
              <p className="text-muted-foreground">
                Hacemos que la salud digital sea accesible para todos, sin barreras tecnológicas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
