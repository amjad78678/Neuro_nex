"use client";

import React from "react";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";

const Feedback = () => {
  return (
    <motion.div
      className="py-10 px-5 md:px-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-4">
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-5 md:gap-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h1 className="text-2xl md:text-4xl font-bold">
              What Our Student Say
            </h1>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex gap-1 md:gap-3">
            <input
              className="px-4 py-2 border border-black mt-auto rounded-md"
              placeholder="Enter your reviews"
              type="text"
              name=""
              id=""
            />
            <button className="px-4 py-2 border border-black mt-auto rounded-md">
              Submit
            </button>
          </div>
        </motion.div>

        <motion.div
          className="md:grid grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delayChildren: 0.2,
            staggerChildren: 0.2,
          }}
          viewport={{ once: true }}
        >
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Feedback;
