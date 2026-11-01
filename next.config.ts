import type { NextConfig } from "next";

const APP_SITE_URL =
  process.env.NEXT_PUBLIC_APP_SITE_URL || "https://app.himalayasalud.com.ar";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legales: viven en la plataforma de SOS Protegete (lector público de Gestión).
      ...["/terminos", "/terminos-y-condiciones"].map((source) => ({
        source,
        destination: `${APP_SITE_URL}/legales/terminos`,
        permanent: true,
      })),
      ...["/privacidad", "/politica-de-privacidad"].map((source) => ({
        source,
        destination: `${APP_SITE_URL}/legales/privacidad`,
        permanent: true,
      })),
      // Páginas de la etapa de historia clínica, ya retiradas.
      { source: "/informacion", destination: "/", permanent: true },
      { source: "/plan-estandar", destination: "/#empresas", permanent: true },
      { source: "/plan-estandar/contacto", destination: "/contacto", permanent: true },
    ];
  },
};

export default nextConfig;
