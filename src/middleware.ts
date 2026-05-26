import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Minimal-site mode (Apple Developer review). Cuando está activo solo se
// sirven las rutas listadas; el resto redirige a `/`.
const MINIMAL_SITE_ENABLED =
  process.env.NEXT_PUBLIC_FEATURE_MINIMAL_SITE === "true";
const MINIMAL_SITE_ALLOWED_PATHS = new Set<string>([
  "/",
  "/contacto",
  "/terminos",
  "/privacidad",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (MINIMAL_SITE_ENABLED && !MINIMAL_SITE_ALLOWED_PATHS.has(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Match everything except Next internals, API routes and static assets.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|fonts|.*\\..*).*)"],
};
