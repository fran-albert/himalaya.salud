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

import type { FaqCategory } from "./faq-data";

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

export function FaqContent({ categories }: { categories: FaqCategory[] }) {
  const [searchQuery, setSearchQuery] = useState("");

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
