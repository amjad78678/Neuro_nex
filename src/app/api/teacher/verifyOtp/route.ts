import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/config/actions";
import Teacher from "@/models/teacherModel";

export async function POST(req: NextRequest) {
  try {
    const { otp } = await req.json();
    const session = await getSession();
    console.log("Session Data:", session, "iam otp", otp);

    if (session.otp !== parseInt(otp)) {
      return NextResponse.json(
        { success: false, message: "Invalid OTP" },
        { status: 400 }
      );
    }
    if (!session || !session.teacher || !session.teacher.password) {
      return NextResponse.json(
        { success: false, message: "Session not found" },
        { status: 400 }
      );
    }

    const { confirmPassword, ...rest } = session.teacher;
    const teacherData = new Teacher(rest);
    await teacherData.save();

    session.otp = undefined;
    session.teacher = undefined;
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
