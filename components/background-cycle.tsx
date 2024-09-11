"use client";

import React from "react";
import { motion } from "framer-motion";

export const BackgroundCircle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 1.5 }}
      className="absolute flex justify-center items-center"
    >
      <div className="absolute border bg-primary rounded-full h-[40px] w-[40px] animate-ping" />
    </motion.div>
  );
};
