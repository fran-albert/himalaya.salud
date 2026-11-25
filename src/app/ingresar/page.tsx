import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/particulares/forms";
import { Shell } from "@/components/particulares/shell";
import { BRAND } from "@/lib/brand-tokens";
import { requireParticulares } from "@/lib/particulares/platform";

export const metadata: Metadata = { title: "Ingresar", robots: { index: false } };
export const dynamic = "force-dynamic";

export default function IngresarPage() {
  requireParticulares();
  return (
    <Shell eyebrow="Mi plan" title="Ingresá a tu cuenta" lead="Con el mismo correo y contraseña de la app.">
      <LoginForm />
      <p className="text-center text-sm" style={{ color: BRAND.textCaption }}>
        ¿No tenés cuenta?{" "}
        <Link href="/planes" className="font-semibold" style={{ color: BRAND.teal700 }}>Mirá los planes</Link>
      </p>
    </Shell>
  );
}
