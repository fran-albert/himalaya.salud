"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";
import {
  FileText,
  ScrollText,
  UserCog,
  CreditCard,
  Copyright,
  AlertTriangle,
  Scale,
  Mail,
  Siren,
} from "lucide-react";

const supportEmail = "soporte@himalayasalud.com.ar";

const sections = [
  {
    id: "aceptacion",
    icon: ScrollText,
    title: "1. Aceptación de los términos",
    content: `Al descargar, acceder o utilizar la aplicación Himalaya Salud (la "App"), aceptás estar sujeto a los presentes Términos y Condiciones ("Términos"). Si no estás de acuerdo con estos Términos, no uses la App.`,
  },
  {
    id: "descripcion",
    icon: FileText,
    title: "2. Descripción del servicio",
    content: `Himalaya Salud es una plataforma que ofrece tres funcionalidades principales:`,
    list: [
      {
        title: "Botón de Pánico",
        desc: "Sistema de alerta de emergencia que envía tu ubicación GPS, una llamada automática y un SMS a tus contactos configurados.",
      },
      {
        title: "Servicios de Salud",
        desc: "Búsqueda de profesionales de la salud por especialidad, obra social y cercanía, así como farmacias, hospitales y ambulancias cercanas.",
      },
      {
        title: "Portal Paciente",
        desc: "Espacio personal para subir, organizar y consultar tus estudios médicos (PDF, imágenes) con etiquetas.",
      },
    ],
  },
  {
    id: "planes",
    icon: CreditCard,
    title: "3. Planes y pagos",
    content: `El acceso a la App requiere una suscripción activa. Se ofrecen dos planes:`,
    list: [
      {
        title: "Plan Botón de Pánico ($3.000/mes)",
        desc: "Incluye el sistema de alerta de emergencia con GPS, llamada y SMS a hasta 5 contactos.",
      },
      {
        title: "Plan Estándar ($7.000/mes)",
        desc: "Incluye todo lo del Plan Botón de Pánico, más búsqueda de profesionales, farmacias e instituciones, y Portal Paciente.",
      },
    ],
    extra: "Los pagos son procesados a través de Mercado Pago. Himalaya Salud no almacena datos de tarjeta. Podés cancelar tu suscripción en cualquier momento desde la App. El primer mes de cualquier plan es gratuito.",
  },
  {
    id: "responsabilidades",
    icon: UserCog,
    title: "4. Responsabilidades del usuario",
    content: `Como usuario, sos responsable de:`,
    list: [
      { desc: "Mantener la confidencialidad de las credenciales de tu cuenta." },
      { desc: "La veracidad y exactitud de la información que cargás en la App." },
      { desc: "Verificar que los datos de tus contactos de emergencia estén actualizados." },
      { desc: "Usar la App de manera lícita y conforme a estos Términos." },
    ],
  },
  {
    id: "emergencias",
    icon: Siren,
    title: "5. Botón de Pánico y emergencias",
    content: `El Botón de Pánico es una herramienta de alerta que notifica a tus contactos de emergencia. No reemplaza a los servicios de emergencia oficiales (107, 911). En caso de una emergencia médica grave, llamá siempre a los servicios de emergencia locales además de usar el Botón de Pánico. Himalaya Salud no garantiza la disponibilidad ininterrumpida del servicio de alertas ni la respuesta de los contactos notificados.`,
  },
  {
    id: "propiedad",
    icon: Copyright,
    title: "6. Propiedad intelectual",
    content: `Himalaya Salud S.A.S. es el propietario exclusivo de la App, el software, el diseño, los logotipos y todo el material relacionado. Se te concede una licencia limitada, no exclusiva y no transferible para usar la App para fines personales y no comerciales, sujeta a estos Términos.`,
  },
  {
    id: "limitacion",
    icon: AlertTriangle,
    title: "7. Limitación de responsabilidad",
    content: `Himalaya Salud S.A.S. no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la incapacidad de usar la App. No garantizamos que el servicio sea ininterrumpido o libre de errores. La información de profesionales de la salud que aparece en Servicios de Salud es provista por los propios profesionales y Himalaya Salud no se hace responsable por su exactitud o vigencia.`,
  },
  {
    id: "ley",
    icon: Scale,
    title: "8. Ley aplicable",
    content: `Estos Términos se rigen por las leyes de la República Argentina. Cualquier controversia será sometida a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires.`,
  },
  {
    id: "contacto",
    icon: Mail,
    title: "9. Contacto",
    content: `Si tenés alguna pregunta sobre estos Términos y Condiciones, podés contactarnos.`,
    email: supportEmail,
  },
];

export default function TermsPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(
        ".terms-hero",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        ".terms-section",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="terms-hero max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <FileText className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">
                Documento legal
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Términos y{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Condiciones
              </span>
            </h1>

            <p className="text-lg text-muted-foreground">
              Última actualización: 18 de Febrero de 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section) => (
              <Card
                key={section.id}
                id={section.id}
                className="terms-section border-0 shadow-lg bg-gradient-to-br from-card to-card/80 overflow-hidden"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>

                      {section.list && (
                        <ul className="mt-4 space-y-3">
                          {section.list.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              <span>
                                {"title" in item && item.title && (
                                  <strong className="text-foreground">
                                    {item.title}:{" "}
                                  </strong>
                                )}
                                {item.desc}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {"extra" in section && section.extra && (
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                          {section.extra}
                        </p>
                      )}

                      {section.email && (
                        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10">
                          <Mail className="w-4 h-4 text-accent" />
                          <a
                            href={`mailto:${section.email}`}
                            className="font-medium text-accent hover:underline"
                          >
                            {section.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
