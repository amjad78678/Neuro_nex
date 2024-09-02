import connectDb from "@/config/connectDb";
connectDb();
import { getSession } from "@/config/actions";
import User from "@/models/userModel";
import EmailService from "@/services/emailService";
import GenerateOtp from "@/services/generateOtp";
import { NextRequest, NextResponse } from "next/server";
const emailService = new EmailService();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("iam body------------", body);

    const existUser = await User.findOne({ email: body.email });
    if (existUser) {
      return NextResponse.json(
        { success: false, message: "User already exist" },
        { status: 400 }
      );
    }

    if (body.password !== body.confirmPassword) {
      return NextResponse.json(
        {
          success: false,
          message: "Password and Confirm Password does not match",
        },
        { status: 400 }
      );
    }

    const otp = await GenerateOtp();
    const obj = {
      to: body.email,
      subject: "NeuroNex Registration OTP",
      html: `
          <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
            <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
              <div style="text-align: center;">
                <img src="https://res.cloudinary.com/dkxtgziy2/image/upload/v1725258678/important/Screenshot_2024-09-02_115819_wc2rvn.png" alt="NeuroNex Logo" style="width: 300px; margin-bottom: 20px;">
              </div>
              <p style="font-size: 16px; color: #555555;">
                Dear User,
              </p>
              <p style="font-size: 16px; color: #555555;">
                Thank you for registering with NeuroNex. To complete your registration, please use the following OTP (One-Time Password):
              </p>
              <div style="text-align: center; margin: 20px 0;">
                <h1 style="font-size: 32px; color: #4CAF50; margin: 0;">${otp}</h1>
              </div>
              <p style="font-size: 16px; color: #555555;">
                Please enter this OTP on the registration page to verify your email address.
              </p>
              <p style="font-size: 16px; color: #555555;">
                If you did not request this OTP, please ignore this email.
              </p>
              <p style="font-size: 16px; color: #555555;">
                Best regards,<br>
                The NeuroNex Team
              </p>
           
            </div>
            <p style="text-align: center; font-size: 12px; color: #999999; margin-top: 20px;">
              © 2024 NeuroNex. All rights reserved.
            </p>
          </div>
        `,
    };

    // Use session to store OTP and email
    const session = await getSession();
    session.otp = otp;
    session.user = body;
    await session.save();

    setTimeout(async () => {
      session.otp = await GenerateOtp();
      await session.save();
    }, 2 * 60000);

    console.log("Session Data:", session);
    emailService.sendEmail(obj);
    return NextResponse.json({ success: true, otp }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
