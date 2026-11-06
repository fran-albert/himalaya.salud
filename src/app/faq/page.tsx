"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, HelpCircle, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BRAND, SHADOW } from "@/lib/brand-tokens";

type Faq = {
  id: string;
  question: string;
  answer: string;
  sort_order: number;
  status: string;
};

type FaqCategory = {
  id: string;
  key: string;
  name: string;
  sort_order: number;
  status: string;
  faqs: Faq[];
};

const fallbackCategories: FaqCategory[] = [
  {
    "id": "empresas",
    "key": "empresas",
    "name": "Para empresas",
    "sort_order": 10,
    "status": "active",
    "faqs": [
      {
        "id": "business-benefit",
        "question": "¿Qué es SOS Protegete para empresas?",
        "answer": "Es un beneficio que tu empresa contrata para su gente. Cada persona tiene una app con un botón SOS para avisar a sus contactos de confianza y herramientas para guardar su información de salud en su propio teléfono. La empresa contrata y administra el beneficio; cada empleado usa su cuenta personal.",
        "sort_order": 10,
        "status": "published"
      },
      {
        "id": "business-employees-pay",
        "question": "¿El empleado tiene que pagar o contratar algo?",
        "answer": "No. El servicio lo contrata la empresa. El empleado recibe su invitación, instala SOS Protegete desde la tienda de su teléfono y activa el beneficio. No necesita comprar una suscripción ni cargar un medio de pago en la app.",
        "sort_order": 20,
        "status": "published"
      },
      {
        "id": "business-rollout",
        "question": "¿Cómo empezamos a usarlo en la empresa?",
        "answer": "Coordinamos la contratación y la carga de la nómina. Desde Gestión se envían las invitaciones. Cada empleado abre su enlace, instala la app y activa su cuenta; después agrega sus contactos de emergencia y les pide que acepten. La descarga por sí sola no activa el beneficio.",
        "sort_order": 30,
        "status": "published"
      },
      {
        "id": "business-devices",
        "question": "¿Hay que entregar un dispositivo o instalar equipos?",
        "answer": "Cada empleado usa SOS Protegete en un teléfono compatible, Android o iPhone. La app está disponible en las tiendas de Argentina. Para activar el SOS necesita conexión a internet; para incluir dónde está, debe permitir el acceso a la ubicación y el teléfono debe poder obtenerla.",
        "sort_order": 40,
        "status": "published"
      },
      {
        "id": "business-sos",
        "question": "¿A quién avisa el SOS de un empleado?",
        "answer": "A los contactos que el empleado elige y que aceptaron su invitación: hasta tres reciben llamada y WhatsApp y otros tres reciben sólo WhatsApp. El aviso incluye su ubicación al activar, si está disponible. La empresa no recibe alertas automáticamente por contratar el beneficio.",
        "sort_order": 50,
        "status": "published"
      },
      {
        "id": "business-privacy",
        "question": "¿Qué información de los empleados puede ver la empresa?",
        "answer": "La empresa administra la nómina, las invitaciones y el estado del beneficio. No recibe la ficha de salud, estudios, mediciones, contactos de emergencia ni la ubicación y el detalle de las activaciones SOS. La información de salud queda en el teléfono de cada empleado.",
        "sort_order": 60,
        "status": "published"
      },
      {
        "id": "business-emergency-scope",
        "question": "¿Incluye atención médica o envío de ambulancias?",
        "answer": "No. SOS Protegete intenta avisar a los contactos elegidos por cada empleado; no presta atención médica ni despacha ambulancias. Tampoco garantiza que un contacto responda o llegue. Ante una emergencia debe llamarse al servicio de emergencias de la localidad.",
        "sort_order": 70,
        "status": "published"
      },
      {
        "id": "business-support",
        "question": "¿Quién ayuda a los empleados si tienen un problema con la app?",
        "answer": "El equipo de Himalaya atiende por WhatsApp al +54 9 341 242-9819 y por correo en contacto@himalayasalud.com.ar, de lunes a viernes de 8 a 16, hora argentina. Desde la app pueden abrir Ayuda y soporte. Este canal resuelve dudas de uso; no es una central de emergencias.",
        "sort_order": 80,
        "status": "published"
      },
      {
        "id": "business-contract",
        "question": "¿Cómo contrato SOS Protegete para mi empresa?",
        "answer": "Escribinos desde Contacto o a contacto@himalayasalud.com.ar con la cantidad aproximada de personas. Te preparamos una propuesta y coordinamos el alta de la empresa, la nómina y las invitaciones. Cada persona instala la app y activa su propia cuenta.",
        "sort_order": 90,
        "status": "published"
      },
      {
        "id": "business-roster",
        "question": "¿Qué datos necesita la nómina para invitar a mi gente?",
        "answer": "Nombre, apellido, DNI y correo; para enviar la invitación por WhatsApp también necesitamos el celular correcto. Verificá esos datos antes de la carga y usá el canal acordado para la nómina. Dar de alta a una persona y enviarle la invitación son pasos distintos.",
        "sort_order": 100,
        "status": "published"
      },
      {
        "id": "business-price",
        "question": "¿Cómo se cobra y qué incluye el beneficio empresarial?",
        "answer": "La propuesta indica el precio, la cantidad de personas, las funciones, el cupo SOS, la vigencia y las condiciones de facturación. El empleado no compra ni paga un plan dentro de la app. Consultanos para definir el alcance de tu empresa.",
        "sort_order": 110,
        "status": "published"
      },
      {
        "id": "business-adoption",
        "question": "¿Cómo sé si las personas activaron la app?",
        "answer": "Desde Gestión podés consultar el estado de las invitaciones y del beneficio de cada persona. Una invitación enviada no significa que la cuenta esté activada. Cada usuario debe completar el alta y preparar sus contactos de emergencia desde la app.",
        "sort_order": 120,
        "status": "published"
      }
    ]
  }
];

