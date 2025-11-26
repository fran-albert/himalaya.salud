"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FloatingNav } from "@/components/ui/floating-nav";
import { BottomNav } from "@/components/ui/bottom-nav";
import { HeroInformacion } from "@/components/informacion/hero-informacion";
import { QueEsSection } from "@/components/informacion/que-es-section";
import { DesafioSection } from "@/components/informacion/desafio-section";
import { SistemaHCDSection } from "@/components/informacion/sistema-hcd-section";
// OCULTO TEMPORALMENTE - Sección Botón de Pánico
// import { BotonPanicoSection } from "@/components/informacion/boton-panico-section";
import { BeneficiosInstitucionesSection } from "@/components/informacion/beneficios-instituciones-section";
import { CaracteristicasSection } from "@/components/informacion/caracteristicas-section";
// OCULTO TEMPORALMENTE - Sección de Planes
// import { PlanesSection } from "@/components/informacion/planes-section";
import { ComoFuncionaSection } from "@/components/informacion/como-funciona-section";
import { SeguridadSection } from "@/components/informacion/seguridad-section";
import { FAQSection } from "@/components/informacion/faq-section";
import { CTAFinalSection } from "@/components/informacion/cta-final-section";

export default function InformacionPage() {
  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Qué es", href: "#que-es" },
    { label: "Desafío", href: "#desafio" },
    { label: "Sistema", href: "#sistema-hcd" },
    // OCULTO TEMPORALMENTE - { label: "Pánico", href: "#boton-panico" },
    { label: "Beneficios", href: "#beneficios" },
    // OCULTO TEMPORALMENTE - { label: "Planes", href: "#planes" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Progress bar */}
      <ScrollProgress />

      {/* Header */}
      <Header />

      {/* Floating navigation - Desktop only */}
      <FloatingNav navItems={navItems} />

      {/* Bottom navigation - Mobile only */}
      <BottomNav />

      {/* Main content - Add padding bottom for mobile bottom nav */}
      <main className="pb-20 md:pb-0">
        <HeroInformacion />
        <QueEsSection />
        <DesafioSection />
        <SistemaHCDSection />
        {/* OCULTO TEMPORALMENTE - Sección Botón de Pánico
        <BotonPanicoSection />
        */}
        <BeneficiosInstitucionesSection />
        <CaracteristicasSection />
        {/* OCULTO TEMPORALMENTE - Sección de Planes
        <PlanesSection />
        */}
        <ComoFuncionaSection />
        <SeguridadSection />
        <FAQSection />
        <CTAFinalSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
