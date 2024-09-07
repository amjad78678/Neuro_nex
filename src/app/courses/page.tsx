"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState<string>("Web Development");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="p-5 md:px-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold mt-4">
              All the skills you need in one place
            </h1>
            <h2 className="text-xl text-slate-500">
              From critical skills to technical topics, Udemy supports your
              professional development.
            </h2>
          </div>
        </div>
        {/* Navitems for courses */}
        <div className="flex gap-4 items-end border-b border-slate-400">
          {[
            "Web Development",
            "It Certifications",
            "Leadership",
            "Data Science",
            "Communication",
            "Business Analytics & Intelligence",
          ].map((tab) => (
            <h1
              key={tab}
              onClick={() => handleClick(tab)}
              className={`font-bold cursor-pointer pb-3
            ${
              activeTab === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black border-b-2 border-transparent"
            }`}
            >
              {tab}
            </h1>
          ))}
        </div>
        {/* Course name big bbuttons */}
        <div className="flex gap-5 mb-4">
          <div className="bg-black text-white px-6 py-3 rounded-full">
            <h1 className="font-bold">Web Development</h1>
            <p className="text-sm">13.5k learners</p>
          </div>
          <div className="bg-slate-200 text-black px-6 py-3 rounded-full">
            <h1 className="font-bold">Javascript</h1>
            <p className="text-sm">13.5k learners</p>
          </div>
          <div className="bg-slate-200 text-black px-6 py-3 rounded-full">
            <h1 className="font-bold">React JS</h1>
            <p className="text-sm">13.5k learners</p>
          </div>
          <div className="bg-slate-200 text-black px-6 py-3 rounded-full">
            <h1 className="font-bold">Angular</h1>
            <p className="text-sm">13.5k learners</p>
          </div>
        </div>

        {/* Course card section */}
        <div className="grid grid-cols-4 gap-5">
          <div className="border rounded-lg flex flex-col h-[60vh]">
            <div className="h-[50%] relative">
              <Image
                src="/classes.jpg"
                alt="girl"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="h-[50%] px-4 py-2 flex flex-col gap-2">
              <h1 className="font-bold">
                The Complete Web Development Bootcamp
              </h1>
              <p className="text-sm text-slate-500">Dr Shreyas Jaiswal</p>
              <h2 className="text-sm">4.7 (13.5k students)</h2>
              <h3 className="font-bold">₹1,000</h3>
              <button className=" bg-green-400 text-white px-2 py-1 w-1/4 text-xs text-center">
                Bestseller
              </button>
            </div>
          </div>
          <div className="border rounded-lg flex flex-col h-[60vh]">
            <div className="h-[50%] relative">
              <Image
                src="/girlImage.png"
                alt="girl"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="h-[50%] px-4 py-2 flex flex-col gap-2">
              <h1 className="font-bold">
                The Complete Web Development Bootcamp
              </h1>
              <p className="text-sm text-slate-500">Dr Shreyas Jaiswal</p>
              <h2 className="text-sm">4.7 (13.5k students)</h2>
              <h3 className="font-bold">₹1,000</h3>
              <button className=" bg-green-400 text-white px-2 py-1 w-1/4 text-xs text-center">
                Bestseller
              </button>
            </div>
          </div>
          <div className="border rounded-lg flex flex-col h-[60vh]">
            <div className="h-[50%] relative">
              <Image
                src="/classes.jpg"
                alt="girl"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="h-[50%] px-4 py-2 flex flex-col gap-2">
              <h1 className="font-bold">
                The Complete Web Development Bootcamp
              </h1>
              <p className="text-sm text-slate-500">Dr Shreyas Jaiswal</p>
              <h2 className="text-sm">4.7 (13.5k students)</h2>
              <h3 className="font-bold">₹1,000</h3>
              <button className=" bg-green-400 text-white px-2 py-1 w-1/4 text-xs text-center">
                Bestseller
              </button>
            </div>
          </div>
          <div className="border rounded-lg flex flex-col h-[60vh]">
            <div className="h-[50%] relative">
              <Image
                src="/girlImage.png"
                alt="girl"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="h-[50%] px-4 py-2 flex flex-col gap-2">
              <h1 className="font-bold">
                The Complete Web Development Bootcamp
              </h1>
              <p className="text-sm text-slate-500">Dr Shreyas Jaiswal</p>
              <h2 className="text-sm">4.7 (13.5k students)</h2>
              <h3 className="font-bold">₹1,000</h3>
              <button className=" bg-green-400 text-white px-2 py-1 w-1/4 text-xs text-center">
                Bestseller
              </button>
            </div>
          </div>
        </div>

        <div>
          <Button className="px-3 py-6 border border-black bg-white text-black font-bold text-md rounded-none hover:bg-slate-200">
            Show all Web Development courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default page;
