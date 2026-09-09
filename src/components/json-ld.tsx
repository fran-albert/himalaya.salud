import { appStoreUrl, googlePlayUrl } from "@/lib/social-links";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Himalaya Salud S.A.S.",
    url: "https://www.himalayasalud.com.ar",
    logo: "https://www.himalayasalud.com.ar/logo-himalaya-salud.svg",
    description:
      "Himalaya Salud desarrolla software de salud y prevención para personas y empresas.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contacto@himalayasalud.com.ar",
      contactType: "customer service",
      availableLanguage: ["Spanish"],
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Himalaya Salud",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    description:
      "Aplicación con Botón de Pánico para avisar a contactos y herramientas de información de salud disponibles según el plan.",
    installUrl: googlePlayUrl,
    sameAs: [appStoreUrl, googlePlayUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebPageJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: "Himalaya Salud",
      url: "https://www.himalayasalud.com.ar",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
