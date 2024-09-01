"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { RiMenu2Fill } from "react-icons/ri";
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="w-full ">
        <div className="flex gap-5 px-14 py-5 justify-end border border-black">
          <FaFacebookF className="text-3xl" />
          <FaInstagram className="text-3xl" />
          <FaTwitter className="text-3xl" />
          <FaLinkedin className="text-3xl" />
        </div>
        <div className="flex justify-between gap-5 px-5 md:px-14 py-5 border border-black">
          <div
            onClick={() => router.push("/")}
            className="flex gap-2 items-center cursor-pointer"
          >
            <Image src={"/logo.png"} alt="" width={40} height={40} />
            <h1 className="text-2xl md:text-3xl font-bold">NeuroNex</h1>
          </div>
          <div className="hidden md:flex gap-4 items-center">
            <div onClick={() => router.push("/")} className="relative">
              <h1 className="font-semibold cursor-pointer">Home</h1>
              <div className="absolute h-0.5 w-full bg-black"></div>
            </div>
            <div className="relative">
              <h1 className="font-semibold cursor-pointer">About Us</h1>
            </div>
            <div className="relative">
              <h1 className="font-semibold cursor-pointer">Courses</h1>
            </div>
            <div className="relative">
              <h1 className="font-semibold cursor-pointer">Contact</h1>
            </div>
          </div>
          <div className="hidden md:block my-auto">
            <Link href="/login_page">
              <button className="bg-black text-white px-5 py-2 rounded-lg">
                Login
              </button>
            </Link>
          </div>
          <div className="md:hidden">
            <RiMenu2Fill
              className="text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 120 }}
          className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 flex flex-col gap-4 p-8"
        >
          <div className="flex justify-end">
            <RiMenu2Fill
              className="text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <div className="flex flex-col items-start gap-4 mt-10">
            <Link href="/" onClick={toggleMenu}>
              <h1 className="text-3xl font-semibold cursor-pointer">Home</h1>
            </Link>
            <Link href="/about" onClick={toggleMenu}>
              <h1 className="text-3xl font-semibold cursor-pointer">About Us</h1>
            </Link>
            <Link href="/courses" onClick={toggleMenu}>
              <h1 className="text-3xl font-semibold cursor-pointer">Courses</h1>
            </Link>
            <Link href="/contact" onClick={toggleMenu}>
              <h1 className="text-3xl font-semibold cursor-pointer">Contact</h1>
            </Link>
            <Link href="/login_page" onClick={toggleMenu}>
              <button className="bg-black text-white px-6 py-2  rounded-lg mt-4">
                Login
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
