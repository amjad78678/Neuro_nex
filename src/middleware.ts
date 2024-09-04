import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const path = url.pathname;
  if (
    path === "/api/teacher/login" ||
    path === "/api/teacher/signup" ||
    path === "/api/teacher/logout"
  ) {
    return NextResponse.next();
  }

  const authorizationHeader = req.headers.get("Authorization");
  const accessToken = authorizationHeader?.split(" ")[1];

  if (!accessToken) {
    return NextResponse.json(
      { message: "Access token missing" },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json(
      { message: "Access token is invalid or expired" },
      { status: 401 }
    );
  }
}

export const config = {
  matcher: ["/api/teacher/:path*"],
};
