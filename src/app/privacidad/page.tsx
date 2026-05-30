import {
  Shield,
  Database,
  Eye,
  Lock,
  CreditCard,
  UserCheck,
  Mail,
} from "lucide-react";
import { BRAND, SHADOW } from "@/lib/brand-tokens";

const privacyEmail = "contacto@himalayasalud.com.ar";

const sections = [
  {
    id: "compromiso",
    icon: Shield,
    title: "1. Nuestro Compromiso",
    paragraphs: [
      `En Himalaya Salud S.A.S. ("Himalaya", "nosotros"), la privacidad y seguridad de su información personal y de salud son nuestra máxima prioridad. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos sus datos cuando utiliza nuestra aplicación de Historia Clínica Digital (la "App") y nuestros servicios.`,
    ],
  },
  {
    id: "informacion",
    icon: Database,
    title: "2. Información que Recopilamos",
    paragraphs: [`Recopilamos los siguientes tipos de información:`],
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
    paragraphs: [`Utilizamos su información para:`],
    list: [
      { desc: "Proveer, mantener y mejorar nuestros servicios." },
      {
        desc: "Permitirle gestionar su historia clínica y compartirla con profesionales autorizados por usted.",
      },
      {
        desc: "Comunicarnos con usted para fines de soporte técnico y notificaciones importantes del servicio.",
      },
      {
        desc: "Cumplir con las regulaciones de salud aplicables en la República Argentina.",
      },
    ],
  },
  {
    id: "seguridad",
    icon: Lock,
    title: "4. Almacenamiento y Seguridad",
    paragraphs: [
      `Sus datos se almacenan en servidores seguros que cumplen con altos estándares de seguridad física y digital. Utilizamos encriptación de punta a punta para proteger su información en tránsito y en reposo. El acceso a los datos de salud está estrictamente restringido y auditado.`,
    ],
  },
  {
    id: "pagos",
    icon: CreditCard,
    title: "5. Gestión de Pagos",
    paragraphs: [
      `Nuestra App opera bajo un modelo de suscripción. Todas las transacciones son procesadas a través de las plataformas de pago de la App Store (Apple) y Play Store (Google). No recopilamos ni almacenamos los datos de su tarjeta de crédito. Su relación de pago es directamente con el proveedor de la tienda de aplicaciones.`,
    ],
  },
  {
    id: "derechos",
    icon: UserCheck,
    title: "6. Derechos del Usuario",
    paragraphs: [
      `Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de sus datos personales. Puede ejercer estos derechos contactándonos a través de los canales de soporte.`,
    ],
  },
  {
    id: "contacto",
    icon: Mail,
    title: "7. Contacto",
    paragraphs: [
      `Si tiene alguna pregunta sobre esta Política de Privacidad o el tratamiento de sus datos, puede contactarnos a través del correo electrónico o de los canales de atención al cliente.`,
    ],
    email: privacyEmail,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.bg }}>
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase"
            style={{ letterSpacing: "1.8px", color: BRAND.mint900 }}
          >
            <span
              style={{
                width: 18,
                height: 2,
                borderRadius: 2,
                backgroundColor: BRAND.mint500,
              }}
            />
            Documento legal
          </span>
          <h1
            className="mt-5 text-4xl font-extrabold sm:text-5xl"
            style={{
              color: BRAND.teal700,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Política de Privacidad
          </h1>
          <p className="mt-4 text-base" style={{ color: BRAND.textCaption }}>
            Última actualización: 22 de Diciembre de 2025
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-5">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.id}
                id={section.id}
                style={{
                  backgroundColor: BRAND.bg,
                  border: `1px solid ${BRAND.teal50}`,
                  borderRadius: 16,
                  boxShadow: SHADOW.card,
                  padding: "28px 28px",
                  scrollMarginTop: 96,
                }}
              >
                <div className="flex items-start gap-4">
                  <span
                    className="flex items-center justify-center"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      backgroundColor: BRAND.teal50,
                      color: BRAND.teal700,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} />
                  </span>
                  <div className="flex-1">
                    <h2
                      className="text-lg font-bold sm:text-xl"
                      style={{
                        color: BRAND.teal700,
                        letterSpacing: "-0.015em",
                      }}
                    >
                      {section.title}
                    </h2>

                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((p, i) => (
                        <p
                          key={i}
                          className="text-sm leading-relaxed"
                          style={{ color: BRAND.textBody }}
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {section.list && (
                      <ul className="mt-4 space-y-2.5">
                        {section.list.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm"
                            style={{ color: BRAND.textBody }}
                          >
                            <span
                              className="mt-2 flex-shrink-0"
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                backgroundColor: BRAND.mint700,
                              }}
                            />
                            <span>
                              {"title" in item && item.title && (
                                <strong style={{ color: BRAND.teal700 }}>
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
                      <a
                        href={`mailto:${section.email}`}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                        style={{
                          backgroundColor: BRAND.mint50,
                          color: BRAND.mint900,
                          padding: "10px 16px",
                          borderRadius: 8,
                        }}
                      >
                        <Mail size={16} />
                        {section.email}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
