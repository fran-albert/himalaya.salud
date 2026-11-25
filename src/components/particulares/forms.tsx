"use client";

import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BRAND } from "@/lib/brand-tokens";
import {
  cancelPlan, choosePlan, logIn, register, requestWithdrawal, resendCode, startPayment, verifyCode,
  type FormState, type ResendState, type WithdrawalState,
} from "@/lib/particulares/actions";
import { formatArs, formatDateTime, PERIOD_LABEL, PERIOD_UNIT, type BillingPeriod } from "@/lib/particulares/format";
import type { LegalReference, PublicPlan } from "@/lib/particulares/platform";
import { STORE_NAME, type Store } from "@/lib/particulares/subscription";
import { privacyUrl, termsUrl } from "@/lib/social-links";
import { buttonClass, Notice, Panel, primaryButton, Row, secondaryButton } from "./shell";
import { StoreCancelSteps } from "./store";

const initial: FormState = { error: null };

function Submit({ children, style = primaryButton }: { children: React.ReactNode; style?: React.CSSProperties }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={buttonClass} style={style}>
      {pending ? "Un momento…" : children}
    </button>
  );
}

function Field({ label, hint, ...input }: { label: string; hint?: string } & React.ComponentProps<typeof Input>) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={input.name}>{label}</Label>
      <Input id={input.name} required className="h-11 bg-white" {...input} />
      {hint && <p className="text-xs" style={{ color: BRAND.textCaption }}>{hint}</p>}
    </div>
  );
}

const AUDIENCE_LINE: Record<PublicPlan["audience"], string> = {
  individual: "Para vos.",
  family: "Para vos y tu familia.",
};

export function PlanPicker({ plans }: { plans: PublicPlan[] }) {
  const hasYear = plans.some((plan) => plan.prices.some((price) => price.period === "year"));
  const [period, setPeriod] = useState<BillingPeriod>("month");
  const offered = plans.filter((plan) => plan.prices.some((price) => price.period === period));
  const firstAvailable = offered.find((plan) => plan.audience === "individual")?.externalId ?? "";
  const [selected, setSelected] = useState(firstAvailable);
  const current = offered.some((plan) => plan.externalId === selected && plan.audience === "individual")
    ? selected : firstAvailable;
  const discount = plans.flatMap((plan) => plan.prices)
    .find((price) => price.period === "year" && price.discountPercent)?.discountPercent;

  return (
    <form action={choosePlan} className="space-y-4">
      <input type="hidden" name="period" value={period} />
      <input type="hidden" name="planExternalId" value={current} />
      {hasYear && (
        <div className="grid grid-cols-2 gap-1 p-1" role="group" aria-label="Período"
          style={{ backgroundColor: BRAND.teal50, borderRadius: 10 }}>
          {(["month", "year"] as const).map((option) => (
            <button
              key={option} type="button" aria-pressed={period === option} onClick={() => setPeriod(option)}
              className="py-2 text-sm font-semibold"
              style={{
                borderRadius: 8,
                backgroundColor: period === option ? BRAND.bg : "transparent",
                color: period === option ? BRAND.teal900 : BRAND.teal700,
              }}
            >
              {PERIOD_LABEL[option]}
              {option === "year" && discount ? ` · ${Number(discount)} % menos` : ""}
            </button>
          ))}
        </div>
      )}
      {offered.map((plan) => {
        const price = plan.prices.find((item) => item.period === period);
        const available = plan.audience === "individual";
        if (!price) return null;
        return (
          <label key={plan.externalId} className={available ? "block cursor-pointer" : "block opacity-70"}>
            <input
              type="radio" name="plan" className="sr-only" disabled={!available}
              checked={current === plan.externalId} onChange={() => setSelected(plan.externalId)}
            />
            <Panel selected={current === plan.externalId}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-lg font-bold" style={{ color: BRAND.teal900 }}>{plan.name}</span>
                {!available && (
                  <span className="text-xs font-semibold" style={{ color: BRAND.textCaption }}>Próximamente</span>
                )}
              </div>
              <p className="text-3xl font-bold tracking-tight" style={{ color: BRAND.teal700 }}>
                {formatArs(price.amountArs)}
                <span className="ml-1 text-sm font-normal" style={{ color: BRAND.textCaption }}>
                  {PERIOD_UNIT[period]}
                </span>
              </p>
              <p className="text-sm" style={{ color: BRAND.textBody }}>{AUDIENCE_LINE[plan.audience]}</p>
            </Panel>
          </label>
        );
      })}
      <button type="submit" disabled={!current} className={buttonClass} style={primaryButton}>Continuar</button>
    </form>
  );
}

