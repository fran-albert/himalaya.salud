"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BRAND } from "@/lib/brand-tokens";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#quienes", label: "Quiénes somos" },
  { href: "/#producto", label: "Producto" },
  { href: "/#planes", label: "Planes" },
  { href: "/contacto", label: "Contacto" },
];

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
                  className="hidden sm:block text-[10px] font-semibold uppercase tracking-[0.18em]"
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

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(7,57,66,0.35)", backdropFilter: "blur(6px)" }}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <nav
          className={cn(
            "absolute top-20 left-4 right-4 p-6 transition-transform duration-300",
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-4"
          )}
          style={{
            backgroundColor: BRAND.bg,
            border: `1px solid ${BRAND.teal50}`,
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(12,96,110,0.12)",
          }}
        >
          <div className="space-y-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-between p-4 rounded-[12px] transition-colors"
                  style={{
                    backgroundColor: active ? BRAND.teal50 : "transparent",
                    color: active ? BRAND.teal700 : BRAND.textBody,
                    fontWeight: active ? 600 : 500,
                  }}
                >
                  <span>{link.label}</span>
                  {active && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: BRAND.teal700 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="mt-6 pt-6" style={{ borderTop: `1px solid ${BRAND.teal50}` }}>
            <Link
              href="/contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center w-full text-base font-semibold rounded-[8px] transition-all"
              style={{
                backgroundColor: BRAND.teal700,
                color: "#FFFFFF",
                padding: "14px 18px",
              }}
            >
              Contactar
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
