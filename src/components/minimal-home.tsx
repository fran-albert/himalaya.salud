import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText, Mail, ShieldCheck } from "lucide-react";

const contactEmail = "contacto@himalayasalud.com.ar";

export function MinimalHome() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 bg-background text-foreground">
      <div className="w-full max-w-xl flex flex-col items-center text-center gap-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Himalaya Salud">
          <Image
            src="/logo-himalaya-salud.svg"
            alt="Himalaya Salud"
            width={56}
            height={56}
            className="w-14 h-14"
            priority
          />
          <span className="font-bold text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Himalaya Salud
          </span>
        </Link>

        <div className="flex flex-col gap-3">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Tu salud en tus manos
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Himalaya Salud S.A.S. está trabajando en su nueva plataforma. Para
            consultas de soporte o información legal, usá los enlaces de abajo.
          </p>
        </div>

        <div className="w-full grid gap-3 sm:grid-cols-3">
          <Link
            href="/soporte"
            className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-primary/40 hover:bg-muted/60 transition-colors"
          >
            <Mail className="h-4 w-4" />
            Soporte
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
          </Link>
          <Link
            href="/terminos"
            className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-primary/40 hover:bg-muted/60 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Términos
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
          </Link>
          <Link
            href="/privacidad"
            className="group flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold hover:border-primary/40 hover:bg-muted/60 transition-colors"
          >
            <ShieldCheck className="h-4 w-4" />
            Privacidad
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
          </Link>
        </div>

        <a
          href={`mailto:${contactEmail}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail className="h-4 w-4" />
          {contactEmail}
        </a>

        <p className="text-xs text-muted-foreground pt-6">
          © {new Date().getFullYear()} Himalaya Salud S.A.S. · Argentina
        </p>
      </div>
    </div>
  );
}
