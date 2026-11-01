import type { Metadata } from "next";
import { EnlacesHub } from "./enlaces-hub";

const description =
  "Descargá SOS Protegete y encontrá todos los canales oficiales de Himalaya Salud en un solo lugar: App Store, Google Play, WhatsApp, correo y redes.";

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
    siteName: "SOS Protegete",
    title: "SOS Protegete — Enlaces oficiales",
    description,
    images: [
      {
        url: "/branding/sos-protegete/og-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "SOS Protegete",
      },
    ],
  },
};

export default function EnlacesPage() {
  return <EnlacesHub />;
}
