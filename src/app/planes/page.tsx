import type { Metadata } from "next";
import { PlanPicker } from "@/components/particulares/forms";
import { Notice, Shell } from "@/components/particulares/shell";
import { publicPlans, requireParticulares } from "@/lib/particulares/platform";

export const metadata: Metadata = {
  title: "Planes",
  description: "Contratá SOS Protegete para vos.",
  alternates: { canonical: "/planes" },
};
export const dynamic = "force-dynamic";

export default async function PlanesPage() {
  requireParticulares();
  const plans = await publicPlans().catch(() => null);
  return (
    <Shell eyebrow="Planes" title="Elegí tu plan" lead="Lo das de baja cuando quieras.">
      {plans === null
        ? <Notice tone="error">No pudimos cargar los planes. Probá de nuevo en un rato.</Notice>
        : plans.length === 0
          ? <Notice tone="warn">Todavía no hay planes para contratar.</Notice>
          : <PlanPicker plans={plans} />}
    </Shell>
  );
}
