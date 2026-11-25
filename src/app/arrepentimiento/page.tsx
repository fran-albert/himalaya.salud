import type { Metadata } from "next";
import { WithdrawalForm } from "@/components/particulares/forms";
import { Shell } from "@/components/particulares/shell";
import { requireParticulares } from "@/lib/particulares/platform";

export const metadata: Metadata = {
  title: "Botón de arrepentimiento",
  description: "Revocá la contratación de SOS Protegete dentro de los 10 días.",
  alternates: { canonical: "/arrepentimiento" },
};
export const dynamic = "force-dynamic";

export default function ArrepentimientoPage() {
  requireParticulares();
  return (
    <Shell
      eyebrow="Arrepentimiento"
      title="Botón de arrepentimiento"
      lead="Tenés 10 días corridos desde que contrataste para arrepentirte, sin costo. No hace falta tener cuenta."
    >
      <WithdrawalForm />
    </Shell>
  );
}
