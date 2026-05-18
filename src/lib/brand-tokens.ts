/**
 * Tokens del brandkit oficial Himalaya Salud v2.
 *
 * Fuente: himalaya_salud_brand_kit_v2.html
 *
 * Reglas de uso:
 * - Headings (H1/H2/H3): teal700 (#0C606E)
 * - Body text: textBody (#212529)
 * - Caption / texto secundario: textCaption (#6C757D)
 * - Mint 500 y Verde Claro: SOLO decorativo (no cumplen AA para texto)
 * - Mint 900: único mint AA para texto sobre blanco
 * - Botones primarios: bg teal700, radius 8px, padding 10/18, white text
 * - Cards: radius 16px, shadow `0 2px 8px rgba(12,96,110,0.08)`
 * - Banner success: bg mint50, texto/icono mint900
 */
export const BRAND = {
  // Paleta oficial
  verdeClaro: "#8FDFA1", // decorativo (1.6:1)
  mint500: "#70C9A6", // acento oficial - decorativo (2.0:1)
  teal700: "#0C606E", // primario oficial - headings y CTA primario

  // Escala mint derivada
  mint50: "#EAF8F1",
  mint100: "#C8EED5",
  mint700: "#4BA585",
  mint900: "#2D7A60", // único mint AA para texto sobre blanco

  // Escala teal derivada
  teal50: "#E6F0F2",
  teal100: "#B8D4D9",
  teal600: "#1B7382",
  teal900: "#073942",

  // Tokens semánticos
  success: "#70C9A6",
  danger: "#E63946",
  warning: "#F4A261",
  info: "#0C606E",

  // Texto
  textBody: "#212529",
  textCaption: "#6C757D",

  // Fondos
  bg: "#FFFFFF",
  bgSecondary: "#F8F9FA",
} as const;

export const SHADOW = {
  card: "0 2px 8px rgba(12,96,110,0.08)",
  cardHover: "0 8px 24px rgba(12,96,110,0.12)",
  hero: "0 20px 60px rgba(12,96,110,0.18)",
  cta: "0 20px 60px rgba(7,57,66,0.20)",
} as const;