export function RegisterForm({ legal }: { legal: LegalReference[] }) {
  const [state, action] = useActionState(register, initial);
  const kept = state.values ?? {};
  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="legalAcceptances" value={JSON.stringify(legal)} />
      <div className="grid grid-cols-2 gap-3">
        <Field label="Nombre" name="firstName" defaultValue={kept.firstName} autoComplete="given-name" maxLength={100} />
        <Field label="Apellido" name="lastName" defaultValue={kept.lastName} autoComplete="family-name" maxLength={100} />
      </div>
      <Field label="DNI" name="documentNumber" defaultValue={kept.documentNumber} inputMode="numeric" pattern="[0-9.]{7,11}" />
      <Field label="Celular" name="phone" defaultValue={kept.phone} type="tel" autoComplete="tel-national" placeholder="341 555 0123"
        hint="Con código de área, sin 0 ni 15." />
      <Field label="Correo" name="email" defaultValue={kept.email} type="email" autoComplete="email" maxLength={254} />
      <Field label="Contraseña" name="password" type="password" autoComplete="new-password" minLength={8}
        hint="Al menos 8 caracteres." />
      <label className="flex items-start gap-3 text-sm" style={{ color: BRAND.textBody }}>
        <Checkbox name="isAdult" required className="mt-0.5" />
        <span>Soy mayor de 18 años.</span>
      </label>
      <label className="flex items-start gap-3 text-sm" style={{ color: BRAND.textBody }}>
        <Checkbox name="terms" required className="mt-0.5" />
        <span>
          Leí y acepto los{" "}
          <a href={termsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline"
            style={{ color: BRAND.teal700 }}>Términos</a>{" "}y la{" "}
          <a href={privacyUrl} target="_blank" rel="noopener noreferrer" className="font-semibold underline"
            style={{ color: BRAND.teal700 }}>Política de privacidad</a>.
          Entiendo que SOS Protegete avisa a mis contactos y no reemplaza al 911.
        </span>
      </label>
      {state.error && <Notice tone="error">{state.error}</Notice>}
      <Submit>Continuar</Submit>
      <p className="text-center text-sm" style={{ color: BRAND.textCaption }}>
        ¿Ya tenés cuenta?{" "}
        <Link href="/ingresar" className="font-semibold" style={{ color: BRAND.teal700 }}>Ingresá</Link>
      </p>
    </form>
  );
}

export function CodeForm() {
  const [state, action] = useActionState(verifyCode, initial);
  const [code, setCode] = useState("");
  // Un código rechazado se borra solo: la persona escribe el nuevo sin tener que limpiar los casilleros.
  useEffect(() => { if (state.error) setCode(""); }, [state]);
  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="code" value={code} />
      <InputOTP maxLength={6} value={code} onChange={setCode} inputMode="numeric" pattern="[0-9]*"
        autoFocus containerClassName="justify-center" aria-label="Código de 6 números">
        <InputOTPGroup>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <InputOTPSlot key={index} index={index} className="h-12 w-11 bg-white text-lg" />
          ))}
        </InputOTPGroup>
      </InputOTP>
      {state.error && <Notice tone="error">{state.error}</Notice>}
      <Submit>Confirmar</Submit>
    </form>
  );
}

const RESEND_WAIT_SECONDS = 60;
const noResend: ResendState = { error: null, sentAt: null };

