import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { MINIMAL_SITE_ALLOWED_PATHS } from "@/lib/feature-flags";

const minimalSiteEnabled = process.env.NEXT_PUBLIC_FEATURE_MINIMAL_SITE === "true";
const minimalSitePaths = new Set<string>(MINIMAL_SITE_ALLOWED_PATHS);
const protectedRoutes = ["/portal/dashboard", "/admin"];
const refreshTokenCookie = "doctor_refresh_token";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Preserve the portal's authentication guard when integrating the public site.
  const isProtected = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  if (isProtected && !request.cookies.has(refreshTokenCookie)) {
    const loginUrl = new URL("/portal/login", request.url);
    loginUrl.searchParams.set("redirect", `${pathname}${request.nextUrl.search}`);
    return NextResponse.redirect(loginUrl);
  }

  const isManagementRoute = ["/portal", "/admin"].some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
  if (minimalSiteEnabled && !isManagementRoute && !minimalSitePaths.has(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // A stale cookie must not redirect login back to the dashboard.
  // AuthProvider and the backend validate the session and permissions.
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|fonts|.*\\..*).*)"],
};
