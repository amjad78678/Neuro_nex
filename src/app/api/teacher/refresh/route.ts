import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

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

        const user = await User.findById(decoded.userId);
        if (!user || user.refreshToken !== refreshToken) {
          return NextResponse.json(
            { message: "Invalid refresh token" },
            { status: 403 }
          );
        }

        const accessToken = jwt.sign(
          { userId: user.id, email: user.email },
          process.env.ACCESS_TOKEN_SECRET!,
          { expiresIn: "15m" }
        );

        const newRefreshToken = jwt.sign(
          { userId: user.id },
          process.env.REFRESH_TOKEN_SECRET!,
          { expiresIn: "30d" }
        );

        user.refreshToken = newRefreshToken;
        await user.save();

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
