import type React from "react";
import type { Metadata } from "next";
import { Work_Sans, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/lib/query-provider";
import { AuthProvider } from "@/lib/auth";
import { OrganizationJsonLd, SoftwareApplicationJsonLd } from "@/components/json-ld";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const siteUrl = "https://www.himalayasalud.com.ar";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Himalaya Salud - Médicos, farmacias y emergencias en tu celular",
    template: "%s | Himalaya Salud",
  },
  description:
    "Encontrá médicos, farmacias y hospitales cerca tuyo. Subí tus estudios médicos y tenelos siempre a mano. Botón de pánico con GPS para emergencias. Desde $3.000/mes.",
  keywords: [
    "buscar médicos cerca",
    "farmacias cercanas",
    "app de salud Argentina",
    "botón de pánico",
    "emergencias médicas",
    "estudios médicos digitales",
    "salud digital",
    "app médica",
    "Argentina",
    "servicios de salud",
  ],
  authors: [{ name: "Himalaya Salud S.A.S." }],
  creator: "Himalaya Salud S.A.S.",
  publisher: "Himalaya Salud S.A.S.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-himalaya-salud.svg",
    shortcut: "/logo-himalaya-salud.svg",
    apple: "/logo-himalaya-salud.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Himalaya Salud",
    title: "Himalaya Salud - Médicos, farmacias y emergencias en tu celular",
    description:
      "Encontrá médicos, farmacias y hospitales cerca tuyo. Botón de pánico con GPS para emergencias. Desde $3.000/mes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Himalaya Salud - Historia Clínica Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalaya Salud - Médicos, farmacias y emergencias en tu celular",
    description:
      "Encontrá médicos, farmacias y hospitales cerca tuyo. Botón de pánico con GPS para emergencias. Desde $3.000/mes.",
    images: ["/og-image.png"],
  },
  verification: {
    // google: "tu-codigo-de-verificacion-google",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${workSans.variable} ${openSans.variable}`} suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <SoftwareApplicationJsonLd />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <AuthProvider>
              <div className="relative flex min-h-screen flex-col">
                {children}
              </div>
              <Toaster position="top-right" />
            </AuthProvider>
          </QueryProvider>
        </ThemeProvider>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
