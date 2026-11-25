"use server";

import { redirect } from "next/navigation";
import { argentineMobile } from "./format";
import {
  chosenPlan, endSession, pendingSignup, platform, PlatformError, rememberPlan, rememberSignup, requireParticulares,
  sessionSubscription, sessionToken, startSession, type LegalReference, type Store,
} from "./platform";
import { STORE_NAME, storeOf } from "./subscription";

export interface FormState {
  error: string | null;
  /** Lo que la persona había escrito, para no hacérselo cargar de nuevo. Nunca incluye la contraseña. */
  values?: Record<string, string>;
  /** La API rechazó el pedido porque el plan lo administra una tienda (SUBSCRIPTION_MANAGED_BY_STORE). */
  managedByStore?: boolean;
  /** Qué tienda, si la API lo dijo. */
  store?: Store;
}

// Cada acción arranca con requireParticulares(): una server action se puede invocar por POST con su id
// aunque la página que la usa responda 404, así que la bandera se comprueba también acá.

const failure = (error: unknown): FormState => ({
  error: error instanceof PlatformError ? error.message : "No pudimos completar el pedido. Probá de nuevo.",
});

const text = (form: FormData, name: string): string => {
  const value = form.get(name);
  return typeof value === "string" ? value.trim() : "";
};

function managedByStore(error: unknown): Pick<FormState, "managedByStore" | "store"> | null {
  if (!(error instanceof PlatformError) || error.code !== "SUBSCRIPTION_MANAGED_BY_STORE") return null;
  return { managedByStore: true, ...(error.store ? { store: error.store } : {}) };
}

export async function choosePlan(form: FormData): Promise<void> {
  requireParticulares();
  const period = text(form, "period");
  const planExternalId = text(form, "planExternalId");
  if (!planExternalId || (period !== "month" && period !== "year")) redirect("/planes");
  await rememberPlan({ planExternalId, period });
  redirect((await sessionToken()) ? "/alta/pago" : "/alta");
}

export async function register(_previous: FormState, form: FormData): Promise<FormState> {
  requireParticulares();
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

export interface ResendState {
  error: string | null;
  /** Cambia en cada envío aceptado, para reiniciar la cuenta regresiva. */
  sentAt: number | null;
}

export async function resendCode(): Promise<ResendState> {
  requireParticulares();
  const signup = await pendingSignup();
  if (!signup) return { error: "El registro venció. Volvé a crear tu cuenta.", sentAt: null };
  try {
    await platform("/v1/patient/registrations/resend", {
      method: "POST", body: { registrationId: signup.registrationId },
    });
    // El código nuevo dura 15 minutos: el registro en curso se recuerda ese tiempo otra vez.
    await rememberSignup(signup);
    return { error: null, sentAt: Date.now() };
  } catch (error) {
    return { ...failure(error), sentAt: null };
  }
}

export async function verifyCode(_previous: FormState, form: FormData): Promise<FormState> {
  requireParticulares();
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
  requireParticulares();
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
  requireParticulares();
  await endSession();
  redirect("/ingresar");
}

/** Abre la suscripción al precio vigente y manda a la persona a pagar al proveedor. */
export async function startPayment(): Promise<FormState> {
  requireParticulares();
  const token = await sessionToken();
  const plan = await chosenPlan();
  if (!token) redirect("/ingresar");
  if (!plan) redirect("/planes");
  let checkoutUrl: string | null;
  try {
    const result = await platform<{ subscription: { checkoutUrl: string | null } }>("/v1/patient/me/subscription", {
      method: "POST", token, body: plan,
    });
    checkoutUrl = result.subscription.checkoutUrl;
    await rememberPlan(null);
  } catch (error) {
    if (error instanceof PlatformError && error.status === 401) redirect("/ingresar");
    if (error instanceof PlatformError && error.code === "SUBSCRIPTION_ALREADY_ACTIVE") redirect("/mi-plan");
    const managed = managedByStore(error);
    if (managed) {
      await rememberPlan(null);
      const where = managed.store ? `en ${STORE_NAME[managed.store]}` : "desde la app";
      return { error: `Ya tenés tu plan, contratado ${where}. Lo ves en Mi plan.`, ...managed };
    }
    return failure(error);
  }
  redirect(checkoutUrl ?? "/alta/listo");
}

export async function cancelPlan(): Promise<FormState> {
  requireParticulares();
  const token = await sessionToken();
  if (!token) redirect("/ingresar");
  try {
    await platform("/v1/patient/me/subscription/cancel", { method: "POST", token });
  } catch (error) {
    if (error instanceof PlatformError && error.status === 401) redirect("/ingresar");
    const managed = managedByStore(error);
    if (managed) return { error: null, ...managed };
    return failure(error);
  }
  redirect("/mi-plan");
}

export interface WithdrawalState extends FormState {
  /** Código de identificación que devuelve la API cuando el pedido quedó registrado. */
  code?: string;
  receivedAt?: string;
}

/** Botón de arrepentimiento (Res. 424/2020): no pide cuenta ni sesión. */
export async function requestWithdrawal(_previous: WithdrawalState, form: FormData): Promise<WithdrawalState> {
  requireParticulares();
  const values = Object.fromEntries(
    ["fullName", "documentNumber", "email", "phone", "reason"].map((name) => [name, text(form, name)]),
  );
  const documentNumber = values.documentNumber.replace(/\D/g, "");
  const phone = values.phone ? argentineMobile(values.phone) : null;
  if (values.fullName.length < 3) return { error: "Escribí tu nombre y apellido.", values };
  if (documentNumber.length < 7 || documentNumber.length > 9) return { error: "Revisá el DNI.", values };
  if (values.phone && !phone) {
    return { error: "Revisá el celular: código de área y número, sin 0 ni 15.", values };
  }
  try {
    const created = await platform<{ code: string; receivedAt: string }>("/v1/public/withdrawal-requests", {
      method: "POST",
      body: {
        fullName: values.fullName, documentNumber, email: values.email.toLowerCase(),
        ...(phone ? { phone } : {}), ...(values.reason ? { reason: values.reason } : {}),
      },
    });
    // El pedido es público y la API no dice por qué canal se pagó. Sólo si quien lo manda tiene la sesión
    // abierta en la web sabemos si su plan es de una tienda, y entonces le avisamos quién reembolsa.
    const subscription = await sessionSubscription();
    const store = subscription ? storeOf(subscription) : null;
    return { error: null, code: created.code, receivedAt: created.receivedAt, ...(store ? { store } : {}) };
  } catch (error) {
    if (error instanceof PlatformError && error.status === 400) {
      return { error: "Revisá los datos: hay alguno que no es válido.", values };
    }
    return { ...failure(error), values };
  }
}