function normalizeCategories(categories: FaqCategory[]) {
  return categories
    .filter((category) => category.status === "active")
    .map((category) => ({
      ...category,
      faqs: (category.faqs ?? [])
        .filter((faq) => faq.status === "published")
        .sort((a, b) => a.sort_order - b.sort_order),
    }))
    .filter((category) => category.faqs.length > 0)
    .sort((a, b) => a.sort_order - b.sort_order);
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = fallbackCategories;

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleCategories = normalizeCategories(categories)
    .map((category) => ({
      ...category,
      faqs: category.faqs.filter((faq) => {
        if (!normalizedQuery) return true;
        return (
          faq.question.toLowerCase().includes(normalizedQuery) ||
          faq.answer.toLowerCase().includes(normalizedQuery) ||
          category.name.toLowerCase().includes(normalizedQuery)
        );
      }),
    }))
    .filter((category) => category.faqs.length > 0);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.bg }}>
      <div className="container mx-auto px-4 pt-24 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-5">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: BRAND.mint900 }}
            >
              SOS Protegete para empresas
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: BRAND.teal700 }}
            >
              Preguntas frecuentes para empresas
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: BRAND.textBody }}
            >
              Conocé cómo ofrecer SOS Protegete a tu equipo: contratación, implementación, privacidad y soporte.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5" style={{ color: BRAND.textCaption }} />
            </div>
            <input
              type="text"
              placeholder="Buscá tu duda (ej: contratación, nómina, privacidad)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 text-base outline-none transition-colors"
              style={{
                backgroundColor: BRAND.bg,
                border: `1px solid ${BRAND.teal50}`,
                borderRadius: "8px",
                color: BRAND.textBody,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = BRAND.teal700;
                e.currentTarget.style.boxShadow = `0 0 0 3px ${BRAND.teal50}`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = BRAND.teal50;
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>

          <div className="space-y-10">
            {visibleCategories.length === 0 && (
              <p className="text-center text-sm" style={{ color: BRAND.textCaption }}>
                No encontramos preguntas frecuentes que coincidan con tu búsqueda.
              </p>
            )}

            {visibleCategories.map((category) => (
              <section key={category.id}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{
                      backgroundColor: BRAND.teal50,
                      color: BRAND.teal700,
                      borderRadius: "12px",
                    }}
                  >
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h2
                      className="text-xl md:text-2xl font-bold tracking-tight"
                      style={{ color: BRAND.teal700 }}
                    >
                      {category.name}
                    </h2>
                    <p className="text-xs" style={{ color: BRAND.textCaption }}>
                      {category.faqs.length} {category.faqs.length === 1 ? "pregunta" : "preguntas"}
                    </p>
                  </div>
                </div>

                <Accordion type="single" collapsible className="space-y-3">
                  {category.faqs.map((faq) => (
                    <AccordionItem
                      key={faq.id}
                      value={faq.id}
                      className="border-none px-5"
                      style={{
                        backgroundColor: BRAND.bg,
                        border: `1px solid ${BRAND.teal50}`,
                        borderRadius: "16px",
                        boxShadow: SHADOW.card,
                      }}
                    >
                      <AccordionTrigger
                        className="text-base font-semibold py-4 hover:no-underline text-left"
                        style={{ color: BRAND.textBody }}
                      >
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent
                        className="text-base leading-relaxed pb-5"
                        style={{ color: BRAND.textBody }}
                      >
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>

          <div
            className="mt-16 p-8 md:p-12 text-center"
            style={{
              backgroundColor: BRAND.teal700,
              color: "#FFFFFF",
              borderRadius: "16px",
              boxShadow: SHADOW.cta,
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">¿Querés ofrecer SOS Protegete a tu equipo?</h3>
            <p className="text-base md:text-lg opacity-90 mb-7 max-w-xl mx-auto">
              Contanos cuántas personas querés incluir y te preparamos una propuesta para tu empresa.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center text-base font-semibold transition-all group"
              style={{
                backgroundColor: "#FFFFFF",
                color: BRAND.teal700,
                padding: "12px 22px",
                borderRadius: "8px",
              }}
            >
              Pedir una propuesta
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
