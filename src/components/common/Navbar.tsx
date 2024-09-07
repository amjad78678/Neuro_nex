"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { RiMenu2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { getSession } from "@/config/actions";
import { SessionData } from "@/config/sessionConfig";

const Navbar = () => {
  const [session, setSession] = useState<SessionData | null>(null);
  const [activeNavItem, setActiveNavItem] = useState<string>("home"); // Track active nav item

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      setSession(sessionData);
    };
    fetchSession();
  }, []);

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (item: string, route: string) => {
    setActiveNavItem(item);
    router.push(route);
  };

  return (
    <div>
      <div className="w-full">
        <div className="flex gap-5 px-14 py-5 justify-end border border-black">
          <FaFacebookF className="text-3xl" />
          <FaInstagram className="text-3xl" />
          <FaTwitter className="text-3xl" />
          <FaLinkedin className="text-3xl" />
        </div>
        <div className="flex justify-between gap-5 px-5 md:px-14 py-5 border border-black">
          <div
            onClick={() => handleNavClick("home", "/")}
            className="flex gap-2 items-center cursor-pointer"
          >
            <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
            <h1 className="text-2xl md:text-3xl font-bold">NeuroNex</h1>
          </div>

          {/* Desktop Navbar */}
          <div className="hidden md:flex gap-4 items-center">
            <div className="relative">
              <h1
                className={`font-semibold cursor-pointer ${activeNavItem === "home" ? "text-black" : "text-gray-500"}`}
                onClick={() => handleNavClick("home", "/")}
              >
                Home
              </h1>
              {activeNavItem === "home" && (
                <div className="absolute bottom-[-6px] h-0.5 w-full bg-black"></div>
              )}
            </div>
            <div className="relative">
              <h1
                className={`font-semibold cursor-pointer ${activeNavItem === "courses" ? "text-black" : "text-gray-500"}`}
                onClick={() => handleNavClick("courses", "/courses")}
              >
                Courses
              </h1>
              {activeNavItem === "courses" && (
                <div className="absolute bottom-[-6px] h-0.5 w-full bg-black"></div>
              )}
            </div>
            <div className="relative">
              <h1
                className={`font-semibold cursor-pointer ${activeNavItem === "about" ? "text-black" : "text-gray-500"}`}
                onClick={() => handleNavClick("about", "/about_us")}
              >
                About Us
              </h1>
              {activeNavItem === "about" && (
                <div className="absolute bottom-[-6px] h-0.5 w-full bg-black"></div>
              )}
            </div>
            <div className="relative">
              <h1
                className={`font-semibold cursor-pointer ${activeNavItem === "contact" ? "text-black" : "text-gray-500"}`}
                onClick={() => handleNavClick("contact", "/contact_us")}
              >
                Contact
              </h1>
              {activeNavItem === "contact" && (
                <div className="absolute bottom-[-6px] h-0.5 w-full bg-black"></div>
              )}
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block my-auto">
            <Link href="/login_page">
              <button className="bg-black text-white px-5 py-2 rounded-lg">
                Login
              </button>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
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
            <Link href="/courses" onClick={toggleMenu}>
              <h1 className="text-3xl font-semibold cursor-pointer">Courses</h1>
            </Link>
            <Link href="/about_us" onClick={toggleMenu}>
              <h1 className="text-3xl font-semibold cursor-pointer">About Us</h1>
            </Link>
            <Link href="/contact_us" onClick={toggleMenu}>
              <h1 className="text-3xl font-semibold cursor-pointer">Contact</h1>
            </Link>
            {session && !session.isLoggedIn && (
              <Link href="/login_page" onClick={toggleMenu}>
                <button className="bg-black text-white px-6 py-2 rounded-lg mt-4">
                  Login
                </button>
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
  