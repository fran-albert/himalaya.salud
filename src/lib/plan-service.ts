import { parsePlanCatalog } from "./plan-catalog.ts";
import type { PublicPlan } from "./plan-display.ts";

export const plansEndpoint =
  "https://api.hci.himalayasalud.com.ar/api/plans/public";
export type PlanCatalogResult =
  | { status: "ready"; plans: PublicPlan[] }
  | { status: "empty" | "unavailable"; plans: [] };

export async function loadPlans(
  fetcher: typeof fetch = fetch,
): Promise<PlanCatalogResult> {
  try {
    const response = await fetcher(plansEndpoint, {
      headers: { Accept: "application/json", "User-Agent": "himalaya-web/1.0" },
      signal: AbortSignal.timeout(5000),
      next: { revalidate: 300 },
    });
    if (!response.ok) throw new Error("PLANS_HTTP_ERROR");
    const plans = parsePlanCatalog(await response.json());
    if (plans === null) throw new Error("PLANS_INVALID_CATALOG");
    return plans.length
      ? { status: "ready", plans }
      : { status: "empty", plans: [] };
  } catch {
    console.warn("PLANS_CATALOG_UNAVAILABLE");
    return { status: "unavailable", plans: [] };
  }
}
