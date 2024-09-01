"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HomeBanner = () => {
  return (
    <motion.div
      className="grid md:grid-cols-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="order-2 md:order-1 flex justify-center items-center">
        <div className="flex flex-col gap-8 px-5 md:px-20 my-6 md:my-0">
          <motion.h1
            className="text-2xl md:text-5xl font-bold"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Learn new skills online with ease
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </motion.p>
          <motion.div
            className="flex gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <button className="px-2 md:px-4 py-2 bg-black text-white rounded-lg">
              Start learning now
            </button>
            <button className="px-2 md:px-4 py-2 border border-black rounded-lg">
              Explore Courses
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="order-1 md:order-2 relative w-full h-screen"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image className="object-cover" src="/girlRead.png" alt="" fill />
      </motion.div>
    </motion.div>
  );
};

export default HomeBanner;
