import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Consultanos por tu cuenta, tu plan o una propuesta para tu empresa. WhatsApp 341 242 9819 y contacto@himalayasalud.com.ar.",
  openGraph: {
    title: "Contacto | Himalaya Salud",
    description:
      "Contactá al equipo de Himalaya Salud. Estamos para ayudarte.",
  },
  alternates: {
    canonical: "https://www.himalayasalud.com.ar/contacto",
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
