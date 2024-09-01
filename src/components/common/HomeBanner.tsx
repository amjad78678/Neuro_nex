import Image from "next/image";
import React from "react";

const HomeBanner = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-8 px-20">
          <h1 className="text-5xl font-bold">
            Learn new skills online with ease
          </h1>
          <p>
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-black text-white rounded-lg">
              Start learning now
            </button>
            <button className="px-4 py-2 border border-black rounded-lg">
              Explore Courses
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-screen">
        <Image className="" src="/girlRead.png" alt="" fill />
      </div>
    </div>
  );
};

export default HomeBanner;
