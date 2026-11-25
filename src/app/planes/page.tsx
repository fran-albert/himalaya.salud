import type { Metadata } from "next";
import { PlanPicker } from "@/components/particulares/forms";
import { Notice, Shell } from "@/components/particulares/shell";
import { StorePlanTaken } from "@/components/particulares/store";
import { publicPlans, requireParticulares, sessionSubscription } from "@/lib/particulares/platform";
import { liveStorePlan } from "@/lib/particulares/subscription";

export const metadata: Metadata = {
  title: "Planes",
  description: "Contratá SOS Protegete para vos.",
  alternates: { canonical: "/planes" },
};
export const dynamic = "force-dynamic";

export default async function PlanesPage() {
  requireParticulares();
  const store = liveStorePlan(await sessionSubscription());
  if (store) {
    return <Shell eyebrow="Planes" title="Ya tenés tu plan"><StorePlanTaken store={store} /></Shell>;
  }
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
