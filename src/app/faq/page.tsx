import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FaqList } from "@/components/faq-list";
import { HelpBlock } from "@/components/site-ui";
import { loadFaqs } from "@/lib/faq-service";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Respuestas sobre los planes, pagos, cuenta, beneficio empresarial y uso de Himalaya Salud.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Preguntas frecuentes | Himalaya Salud",
    url: "/faq",
    description:
      "Todo para empezar: cuenta, planes, pagos y beneficio empresarial.",
  },
};
export const revalidate = 300;
export default async function FaqPage() {
  const { data } = await loadFaqs({
    endpoint:
      process.env.FAQ_SOURCE === "remote" ? process.env.FAQ_API_URL : undefined,
    token: process.env.FAQ_API_TOKEN,
  });
  return (
    <div className="h-page">
      <div className="h-container">
        <div className="h-subhero">
          <span className="h-eyebrow">Preguntas frecuentes</span>
          <h1>
            Las respuestas para
            <br />
            dar el próximo paso.
          </h1>
          <p>Planes, acceso a tu cuenta y primeros pasos en Himalaya.</p>
          <div className="h-actions" style={{ marginTop: 24 }}>
            <Link href="/primeros-pasos" className="h-text-link">
              Guía de primeros pasos <ArrowRight size={16} />
            </Link>
            <Link href="/beneficio-empresarial" className="h-text-link">
              Acceso por mi empresa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div className="h-faq-sections">
          {data.map((category) => (
            <section className="h-faq-section" key={category.id}>
              <h2>{category.name}</h2>
              <FaqList faqs={category.faqs} />
            </section>
          ))}
        </div>
        <div style={{ paddingBottom: 64 }}>
          <HelpBlock />
        </div>
      </div>
    </div>
  );
}
