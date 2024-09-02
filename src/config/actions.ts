"use server";
import { getIronSession } from "iron-session";
import { defaultSession, SessionData, sessionOptions } from "./sessionConfig";
import { cookies } from "next/headers";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  const plainSession = {
    isLoggedIn: session.isLoggedIn || defaultSession.isLoggedIn,
    userId: session.userId,
    username: session.username,
    otp: session.otp,
  };

  return plainSession;
};
