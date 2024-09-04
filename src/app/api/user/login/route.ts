import { NextRequest, NextResponse } from "next/server";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    const user = await fetchUserFromDatabase(email);

    if (!user) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isValid = await compare(password, user.passwordHash);

    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
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
      { expiresIn: "7d" }
    );

    await saveRefreshTokenToDatabase(user.id, refreshToken);

    const response = NextResponse.json({ accessToken });
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

async function fetchUserFromDatabase(email: string) {
  if (email === "user@example.com") {
    return {
      id: "1",
      email: "user@example.com",
      passwordHash:
        "$2b$10$VfW6OXPNnE7S.3KvOjS01OO3vPIUU2KMRI6G.3KMUFXGt.8GhyEWG", // hashed 'password123'
    };
  }
  return null;
}

async function saveRefreshTokenToDatabase(
  userId: string,
  refreshToken: string
) {
  console.log(`Saving refresh token for user ${userId}`);
}
