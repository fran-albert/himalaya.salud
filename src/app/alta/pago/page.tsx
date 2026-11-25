import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PayForm } from "@/components/particulares/forms";
import { Panel, Row, Shell } from "@/components/particulares/shell";
import { StorePlanTaken } from "@/components/particulares/store";
import { BRAND } from "@/lib/brand-tokens";
import { formatArs, PERIOD_LABEL } from "@/lib/particulares/format";
import { chosenPlan, publicPlans, requireParticulares, sessionSubscription, sessionToken } from "@/lib/particulares/platform";
import { liveStorePlan } from "@/lib/particulares/subscription";

export const metadata: Metadata = { title: "Revisá y pagá", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function PagoPage() {
  requireParticulares();
  if (!(await sessionToken())) redirect("/ingresar");
  const store = liveStorePlan(await sessionSubscription());
  if (store) {
    return <Shell eyebrow="Mi plan" title="Ya tenés tu plan"><StorePlanTaken store={store} /></Shell>;
  }
  const choice = await chosenPlan();
  if (!choice) redirect("/planes");
  const plan = (await publicPlans()).find((item) => item.externalId === choice.planExternalId);
  const price = plan?.prices.find((item) => item.period === choice.period);
  if (!plan || !price) redirect("/planes");
  return (
    <Shell eyebrow="Paso 3 de 3" title="Revisá y pagá">
      <Panel>
        <div className="flex items-center justify-between gap-3">
          <span className="text-lg font-bold" style={{ color: BRAND.teal900 }}>{plan.name}</span>
          <Link href="/planes" className="text-sm font-semibold" style={{ color: BRAND.teal700 }}>Cambiar</Link>
        </div>
        <Row label={PERIOD_LABEL[choice.period]}>{formatArs(price.amountArs)}</Row>
        <p className="text-sm" style={{ color: BRAND.textCaption }}>
          {choice.period === "month" ? "Se debita todos los meses." : "Se debita una vez por año."}{" "}
          Lo das de baja cuando quieras.
        </p>
      </Panel>
      <PayForm />
    </Shell>
  );
}
