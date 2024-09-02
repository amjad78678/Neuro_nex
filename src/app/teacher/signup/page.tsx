"use client";
import Otp from "@/components/common/Otp";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center min-h-screen py-10">
        <div className="border border-gray-400 rounded-2xl shadow-xl p-14">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-4xl font-bold text-center">Signup with</h1>
              <h2 className="text-xl font-semibold text-center">
                Your credential
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <input
                className=" border border-black rounded-lg px-6 py-2"
                type="text"
                placeholder="Enter your username here..."
                name=""
                id=""
              />
              <input
                className=" border border-black rounded-lg px-6 py-2"
                type="text"
                placeholder="Enter your email here..."
                name=""
                id=""
              />
              <input
                className=" border border-black rounded-lg px-6 py-2"
                type="text"
                placeholder="Enter your password here..."
                name=""
                id=""
              />
              <input
                className=" border border-black rounded-lg px-6 py-2"
                type="text"
                placeholder="Enter your confirm password here..."
                name=""
                id=""
              />
              <button className="bg-black text-white px-5 py-2 rounded-lg">
                Create
              </button>
            </div>
            <div>
              <p className="text-center">
                By continue, you agree to our Terms and condition and Privacy
                Policy{" "}
              </p>
            </div>

            <div className="text-center">
              <p>Already have an account?</p>
              <Link
                href="/teacher/login"
                className="text-blue-600 hover:underline"
              >
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Otp {...{ isOpen, closeDialog }} />
    </>
  );
};

export default page;
