import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // If accessing root, redirect to /en
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  // Allow all other requests to pass through
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
