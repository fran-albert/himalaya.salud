import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "¿Tenés dudas o necesitás ayuda? Contactá al equipo de Himalaya Salud. Estamos para ayudarte con tu historia clínica digital.",
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
