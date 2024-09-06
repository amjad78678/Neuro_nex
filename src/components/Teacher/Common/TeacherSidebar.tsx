"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  FiVideo,
  FiBookOpen,
  FiMessageSquare,
  FiBarChart2,
  FiSettings,
  FiHome,
} from "react-icons/fi";

const TeacherSidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const router = useRouter();
  const menuItems = [
    { label: "Dashboard", icon: FiHome, link: "/teacher" },
    {
      label: "Manage Courses",
      icon: FiBookOpen,
      link: "/teacher/manage_courses",
    },
    { label: "Messages", icon: FiMessageSquare, link: "/teacher/messages" },
    { label: "Analytics", icon: FiBarChart2, link: "/teacher/analytics" },
  ];

  const itemVariants = {
    active: {
      backgroundColor: "#60A5FA",
      color: "#ffffff",
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    inactive: {
      backgroundColor: "#ffffff",
      color: "#000000",
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  return (
    <motion.div className="h-screen p-2 text-black ">
      <div className="flex flex-col justify-between h-full">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <motion.li
              key={item.label}
              className="flex items-center space-x-4 border border-black rounded-lg p-2 cursor-pointer"
              initial={false}
              animate={activeItem === item.label ? "active" : "inactive"}
              variants={itemVariants}
              onClick={() => {
                setActiveItem(item.label);
                router.push(item.link);
              }}
            >
              <item.icon className="text-xl" />
              <span>{item.label}</span>
            </motion.li>
          ))}
        </ul>
        <div>
          <motion.li
            key={"Settings"}
            className="flex items-center space-x-4 border border-black rounded-lg p-2 cursor-pointer"
            initial={false}
            animate={activeItem === "Settings" ? "active" : "inactive"}
            variants={itemVariants}
            onClick={() => setActiveItem("Settings")}
          >
            <FiSettings className="text-xl" />
            <span>{"Settings"}</span>
          </motion.li>
        </div>
      </div>
    </motion.div>
  );
};

export default TeacherSidebar;
