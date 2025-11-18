import Image from "next/image"
import Link from "next/link"
// import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center md:justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo-himalaya-salud.svg" alt="Himalaya Salud" width={40} height={40} className="w-10 h-10" />
          <span className="font-bold text-lg md:text-xl text-accent">Himalaya Salud</span>
        </Link>

        {/* <nav className="hidden md:flex items-center space-x-8">
          <Link href="#inicio" className="text-foreground hover:text-accent transition-colors">
            Inicio
          </Link>
          <Link href="#funcionalidades" className="text-foreground hover:text-accent transition-colors">
            Funcionalidades
          </Link>
          <Link href="#precios" className="text-foreground hover:text-accent transition-colors">
            Precios
          </Link>
          <Link href="#productos" className="text-foreground hover:text-accent transition-colors">
            Productos
          </Link>
          <Link href="#nosotros" className="text-foreground hover:text-accent transition-colors">
            Nosotros
          </Link>
          <Link href="#contacto" className="text-foreground hover:text-accent transition-colors">
            Contacto
          </Link>
        </nav> */}

        {/* <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Probar Gratis</Button> */}
      </div>
    </header>
  )
}
