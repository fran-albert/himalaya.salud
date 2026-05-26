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
 *  - NEXT_PUBLIC_FEATURE_MINIMAL_SITE   → modo mínimo del sitio. Cuando está
 *    en "true", el sitio queda reducido a la home mínima + /contacto +
 *    /terminos + /privacidad. Cualquier otra ruta redirige a /. Pensado
 *    para el proceso de verificación de Apple Developer, donde solo
 *    queremos exponer las URLs requeridas (soporte, T&C, privacidad).
 *    Apagado por defecto: el sitio completo está activo.
 */
export const FEATURES = {
  hci: process.env.NEXT_PUBLIC_FEATURE_HCI === "true",
  instituciones: process.env.NEXT_PUBLIC_FEATURE_INSTITUCIONES === "true",
  minimalSite: process.env.NEXT_PUBLIC_FEATURE_MINIMAL_SITE === "true",
} as const;

/**
 * Rutas accesibles cuando `FEATURES.minimalSite` está activo.
 * El middleware redirige cualquier otra ruta a `/`.
 */
export const MINIMAL_SITE_ALLOWED_PATHS = [
  "/",
  "/contacto",
  "/terminos",
  "/privacidad",
] as const;
