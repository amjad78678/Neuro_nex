"use server";
import { getIronSession } from "iron-session";
import { defaultSession, SessionData, sessionOptions } from "./sessionConfig";
import { cookies } from "next/headers";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  return session;
};
