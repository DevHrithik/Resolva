import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

declare module "@auth/core/types" {
  interface Session {
    onboarded?: boolean;
    roles?: string[];
    user?: {
      roles?: string[];
    };
  }
}

// Export auth as middleware
export default auth((req) => {
  const token = req.auth;
  const path = req.nextUrl.pathname;

  // Allow access to onboarding page if not onboarded
  if (path === "/onboarding") {
    if (token?.user?.onboarded) {
      // If already onboarded, redirect to appropriate dashboard
      const redirectPath = token.user?.roles?.includes("DEVELOPER")
        ? "/developer"
        : "/maintainer";
      return NextResponse.redirect(new URL(redirectPath, req.url));
    }
    return NextResponse.next(); // Allow access to onboarding
  }

  // Redirect to onboarding if not completed
  if (!token?.user?.onboarded && path !== "/onboarding") {
    return NextResponse.redirect(new URL("/onboarding", req.url));
  }

  // Check role-based access
  if (
    path.startsWith("/developer") &&
    !token?.user?.roles?.includes("DEVELOPER")
  ) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (
    path.startsWith("/maintainer") &&
    !token?.user?.roles?.includes("MAINTAINER")
  ) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/developer/:path*",
    "/maintainer/:path*",
    "/onboarding",
    "/api/onboarding",
  ],
};
