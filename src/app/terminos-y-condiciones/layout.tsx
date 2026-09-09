import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Conocé las condiciones de uso de Himalaya Salud, la contratación de planes y las responsabilidades al utilizar la app.",
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true },
  },
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
