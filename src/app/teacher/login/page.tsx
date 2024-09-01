import Link from "next/link";
import React from "react";

const LoginComponent = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen py-10">
      <div className="border border-gray-400 rounded-2xl shadow-xl p-14">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className="text-4xl font-bold text-center">Login with</h1>
            <h2 className="text-xl font-semibold text-center">
              Your credential
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <input
              className=" border border-black rounded-lg px-6 py-2"
              type="text"
              placeholder="Enter your email here..."
              name=""
              id=""
            />
            <input
              className="border border-black rounded-lg px-6 py-2"
              type="password"
              placeholder="Enter your password here..."
              name=""
              id=""
            />
            <button className="bg-black text-white px-5 py-2 rounded-lg">
              Continue
            </button>
          </div>
          <div>
            <p className="text-center">
              By continuing, you agree to our Terms and Conditions and Privacy
              Policy
            </p>
          </div>
          <div className="text-center">
            <p>Don't have an account?</p>
            <Link
              href="/teacher/signup"
              className="text-blue-600 hover:underline"
            >
              Sign up here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
