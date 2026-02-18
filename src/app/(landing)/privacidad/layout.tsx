import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conocé cómo Himalaya Salud protege tu información personal y de salud. Nuestra política de privacidad detalla el tratamiento seguro de tus datos médicos.",
  openGraph: {
    title: "Política de Privacidad | Himalaya Salud",
    description:
      "Conocé cómo Himalaya Salud protege tu información personal y de salud.",
  },
  alternates: {
    canonical: "https://www.himalayasalud.com.ar/privacidad",
  },
};

export default function PrivacidadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
