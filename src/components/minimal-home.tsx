import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, Mail, ShieldCheck } from "lucide-react";
import { BRAND } from "@/lib/brand-tokens";

const contactEmail = "contacto@himalayasalud.com.ar";

export function MinimalHome() {
  const links = [
    { href: "/contacto", label: "Contacto", Icon: Mail },
    { href: "/terminos", label: "Términos", Icon: FileText },
    { href: "/privacidad", label: "Privacidad", Icon: ShieldCheck },
  ];

  return (
    <div
      className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16"
      style={{ backgroundColor: BRAND.bg, color: BRAND.textBody }}
    >
      <div className="w-full max-w-xl flex flex-col items-center text-center gap-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Himalaya Salud"
        >
          <Image
            src="/logo-himalaya-salud.svg"
            alt="Himalaya Salud"
            width={56}
            height={56}
            className="w-14 h-14"
            priority
          />
          <span
            className="font-bold text-2xl tracking-tight"
            style={{ fontFamily: "var(--font-leelawadee), Inter, sans-serif" }}
          >
            <span style={{ color: BRAND.teal700 }}>Himalaya</span>
            <span style={{ color: BRAND.mint500 }}> Salud</span>
          </span>
        </Link>

        <div className="flex flex-col gap-3">
          <h1
            className="text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ color: BRAND.teal700 }}
          >
            Tu salud en tus manos
          </h1>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: BRAND.textCaption }}
          >
            Himalaya Salud S.A.S. está trabajando en su nueva plataforma. Para
            consultas de soporte o información legal, usá los enlaces de abajo.
          </p>
        </div>

        <div className="w-full grid gap-3 sm:grid-cols-3">
          {links.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-colors"
              style={{
                backgroundColor: BRAND.bgSecondary,
                border: `1px solid ${BRAND.teal50}`,
                color: BRAND.teal700,
              }}
            >
              <Icon className="h-4 w-4" />
              {label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
        </div>

        <a
          href={`mailto:${contactEmail}`}
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: BRAND.textCaption }}
        >
          <Mail className="h-4 w-4" />
          {contactEmail}
        </a>

        <p className="text-xs pt-6" style={{ color: BRAND.textCaption }}>
          © {new Date().getFullYear()} Himalaya Salud S.A.S. · Argentina
        </p>
      </div>
    </div>
  );
}
