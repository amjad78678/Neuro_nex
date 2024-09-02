import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/config/actions";

export async function POST(req: NextRequest) {
  try {
    const { otp } = await req.json();
    const session = await getSession();
    console.log("Session Data:", session);

    if (session.otp !== parseInt(otp)) {
      return NextResponse.json(
        { success: false, message: "Invalid OTP" },
        { status: 400 }
      );
    }

    session.otp = undefined;
    await session.save();
    return NextResponse.json(
      { success: true, message: "OTP validated successfully" }, 
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
