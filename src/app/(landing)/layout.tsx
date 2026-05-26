import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FEATURES } from "@/lib/feature-flags";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (FEATURES.minimalSite) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </>
  );
}
