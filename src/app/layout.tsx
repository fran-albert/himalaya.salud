import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { RouteChrome } from "@/components/route-chrome";
import { ThemeProvider } from "@/components/theme-provider";
import { OrganizationJsonLd, SoftwareApplicationJsonLd } from "@/components/json-ld";
import "./globals.css";

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
    default: "SOS Protegete — Botón de pánico para vos y tu familia | Himalaya Salud",
    template: "%s | SOS Protegete",
  },
  description:
    "Con un toque, SOS Protegete llama y manda WhatsApp a tus contactos con tu ubicación. Tu ficha de emergencia, tus estudios y tus mediciones quedan guardados en tu teléfono. Una app de Himalaya Salud.",
  keywords: [
    "botón de pánico",
    "SOS Protegete",
    "app de emergencia",
    "aviso a contactos de emergencia",
    "ficha de emergencia",
    "Himalaya Salud",
    "beneficio para empleados",
    "Argentina",
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
    icon: [
      { url: "/branding/sos-protegete/favicon.ico" },
      { url: "/branding/sos-protegete/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/branding/sos-protegete/favicon.ico",
    apple: "/branding/sos-protegete/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "SOS Protegete",
    title: "SOS Protegete — Botón de pánico para vos y tu familia",
    description:
      "Con un toque, llama y manda WhatsApp a tus contactos con tu ubicación. Tu ficha de emergencia, estudios y mediciones, guardados en tu teléfono.",
    images: [
      {
        url: "/branding/sos-protegete/og-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "SOS Protegete",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS Protegete — Botón de pánico para vos y tu familia",
    description:
      "Con un toque, llama y manda WhatsApp a tus contactos con tu ubicación.",
    images: ["/branding/sos-protegete/og-1200x630.jpg"],
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
          <RouteChrome>{children}</RouteChrome>
        </ThemeProvider>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
