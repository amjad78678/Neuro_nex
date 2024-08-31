import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col items-center">
        <h1 className="text-start font-bold">Subscribe to our newsletter</h1>
        <p className="text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 pt-20 border-b-2 border-slate-800 pb-10">
        <div>
          <div className="flex gap-2 items-center">
            <Image src={"/logo.png"} alt="" width={30} height={30} />
            <h1 className="text-2xl font-bold">NeuroNex</h1>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold">Courses</h1>
          <h1 className="">Business</h1>
          <h1 className="">Development</h1>
          <h1 className="">Technology</h1>
          <h1 className="">Design</h1>
          <h1 className="">Programming</h1>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold">Courses</h1>
          <h1 className="">Business</h1>
          <h1 className="">Development</h1>
          <h1 className="">Technology</h1>
          <h1 className="">Design</h1>
          <h1 className="">Programming</h1>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold">Courses</h1>
          <h1 className="">Business</h1>
          <h1 className="">Development</h1>
          <h1 className="">Technology</h1>
          <h1 className="">Design</h1>
          <h1 className="">Programming</h1>
        </div>
      </div>

      <div className="py-4 flex justify-between items-center">
        <div className="flex gap-4 ">
          <h2 className="text-xs">2023 Ddsgnr. All right reserved.</h2>
          <h2 className="text-xs underline">Privacy Policy</h2>
          <h2 className="text-xs underline">Terms of Service</h2>
          <h2 className="text-xs underline">Cookies Settings</h2>
        </div>
        <div>
          <div className="flex gap-5 px-14 py-5 justify-end ">
            <FaFacebookF className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaLinkedin className="text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
