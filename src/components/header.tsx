"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { BrandLogo } from "./site-ui";

const links = [
  { href: "/#producto", label: "La app" },
  { href: "/#como-empezar", label: "Cómo empezar" },
  { href: "/#empresas", label: "Empresas" },
  { href: "/contacto", label: "Contacto" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="h-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <a className="h-skip" href="#contenido">
        Saltar al contenido
      </a>
      <div className="h-container h-header-inner">
        <BrandLogo />
        <nav aria-label="Principal" className="h-desktop-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="h-desktop-actions">
          <Link href="/primeros-pasos" className="h-access-link">
            Ya tengo acceso
          </Link>
          <Link className="h-button h-button-small" href="/#planes">
            Ver planes <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <button
          ref={toggle}
          className="h-menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="h-mobile-nav"
        aria-label="Principal móvil"
        hidden={!open}
      >
        {[
          ...links,
          { href: "/primeros-pasos", label: "Ya tengo acceso" },
          { href: "/#planes", label: "Ver planes y contratar" },
        ].map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
