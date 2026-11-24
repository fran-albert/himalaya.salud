"use server";

import { redirect } from "next/navigation";
import { argentineMobile } from "./format";
import {
  chosenPlan, endSession, pendingSignup, platform, PlatformError, rememberPlan, rememberSignup, sessionToken,
  startSession, type LegalReference, type Subscription,
} from "./platform";

export interface FormState {
  error: string | null;
  /** Lo que la persona había escrito, para no hacérselo cargar de nuevo. Nunca incluye la contraseña. */
  values?: Record<string, string>;
}

const failure = (error: unknown): FormState => ({
  error: error instanceof PlatformError ? error.message : "No pudimos completar el pedido. Probá de nuevo.",
});

const text = (form: FormData, name: string): string => {
  const value = form.get(name);
  return typeof value === "string" ? value.trim() : "";
};

export async function choosePlan(form: FormData): Promise<void> {
  const period = text(form, "period");
  const planExternalId = text(form, "planExternalId");
  if (!planExternalId || (period !== "month" && period !== "year")) redirect("/planes");
  await rememberPlan({ planExternalId, period });
  redirect((await sessionToken()) ? "/alta/pago" : "/alta");
}

export async function register(_previous: FormState, form: FormData): Promise<FormState> {
  const attempt = await submitRegistration(form);
  if (!attempt) redirect("/alta/codigo");
  return {
    ...attempt,
    values: Object.fromEntries(
      // Los tildes no se conservan: la aceptación se da de nuevo en cada intento.
      ["firstName", "lastName", "documentNumber", "phone", "email"].map((name) => [name, text(form, name)]),
    ),
  };
}

/** Null cuando el registro quedó creado y el código salió por correo. */
async function submitRegistration(form: FormData): Promise<FormState | null> {
  const email = text(form, "email").toLowerCase();
  const password = text(form, "password");
  const phone = argentineMobile(text(form, "phone"));
  if (password.length < 8) return { error: "La contraseña necesita al menos 8 caracteres." };
  if (!phone) return { error: "Revisá el celular: código de área y número, sin 0 ni 15." };
  if (form.get("isAdult") !== "on" || form.get("terms") !== "on") {
    return { error: "Para seguir, confirmá que sos mayor de 18 y aceptá las condiciones." };
  }
  let legalAcceptances: LegalReference[];
  try {
    legalAcceptances = JSON.parse(text(form, "legalAcceptances")) as LegalReference[];
  } catch {
    return { error: "Recargá la página y probá de nuevo." };
  }
  try {
    const created = await platform<{ registrationId: string }>("/v1/patient/registrations", {
      method: "POST",
      body: {
        email, password, firstName: text(form, "firstName"), lastName: text(form, "lastName"),
        documentNumber: text(form, "documentNumber"), phone, source: "web", isAdult: true,
        readTerms: true, understoodTerms: true, acceptedTerms: true, legalAcceptances,
      },
    });
    await rememberSignup({ registrationId: created.registrationId, email });
  } catch (error) {
    if (error instanceof PlatformError && error.status === 400) {
      return { error: "Revisá los datos: hay alguno que no es válido." };
    }
    return failure(error);
  }
  return null;
}

export async function verifyCode(_previous: FormState, form: FormData): Promise<FormState> {
  const signup = await pendingSignup();
  if (!signup) return { error: "El código venció. Volvé a crear tu cuenta." };
  const code = text(form, "code");
  if (!/^\d{6}$/.test(code)) return { error: "El código tiene 6 números." };
  try {
    const session = await platform<{ accessToken: string; expiresAt: string }>("/v1/patient/registrations/verify", {
      method: "POST", body: { registrationId: signup.registrationId, code },
    });
    await startSession(session);
    await rememberSignup(null);
  } catch (error) {
    return failure(error);
  }
  redirect((await chosenPlan()) ? "/alta/pago" : "/planes");
}

export async function logIn(_previous: FormState, form: FormData): Promise<FormState> {
  try {
    const session = await platform<{ accessToken: string; expiresAt: string }>("/v1/patient/sessions", {
      method: "POST", body: { email: text(form, "email").toLowerCase(), password: text(form, "password") },
    });
    await startSession(session);
  } catch (error) {
    return { ...failure(error), values: { email: text(form, "email") } };
  }
  redirect((await chosenPlan()) ? "/alta/pago" : "/mi-plan");
}

export async function logOut(): Promise<void> {
  await endSession();
  redirect("/ingresar");
}

/** Abre la suscripción al precio vigente y manda a la persona a pagar al proveedor. */
export async function startPayment(): Promise<FormState> {
  const token = await sessionToken();
  const plan = await chosenPlan();
  if (!token) redirect("/ingresar");
  if (!plan) redirect("/planes");
  let checkoutUrl: string | null;
  try {
    const result = await platform<{ subscription: Subscription }>("/v1/patient/me/subscription", {
      method: "POST", token, body: plan,
    });
    checkoutUrl = result.subscription.checkoutUrl;
    await rememberPlan(null);
  } catch (error) {
    if (error instanceof PlatformError && error.status === 401) redirect("/ingresar");
    if (error instanceof PlatformError && error.code === "SUBSCRIPTION_ALREADY_ACTIVE") redirect("/mi-plan");
    return failure(error);
  }
  redirect(checkoutUrl ?? "/alta/listo");
}

export async function cancelPlan(): Promise<FormState> {
  const token = await sessionToken();
  if (!token) redirect("/ingresar");
  try {
    await platform<{ subscription: Subscription }>("/v1/patient/me/subscription/cancel", { method: "POST", token });
  } catch (error) {
    if (error instanceof PlatformError && error.status === 401) redirect("/ingresar");
    return failure(error);
  }
  redirect("/mi-plan");
}
