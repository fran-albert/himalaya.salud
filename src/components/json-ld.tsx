export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Himalaya Salud S.A.S.",
    url: "https://www.himalayasalud.com.ar",
    logo: "https://www.himalayasalud.com.ar/logo-himalaya-salud.svg",
    description:
      "Himalaya Salud ofrece soluciones de software para la gestión de salud digital, incluyendo historia clínica digital segura e interoperable.",
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
      "Aplicación de historia clínica digital que permite gestionar y compartir información médica de forma segura.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "ARS",
      description: "Descarga gratuita con suscripción premium disponible",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "100",
    },
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
