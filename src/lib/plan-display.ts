import { portalUrl } from "./site-links.ts";

export type PlanBilling = {
  id: number;
  period: "monthly" | "yearly";
  amount: number;
  isDefault: boolean;
  href: string;
};
export type PublicPlan = {
  id: number;
  title: string;
  subtitle: string | null;
  description: string | null;
  rank: number;
  items: { id: number; text: string; type: string }[];
  billing: PlanBilling[];
};

export function planDetailUrl(planId: number, code: string, billingId: number) {
  const url = new URL("/plan-details", portalUrl);
  url.search = new URLSearchParams({
    id: String(planId),
    plan: code,
    billingOptionId: String(billingId),
  }).toString();
  return url.toString();
}

const pesoFormatter = new Intl.NumberFormat("es-AR", {
  maximumFractionDigits: 2,
});
export function formatPlanPrice(amount: number) {
  return `$${pesoFormatter.format(amount)}`;
}

export function billingLabel(period: PlanBilling["period"]) {
  return period === "yearly" ? "por año" : "por mes";
}
