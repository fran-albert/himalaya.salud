import type React from "react";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Himalaya Salud - Tu historia clínica digital segura",
    template: "%s | Himalaya Salud",
  },
  description:
    "Accedé a tu historia clínica digital de forma simple y segura. Himalaya Salud te permite gestionar y compartir tu información médica desde cualquier lugar.",
  keywords: [
    "historia clínica digital",
    "salud digital",
    "historia clínica electrónica",
    "HCE",
    "gestión de salud",
    "app médica",
    "Argentina",
    "telemedicina",
    "expediente médico digital",
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
    title: "Himalaya Salud - Tu historia clínica digital segura",
    description:
      "Accedé a tu historia clínica digital de forma simple y segura. Gestiona y comparte tu información médica desde cualquier lugar.",
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
    title: "Himalaya Salud - Tu historia clínica digital segura",
    description:
      "Accedé a tu historia clínica digital de forma simple y segura desde cualquier lugar.",
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
