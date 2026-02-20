"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
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
  RefreshCw,
  Fingerprint,
  LogOut,
  Ban,
} from "lucide-react";

const contactEmail = "notificaciones@himalayasalud.com.ar";

const sections = [
  {
    id: "aceptacion",
    icon: ScrollText,
    title: "1. Aceptación de los términos",
    content: `Al descargar, acceder o utilizar la aplicación Himalaya Salud (la "App"), aceptás estar sujeto a los presentes Términos y Condiciones ("Términos"). La utilización de la App implica la aceptación plena y sin reservas de estos Términos. Si no estás de acuerdo, no uses la App. Declarás ser mayor de edad y contar con la capacidad legal suficiente para celebrar el presente acuerdo.`,
  },
  {
    id: "modificaciones",
    icon: RefreshCw,
    title: "2. Modificaciones",
    content: `Himalaya Salud podrá modificar total o parcialmente los presentes Términos en cualquier momento. La versión vigente será publicada en la App y reemplazará a todas las anteriores. El uso continuado de la App será considerado como aceptación de los Términos actualizados.`,
  },
  {
    id: "descripcion",
    icon: FileText,
    title: "3. Descripción del servicio",
    content: `Himalaya Salud es una plataforma móvil que ofrece las siguientes funcionalidades:`,
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
    extra: "La App actúa como intermediario tecnológico. No almacena, conserva ni administra datos de salud; solo procesa los datos técnicos necesarios para el funcionamiento del servicio.",
  },
  {
    id: "planes",
    icon: CreditCard,
    title: "4. Planes y pagos",
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
    extra: "Los pagos son procesados a través de Mercado Pago. Himalaya Salud no almacena datos de tarjeta; esa información es gestionada exclusivamente por Mercado Pago conforme a sus políticas de seguridad (PCI DSS). Podés cancelar tu suscripción en cualquier momento desde la App. El primer mes de cualquier plan es gratuito.",
  },
  {
    id: "registro",
    icon: Fingerprint,
    title: "5. Registro y cuenta de usuario",
    content: `Para acceder a la App, debés ser mayor de edad y capaz en los términos de la legislación argentina. La App requerirá validación de identidad mediante datos de tu DNI y verificación biométrica. Sos responsable de la exactitud de la información que proporcionás; datos incorrectos o incompletos podrán dar lugar a la suspensión o cancelación de tu cuenta.`,
    extra: "Si sos padre, madre o tutor legal, podés asociar menores de edad o personas con capacidad restringida a tu cuenta, acreditando la representación legal correspondiente.",
  },
  {
    id: "responsabilidades",
    icon: UserCog,
    title: "6. Responsabilidades del usuario",
    content: `Como usuario, sos responsable de:`,
    list: [
      { desc: "Proveer información verídica, completa y actualizada." },
      { desc: "Mantener la confidencialidad de tus credenciales de acceso." },
      { desc: "Verificar que los datos de tus contactos de emergencia estén actualizados." },
      { desc: "Usar la App de manera lícita y conforme a estos Términos." },
      { desc: "Notificar inmediatamente cualquier uso no autorizado de tu cuenta." },
    ],
  },
  {
    id: "usos-prohibidos",
    icon: Ban,
    title: "7. Usos prohibidos",
    content: `Queda expresamente prohibido:`,
    list: [
      { desc: "Recopilar datos de otros usuarios con fines no autorizados." },
      { desc: "Usar la App de modo que pueda dañar, deshabilitar o sobrecargar su funcionamiento." },
      { desc: "Emplear bots, scripts o mecanismos automatizados para acceder a la App." },
      { desc: "Cargar contenido ilícito, dañino, difamatorio o que vulnere derechos de terceros." },
      { desc: "Crear más de una cuenta o registrarse con datos falsos." },
      { desc: "Modificar, descompilar o intentar eludir los sistemas de seguridad de la App." },
    ],
  },
  {
    id: "emergencias",
    icon: Siren,
    title: "8. Botón de Pánico y emergencias",
    content: `El Botón de Pánico es una herramienta de alerta que notifica a tus contactos de emergencia. No reemplaza a los servicios de emergencia oficiales (107, 911). En caso de una emergencia médica grave, llamá siempre a los servicios de emergencia locales. Himalaya Salud no garantiza la disponibilidad ininterrumpida del servicio de alertas ni la respuesta de los contactos notificados.`,
  },
  {
    id: "propiedad",
    icon: Copyright,
    title: "9. Propiedad intelectual",
    content: `Himalaya Salud S.A.S. es el propietario exclusivo de la App, el software, el diseño, los logotipos y todo el material relacionado. Se te concede una licencia limitada, no exclusiva y no transferible para usar la App para fines personales y no comerciales, sujeta a estos Términos.`,
  },
  {
    id: "limitacion",
    icon: AlertTriangle,
    title: "10. Limitación de responsabilidad",
    content: `Himalaya Salud actúa como intermediario tecnológico y no interviene en la generación ni el contenido de la información proporcionada por profesionales o instituciones de salud. No será responsable por errores, omisiones o desactualizaciones de dicha información, ni por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la incapacidad de usar la App. No garantizamos que el servicio sea ininterrumpido o libre de errores. La información contenida en la App es para fines informativos y de gestión personal, y bajo ninguna circunstancia debe ser interpretada como asesoramiento, diagnóstico o tratamiento médico.`,
  },
  {
    id: "terminacion",
    icon: LogOut,
    title: "11. Terminación de la relación",
    content: `Podés solicitar la baja de tu cuenta y la eliminación de tus datos personales en cualquier momento, enviando un correo a revocacion@himalayasalud.com.ar. La eliminación se realizará conforme a los plazos de la Ley 25.326. Himalaya Salud podrá suspender o dar de baja tu cuenta si incumplís estos Términos, por obligación legal o por razones técnicas u operativas, notificándote por los canales registrados.`,
  },
  {
    id: "ley",
    icon: Scale,
    title: "12. Ley aplicable",
    content: `Estos Términos se rigen por las leyes de la República Argentina. Cualquier controversia será sometida a la jurisdicción de los tribunales ordinarios de la ciudad de Rosario, provincia de Santa Fe, con renuncia a cualquier otro fuero o jurisdicción.`,
  },
  {
    id: "contacto",
    icon: Mail,
    title: "13. Contacto",
    content: `Si tenés alguna pregunta sobre estos Términos y Condiciones, podés contactarnos.`,
    email: contactEmail,
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
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="terms-hero max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted border border-border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
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
          <div className="max-w-4xl mx-auto divide-y divide-border">
            {sections.map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="terms-section py-8 first:pt-0"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg md:text-xl font-bold mb-3 text-foreground">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
