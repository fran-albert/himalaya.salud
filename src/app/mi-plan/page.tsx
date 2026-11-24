import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CancelForm } from "@/components/particulares/forms";
import { buttonClass, Notice, Panel, primaryButton, Row, Shell } from "@/components/particulares/shell";
import { BRAND } from "@/lib/brand-tokens";
import { logOut } from "@/lib/particulares/actions";
import { formatArs, formatDate, PERIOD_LABEL } from "@/lib/particulares/format";
import { currentSubscription, requireParticulares, type Subscription } from "@/lib/particulares/platform";

export const metadata: Metadata = { title: "Mi plan", robots: { index: false } };
export const dynamic = "force-dynamic";

const TITLE: Record<Subscription["status"], string> = {
  pending: "Falta el pago",
  active: "Tu plan está activo",
  in_grace: "Tenés un pago pendiente",
  cancelled: "Baja confirmada",
  expired: "Tu plan venció",
};

function PlanSummary({ subscription }: { subscription: Subscription }) {
  return (
    <Panel>
      <span className="text-lg font-bold" style={{ color: BRAND.teal900 }}>{subscription.planName}</span>
      <Row label={PERIOD_LABEL[subscription.period]}>{formatArs(subscription.amountArs)}</Row>
      {subscription.status === "active" && (
        <Row label="Se renueva el">{formatDate(subscription.currentPeriodEnd)}</Row>
      )}
      {(subscription.status === "cancelled" || subscription.status === "in_grace") && (
        <Row label="Activo hasta el">{formatDate(subscription.accessUntil)}</Row>
      )}
    </Panel>
  );
}

export default async function MiPlanPage() {
  requireParticulares();
  const subscription = await currentSubscription();
  if (subscription === "unauthenticated") redirect("/ingresar");
  const seePlans = <Link href="/planes" className={buttonClass} style={primaryButton}>Ver planes</Link>;
  return (
    <Shell eyebrow="Mi plan" title={subscription ? TITLE[subscription.status] : "Todavía no tenés un plan"}>
      {subscription && <PlanSummary subscription={subscription} />}
      {!subscription && seePlans}
      {subscription?.status === "pending" && (
        <>
          {subscription.checkoutUrl && (
            <a href={subscription.checkoutUrl} className={buttonClass} style={primaryButton}>Pagar</a>
          )}
          <Link href="/planes" className="block text-center text-sm font-semibold" style={{ color: BRAND.teal700 }}>
            Elegir otro plan
          </Link>
        </>
      )}
      {subscription?.status === "active" && (
        <CancelForm activeUntil={formatDate(subscription.currentPeriodEnd)} />
      )}
      {subscription?.status === "in_grace" && (
        <Notice tone="warn">
          No pudimos cobrar tu plan. Tu SOS sigue activo hasta el {formatDate(subscription.accessUntil)}.
        </Notice>
      )}
      {subscription?.status === "cancelled" && (
        <>
          <Notice tone="ok">No te cobramos más. Tu cuenta y tus datos quedan guardados.</Notice>
          <Link href="/planes" className={buttonClass} style={primaryButton}>Volver a contratar</Link>
        </>
      )}
      {subscription?.status === "expired" && (
        <>
          <Notice tone="warn">Tus contactos y tus datos siguen guardados.</Notice>
          {seePlans}
        </>
      )}
      <form action={logOut}>
        <button type="submit" className="w-full text-center text-sm font-semibold" style={{ color: BRAND.textCaption }}>
          Cerrar sesión
        </button>
      </form>
    </Shell>
  );
}
