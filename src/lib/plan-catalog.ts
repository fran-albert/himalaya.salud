import { z } from "zod";
import {
  planDetailUrl,
  type PlanBilling,
  type PublicPlan,
} from "./plan-display.ts";

const text = z.string().trim().min(1).max(2000);
const id = z.number().int().positive();
const price = z
  .union([
    z.number(),
    z
      .string()
      .regex(/^\d+(\.\d{1,2})?$/)
      .transform(Number),
  ])
  .pipe(z.number().finite().nonnegative().max(1_000_000_000));
const billingSchema = z.object({
  billing_option_id: id,
  billing_period: z.string(),
  price_list: price,
  currency: z.string().trim().toUpperCase(),
  is_default: z.boolean(),
});
const planSchema = z.object({
  plan_id: id,
  code: text,
  name: text,
  status: z.string(),
  rank: z.number().finite(),
  billing_options: z.array(billingSchema).max(100),
  content: z.object({
    title: text,
    subtitle: z.string().max(2000).nullable(),
    description: z.string().max(5000).nullable(),
    published: z.boolean(),
    items: z
      .array(
        z.object({
          content_item_id: id,
          text,
          item_type: z.string(),
          sort_order: z.number().finite(),
        }),
      )
      .max(100),
  }),
});
const responseSchema = z.object({ data: z.array(z.unknown()).max(100) });

export function parsePlanCatalog(payload: unknown): PublicPlan[] | null {
  const parsed = responseSchema.safeParse(payload);
  if (!parsed.success) return null;
  const plans: PublicPlan[] = [];
  for (const entry of parsed.data.data) {
    // Fail closed: an invalid catalogue must not advertise incomplete prices.
    const result = planSchema.safeParse(entry);
    if (!result.success) return null;
    const plan = result.data;
    if (plan.status !== "active" || !plan.content.published) continue;
    const billing: PlanBilling[] = [];
    for (const option of plan.billing_options) {
      // HCI's web catalogue excludes USD. Only its observed ARS web options
      // and understood billing periods are advertised here.
      if (
        option.currency !== "ARS" ||
        (option.billing_period !== "monthly" &&
          option.billing_period !== "yearly")
      )
        continue;
      billing.push({
        id: option.billing_option_id,
        period: option.billing_period,
        amount: option.price_list,
        isDefault: option.is_default,
        href: planDetailUrl(plan.plan_id, plan.code, option.billing_option_id),
      });
    }
    if (!billing.length) continue;
    if (new Set(billing.map((b) => b.id)).size !== billing.length) return null;
    billing.sort(
      (a, b) => Number(a.period === "yearly") - Number(b.period === "yearly"),
    );
    const title = plan.content.title;
    const subtitle = plan.content.subtitle?.trim();
    plans.push({
      id: plan.plan_id,
      title,
      subtitle:
        subtitle &&
        subtitle.toLocaleLowerCase("es") !== title.toLocaleLowerCase("es")
          ? subtitle
          : null,
      description: plan.content.description?.trim() || null,
      rank: plan.rank,
      items: [...plan.content.items]
        .sort((a, b) => a.sort_order - b.sort_order)
        .map((item) => ({
          id: item.content_item_id,
          text: item.text,
          type: item.item_type,
        })),
      billing,
    });
  }
  if (new Set(plans.map((p) => p.id)).size !== plans.length) return null;
  return plans.sort((a, b) => a.rank - b.rank);
}
