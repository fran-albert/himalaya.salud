import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { RouteChrome } from "@/components/route-chrome";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/lib/query-provider";
import { AuthProvider } from "@/lib/auth";
import { Toaster } from "@/components/ui/sonner";
import { OrganizationJsonLd, SoftwareApplicationJsonLd } from "@/components/json-ld";
import "./globals.css";
import "./website.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const leelawadee = localFont({
  src: "../../public/fonts/Leelawadee-UI-Bold.ttf",
  weight: "700",
  variable: "--font-leelawadee",
  display: "swap",
});

const siteUrl = "https://www.himalayasalud.com.ar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0C606E",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Himalaya Salud · Tu red de confianza, en una app",
    template: "%s | Himalaya Salud",
  },
  description:
    "Avisá a tus contactos con el Botón de Pánico de Himalaya Salud. Conocé los planes, contratá desde la web y empezá a usar la app con tu misma cuenta.",
  keywords: ["Himalaya Salud", "botón de pánico", "contactos de emergencia", "salud digital", "Argentina"],
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
    title: "Himalaya Salud · Tu red de confianza, en una app",
    description:
      "Conocé el Botón de Pánico, elegí tu plan y empezá a usar Himalaya Salud con tu misma cuenta.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Himalaya Salud · Tu salud en tus manos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himalaya Salud · Tu red de confianza, en una app",
    description:
      "Avisá a tus contactos, conocé los planes y empezá a usar Himalaya Salud.",
    images: ["/opengraph-image"],
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
    <html lang="es" className={`${inter.variable} ${leelawadee.variable} ${inter.className}`} suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        <SoftwareApplicationJsonLd />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          disableTransitionOnChange
        >
          <QueryProvider>
            <AuthProvider>
              <RouteChrome>{children}</RouteChrome>
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
