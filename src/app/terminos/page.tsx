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
} from "lucide-react";

const supportEmail = "soporte@himalayasalud.com.ar";

const sections = [
  {
    id: "aceptacion",
    icon: ScrollText,
    title: "1. Aceptación de los Términos",
    content: `Al descargar, acceder o utilizar la aplicación de Historia Clínica Digital de Himalaya Salud S.A.S. (la "App"), usted acepta estar sujeto a los presentes Términos y Condiciones ("Términos"). Si no está de acuerdo con estos Términos, no utilice la App.`,
  },
  {
    id: "descripcion",
    icon: FileText,
    title: "2. Descripción del Servicio",
    content: `La App es una plataforma de software que permite a los usuarios almacenar, gestionar y compartir su información de salud personal ("Historia Clínica Digital"). El servicio se proporciona "tal cual" y está destinado a ser una herramienta de apoyo para el cuidado de la salud, no un sustituto del consejo médico profesional.`,
  },
  {
    id: "responsabilidades",
    icon: UserCog,
    title: "3. Responsabilidades del Usuario",
    content: `Usted es responsable de:`,
    list: [
      { desc: "Mantener la confidencialidad de las credenciales de su cuenta." },
      { desc: "La veracidad y exactitud de la información que carga en la App." },
      { desc: "Utilizar la App de manera lícita y de acuerdo con las indicaciones de sus profesionales de la salud." },
      { desc: "No utilizar la App para fines de emergencia médica. En caso de una emergencia, contacte a los servicios de emergencia locales." },
    ],
  },
  {
    id: "suscripciones",
    icon: CreditCard,
    title: "4. Suscripciones y Pagos",
    content: `El acceso a las funcionalidades de la App requiere una suscripción activa. Las suscripciones se facturan de forma recurrente (mensual o anual) y se gestionan exclusivamente a través de la App Store (Apple) o Play Store (Google). Usted puede cancelar su suscripción en cualquier momento desde la configuración de su cuenta en la tienda de aplicaciones correspondiente.`,
  },
  {
    id: "propiedad",
    icon: Copyright,
    title: "5. Propiedad Intelectual",
    content: `Himalaya Salud S.A.S. es el propietario exclusivo de la App, el software, el diseño, los logotipos y todo el material relacionado. Se le concede una licencia limitada, no exclusiva y no transferible para usar la App para fines personales y no comerciales, sujeta a estos Términos.`,
  },
  {
    id: "limitacion",
    icon: AlertTriangle,
    title: "6. Limitación de Responsabilidad",
    content: `Himalaya Salud S.A.S. no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la incapacidad de usar la App. No garantizamos que el servicio sea ininterrumpido o libre de errores.`,
  },
  {
    id: "ley",
    icon: Scale,
    title: "7. Ley Aplicable",
    content: `Estos Términos se regirán e interpretarán de acuerdo con las leyes de la República Argentina, sin tener en cuenta sus conflictos de disposiciones legales.`,
  },
  {
    id: "contacto",
    icon: Mail,
    title: "8. Contacto",
    content: `Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos.`,
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
              Última actualización: 22 de Diciembre de 2025
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
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
                              <span>{item.desc}</span>
                            </li>
                          ))}
                        </ul>
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
