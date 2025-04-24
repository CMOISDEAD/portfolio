"use client";

import { motion } from "motion/react";

interface Props {
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ onContactClick, onProjectsClick }: Props) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center m-6 md:px-20 lg:px-32 md:m-0"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter mb-6 serif uppercase">
          Camilo Davila
        </h1>
        <div className="w-16 h-[1px] bg-white mb-8"></div>
        <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl">
          Fullstack Developer specializing in crafting exceptional digital
          experiences with clean code, user-centered design, and a passion for
          innovative solutions that deliver real business value.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <motion.button
            whileHover={{ x: 5 }}
            onClick={onContactClick}
            className="group flex items-center text-white text-lg cursor-pointer"
          >
            <span className="mr-2 border-b border-white pb-1 group-hover:border-transparent transition-colors">
              Contact Me
            </span>
            <span className="transform group-hover:translate-x-2 transition-transform">
              →
            </span>
          </motion.button>
          <motion.button
            whileHover={{ x: 5 }}
            onClick={onProjectsClick}
            className="group flex items-center text-zinc-400 hover:text-white text-lg cursor-pointer"
          >
            <span className="mr-2 border-b border-transparent pb-1">
              Look Projects
            </span>
            <span className="transform group-hover:translate-x-2 transition-transform">
              →
            </span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
