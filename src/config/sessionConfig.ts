import { SessionOptions } from "iron-session";

export interface User {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
export interface SessionData {
  user?: User;
  otp?: number;
  isLoggedIn?: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: "neuronex_session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
};

export const defaultSession: SessionData = {
  isLoggedIn: false,
};
