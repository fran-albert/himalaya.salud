import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  HeartPulse,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL ||
    "https://wa.me/5493412429819?text=Hola.%20Quer%C3%ADa%20hacer%20una%20consulta.";

  const footerLinks = {
    producto: [
      { label: "Plan Botón de Pánico", href: "/#planes" },
      { label: "Botón de Pánico", href: "/#emergencia" },
      { label: "FAQ", href: "/faq" },
    ],
    empresa: [
      { label: "Inicio", href: "/" },
      { label: "Contacto", href: "/contacto" },
    ],
    legal: [
      { label: "Privacidad", href: "/politica-de-privacidad" },
      { label: "Términos", href: "/terminos-y-condiciones" },
    ],
  };

  return (
    <>
      <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3 group mb-4">
              <div className="relative">
                <Image
                  src="/logo-himalaya-salud.svg"
                  alt="Himalaya Salud"
                  width={36}
                  height={36}
                  className="relative w-9 h-9"
                />
              </div>
              <span className="font-bold text-lg text-foreground">
                Himalaya Salud
              </span>
            </Link>

            <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Tu salud en tus manos. Con un toque, tu celular pide ayuda por vos y avisa a tus contactos de confianza. Para que vos y tu familia estén preparados ante una emergencia.
            </p>

            <div className="grid gap-3 text-sm">
              <a
                href="mailto:contacto@himalayasalud.com.ar"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4" />
                <span>contacto@himalayasalud.com.ar</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Argentina</span>
              </div>
            </div>
          </div>

          {/* Producto */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-sm mb-4">Producto</h4>
            <ul className="space-y-3">
              {footerLinks.producto.map((link) => (
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

          {/* Empresa */}
          <div className="lg:col-span-2">
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

          {/* Legal */}
          <div className="lg:col-span-1">
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

          {/* Support card */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="rounded-3xl border border-border bg-muted/35 p-5">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h4 className="font-semibold text-sm mb-2">Atención y soporte</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Consultas sobre el Plan Botón de Pánico, planes para empresas o ayuda para usuarios.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Contactar
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Himalaya Salud S.A.S. Todos los derechos reservados.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Datos sensibles, trato responsable
              </span>
              <span className="hidden md:inline text-border">|</span>
              <span className="inline-flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-red-500" />
                Hecho en Argentina
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>

      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enviar WhatsApp a Himalaya Salud"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-slate-950/20 transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </Link>
    </>
  );
}
