"use client";

import Image from "next/image";
import HomeBanner from "@/components/common/HomeBanner";
import EventCard from "@/components/common/EventCard";
import Feedback from "@/components/common/Feedback";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <HomeBanner />
      
      <motion.div
        className="h-[30vh] bg-[#F7F7F7] flex justify-center items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl font-bold">
          Trusted by 2000+ Students <br /> worldwide.
        </h1>
      </motion.div>

      <motion.div
        className="md:grid grid-cols-2 p-5 md:p-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <div className="p-5 flex flex-col gap-7">
          <h1 className="text-2xl md:text-3xl font-bold">
            Discover a wide range of courses covering a variety of subjects,
            taught by expert instructors.
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-black text-white px-5 py-3 rounded-lg w-44">
            Explore Courses
          </button>
        </div>
        <div className="p-5">
          <Image src="/girlImage.png" alt="girl" width={500} height={500} />
        </div>
      </motion.div>

      <motion.div
        className="p-10 flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          Upcoming events
        </h1>
        <p className="text-center">Your Ultimate Guide to learning</p>

        <div className="md:grid grid-cols-3 gap-7">
          <EventCard
            {...{
              title: "Design",
              name: "UX/UI Design 201",
              image: "/computer.png",
            }}
          />
          <EventCard
            {...{
              title: "Programming",
              name: "Introduction to Python",
              image: "/code.png",
            }}
          />
          <EventCard
            {...{
              title: "Business",
              name: "Data Analysis for Beginners",
              image: "/analysis.png",
            }}
          />
          <EventCard {...{ title: "Art", name: "Art Day", image: "/paint.png" }} />
          <EventCard {...{ title: "Law", name: "Rule of Law", image: "/law.png" }} />
          <EventCard
            {...{
              title: "Tech",
              name: "Introduction to webflow",
              image: "/webflow.png",
            }}
          />
        </div>

        <button className="border border-black mx-auto px-4 py-2 rounded-lg mt-6">
          View All Events
        </button>
      </motion.div>

      <Feedback />

      <motion.div
        className="flex justify-between p-5 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          className="my-auto"
          src="/Slider Dots.png"
          alt="slider dots"
          width={100}
          height={100}
        />
        <div className="flex gap-5">
          <FaRegArrowAltCircleLeft className="text-4xl md:text-5xl" />
          <FaRegArrowAltCircleRight className="text-4xl md:text-5xl" />
        </div>
      </motion.div>
    </div>
  );
}
