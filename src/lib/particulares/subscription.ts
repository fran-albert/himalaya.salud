import { formatArs, formatMoney, type BillingPeriod } from "./format.ts";

export type SubscriptionStatus = "pending" | "active" | "in_grace" | "cancelled" | "expired";
export type SubscriptionChannel = "mercadopago" | "apple" | "google" | "simulated";
export type Store = "apple" | "google";

export interface Subscription {
  id: string;
  planExternalId: string;
  planName: string;
  period: BillingPeriod;
  /** Null cuando el cobro no es en pesos (p. ej. App Store en dólares) o no se conoce. */
  amountArs: string | null;
  status: SubscriptionStatus;
  checkoutUrl: string | null;
  currentPeriodEnd: string | null;
  accessUntil: string | null;
  channel: SubscriptionChannel;
  currency: string | null;
  amount: string | null;
  paymentIssue: boolean;
}

/** Lo que manda la API: la desplegada antes de las compras en tiendas no trae los campos nuevos. */
export type ApiSubscription = Omit<Subscription, "channel" | "currency" | "amount" | "paymentIssue"> &
  Partial<Pick<Subscription, "channel" | "currency" | "amount" | "paymentIssue">>;

const CHANNELS: readonly SubscriptionChannel[] = ["mercadopago", "apple", "google", "simulated"];

export function normalizeSubscription(raw: ApiSubscription): Subscription {
  const channel = raw.channel && CHANNELS.includes(raw.channel) ? raw.channel : "mercadopago";
  const known = raw.currency !== undefined || raw.amount !== undefined;
  return {
    ...raw,
    channel,
    currency: known ? raw.currency ?? null : raw.amountArs ? "ARS" : null,
    amount: known ? raw.amount ?? null : raw.amountArs,
    paymentIssue: raw.paymentIssue === true,
  };
}

export function isStore(value: unknown): value is Store {
  return value === "apple" || value === "google";
}

/** La tienda que administra el plan, o null si se cobra por Mercado Pago (o el simulado de QA). */
export function storeOf(subscription: Pick<Subscription, "channel">): Store | null {
  return isStore(subscription.channel) ? subscription.channel : null;
}

/** Plan de tienda que todavía da acceso: mientras dure, la web no ofrece contratar por Mercado Pago. */
export function liveStorePlan(subscription: Subscription | null, now: Date = new Date()): Store | null {
  if (!subscription) return null;
  const store = storeOf(subscription);
  if (!store || subscription.status === "expired" || subscription.status === "pending") return null;
  if (subscription.accessUntil && new Date(subscription.accessUntil) <= now) return null;
  return store;
}

/** El monto con su moneda; nunca muestra dólares como pesos. Null si la tienda no lo informa. */
export function priceLabel(subscription: Pick<Subscription, "amount" | "currency" | "amountArs">): string | null {
  if (subscription.amount && subscription.currency) return formatMoney(subscription.amount, subscription.currency);
  if (subscription.amountArs) return formatArs(subscription.amountArs);
  return null;
}

export const STORE_NAME: Record<Store, string> = { apple: "App Store", google: "Google Play" };
