import connectDb from "@/config/connectDb";
connectDb();
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password }: { email: string; password: string } =
    await req.json();

  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { success: false, message: "User does not exist" },
      { status: 400 }
    );
  }

  const isValid = await user.comparePassword(password);
  if (!isValid) {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 400 }
    );
  }

  const accessToken = jwt.sign(
    { userId: user.id, email: user.email },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign(
    { userId: user.id },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: "30d" }
  );

  await User.updateOne(
    { _id: user.id },
    { $set: { refreshToken: refreshToken } }
  );

  const studentDetails = {
    accessToken,
    username: user.username,
  };
  const response = NextResponse.json(
    { success: true, message: "Logged in successfully", studentDetails },
    {
      status: 200,
    }
  );
  response.cookies.set("studentRefreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return response;
}
