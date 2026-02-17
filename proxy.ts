import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.trigital.in";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const response = NextResponse.next();

  // Pass pathname to layout for canonical (server can read this header)
  response.headers.set("x-pathname", url.pathname);

  const host = request.headers.get("host") ?? "";
  const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1");
  if (isLocal || !IS_PRODUCTION) {
    return response;
  }

  const isHttps = request.headers.get("x-forwarded-proto") === "https" || url.protocol === "https:";
  const canonicalHost = new URL(SITE_URL).host;

  // 301: HTTP → HTTPS
  if (!isHttps && canonicalHost) {
    url.protocol = "https:";
    url.host = canonicalHost;
    return NextResponse.redirect(url.toString(), 301);
  }

  // 301: non-canonical host → canonical (e.g. trigital.in → www.trigital.in)
  if (host && canonicalHost && host !== canonicalHost) {
    url.protocol = "https:";
    url.host = canonicalHost;
    return NextResponse.redirect(url.toString(), 301);
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all pathnames except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
