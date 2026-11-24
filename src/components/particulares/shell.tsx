import { BRAND, SHADOW } from "@/lib/brand-tokens";

/** Marco común de las páginas de contratación: columna angosta, pensada para el celular. */
export function Shell({
  eyebrow, title, lead, children,
}: {
  eyebrow: string; title: string; lead?: string; children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: BRAND.bgSecondary }}>
      <div className="container mx-auto px-4 pt-12 pb-24">
        <div className="mx-auto max-w-md">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: BRAND.mint900 }}
          >
            {eyebrow}
          </span>
          <h1
            className="mt-3 text-3xl md:text-4xl font-bold tracking-tight leading-tight text-balance"
            style={{ color: BRAND.teal700 }}
          >
            {title}
          </h1>
          {lead && (
            <p className="mt-3 text-base leading-relaxed" style={{ color: BRAND.textBody }}>{lead}</p>
          )}
          <div className="mt-8 space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function Panel({ children, selected = false }: { children: React.ReactNode; selected?: boolean }) {
  return (
    <div
      className="p-5 space-y-3"
      style={{
        backgroundColor: BRAND.bg,
        border: `1px solid ${selected ? BRAND.teal700 : BRAND.teal50}`,
        borderRadius: 16,
        boxShadow: selected ? `0 0 0 1px ${BRAND.teal700}` : SHADOW.card,
      }}
    >
      {children}
    </div>
  );
}

export function Notice({ tone, children }: { tone: "ok" | "warn" | "error"; children: React.ReactNode }) {
  const colors = {
    ok: { backgroundColor: BRAND.mint50, color: BRAND.mint900 },
    warn: { backgroundColor: "#FFF3E0", color: "#7A3D0C" },
    error: { backgroundColor: "#FCE7E9", color: "#A4161F" },
  }[tone];
  return (
    <p
      role={tone === "error" ? "alert" : "status"}
      className="text-sm font-medium"
      style={{ ...colors, borderRadius: 10, padding: "10px 14px" }}
    >
      {children}
    </p>
  );
}

export function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline justify-between gap-4 text-sm">
      <span style={{ color: BRAND.textCaption }}>{label}</span>
      <span className="font-semibold text-right" style={{ color: BRAND.textBody }}>{children}</span>
    </div>
  );
}

export const primaryButton: React.CSSProperties = {
  backgroundColor: BRAND.teal700, color: "#FFFFFF", borderRadius: 8, padding: "14px 22px",
};
export const secondaryButton: React.CSSProperties = {
  backgroundColor: BRAND.bg, color: BRAND.teal700, borderRadius: 8, padding: "14px 22px",
  border: `1px solid ${BRAND.teal100}`,
};
export const buttonClass =
  "inline-flex w-full items-center justify-center gap-2 text-sm font-semibold transition-opacity disabled:opacity-60";
