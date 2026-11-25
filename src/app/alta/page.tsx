import type { Metadata } from "next";
import { RegisterForm } from "@/components/particulares/forms";
import { Notice, Shell } from "@/components/particulares/shell";
import { StorePlanTaken } from "@/components/particulares/store";
import { platform, requireParticulares, sessionSubscription, type LegalReference } from "@/lib/particulares/platform";
import { liveStorePlan } from "@/lib/particulares/subscription";

export const metadata: Metadata = { title: "Crear cuenta", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function AltaPage() {
  requireParticulares();
  const store = liveStorePlan(await sessionSubscription());
  if (store) {
    return <Shell eyebrow="Mi plan" title="Ya tenés tu plan"><StorePlanTaken store={store} /></Shell>;
  }
  const legal = await platform<{ documents: LegalReference[] }>("/v1/legal/documents/current")
    .then((result) => result.documents.map(({ documentId, version, contentHash }) => ({ documentId, version, contentHash })))
    .catch(() => null);
  return (
    <Shell eyebrow="Paso 1 de 3" title="Creá tu cuenta">
      {legal === null
        ? <Notice tone="error">No pudimos cargar el formulario. Probá de nuevo en un rato.</Notice>
        : <RegisterForm legal={legal} />}
    </Shell>
  );
}
