import { NextResponse, type NextRequest } from "next/server";

/**
 * Locale routing.
 *  - English is the default and lives at the root:   /about
 *  - Spanish lives under /es:                         /es/about
 * Unprefixed requests are rewritten internally to /en/... so the
 * app/[locale] tree handles everything. /en/... is redirected to the
 * canonical unprefixed URL.
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = req.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, "") || "/";
    return NextResponse.redirect(url, 308);
  }

  if (pathname === "/es" || pathname.startsWith("/es/")) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next internals, metadata files and public asset folders.
  // (Do NOT exclude all dotted paths: segment prefetches use "/about.segments/….rsc".)
  matcher: ["/((?!api|_next|brand|images|media|sitemap\\.xml|robots\\.txt|favicon\\.ico).*)"],
};
