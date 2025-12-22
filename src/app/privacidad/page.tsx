"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { Card, CardContent } from "@/components/ui/card";

import {
  Shield,
  Lock,
  Database,
  CreditCard,
  UserCheck,
  Mail,
  Eye,
  FileText,
} from "lucide-react";

const privacyEmail = "privacidad@himalayasalud.com.ar";

const sections = [
  {
    id: "compromiso",
    icon: Shield,
    title: "1. Nuestro Compromiso",
    content: `En Himalaya Salud S.A.S. ("Himalaya", "nosotros"), la privacidad y seguridad de su información personal y de salud son nuestra máxima prioridad. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos sus datos cuando utiliza nuestra aplicación de Historia Clínica Digital (la "App") y nuestros servicios.`,
  },
  {
    id: "informacion",
    icon: Database,
    title: "2. Información que Recopilamos",
    content: `Recopilamos los siguientes tipos de información:`,
    list: [
      {
        title: "Datos de Identificación Personal",
        desc: "Nombre, apellido, fecha de nacimiento, DNI, dirección de correo electrónico y número de teléfono.",
      },
      {
        title: "Datos de Salud",
        desc: "Información que usted o sus profesionales de la salud cargan en la App, como historial médico, diagnósticos, tratamientos, resultados de laboratorio, medicación y notas clínicas.",
      },
      {
        title: "Datos de Uso",
        desc: "Información sobre cómo interactúa con nuestra App, como fechas y horas de acceso, funciones utilizadas y reportes de errores.",
      },
    ],
  },
  {
    id: "finalidad",
    icon: Eye,
    title: "3. Finalidad del Tratamiento",
    content: `Utilizamos su información para:`,
    list: [
      { desc: "Proveer, mantener y mejorar nuestros servicios." },
      { desc: "Permitirle gestionar su historia clínica y compartirla con profesionales autorizados por usted." },
      { desc: "Comunicarnos con usted para fines de soporte técnico y notificaciones importantes del servicio." },
      { desc: "Cumplir con las regulaciones de salud aplicables en la República Argentina." },
    ],
  },
  {
    id: "seguridad",
    icon: Lock,
    title: "4. Almacenamiento y Seguridad",
    content: `Sus datos se almacenan en servidores seguros que cumplen con altos estándares de seguridad física y digital. Utilizamos encriptación de punta a punta para proteger su información en tránsito y en reposo. El acceso a los datos de salud está estrictamente restringido y auditado.`,
  },
  {
    id: "pagos",
    icon: CreditCard,
    title: "5. Gestión de Pagos",
    content: `Nuestra App opera bajo un modelo de suscripción. Todas las transacciones son procesadas a través de las plataformas de pago de la App Store (Apple) y Play Store (Google). No recopilamos ni almacenamos los datos de su tarjeta de crédito. Su relación de pago es directamente con el proveedor de la tienda de aplicaciones.`,
  },
  {
    id: "derechos",
    icon: UserCheck,
    title: "6. Derechos del Usuario",
    content: `Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Puede ejercer estos derechos contactándonos a través de los canales de soporte.`,
  },
  {
    id: "contacto",
    icon: Mail,
    title: "7. Contacto",
    content: `Si tiene alguna pregunta sobre esta Política de Privacidad o el tratamiento de sus datos, puede contactarnos.`,
    email: privacyEmail,
  },
];

export default function PrivacyPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.fromTo(
        ".privacy-hero",
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      gsap.fromTo(
        ".privacy-section",
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="privacy-hero max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Tu privacidad es nuestra prioridad
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Política de{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Privacidad
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
                className="privacy-section border-0 shadow-lg bg-gradient-to-br from-card to-card/80 overflow-hidden"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-primary" />
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
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
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

                      {section.email && (
                        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10">
                          <Mail className="w-4 h-4 text-primary" />
                          <a
                            href={`mailto:${section.email}`}
                            className="font-medium text-primary hover:underline"
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
