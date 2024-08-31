import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      <div className="w-full ">
        <div className="flex gap-5 px-14 py-5 justify-end border border-black">
          <FaFacebookF className="text-3xl" />
          <FaInstagram className="text-3xl" />
          <FaTwitter className="text-3xl" />
          <FaLinkedin className="text-3xl" />
        </div>
        <div className="flex justify-between gap-5 px-14 py-5 border border-black">
          <div className="flex gap-2 items-center">
            <Image src={"/logo.png"} alt="" width={40} height={40} />
            <h1 className="text-3xl font-bold">NeuroNex</h1>
          </div>
          <div className="flex gap-4 items-center ">
            <div className="relative">
              <h1 className="font-semibold">Home</h1>
              <div className="absolute h-0.5 w-full bg-black"></div>
            </div>
            <div className="relative">
              <h1 className="font-semibold">About Us</h1>
            </div>
            <div className="relative">
              <h1 className="font-semibold">Courses</h1>
            </div>
            <div className="relative">
              <h1 className="font-semibold">Contact</h1>
            </div>
          </div>
          <div className="my-auto">
            <Link href="/login_page">
              <button className="bg-black text-white px-5 py-2 rounded-lg">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
