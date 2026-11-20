export type Novedad = {
  version: string;
  /** Mes de publicación, en formato AAAA-MM. */
  month: string;
  title: string;
  items: string[];
  /** Aclaración corta, por ejemplo si todavía no salió en una de las tiendas. */
  note?: string;
};

// Una entrada por versión publicada de la app, la más nueva primero.
export const novedades: Novedad[] = [
  {
    version: "1.0.2",
    month: "2026-11",
    title: "El botón SOS, en la pantalla de tu teléfono",
    items: [
      "Podés poner el botón SOS en la pantalla de inicio del teléfono y usarlo sin abrir la app.",
      "Si pasaron unos minutos, la app vuelve a abrir en Inicio, con el botón a mano.",
    ],
    note: "Disponible en Android. En iPhone llega en los próximos días.",
  },
  {
    version: "1.0.1",
    month: "2026-11",
    title: "Ayuda más fácil de recorrer",
    items: ["Las preguntas frecuentes de la app ahora están ordenadas por tema."],
  },
  {
    version: "1.0",
    month: "2026-11",
    title: "Llegó SOS Protegete",
    items: [
      "Botón SOS: con un toque, la app llama y manda WhatsApp a tus contactos con tu ubicación.",
      "Ficha de emergencia, estudios y mediciones guardados en tu teléfono.",
      "Disponible en App Store y Google Play.",
    ],
  },
];

const MONTHS = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

export function formatNovedadMonth(month: string): string {
  const [year, monthNumber] = month.split("-");
  const name = MONTHS[Number(monthNumber) - 1];
  if (!name || !year) return month;
  return `${name.charAt(0).toUpperCase()}${name.slice(1)} de ${year}`;
}
