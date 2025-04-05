"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  url: string;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  image,
  url,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="relative aspect-[2/1] mb-6 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
      </div>
      <div className="text-sm text-zinc-400 mb-2">{date}</div>
      <h3 className="text-xl font-semibold mb-3 group-hover:underline">
        {title}
      </h3>
      <p className="text-zinc-400 mb-4">{excerpt}</p>
      <Link href={url} className="inline-flex items-center text-white">
        Leer más <span className="ml-2 group-hover:ml-3 transition-all">→</span>
      </Link>
    </motion.div>
  );
}
