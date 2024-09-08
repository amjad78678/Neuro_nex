import { getSession } from "@/config/actions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const session = await getSession();
  await session.destroy();
  await session.save();
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });
  response.cookies.set("studentRefreshToken", "", {
    httpOnly: true,
    maxAge: 0,
  });
  return response;
}
