"use client";
import { motion } from "motion/react";
import Image from "next/image";

export function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-40 md:h-56 lg:h-64 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="bg-gradient-to-t from-stone-50 dark:from-stone-900 via-stone-50/50 dark:via-stone-900/50 to-transparent h-full w-full absolute inset-0 z-10"
      />

      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full w-full relative"
      >
        <Image
          fill
          priority
          sizes="100vw"
          src="/greek.webp"
          alt="Greek city"
          className="object-cover object-bottom"
        />
      </motion.div>
    </motion.div>
  );
}
