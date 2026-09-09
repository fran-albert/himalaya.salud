"use client";

import { useState } from "react";
import { ArrowRight, Check, Minus, X } from "lucide-react";
import { TrackedLink } from "@/components/tracked-link";
import {
  billingLabel,
  formatPlanPrice,
  type PublicPlan,
} from "@/lib/plan-display";

export function PlanCard({ plan }: { plan: PublicPlan }) {
  const [billingId, setBillingId] = useState(
    (plan.billing.find((b) => b.isDefault) ?? plan.billing[0]).id,
  );
  const selected =
    plan.billing.find((b) => b.id === billingId) ?? plan.billing[0];
  return (
    <article className="h-plan" aria-labelledby={`plan-${plan.id}`}>
      <div className="h-plan-heading">
        <h3 id={`plan-${plan.id}`}>{plan.title}</h3>
        {plan.subtitle && <p className="h-plan-subtitle">{plan.subtitle}</p>}
        {plan.description && (
          <p className="h-plan-description">{plan.description}</p>
        )}
      </div>
      {plan.billing.length > 1 && (
        <div className="h-plan-billing">
          <label htmlFor={`billing-${plan.id}`}>Forma de pago</label>
          <select
            id={`billing-${plan.id}`}
            value={selected.id}
            onChange={(event) => setBillingId(Number(event.target.value))}
          >
            {plan.billing.map((option) => (
              <option key={option.id} value={option.id}>
                {option.period === "yearly" ? "Anual" : "Mensual"} ·{" "}
                {formatPlanPrice(option.amount)}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="h-plan-price" aria-live="polite" aria-atomic="true">
        <strong>{formatPlanPrice(selected.amount)}</strong>
        <span>{billingLabel(selected.period)}</span>
        <small>Pesos argentinos</small>
      </div>
      <div className="h-plan-features">
        <span className="h-plan-features-label">
          {plan.items.some((item) => item.type === "cross")
            ? "Prestaciones"
            : "Tu plan incluye"}
        </span>
        {plan.items.length ? (
          <ul className="h-check-list">
            {plan.items.map((item, index) => (
              <li key={`${item.id}-${index}`}>
                {item.type === "check" ? (
                  <Check aria-hidden="true" />
                ) : item.type === "cross" ? (
                  <X aria-hidden="true" />
                ) : (
                  <Minus aria-hidden="true" />
                )}
                <span>
                  {item.type === "cross" && (
                    <span className="sr-only">No incluye: </span>
                  )}
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="h-plan-description">
            Consultá las prestaciones en el detalle del plan.
          </p>
        )}
      </div>
      <TrackedLink
        className="h-button"
        href={selected.href}
        event="subscription_portal_clicked"
        origin={`plan_${plan.id}`}
        aria-label={`Ver plan ${plan.title}, ${formatPlanPrice(selected.amount)} ${billingLabel(selected.period)}`}
      >
        Ver plan <ArrowRight size={17} aria-hidden="true" />
      </TrackedLink>
    </article>
  );
}
