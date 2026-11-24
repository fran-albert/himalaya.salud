import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CodeForm, ResendCode } from "@/components/particulares/forms";
import { Shell } from "@/components/particulares/shell";
import { pendingSignup, requireParticulares } from "@/lib/particulares/platform";

export const metadata: Metadata = { title: "Confirmá tu correo", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function CodigoPage() {
  requireParticulares();
  const signup = await pendingSignup();
  if (!signup) redirect("/alta");
  return (
    <Shell
      eyebrow="Paso 2 de 3" title="Revisá tu correo"
      lead={`Escribí el código que llegó a ${signup.email}. Vence en 15 minutos.`}
    >
      <CodeForm />
      <ResendCode />
    </Shell>
  );
}
