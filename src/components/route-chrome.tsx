"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FEATURES } from "@/lib/feature-flags";

const chromeLessRoutes = new Set(["/plan-estandar"]);

export function RouteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = FEATURES.minimalSite || chromeLessRoutes.has(pathname);

  return (
    <div className="relative flex min-h-screen flex-col">
      {!hideChrome && <Header />}
      <main className={hideChrome ? "flex-1" : "flex-1 pt-16"}>{children}</main>
      {!hideChrome && <Footer />}
    </div>
  );
}
