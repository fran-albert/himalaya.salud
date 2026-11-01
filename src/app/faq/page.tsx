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
    id: "primeros_pasos",
    key: "primeros_pasos",
    name: "Primeros pasos",
    sort_order: 10,
    status: "active",
    faqs: [
      {
        id: "primeros_pasos-01",
        question: "¿Qué es SOS Protegete?",
        answer: "Una app con botón de pánico. Si estás en una situación grave, mantenés apretado el botón 3 segundos y la app llama y manda WhatsApp a tus contactos con tu ubicación. Además guarda en tu teléfono tu ficha de emergencia, tus estudios y tus mediciones. La desarrolla Himalaya Salud S.A.S.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "primeros_pasos-02",
        question: "¿Cómo consigo la app?",
        answer: "Hoy SOS Protegete se contrata por empresa, como beneficio para su gente. Si tu empresa te lo dio, te llega un WhatsApp con un link para activar tu beneficio: ese link te lleva a descargar la app y entrar con tu número. Si querés ofrecerla en tu empresa, pedinos una propuesta desde Contacto.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "primeros_pasos-03",
        question: "¿Qué me conviene configurar primero?",
        answer: "Tus contactos de emergencia. Sin al menos un contacto que haya aceptado la invitación, el botón no tiene a quién avisar. Después completá tu ficha de emergencia; los estudios y las mediciones los cargás cuando quieras.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "primeros_pasos-04",
        question: "¿Necesito internet para usar la app?",
        answer: "Para activar el botón sí: la app manda tu ubicación a nuestro servidor, que hace la llamada y envía los WhatsApp. Tu ficha, tus estudios y tus mediciones se abren sin conexión porque están guardados en tu teléfono.",
        sort_order: 40,
        status: "published",
      },
    ],
  },
  {
    id: "boton_de_panico",
    key: "boton_de_panico",
    name: "Botón de pánico",
    sort_order: 20,
    status: "active",
    faqs: [
      {
        id: "boton_de_panico-01",
        question: "¿Cómo activo el botón?",
        answer: "Desde Inicio, mantené presionado el botón rojo 3 segundos. El tiempo evita que se dispare sin querer en el bolsillo. Si lo soltás antes, no pasa nada.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "boton_de_panico-02",
        question: "¿Qué pasa cuando lo activo?",
        answer: "Primero la app toma tu ubicación. Después, nuestro sistema llama a tus 3 contactos principales con un mensaje grabado que les avisa que estás en una emergencia, y manda un WhatsApp a todos tus contactos con tu ubicación y un link para ver dónde estás y cómo llegar.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "boton_de_panico-03",
        question: "¿Qué recibe cada contacto?",
        answer: "Los 3 contactos principales reciben la llamada y el WhatsApp. Los demás (hasta completar 6) reciben sólo el WhatsApp. El link del mensaje abre una página con tu nombre, la hora, tu ubicación en el mapa y un botón para llamarte. No incluye datos de salud.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "boton_de_panico-04",
        question: "¿Cuántos contactos puedo cargar?",
        answer: "Hasta 6. Cada contacto recibe una invitación por WhatsApp y tiene que aceptarla. Hasta que no acepta, no recibe avisos. Podés cambiarlos cuando quieras desde la app.",
        sort_order: 40,
        status: "published",
      },
      {
        id: "boton_de_panico-05",
        question: "¿De qué número sale la llamada?",
        answer: "Siempre del mismo número de SOS Protegete. En la pantalla de Contactos SOS lo tenés a mano para mandárselo a tus contactos y que lo agenden; así, cuando suena, saben que es tu alerta y no un número desconocido.",
        sort_order: 50,
        status: "published",
      },
      {
        id: "boton_de_panico-06",
        question: "¿Y si lo apreté sin querer?",
        answer: "Desde la misma pantalla avisás que estás bien. Tus contactos reciben un segundo mensaje de falsa alarma.",
        sort_order: 60,
        status: "published",
      },
      {
        id: "boton_de_panico-07",
        question: "¿Cuántas veces por mes puedo usarlo?",
        answer: "Tu plan incluye una cantidad de avisos por mes. La ves en la pantalla de Inicio de la app, debajo del botón, y se renueva cada mes.",
        sort_order: 70,
        status: "published",
      },
      {
        id: "boton_de_panico-08",
        question: "¿Necesito dar permiso de ubicación?",
        answer: "Sí. Sin permiso de ubicación la app no puede decirles a tus contactos dónde estás. Te lo pide al configurar el SOS y podés revisarlo en los ajustes del teléfono.",
        sort_order: 80,
        status: "published",
      },
      {
        id: "boton_de_panico-09",
        question: "¿Reemplaza al 911 o a la ambulancia?",
        answer: "No. SOS Protegete avisa a tus contactos; no llama a servicios de emergencia ni envía ayuda médica. Ante una urgencia médica llamá al 911 o al 107/SAME.",
        sort_order: 90,
        status: "published",
      },
    ],
  },
  {
    id: "salud_en_tu_telefono",
    key: "salud_en_tu_telefono",
    name: "Tu salud, en tu teléfono",
    sort_order: 30,
    status: "active",
    faqs: [
      {
        id: "salud_en_tu_telefono-01",
        question: "¿Dónde se guardan mi ficha, mis estudios y mis mediciones?",
        answer: "En tu teléfono, y en ningún otro lado. Himalaya Salud no los ve ni los almacena en sus servidores. Por eso, si borrás la app o cambiás de teléfono sin exportarlos, se pierden.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "salud_en_tu_telefono-02",
        question: "¿Qué datos míos sí tiene Himalaya?",
        answer: "Los de tu cuenta: nombre, correo y celular, tus contactos de emergencia y el registro de cada activación del botón (fecha, hora y ubicación). Nada de salud.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "salud_en_tu_telefono-03",
        question: "¿Cómo comparto un estudio o mi ficha?",
        answer: "Cada archivo de un estudio tiene un botón Compartir que abre el menú de tu teléfono: WhatsApp, mail, AirDrop o guardar. La ficha de emergencia se comparte como texto o como PDF. Siempre sale desde tu teléfono, con un toque tuyo por cada envío.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "salud_en_tu_telefono-04",
        question: "Si activo el botón, ¿mis contactos ven mis datos de salud?",
        answer: "No. El aviso lleva tu ubicación y nada más. Tu ficha o tus estudios se los mandás vos, cuando quieras, desde la app.",
        sort_order: 40,
        status: "published",
      },
      {
        id: "salud_en_tu_telefono-05",
        question: "¿Qué pasa si cambio de teléfono?",
        answer: "Antes de cambiar, exportá lo que quieras conservar con Compartir (por ejemplo, mandate la ficha en PDF por mail). En el teléfono nuevo entrás con tu cuenta y volvés a tener el botón y tus contactos; la ficha, los estudios y las mediciones los cargás de nuevo.",
        sort_order: 50,
        status: "published",
      },
    ],
  },
  {
    id: "empresas",
    key: "empresas",
    name: "Para empresas",
    sort_order: 40,
    status: "active",
    faqs: [
      {
        id: "empresas-01",
        question: "¿Cómo contrata SOS Protegete una empresa?",
        answer: "Nos pasás la nómina (nombre y celular) y cada persona recibe por WhatsApp su invitación para activar la app. Se paga un único abono mensual por cantidad de personas. Pedí una propuesta desde Contacto y te la mandamos.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "empresas-02",
        question: "¿La empresa ve los datos de sus empleados?",
        answer: "No. La empresa da de alta a su gente, pero no ve los contactos, las activaciones del botón ni los datos de salud de nadie: esos quedan en el teléfono de cada persona.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "empresas-03",
        question: "¿Los contactos de emergencia los define la empresa?",
        answer: "No, los elige cada persona: su familia, su pareja, un vecino. La empresa no participa del aviso.",
        sort_order: 30,
        status: "published",
      },
      {
        id: "empresas-04",
        question: "¿Sirve para personal que trabaja solo o en la calle?",
        answer: "Es el caso para el que está pensado: viajantes, personal de campo, técnicos, choferes. Cualquiera que pase horas lejos de su familia y quiera que, si pasa algo, sepan dónde está.",
        sort_order: 40,
        status: "published",
      },
    ],
  },
  {
    id: "cuenta",
    key: "cuenta",
    name: "Tu cuenta",
    sort_order: 50,
    status: "active",
    faqs: [
      {
        id: "cuenta-01",
        question: "Olvidé mi contraseña, ¿qué hago?",
        answer: "En la pantalla de ingreso tocá «Olvidé mi contraseña» y te mandamos un mail con un link para crear una nueva. Si no lo ves, revisá la carpeta de correo no deseado.",
        sort_order: 10,
        status: "published",
      },
      {
        id: "cuenta-02",
        question: "¿Cómo elimino mi cuenta?",
        answer: "Desde la app, en Mi cuenta, o desde la página «Eliminar mi cuenta» que está al pie de este sitio. Lo que tenías guardado en el teléfono (ficha, estudios y mediciones) se elimina junto con la app.",
        sort_order: 20,
        status: "published",
      },
      {
        id: "cuenta-03",
        question: "¿Dónde leo los términos y la política de privacidad?",
        answer: "En el pie de este sitio y dentro de la app, en Mi cuenta. Cuando cambian, la app te pide que los leas y los aceptes de nuevo.",
        sort_order: 30,
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
              Lo que la gente nos pregunta sobre SOS Protegete, para usuarios y para empresas.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5" style={{ color: BRAND.textCaption }} />
            </div>
            <input
              type="text"
              placeholder="Buscá tu duda (ej: contactos, ubicación, empresa)"
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
