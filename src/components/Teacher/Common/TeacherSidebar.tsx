"use client";
import { motion } from "framer-motion";
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
  // Manage the active state for the selected menu item
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { label: "Dashboard", icon: FiHome },
    { label: "Manage Courses", icon: FiBookOpen },
    { label: "Messages", icon: FiMessageSquare },
    { label: "Analytics", icon: FiBarChart2 },
  ];

  // Framer Motion animation variants for active and inactive items
  const itemVariants = {
    active: {
      backgroundColor: "#60A5FA", // Tailwind blue-400
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
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-xl font-bold">Teacher Panel</h1>
      </div>

      <div className="flex flex-col justify-between h-[85vh]">
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <motion.li
              key={item.label}
              className="flex items-center space-x-4 border border-black rounded-lg p-2 cursor-pointer"
              initial={false}
              animate={activeItem === item.label ? "active" : "inactive"}
              variants={itemVariants}
              onClick={() => setActiveItem(item.label)}
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
