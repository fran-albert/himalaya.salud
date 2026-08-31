import type { Metadata } from "next";
import { EnlacesHub } from "./enlaces-hub";

const description =
  "Descargá la app y encontrá todos los canales oficiales de Himalaya Salud en un solo lugar: App Store, Google Play, WhatsApp, correo y redes.";

export const metadata: Metadata = {
  title: "Enlaces",
  description,
  alternates: {
    canonical: "/enlaces",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/enlaces",
    siteName: "Himalaya Salud",
    title: "Himalaya Salud — Enlaces oficiales",
    description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Himalaya Salud",
      },
    ],
  },
};

export default function EnlacesPage() {
  return <EnlacesHub />;
}
