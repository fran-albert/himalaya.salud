"use client";

import { useEffect, useState } from "react";
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
    id: "pacientes",
    key: "pacientes",
    name: "Pacientes",
    sort_order: 10,
    status: "active",
    faqs: [
      {
        id: "periodo-prueba",
        question: "¿Cómo funciona el periodo de prueba de 30 días?",
        answer:
          "Al registrarte en el Plan Estándar, accedés a las funcionalidades principales durante el primer mes. Las condiciones finales del plan se informan al momento de la contratación.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "boton-emergencia",
        question: "¿Qué sucede cuando uso el Botón de Pánico?",
        answer:
          "El botón permite actuar rápido y avisar a contactos de emergencia configurados. También ayuda a tener a mano información médica relevante. No reemplaza a los servicios de emergencia locales.",
        sort_order: 20,
        status: "published",
      },
    ],
  },
  {
    id: "instituciones",
    key: "instituciones",
    name: "Instituciones",
    sort_order: 20,
    status: "active",
    faqs: [
      {
        id: "demo",
        question: "¿Cómo solicito una demo del sistema?",
        answer:
          "Podés hacerlo desde la página de contacto. Un asesor se comunicará para coordinar una presentación y relevar las necesidades de tu institución.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "whatsapp",
        question: "¿Qué se puede comunicar por WhatsApp?",
        answer:
          "La plataforma puede contemplar recordatorios de turnos, confirmaciones, avisos de estudios disponibles y mensajes operativos al paciente, según la configuración de cada institución.",
        sort_order: 20,
        status: "published",
      },
    ],
  },
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
  const [categories, setCategories] = useState<FaqCategory[]>(fallbackCategories);
  const [isLoading, setIsLoading] = useState(true);
  const [hasRemoteError, setHasRemoteError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadFaqs() {
      try {
        const response = await fetch("/api/faqs");
        if (!response.ok) throw new Error("FAQ request failed");

        const payload = (await response.json()) as { data?: FaqCategory[] };
        const normalized = normalizeCategories(Array.isArray(payload.data) ? payload.data : []);

        if (isMounted && normalized.length > 0) {
          setCategories(normalized);
          setHasRemoteError(false);
        }
      } catch {
        if (isMounted) {
          setCategories(normalizeCategories(fallbackCategories));
          setHasRemoteError(true);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadFaqs();
    return () => {
      isMounted = false;
    };
  }, []);

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
              Centro de ayuda
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: BRAND.teal700 }}
            >
              Preguntas frecuentes
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: BRAND.textBody }}
            >
              Todo lo que necesitás saber sobre Himalaya Salud, para pacientes e instituciones.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5" style={{ color: BRAND.textCaption }} />
            </div>
            <input
              type="text"
              placeholder="Buscá tu duda (ej: botón de pánico, demo...)"
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
            {isLoading && (
              <p className="text-center text-sm" style={{ color: BRAND.textCaption }}>
                Cargando preguntas frecuentes...
              </p>
            )}

            {!isLoading && hasRemoteError && (
              <p
                className="px-4 py-3 text-sm"
                style={{
                  color: BRAND.textCaption,
                  backgroundColor: BRAND.bgSecondary,
                  border: `1px solid ${BRAND.teal50}`,
                  borderRadius: "8px",
                }}
              >
                Estamos mostrando preguntas frecuentes base. El contenido dinámico se cargará cuando el servicio esté disponible.
              </p>
            )}

            {!isLoading && visibleCategories.length === 0 && (
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
            <h3 className="text-2xl md:text-3xl font-bold mb-3">¿Todavía tenés dudas?</h3>
            <p className="text-base md:text-lg opacity-90 mb-7 max-w-xl mx-auto">
              Si no encontraste lo que buscabas, nuestro equipo está listo para ayudarte personalmente.
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
              Contactar ahora
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
