"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <div className="border border-gray-400 rounded-2xl shadow-xl flex flex-col gap-10 min-h-[80vh] px-20 py-20 my-5">
        <div>
          <h1 className="text-5xl font-bold text-center ">Continue as a</h1>
          <h2 className="text-3xl text-center font-semibold mt-4">
            We will personalise your experience accordingly
          </h2>
        </div>
        <div>
          <div className="flex gap-10 justify-center">
            <div
              onClick={() => router.push("/student/login")}
              className="border border-gray-400 rounded-2xl shadow-2xl p-5 flex flex-col gap-4 overflow-hidden cursor-pointer"
            >
              <Image
                src="https://static.vecteezy.com/system/resources/thumbnails/000/618/556/small/1005-06.jpg"
                alt="girl"
                width={200}
                height={200}
                className="object-cover scale-125"
              />
              <h1 className="text-2xl font-bold mt-auto text-center">
                Students
              </h1>
            </div>
            <div
              onClick={() => router.push("/teacher/login")}
              className="border border-gray-400 rounded-2xl shadow-2xl p-5 flex flex-col gap-4 cursor-pointer"
            >
              <Image
                src="/teacherlogo 2.png"
                alt="girl"
                width={200}
                height={200}
                className=""
              />
              <h1 className="text-2xl font-bold mt-auto text-center">
                Teacher
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
