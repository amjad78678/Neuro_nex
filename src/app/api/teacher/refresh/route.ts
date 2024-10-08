import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import Teacher from "@/models/teacherModel";

export async function GET(req: NextRequest) {
  try {
    const cookies = req.cookies as any;
    const refreshToken = cookies.teacherRefreshToken;

    if (!refreshToken) {
      return NextResponse.json(
        { message: "Refresh token is missing" },
        { status: 401 }
      );
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET!,
      async (err: any, decoded: any) => {
        if (err) {
          return NextResponse.json(
            { message: "Refresh token is invalid or expired" },
            { status: 403 }
          );
        }

        const teacher = await Teacher.findById(decoded.userId);
        if (!teacher || teacher.refreshToken !== refreshToken) {
          return NextResponse.json(
            { message: "Invalid refresh token" },
            { status: 403 }
          );
        }

        const accessToken = jwt.sign(
          { userId: teacher.id, email: teacher.email },
          process.env.ACCESS_TOKEN_SECRET!,
          { expiresIn: "15m" }
        );

        const newRefreshToken = jwt.sign(
          { userId: teacher.id },
          process.env.REFRESH_TOKEN_SECRET!,
          { expiresIn: "30d" }
        );

        teacher.refreshToken = newRefreshToken;
        await teacher.save();

        const response = NextResponse.json({ accessToken });
        response.cookies.set("refreshToken", newRefreshToken, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 30 * 24 * 60 * 60 * 1000,
        });

        return response;
      }
    );
  } catch (error) {
    console.error("Token refresh error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
