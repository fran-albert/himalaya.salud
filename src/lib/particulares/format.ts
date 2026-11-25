export type BillingPeriod = "month" | "year";

export const PERIOD_LABEL: Record<BillingPeriod, string> = { month: "Mensual", year: "Anual" };
export const PERIOD_UNIT: Record<BillingPeriod, string> = { month: "por mes", year: "por año" };

export function formatArs(amount: string): string {
  const value = Number(amount);
  return `$ ${value.toLocaleString("es-AR", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

/** Monto en cualquier moneda: pesos como siempre; el resto con su código ISO delante (USD 4,99). */
export function formatMoney(amount: string, currency: string): string {
  if (currency === "ARS") return formatArs(amount);
  return `${currency} ${Number(amount).toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("es-AR", {
    day: "2-digit", month: "2-digit", year: "numeric", timeZone: "America/Argentina/Buenos_Aires",
  });
}

export function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("es-AR", {
    day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit",
    timeZone: "America/Argentina/Buenos_Aires",
  });
}

/** Celular argentino tal como lo escribe la persona → +549XXXXXXXXXX. Null si no tiene 10 dígitos. */
export function argentineMobile(input: string): string | null {
  let digits = input.replace(/\D/g, "");
  if (digits.startsWith("549")) digits = digits.slice(3);
  else if (digits.startsWith("54")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = digits.slice(1);
  return digits.length === 10 ? `+549${digits}` : null;
}
