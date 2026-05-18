"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const chromeLessRoutes = new Set(["/plan-estandar"]);

export function RouteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideChrome = chromeLessRoutes.has(pathname);

  return (
    <div className="relative flex min-h-screen flex-col">
      {!hideChrome && <Header />}
      <main className={hideChrome ? "flex-1" : "flex-1 pt-16"}>{children}</main>
      {!hideChrome && <Footer />}
    </div>
  );
}
