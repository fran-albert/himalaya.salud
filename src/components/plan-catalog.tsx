import { ArrowRight, CreditCard } from "lucide-react";
import { loadPlans } from "@/lib/plan-service";
import { portalUrl } from "@/lib/site-links";
import { PlanCard } from "@/components/plan-card";
import { TrackedLink } from "@/components/tracked-link";

export async function PlanCatalog() {
  const result = await loadPlans();
  if (result.status !== "ready") {
    return (
      <div className="h-plans-fallback" role="status">
        <h3>
          {result.status === "empty"
            ? "Consultá las opciones disponibles"
            : "Los planes no se pudieron cargar"}
        </h3>
        <p>
          Podés continuar al portal de Himalaya para consultar planes y precios.
        </p>
        <TrackedLink
          className="h-button"
          href={portalUrl}
          event="subscription_portal_clicked"
          origin="plans_fallback"
        >
          Ir al portal <ArrowRight size={18} aria-hidden="true" />
        </TrackedLink>
      </div>
    );
  }
  return (
    <>
      <div className="h-plans-grid">
        {result.plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
      <p className="h-plans-payment">
        <CreditCard size={18} aria-hidden="true" />
        Contratá con Mercado Pago. Revisá el detalle y las condiciones antes de
        pagar.
      </p>
    </>
  );
}

export function PlanCatalogLoading() {
  return (
    <div className="h-plans-loading" role="status" aria-live="polite">
      <span className="sr-only">Cargando planes y precios…</span>
      <div className="h-plans-grid" aria-hidden="true">
        {[0, 1, 2, 3].map((index) => (
          <div className="h-plan h-plan-skeleton" key={index}>
            <span />
            <span />
            <span />
            <span />
          </div>
        ))}
      </div>
    </div>
  );
}
