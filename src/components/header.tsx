"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Home,
  Info,
  Layers,
  Mail,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { BRAND, SHADOW } from "@/lib/brand-tokens";

type NavLink = { href: string; label: string; icon: LucideIcon };

const navLinks: NavLink[] = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/#quienes", label: "Quiénes somos", icon: Info },
  { href: "/#producto", label: "Producto", icon: Layers },
  { href: "/#planes", label: "Planes", icon: Sparkles },
  { href: "/contacto", label: "Contacto", icon: Mail },
];

const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ||
  "https://wa.me/5493412429819?text=Hola.%20Quer%C3%ADa%20hacer%20una%20consulta.";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        )}
        style={{
          backgroundColor: isScrolled ? "rgba(255,255,255,0.92)" : "transparent",
          backdropFilter: isScrolled ? "saturate(180%) blur(12px)" : "none",
          WebkitBackdropFilter: isScrolled ? "saturate(180%) blur(12px)" : "none",
          borderBottom: isScrolled ? `1px solid ${BRAND.teal50}` : "1px solid transparent",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="h-16 md:h-20 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Himalaya Salud — Inicio">
              <Image
                src="/logo-himalaya-salud.svg"
                alt=""
                width={36}
                height={36}
                className="w-9 h-9 transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="font-bold text-base md:text-lg tracking-tight"
                  style={{ fontFamily: "var(--font-leelawadee), Inter, sans-serif" }}
                >
                  <span style={{ color: BRAND.teal700 }}>Himalaya</span>
                  <span style={{ color: BRAND.mint500 }}> Salud</span>
                </span>
                <span
                  className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.16em] sm:tracking-[0.18em]"
                  style={{ color: BRAND.textCaption }}
                >
                  Tu salud en tus manos
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                    style={{
                      color: active ? BRAND.teal700 : BRAND.textCaption,
                    }}
                    onMouseEnter={(e) => {
                      if (!active) e.currentTarget.style.color = BRAND.teal700;
                    }}
                    onMouseLeave={(e) => {
                      if (!active) e.currentTarget.style.color = BRAND.textCaption;
                    }}
                  >
                    {link.label}
                    {active && (
                      <span
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                        style={{ backgroundColor: BRAND.teal700 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center text-sm font-semibold rounded-[8px] transition-all"
                style={{
                  backgroundColor: BRAND.teal700,
                  color: "#FFFFFF",
                  padding: "10px 18px",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = BRAND.teal900;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = BRAND.teal700;
                }}
              >
                Contactar
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
              style={{ color: BRAND.teal700 }}
            >
              <div className="relative w-6 h-6">
                <span
                  className={cn(
                    "absolute left-0 w-6 h-0.5 transition-all duration-300",
                    isMobileMenuOpen ? "top-3 rotate-45" : "top-1"
                  )}
                  style={{ backgroundColor: "currentColor" }}
                />
                <span
                  className={cn(
                    "absolute left-0 top-3 w-6 h-0.5 transition-all duration-300",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                  style={{ backgroundColor: "currentColor" }}
                />
                <span
                  className={cn(
                    "absolute left-0 w-6 h-0.5 transition-all duration-300",
                    isMobileMenuOpen ? "top-3 -rotate-45" : "top-5"
                  )}
                  style={{ backgroundColor: "currentColor" }}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        style={{
          backgroundColor: "rgba(7,57,66,0.45)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
        }}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-[100dvh] w-[88vw] max-w-[360px] md:hidden",
          "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{
          backgroundColor: BRAND.bg,
          borderLeft: `1px solid ${BRAND.teal50}`,
          boxShadow: SHADOW.cardHover,
        }}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex h-full flex-col">
          {/* Header del drawer */}
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: `1px solid ${BRAND.teal50}` }}
          >
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/logo-himalaya-salud.svg"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-[15px] font-bold tracking-tight"
                  style={{ fontFamily: "var(--font-leelawadee), Inter, sans-serif" }}
                >
                  <span style={{ color: BRAND.teal700 }}>Himalaya</span>
                  <span style={{ color: BRAND.mint500 }}> Salud</span>
                </span>
                <span
                  className="text-[9px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: BRAND.textCaption }}
                >
                  Tu salud en tus manos
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              style={{
                backgroundColor: BRAND.teal50,
                color: BRAND.teal700,
              }}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-3 py-5">
            <span
              className="ml-2 mb-3 inline-block text-[10px] font-bold uppercase tracking-[1.4px]"
              style={{ color: BRAND.textCaption }}
            >
              Navegación
            </span>
            <ul className="space-y-1">
              {navLinks.map((link, i) => {
                const active = pathname === link.href;
                const Icon = link.icon;
                return (
                  <li
                    key={link.href}
                    className="drawer-item"
                    style={{
                      animationDelay: isMobileMenuOpen
                        ? `${80 + i * 55}ms`
                        : "0ms",
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center gap-3 rounded-2xl px-4 py-3.5 transition-all"
                      style={{
                        backgroundColor: active ? BRAND.teal50 : "transparent",
                        color: active ? BRAND.teal700 : BRAND.textBody,
                        fontWeight: active ? 600 : 500,
                      }}
                      onMouseEnter={(e) => {
                        if (!active)
                          e.currentTarget.style.backgroundColor = BRAND.mint50;
                      }}
                      onMouseLeave={(e) => {
                        if (!active)
                          e.currentTarget.style.backgroundColor = "transparent";
                      }}
                    >
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-xl transition-colors"
                        style={{
                          backgroundColor: active ? "#FFFFFF" : BRAND.mint50,
                          color: BRAND.teal700,
                        }}
                      >
                        <Icon size={18} />
                      </span>
                      <span className="flex-1 text-[15px]">{link.label}</span>
                      {active ? (
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: BRAND.teal700 }}
                        />
                      ) : (
                        <ArrowRight
                          size={16}
                          className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100"
                          style={{ color: BRAND.teal700 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer del drawer */}
          <div
            className="space-y-3 px-5 pb-6 pt-5"
            style={{ borderTop: `1px solid ${BRAND.teal50}` }}
          >
            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl text-base font-semibold transition-all"
              style={{
                backgroundColor: BRAND.teal700,
                color: "#FFFFFF",
                padding: "14px 18px",
                boxShadow: SHADOW.card,
              }}
            >
              Contactar
              <ArrowRight size={16} />
            </Link>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="mailto:contacto@himalayasalud.com.ar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all"
                style={{
                  backgroundColor: BRAND.bgSecondary,
                  border: `1px solid ${BRAND.teal50}`,
                  color: BRAND.teal700,
                }}
              >
                <Mail size={14} />
                Email
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold transition-all"
                style={{
                  backgroundColor: "#25D366",
                  color: "#FFFFFF",
                }}
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>

            <p
              className="text-center text-[10px]"
              style={{ color: BRAND.textCaption }}
            >
              © {new Date().getFullYear()} Himalaya Salud · Hecho en Argentina
            </p>
          </div>
        </div>
      </aside>

      <style jsx>{`
        @keyframes drawerItemIn {
          from {
            opacity: 0;
            transform: translateX(18px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        .drawer-item {
          opacity: 0;
        }
        :global(aside.translate-x-0) .drawer-item {
          animation: drawerItemIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .drawer-item,
          :global(aside.translate-x-0) .drawer-item {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
