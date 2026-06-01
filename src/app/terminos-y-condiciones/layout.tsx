import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Lee los términos y condiciones de uso de Himalaya Salud. Información sobre el servicio de historia clínica digital, suscripciones y responsabilidades.",
  openGraph: {
    title: "Términos y Condiciones | Himalaya Salud",
    description:
      "Lee los términos y condiciones de uso de Himalaya Salud.",
  },
  alternates: {
    canonical: "https://www.himalayasalud.com.ar/terminos-y-condiciones",
  },
};

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
