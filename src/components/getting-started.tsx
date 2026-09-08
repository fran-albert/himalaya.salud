import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Building2, CreditCard, Smartphone } from "lucide-react";

const journeys = [
  { title: "Quiero contratar", text: "Elegí un plan y activá tu cuenta.", href: "/primeros-pasos#contratar", icon: CreditCard },
  { title: "Mi empresa me dio acceso", text: "Empezá desde tu invitación por correo.", href: "/beneficio-empresarial", icon: Building2 },
  { title: "Ya tengo un plan", text: "Instalá la app y prepará tus contactos.", href: "/primeros-pasos#preparar-app", icon: Smartphone },
];

export function GettingStartedPaths() {
  return (
    <nav className="h-journeys" aria-label="Elegí tu guía para empezar">
      {journeys.map(({ title, text, href, icon: Icon }) => (
        <Link className="h-journey" href={href} key={href}>
          <Icon size={23} aria-hidden="true" />
          <span><strong>{title}</strong><small>{text}</small></span>
          <ArrowRight className="h-journey-arrow" size={18} aria-hidden="true" />
        </Link>
      ))}
    </nav>
  );
}

export function GuideStep({ number, title, id, children }: { number: string; title: string; id?: string; children: ReactNode }) {
  return (
    <li className="h-guide-step h-anchor" id={id}>
      <span className="h-step-number" aria-hidden="true">{number}</span>
      <div><h3>{title}</h3>{children}</div>
    </li>
  );
}
