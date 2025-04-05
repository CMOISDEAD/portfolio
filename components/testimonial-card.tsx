"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  image: string;
}

export default function TestimonialCard({
  quote,
  author,
  position,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="border-l-2 border-white pl-6 py-2"
    >
      <p className="text-zinc-400 text-lg italic mb-8">{quote}</p>
      <div className="flex items-center">
        <div className="relative w-12 h-12 mr-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={author}
            fill
            className="object-cover grayscale"
          />
        </div>
        <div>
          <h3 className="font-semibold">{author}</h3>
          <p className="text-sm text-zinc-400">{position}</p>
        </div>
      </div>
    </motion.div>
  );
}
