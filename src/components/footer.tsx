import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo-himalaya-salud.svg" alt="Himalaya Salud" width={32} height={32} className="w-8 h-8" />
              <span className="font-bold text-lg text-accent">Himalaya Salud</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Tu salud en tus manos. Accedé a tu historia clínica digital de forma simple y segura.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-accent mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-muted-foreground hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#funcionalidades" className="text-muted-foreground hover:text-accent transition-colors">
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link href="#precios" className="text-muted-foreground hover:text-accent transition-colors">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#productos" className="text-muted-foreground hover:text-accent transition-colors">
                  Productos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-accent mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-accent transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-accent transition-colors">
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-muted-foreground hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">© 2025 Himalaya Salud. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
