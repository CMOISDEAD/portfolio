"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  demoUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div className="relative aspect-[4/3] mb-6 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/70 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-lg">
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 mx-2 flex items-center"
          >
            Demo <ArrowUpRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-zinc-400 border border-zinc-800 px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
