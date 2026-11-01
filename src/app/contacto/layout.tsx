import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tenés dudas sobre SOS Protegete o querés ofrecerlo en tu empresa? Escribile al equipo de Himalaya Salud.",
  openGraph: {
    title: "Contacto | SOS Protegete",
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
