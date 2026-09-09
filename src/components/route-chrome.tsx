"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FEATURES } from "@/lib/feature-flags";

const chromeLessRoutes = new Set(["/enlaces"]);

export function RouteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hasOwnLayout = ["/portal", "/admin", "/hci"].some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  if (hasOwnLayout) return children;

  const hideChrome = FEATURES.minimalSite || chromeLessRoutes.has(pathname);

  return (
    <div className="relative flex min-h-screen flex-col">
      {!hideChrome && <Header />}
      <main id="contenido" tabIndex={-1} className="flex-1">{children}</main>
      {!hideChrome && <Footer />}
    </div>
  );
}
