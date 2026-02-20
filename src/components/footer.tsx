import Link from "next/link";
import Image from "next/image";
import { HeartPulse, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: "Inicio", href: "/" },
      { label: "Planes", href: "/#planes" },
      { label: "Información", href: "/informacion" },
      { label: "Contacto", href: "/soporte" },
    ],
    profesionales: [
      { label: "Registrá tu consulta", href: "/profesionales" },
    ],
    legal: [
      { label: "Privacidad", href: "/privacidad" },
      { label: "Términos", href: "/terminos" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/50 border-t border-border">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  src="/logo-himalaya-salud.svg"
                  alt="Himalaya Salud"
                  width={36}
                  height={36}
                  className="relative w-9 h-9"
                />
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Himalaya Salud
              </span>
            </Link>

            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Transformamos la gestión de salud digital con tecnología segura,
              accesible e interoperable.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:info@himalayasalud.com.ar"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>info@himalayasalud.com.ar</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Argentina</span>
              </div>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Profesionales */}
          <div>
            <h4 className="font-semibold text-sm mb-4">¿Sos profesional?</h4>
            <ul className="space-y-3">
              {footerLinks.profesionales.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Himalaya Salud S.A.S. Todos los derechos reservados.
            </p>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Hecho con</span>
              <HeartPulse className="w-4 h-4 text-red-500 animate-pulse" />
              <span>en Argentina</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
