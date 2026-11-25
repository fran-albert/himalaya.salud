import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CancelForm, StoreCancelHelp } from "@/components/particulares/forms";
import { buttonClass, Notice, Panel, primaryButton, Row, Shell } from "@/components/particulares/shell";
import { MANAGED_FROM } from "@/components/particulares/store";
import { BRAND } from "@/lib/brand-tokens";
import { logOut } from "@/lib/particulares/actions";
import { formatDate, PERIOD_LABEL } from "@/lib/particulares/format";
import { currentSubscription, requireParticulares, type Store, type Subscription } from "@/lib/particulares/platform";
import { liveStorePlan, priceLabel, STORE_NAME, storeOf } from "@/lib/particulares/subscription";

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
  const store = storeOf(subscription);
  const price = priceLabel(subscription);
  return (
    <Panel>
      <span className="text-lg font-bold" style={{ color: BRAND.teal900 }}>{subscription.planName}</span>
      {store && <Row label="Contratado en">{STORE_NAME[store]}</Row>}
      {price
        ? <Row label={PERIOD_LABEL[subscription.period]}>{price}</Row>
        : <Row label="Período">{PERIOD_LABEL[subscription.period]}</Row>}
      {subscription.status === "active" && (
        <Row label="Se renueva el">{formatDate(subscription.currentPeriodEnd)}</Row>
      )}
      {(subscription.status === "cancelled" || subscription.status === "in_grace") && (
        <Row label="Activo hasta el">{formatDate(subscription.accessUntil)}</Row>
      )}
      {store && subscription.status !== "expired" && (
        <p className="text-sm" style={{ color: BRAND.textBody }}>
          Lo administrás y lo das de baja desde {MANAGED_FROM[store]}.
        </p>
      )}
    </Panel>
  );
}

/** Plan comprado en una tienda: la web lo muestra, pero no cobra ni da de baja. */
function StorePlanActions({ subscription, store }: { subscription: Subscription; store: Store }) {
  const alive = liveStorePlan(subscription) !== null;
  return (
    <>
      {subscription.paymentIssue && (
        <Notice tone="warn">Hay un problema con el pago. Revisalo en {STORE_NAME[store]}.</Notice>
      )}
      {(subscription.status === "active" || subscription.status === "in_grace") && <StoreCancelHelp store={store} />}
      {subscription.status === "cancelled" && alive && (
        <Notice tone="ok">No se renueva más. Tu cuenta y tus datos quedan guardados.</Notice>
      )}
      {!alive && !subscription.paymentIssue && (
        <>
          <Notice tone="warn">Tus contactos y tus datos siguen guardados.</Notice>
          <Link href="/planes" className={buttonClass} style={primaryButton}>Ver planes</Link>
        </>
      )}
    </>
  );
}

export default async function MiPlanPage() {
  requireParticulares();
  const subscription = await currentSubscription();
  if (subscription === "unauthenticated") redirect("/ingresar");
  const seePlans = <Link href="/planes" className={buttonClass} style={primaryButton}>Ver planes</Link>;
  const store = subscription ? storeOf(subscription) : null;
  const logOutButton = (
    <form action={logOut}>
      <button type="submit" className="w-full text-center text-sm font-semibold" style={{ color: BRAND.textCaption }}>
        Cerrar sesión
      </button>
    </form>
  );
  if (subscription && store) {
    return (
      <Shell eyebrow="Mi plan" title={TITLE[subscription.status]}>
        <PlanSummary subscription={subscription} />
        <StorePlanActions subscription={subscription} store={store} />
        {logOutButton}
      </Shell>
    );
  }
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
      {logOutButton}
    </Shell>
  );
}
