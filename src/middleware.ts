import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that require authentication
const protectedRoutes = ['/portal/dashboard', '/admin'];

// Routes that should redirect to dashboard if already authenticated
const authRoutes = ['/portal/login', '/portal/register'];

// Cookie name for refresh token (must match backend)
const REFRESH_TOKEN_COOKIE = 'doctor_refresh_token';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if user has a refresh token cookie (indicates they're logged in)
  const hasSession = request.cookies.has(REFRESH_TOKEN_COOKIE);

  // Check if accessing protected routes
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Check if accessing auth routes
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route));

  // Redirect to login if trying to access protected route without session
  if (isProtectedRoute && !hasSession) {
    const loginUrl = new URL('/portal/login', request.url);
    const fullPath = request.nextUrl.search ? `${pathname}${request.nextUrl.search}` : pathname;
    loginUrl.searchParams.set('redirect', fullPath);
    return NextResponse.redirect(loginUrl);
  }

  // Allow auth routes even with cookie — the cookie may be expired/revoked.
  // The AuthProvider client-side will handle redirecting authenticated users away
  // from login/register pages. This avoids redirect loops with stale cookies.

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all portal routes
    '/portal/:path*',
    // Match all admin routes
    '/admin/:path*',
  ],
};
