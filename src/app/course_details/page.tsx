import React from "react";
import { TbInfoHexagonFilled } from "react-icons/tb";
import { AiOutlineGlobal } from "react-icons/ai";

const page = () => {
  return (
    <div className="grid grid-cols-12 bg-gray-800 min-h-[70vh]">
      <div className="col-span-8  text-white px-10 flex flex-col gap-6 py-14">
        <h1 className="text-4xl font-bold">
          The Complete 2024 Web Development Bootcamp
        </h1>
        <h2 className="text-xl">
          Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
          Javascript, Node, React, PostgreSQL, Web3 and DApps
        </h2>
        <div className="flex gap-2">
          <button className=" bg-green-400 text-white px-2 py-1 text-xs text-center">
            Bestseller  
          </button>
          <p className="text-md">4.7 (13.5k students)</p>
        </div>
        <h2 className="text-md">Created by: Dr. Shreyas Jaiswal</h2>
        <div className=" flex gap-1 items-center">
          <p>
            <TbInfoHexagonFilled />
          </p>
          <p className="text-md">Last updated: 1 year ago</p>
          <p><AiOutlineGlobal/></p>
          <p className="text-md">English</p>
        </div>
      </div>

      <div className="col-span-4"></div>
    </div>
  );
};

export default page;
