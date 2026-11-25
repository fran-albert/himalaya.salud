import Link from "next/link";
import { BRAND } from "@/lib/brand-tokens";
import { STORE_NAME, type Store } from "@/lib/particulares/subscription";
import { buttonClass, Notice, primaryButton } from "./shell";

/** Dónde se administra el plan, dicho como lo ve la persona. */
export const MANAGED_FROM: Record<Store, string> = { apple: "tu iPhone", google: "Google Play" };

const STEPS: Record<Store, string[]> = {
  apple: ["Abrí Ajustes.", "Tocá tu nombre.", "Entrá a Suscripciones.", "Elegí SOS Protegete.", "Tocá Cancelar."],
  google: [
    "Abrí Google Play.",
    "Tocá tu foto de perfil.",
    "Entrá a Pagos y suscripciones.",
    "Tocá Suscripciones.",
    "Elegí SOS Protegete.",
    "Tocá Cancelar.",
  ],
};

const DEVICE: Record<Store, string> = { apple: "En el iPhone", google: "En Android" };

function Steps({ store }: { store: Store }) {
  return (
    <ol className="list-decimal space-y-1 pl-5 text-sm" style={{ color: BRAND.textBody }}>
      {STEPS[store].map((step) => <li key={step}>{step}</li>)}
    </ol>
  );
}

/** Pasos para dar de baja un plan de tienda. Sin tienda conocida, muestra los de las dos. */
export function StoreCancelSteps({ store }: { store?: Store }) {
  return (
    <>
      <p className="text-base font-bold" style={{ color: BRAND.teal900 }}>
        {store ? `Se da de baja desde ${MANAGED_FROM[store]}` : "Se da de baja desde la tienda"}
      </p>
      {store ? <Steps store={store} /> : (["apple", "google"] as const).map((each) => (
        <div key={each} className="space-y-1">
          <p className="text-sm font-semibold" style={{ color: BRAND.teal900 }}>{DEVICE[each]}</p>
          <Steps store={each} />
        </div>
      ))}
      <p className="text-sm" style={{ color: BRAND.textBody }}>Seguís con el plan hasta el fin de lo ya pagado.</p>
    </>
  );
}

/** Para quien ya tiene un plan vivo comprado en una tienda: no se le ofrece contratar otro. */
export function StorePlanTaken({ store }: { store: Store }) {
  return (
    <>
      <Notice tone="ok">Ya tenés tu plan, contratado en {STORE_NAME[store]}.</Notice>
      <Link href="/mi-plan" className={buttonClass} style={primaryButton}>Ver mi plan</Link>
    </>
  );
}
