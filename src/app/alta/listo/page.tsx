import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { RefreshWhilePending } from "@/components/particulares/forms";
import { buttonClass, Notice, primaryButton, secondaryButton, Shell } from "@/components/particulares/shell";
import { currentSubscription, requireParticulares } from "@/lib/particulares/platform";
import { appStoreUrl, googlePlayUrl } from "@/lib/social-links";

export const metadata: Metadata = { title: "Tu plan", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function ListoPage() {
  requireParticulares();
  const subscription = await currentSubscription();
  if (subscription === "unauthenticated") redirect("/ingresar");
  if (!subscription) redirect("/planes");
  if (subscription.status === "pending") {
    return (
      <Shell eyebrow="Tu plan" title="Estamos confirmando tu pago" lead="Suele tardar menos de un minuto.">
        <RefreshWhilePending />
        <Notice tone="warn">Todavía no nos llegó la confirmación.</Notice>
        {subscription.checkoutUrl && (
          <a href={subscription.checkoutUrl} className={buttonClass} style={secondaryButton}>Volver al pago</a>
        )}
      </Shell>
    );
  }
  return (
    <Shell eyebrow="Tu plan" title="Listo. Ya tenés tu plan" lead="Bajá la app y entrá con tu correo y tu contraseña.">
      <Notice tone="ok">Pago aprobado</Notice>
      <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className={buttonClass} style={primaryButton}>
        Descargar para iPhone
      </a>
      <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer" className={buttonClass} style={primaryButton}>
        Descargar para Android
      </a>
      <Link href="/mi-plan" className={buttonClass} style={secondaryButton}>Ver mi plan</Link>
    </Shell>
  );
}
