"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import {
  Shield,
  Lock,
  Database,
  CreditCard,
  UserCheck,
  Mail,
  Eye,
  Scale,
  Power,
} from "lucide-react";

const contactEmail = "notificaciones@himalayasalud.com.ar";

const sections = [
  {
    id: "compromiso",
    icon: Shield,
    title: "1. Nuestro compromiso",
    content: `En Himalaya Salud S.A.S. ("Himalaya", "nosotros"), la privacidad y seguridad de tu información personal son nuestra máxima prioridad. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tus datos cuando usás nuestra aplicación Himalaya Salud (la "App") y nuestros servicios, incluyendo el Botón de Pánico, Servicios de Salud y el Portal Paciente. La App actúa como intermediario tecnológico: no almacena, conserva ni administra datos de salud. Solo procesa los datos técnicos necesarios para el funcionamiento del servicio.`,
  },
  {
    id: "informacion",
    icon: Database,
    title: "2. Información que recopilamos",
    content: `Recopilamos los siguientes tipos de información:`,
    list: [
      {
        title: "Datos de identificación personal",
        desc: "Nombre, apellido, fecha de nacimiento, DNI, email y número de teléfono.",
      },
      {
        title: "Datos biométricos de validación",
        desc: "Imagen facial y datos del DNI utilizados exclusivamente para verificar tu identidad al registrarte. No se almacenan con fines distintos a la validación.",
      },
      {
        title: "Documentos que vos subís",
        desc: "Estudios médicos, PDFs e imágenes que cargues voluntariamente en el Portal Paciente. Estos archivos son de tu exclusiva propiedad y gestión.",
      },
      {
        title: "Datos de ubicación",
        desc: "Ubicación GPS cuando activás el Botón de Pánico o cuando buscás profesionales y farmacias cercanas. Solo se accede con tu permiso explícito.",
      },
      {
        title: "Contactos de emergencia",
        desc: "Nombres y números de teléfono de tus contactos configurados en el Botón de Pánico.",
      },
      {
        title: "Datos de uso",
        desc: "Información técnica sobre cómo interactuás con la App: fechas y horas de acceso, funciones utilizadas y reportes de errores.",
      },
    ],
  },
  {
    id: "finalidad",
    icon: Eye,
    title: "3. Finalidad del tratamiento",
    content: `Utilizamos tu información exclusivamente para:`,
    list: [
      { desc: "Proveer, mantener y mejorar nuestros servicios." },
      { desc: "Validar tu identidad al momento del registro." },
      { desc: "Enviar alertas de emergencia a tus contactos cuando activás el Botón de Pánico (llamada, SMS y ubicación GPS)." },
      { desc: "Mostrar resultados de búsqueda de profesionales de la salud, farmacias e instituciones cercanas." },
      { desc: "Permitirte subir y organizar tus estudios médicos en el Portal Paciente." },
      { desc: "Comunicarnos con vos para soporte técnico y notificaciones importantes del servicio." },
      { desc: "Cumplir con las regulaciones aplicables en la República Argentina." },
    ],
    extra: "La App no utilizará imágenes ni datos sensibles del Usuario con fines comerciales. Únicamente podrá utilizarse información no sensible y no identificatoria para fines estadísticos o de mejora del servicio.",
  },
  {
    id: "seguridad",
    icon: Lock,
    title: "4. Almacenamiento y seguridad",
    content: `Tus datos se protegen con encriptación tanto en tránsito como en reposo. La App cuenta con autenticación de doble factor, registros de acceso y trazabilidad completa (quién accedió, cuándo, desde dónde). Toda la información que ingresás se encuentra protegida y encriptada. Recordá: la App no almacena datos de salud provenientes de instituciones; solo procesa datos técnicos indispensables para su funcionamiento.`,
  },
  {
    id: "pagos",
    icon: CreditCard,
    title: "5. Gestión de pagos",
    content: `La App opera bajo un modelo de suscripción mensual. Los pagos son procesados a través de Mercado Pago. No almacenamos datos de tarjeta de crédito ni débito; esa información es gestionada exclusivamente por Mercado Pago conforme a sus propias políticas de seguridad (PCI DSS).`,
  },
  {
    id: "derechos",
    icon: UserCheck,
    title: "6. Tus derechos",
    content: `Conforme a la Ley 25.326 de Protección de Datos Personales, tenés derecho a:`,
    list: [
      { desc: "Acceder a tus datos personales registrados en la App." },
      { desc: "Rectificar o actualizar información incorrecta o desactualizada." },
      { desc: "Solicitar la supresión total o parcial de tus datos." },
      { desc: "Oponerte al tratamiento de tus datos en cualquier momento." },
    ],
    extra: "Para ejercer estos derechos, enviá un correo a notificaciones@himalayasalud.com.ar. Tu solicitud será atendida en un plazo máximo de diez (10) días hábiles. Para solicitar la baja de tu cuenta y eliminación de datos, escribí a revocacion@himalayasalud.com.ar.",
  },
  {
    id: "cese",
    icon: Power,
    title: "7. Cese del servicio",
    content: `En caso de cese definitivo del servicio, Himalaya Salud procederá a eliminar en forma inmediata y permanente toda información, datos temporales y archivos generados por su funcionamiento, garantizando que no subsista ningún dato vinculado a los usuarios.`,
  },
  {
    id: "marco-legal",
    icon: Scale,
    title: "8. Marco legal",
    content: `Esta política se rige por las leyes de la República Argentina. Cualquier controversia será sometida a la jurisdicción de los tribunales ordinarios de la ciudad de Rosario, provincia de Santa Fe. En particular, se aplican:`,
    list: [
      {
        title: "Ley 25.326",
        desc: "Protección de Datos Personales. Los datos de salud son considerados datos sensibles (art. 2°). Queda prohibida la formación de archivos que almacenen datos sensibles (art. 7° inc. 3), razón por la cual la App no almacena datos de salud.",
      },
      {
        title: "Ley 26.529",
        desc: "Derechos del Paciente. Garantiza el derecho a acceder a la historia clínica y establece la confidencialidad de la información sanitaria. Las instituciones de salud son las depositarias de la HC (art. 18).",
      },
      {
        title: "Ley 25.506",
        desc: "Firma Digital. La validación biométrica al registrarte constituye firma electrónica (art. 5), vinculando tu identidad con las declaraciones y actos que realices en la App.",
      },
    ],
  },
  {
    id: "contacto",
    icon: Mail,
    title: "9. Contacto",
    content: `Si tenés alguna pregunta sobre esta Política de Privacidad o el tratamiento de tus datos, podés contactarnos.`,
    email: contactEmail,
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
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="privacy-hero max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted border border-border mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide uppercase">
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
                className="privacy-section py-8 first:pt-0"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 text-primary" />
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

                    {"extra" in section && section.extra && (
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {section.extra}
                      </p>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