/** Va fuera del formulario del código: pedir otro no tiene que mandar lo que haya en los casilleros. */
export function ResendCode() {
  const [state, action, pending] = useActionState(resendCode, noResend);
  const [left, setLeft] = useState(RESEND_WAIT_SECONDS);
  useEffect(() => { if (state.sentAt) setLeft(RESEND_WAIT_SECONDS); }, [state.sentAt]);
  useEffect(() => {
    if (left <= 0) return;
    const timer = setTimeout(() => setLeft((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [left]);
  return (
    <form action={action} className="mt-5 space-y-3 text-center text-sm">
      {state.error && <Notice tone="error">{state.error}</Notice>}
      {state.sentAt && !state.error && <p role="status" style={{ color: BRAND.textCaption }}>Te mandamos otro código.</p>}
      {left > 0 ? (
        <p style={{ color: BRAND.textCaption }}>¿No llegó? Podés pedir otro en {left} s.</p>
      ) : (
        <button type="submit" disabled={pending} className="font-semibold underline underline-offset-4 disabled:opacity-60"
          style={{ color: BRAND.teal900 }}>
          {pending ? "Enviando…" : "Reenviar código"}
        </button>
      )}
    </form>
  );
}

export function LoginForm() {
  const [state, action] = useActionState(logIn, initial);
  return (
    <form action={action} className="space-y-4">
      <Field label="Correo" name="email" type="email" autoComplete="email" defaultValue={state.values?.email} />
      <Field label="Contraseña" name="password" type="password" autoComplete="current-password" />
      {state.error && <Notice tone="error">{state.error}</Notice>}
      <Submit>Ingresar</Submit>
    </form>
  );
}

export function PayForm() {
  const [state, action] = useActionState(startPayment, initial);
  if (state.managedByStore) {
    return (
      <div className="space-y-3">
        <Notice tone="warn">{state.error}</Notice>
        <Link href="/mi-plan" className={buttonClass} style={primaryButton}>Ver mi plan</Link>
      </div>
    );
  }
  return (
    <form action={action} className="space-y-3">
      {state.error && <Notice tone="error">{state.error}</Notice>}
      <Submit>Pagar con Mercado Pago</Submit>
    </form>
  );
}

export function CancelForm({ activeUntil }: { activeUntil: string }) {
  const [state, action] = useActionState(cancelPlan, initial);
  const [asking, setAsking] = useState(false);
  // La página creía que el plan era de Mercado Pago, pero la API dice que lo administra una tienda.
  if (state.managedByStore) {
    return <Panel><StoreCancelSteps store={state.store} /></Panel>;
  }
  if (!asking) {
    return (
      <button type="button" onClick={() => setAsking(true)} className={buttonClass}
        style={{ ...secondaryButton, color: BRAND.danger }}>
        Dar de baja
      </button>
    );
  }
  return (
    <Panel>
      <p className="text-base font-bold" style={{ color: BRAND.teal900 }}>¿Das de baja tu plan?</p>
      <p className="text-sm" style={{ color: BRAND.textBody }}>
        Tu SOS sigue activo hasta el {activeUntil}. No te cobramos más. Tu cuenta y tus datos quedan guardados.
      </p>
      {state.error && <Notice tone="error">{state.error}</Notice>}
      <form action={action} className="space-y-2">
        <Submit style={{ ...primaryButton, backgroundColor: BRAND.danger }}>Sí, dar de baja</Submit>
        <button type="button" onClick={() => setAsking(false)} className={buttonClass} style={secondaryButton}>
          Volver
        </button>
      </form>
    </Panel>
  );
}

/** «Cómo darlo de baja» de un plan de tienda: la web no puede darlo de baja, sólo explica dónde. */
export function StoreCancelHelp({ store }: { store: Store }) {
  const [open, setOpen] = useState(false);
  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className={buttonClass} style={secondaryButton}>
        Cómo darlo de baja
      </button>
    );
  }
  return (
    <Panel>
      <StoreCancelSteps store={store} />
      <button type="button" onClick={() => setOpen(false)} className={buttonClass} style={secondaryButton}>
        Volver
      </button>
    </Panel>
  );
}

/** Mientras el pago se confirma, vuelve a consultar el estado sin que la persona toque nada. */
export function RefreshWhilePending() {
  const router = useRouter();
  useEffect(() => {
    const timer = setInterval(() => router.refresh(), 5000);
    return () => clearInterval(timer);
  }, [router]);
  return null;
}

const noWithdrawal: WithdrawalState = { error: null };

export function WithdrawalForm() {
  const [state, action] = useActionState(requestWithdrawal, noWithdrawal);
  const kept = state.values ?? {};
  if (state.code) {
    return (
      <div className="space-y-4">
        <Notice tone="ok">Recibimos tu pedido.</Notice>
        <Panel>
          <span className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: BRAND.textCaption }}>
            Código de arrepentimiento
          </span>
          <p className="text-3xl font-bold tracking-tight select-all" style={{ color: BRAND.teal700 }}>
            {state.code}
          </p>
          {state.receivedAt && <Row label="Recibido el">{formatDateTime(state.receivedAt)}</Row>}
        </Panel>
        <p className="text-sm" style={{ color: BRAND.textBody }}>
          Guardá este código. Te escribimos al correo que dejaste para terminar el trámite.
        </p>
        {state.store && (
          <Notice tone="warn">
            Tu plan se contrató en {STORE_NAME[state.store]}: el reembolso lo procesa la tienda.
          </Notice>
        )}
      </div>
    );
  }
  return (
    <form action={action} className="space-y-4">
      <Field label="Nombre y apellido" name="fullName" defaultValue={kept.fullName} autoComplete="name" maxLength={200} />
      <Field label="DNI" name="documentNumber" defaultValue={kept.documentNumber} inputMode="numeric" pattern="[0-9.]{7,11}" />
      <Field label="Correo" name="email" defaultValue={kept.email} type="email" autoComplete="email" maxLength={254} />
      <Field label="Celular (opcional)" name="phone" defaultValue={kept.phone} type="tel" autoComplete="tel-national"
        placeholder="341 555 0123" required={false} />
      <div className="space-y-1.5">
        <Label htmlFor="reason">Motivo (opcional)</Label>
        <Textarea id="reason" name="reason" defaultValue={kept.reason} maxLength={500} rows={3} className="bg-white" />
      </div>
      {state.error && <Notice tone="error">{state.error}</Notice>}
      <Submit>Enviar pedido</Submit>
    </form>
  );
}
