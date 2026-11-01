import { appStoreUrl, googlePlayUrl } from "@/lib/social-links";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Himalaya Salud S.A.S.",
    url: "https://www.himalayasalud.com.ar",
    logo: "https://www.himalayasalud.com.ar/logo-himalaya-salud.svg",
    brand: { "@type": "Brand", name: "SOS Protegete" },
    description:
      "Himalaya Salud S.A.S. desarrolla SOS Protegete, una app con botón de pánico que avisa a tus contactos con tu ubicación y guarda tu ficha de emergencia, estudios y mediciones en tu teléfono.",
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
    name: "SOS Protegete",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    description:
      "Botón de pánico para vos y tu familia: con un toque llama y manda WhatsApp a tus contactos con tu ubicación. Ficha de emergencia, estudios y mediciones guardados en tu teléfono.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "ARS",
      description: "Descarga gratuita; el servicio se contrata por empresa",
    },
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
      name: "SOS Protegete · Himalaya Salud",
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
