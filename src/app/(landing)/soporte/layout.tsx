import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soporte y Contacto",
  description:
    "¿Tenés dudas o necesitás ayuda? Contactá al equipo de soporte de Himalaya Salud. Estamos para ayudarte con tu historia clínica digital.",
  openGraph: {
    title: "Soporte y Contacto | Himalaya Salud",
    description:
      "Contactá al equipo de soporte de Himalaya Salud. Estamos para ayudarte.",
  },
  alternates: {
    canonical: "https://www.himalayasalud.com.ar/soporte",
  },
};

export default function SoporteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
