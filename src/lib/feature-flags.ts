/**
 * Flags de features.
 *
 * Cada feature se activa con su variable de entorno en `.env.local`
 * (o las env vars del deploy). Si la var no está seteada o es distinta de
 * "true", la feature queda apagada. Por defecto todo está OFF.
 *
 * Variables disponibles:
 *  - NEXT_PUBLIC_FEATURE_HCI            → muestra el contenido relativo a
 *    Historia Clínica Interoperable (sección "Próximo lanzamiento", stat del
 *    hero, referencias varias). Apagado mientras HCI esté próximo a lanzar.
 *  - NEXT_PUBLIC_FEATURE_INSTITUCIONES  → muestra la sección "Sumando
 *    instituciones a la red" con el CTA para que las instituciones adhieran.
 *    Apagado hasta que el onboarding institucional esté listo.
 */
export const FEATURES = {
  hci: process.env.NEXT_PUBLIC_FEATURE_HCI === "true",
  instituciones: process.env.NEXT_PUBLIC_FEATURE_INSTITUCIONES === "true",
} as const;
