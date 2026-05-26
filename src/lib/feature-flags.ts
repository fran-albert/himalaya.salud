/**
 * Flags de features.
 *
 * Cada feature se activa con su variable de entorno (`.env.local` o env vars
 * del deploy). Si la var no está seteada o es distinta de "true", la feature
 * queda apagada. Por defecto todo está OFF.
 *
 * Variables disponibles:
 *  - NEXT_PUBLIC_FEATURE_MINIMAL_SITE → Modo mínimo del sitio. Cuando está
 *    en "true", el sitio queda reducido a la home mínima + /soporte +
 *    /terminos + /privacidad. Todo el resto (incluyendo /admin, /portal,
 *    /hci, /informacion, /profesionales, etc.) redirige a /.
 *    Pensado para el proceso de verificación de Apple Developer, donde solo
 *    queremos exponer las URLs requeridas (soporte, T&C, privacidad).
 *    Apagado por defecto: el sitio completo está activo.
 */
export const FEATURES = {
  minimalSite: process.env.NEXT_PUBLIC_FEATURE_MINIMAL_SITE === "true",
} as const;

/**
 * Rutas accesibles cuando `FEATURES.minimalSite` está activo.
 * El middleware redirige cualquier otra ruta a `/`.
 */
export const MINIMAL_SITE_ALLOWED_PATHS = [
  "/",
  "/soporte",
  "/terminos",
  "/privacidad",
] as const;
