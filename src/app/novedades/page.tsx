import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BRAND, SHADOW } from "@/lib/brand-tokens";
import { formatNovedadMonth, novedades } from "@/lib/novedades";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Qué trae cada versión de SOS Protegete.",
  alternates: { canonical: "/novedades" },
};

export default function NovedadesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.bg }}>
      <div className="container mx-auto px-4 pt-24 pb-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-5">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: BRAND.mint900 }}
            >
              SOS Protegete
            </span>
            <h1
              className="text-4xl md:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: BRAND.teal700 }}
            >
              Novedades
            </h1>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: BRAND.textBody }}
            >
              Qué trae cada versión de la app.
            </p>
          </div>

          <ol className="space-y-5">
            {novedades.map((novedad, index) => (
              <li
                key={novedad.version}
                data-testid={`novedad-${novedad.version}`}
                className="p-6 md:p-8"
                style={{
                  backgroundColor: BRAND.bg,
                  border: `1px solid ${BRAND.teal50}`,
                  borderRadius: "16px",
                  boxShadow: SHADOW.card,
                }}
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span
                    className="text-sm font-semibold"
                    style={{
                      backgroundColor: BRAND.teal700,
                      color: "#FFFFFF",
                      padding: "4px 12px",
                      borderRadius: "999px",
                    }}
                  >
                    Versión {novedad.version}
                  </span>
                  {index === 0 && (
                    <span
                      className="text-sm font-semibold"
                      style={{
                        backgroundColor: BRAND.mint50,
                        color: BRAND.mint900,
                        padding: "4px 12px",
                        borderRadius: "999px",
                      }}
                    >
                      La más nueva
                    </span>
                  )}
                  <span className="text-sm" style={{ color: BRAND.textCaption }}>
                    {formatNovedadMonth(novedad.month)}
                  </span>
                </div>
                <h2
                  className="text-xl md:text-2xl font-bold tracking-tight mb-3"
                  style={{ color: BRAND.teal700 }}
                >
                  {novedad.title}
                </h2>
                <ul className="space-y-2 list-disc pl-5">
                  {novedad.items.map((item) => (
                    <li
                      key={item}
                      className="text-base leading-relaxed"
                      style={{ color: BRAND.textBody }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {novedad.note && (
                  <p className="text-sm mt-4" style={{ color: BRAND.textCaption }}>
                    {novedad.note}
                  </p>
                )}
              </li>
            ))}
          </ol>

          <div
            className="mt-16 p-8 md:p-12 text-center"
            style={{
              backgroundColor: BRAND.teal700,
              color: "#FFFFFF",
              borderRadius: "16px",
              boxShadow: SHADOW.cta,
            }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Tené siempre la última versión</h3>
            <p className="text-base md:text-lg opacity-90 mb-7 max-w-xl mx-auto">
              Actualizá SOS Protegete desde la tienda de tu teléfono.
            </p>
            <Link
              href="/#descargar"
              className="inline-flex items-center justify-center text-base font-semibold transition-all group"
              style={{
                backgroundColor: "#FFFFFF",
                color: BRAND.teal700,
                padding: "12px 22px",
                borderRadius: "8px",
              }}
            >
              Descargar la app
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
