import Image from "next/image";
import React from "react";

const TeacherNavbar = () => {
  return (
    <div className="flex justify-between bg-gray-100 items-center px-6 pt-4">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl font-bold">Teacher Panel </h1>
        <h2>
          <Image src="/logo.png" alt="Logo" width={30} height={30} />
        </h2>
      </div>
    </div>
  );
};

export default TeacherNavbar;
