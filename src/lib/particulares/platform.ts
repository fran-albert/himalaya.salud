import "server-only";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { FEATURES } from "@/lib/feature-flags";
import type { BillingPeriod } from "./format";

const SESSION_COOKIE = "sos_sesion";
const SIGNUP_COOKIE = "sos_alta";
const PLAN_COOKIE = "sos_plan";

export interface PublicPlan {
  externalId: string;
  name: string;
  audience: "individual" | "family";
  prices: { period: BillingPeriod; amountArs: string; discountPercent: string | null }[];
}

export type SubscriptionStatus = "pending" | "active" | "in_grace" | "cancelled" | "expired";

export interface Subscription {
  id: string;
  planExternalId: string;
  planName: string;
  period: BillingPeriod;
  amountArs: string;
  status: SubscriptionStatus;
  checkoutUrl: string | null;
  currentPeriodEnd: string | null;
  accessUntil: string | null;
}

export interface LegalReference {
  documentId: string;
  version: number;
  contentHash: string;
}

export class PlatformError extends Error {
  constructor(readonly status: number, readonly code: string, message: string) {
    super(message);
  }
}

/** Las páginas de particulares no existen hasta que se enciende la feature y hay una API configurada. */
export function requireParticulares(): void {
  if (!FEATURES.particulares || !process.env.PLATFORM_API_URL) notFound();
}

export async function platform<T>(
  path: string,
  options: { method?: "GET" | "POST"; body?: unknown; token?: string } = {},
): Promise<T> {
  const base = process.env.PLATFORM_API_URL;
  if (!base) throw new PlatformError(503, "NOT_CONFIGURED", "La contratación no está disponible todavía.");
  let response: Response;
  try {
    response = await fetch(`${base}${path}`, {
      method: options.method ?? "GET",
      headers: {
        ...(options.body === undefined ? {} : { "content-type": "application/json" }),
        ...(options.token ? { authorization: `Bearer ${options.token}` } : {}),
      },
      body: options.body === undefined ? undefined : JSON.stringify(options.body),
      cache: "no-store",
    });
  } catch {
    throw new PlatformError(502, "UNREACHABLE", "No pudimos conectarnos. Probá de nuevo.");
  }
  const payload: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const error = payload as { code?: unknown; message?: unknown } | null;
    throw new PlatformError(
      response.status,
      typeof error?.code === "string" ? error.code : "UNKNOWN",
      response.status === 429
        ? "Demasiados intentos. Probá en unos minutos."
        : typeof error?.message === "string" ? error.message : "No pudimos completar el pedido.",
    );
  }
  return payload as T;
}

const secure = process.env.NODE_ENV === "production";

export async function sessionToken(): Promise<string | null> {
  return (await cookies()).get(SESSION_COOKIE)?.value ?? null;
}

export async function startSession(session: { accessToken: string; expiresAt: string }): Promise<void> {
  (await cookies()).set(SESSION_COOKIE, session.accessToken, {
    httpOnly: true, secure, sameSite: "lax", path: "/", expires: new Date(session.expiresAt),
  });
}

export async function endSession(): Promise<void> {
  (await cookies()).delete(SESSION_COOKIE);
}

export interface PendingSignup {
  registrationId: string;
  email: string;
}

export async function pendingSignup(): Promise<PendingSignup | null> {
  return readJson<PendingSignup>(SIGNUP_COOKIE, (value) =>
    typeof value.registrationId === "string" && typeof value.email === "string");
}

export async function rememberSignup(signup: PendingSignup | null): Promise<void> {
  const jar = await cookies();
  if (!signup) jar.delete(SIGNUP_COOKIE);
  else jar.set(SIGNUP_COOKIE, JSON.stringify(signup), { httpOnly: true, secure, sameSite: "lax", path: "/", maxAge: 20 * 60 });
}

export interface ChosenPlan {
  planExternalId: string;
  period: BillingPeriod;
}

export async function chosenPlan(): Promise<ChosenPlan | null> {
  return readJson<ChosenPlan>(PLAN_COOKIE, (value) =>
    typeof value.planExternalId === "string" && (value.period === "month" || value.period === "year"));
}

export async function rememberPlan(plan: ChosenPlan | null): Promise<void> {
  const jar = await cookies();
  if (!plan) jar.delete(PLAN_COOKIE);
  else jar.set(PLAN_COOKIE, JSON.stringify(plan), { httpOnly: true, secure, sameSite: "lax", path: "/", maxAge: 24 * 60 * 60 });
}

async function readJson<T>(name: string, isValid: (value: Record<string, unknown>) => boolean): Promise<T | null> {
  const raw = (await cookies()).get(name)?.value;
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    return typeof value === "object" && value !== null && isValid(value as Record<string, unknown>) ? value as T : null;
  } catch {
    return null;
  }
}

export async function publicPlans(): Promise<PublicPlan[]> {
  return (await platform<{ plans: PublicPlan[] }>("/v1/plans/public")).plans;
}

/** La suscripción de quien tiene la sesión abierta. `unauthenticated` si la sesión venció. */
export async function currentSubscription(): Promise<Subscription | null | "unauthenticated"> {
  const token = await sessionToken();
  if (!token) return "unauthenticated";
  try {
    return (await platform<{ subscription: Subscription | null }>("/v1/patient/me/subscription", { token })).subscription;
  } catch (error) {
    if (error instanceof PlatformError && error.status === 401) return "unauthenticated";
    throw error;
  }
}
