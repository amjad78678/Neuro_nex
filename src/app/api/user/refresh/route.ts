import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const ACCESS_TOKEN_SECRET = "your-access-token-secret";
const REFRESH_TOKEN_SECRET = "your-refresh-token-secret";

export async function POST(req: NextRequest) {
  const refreshToken = req.cookies.get("refreshToken")?.value;

  if (!refreshToken) {
    return NextResponse.json(
      { message: "Refresh token required" },
      { status: 401 }
    );
  }

  try {
    const decoded = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET) as {
      userId: string;
    };

    // Verify if the refresh token is in the database and not revoked
    const isValid = await verifyRefreshTokenInDatabase(
      decoded.userId,
      refreshToken
    );

    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid refresh token" },
        { status: 403 }
      );
    }

    const user = await fetchUserFromDatabase(decoded.userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const newAccessToken = jwt.sign(
      { userId: user.id, email: user.email },
      ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );

    return NextResponse.json({ accessToken: newAccessToken });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid refresh token" },
      { status: 403 }
    );
  }
}

// Implement these functions
async function verifyRefreshTokenInDatabase(
  userId: string,
  refreshToken: string
) {
  // Check if the refresh token is valid and not revoked
  return true; // Placeholder
}

async function fetchUserFromDatabase(userId: string) {
  // Fetch user from database
  return { id: userId, email: "user@example.com" }; // Placeholder
}
