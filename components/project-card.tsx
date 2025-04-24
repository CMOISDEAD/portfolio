"use client";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="relative">
      <Link href={demoUrl} target="_blank">
        <motion.div
          whileHover={{ y: -10 }}
          transition={{ duration: 0.3 }}
          className="group cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center">
            {title}
            <ArrowUpRight className="ml-1 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
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
      </Link>

      <AnimatePresence mode="wait">
        {isHovered && image && (
          <motion.div
            className="hidden md:block absolute pointer-events-none z-50 w-[600px] max-w-[90vw] shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: position.x,
              y: position.y - 200,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={image}
                alt={`${title} preview`}
                fill
                sizes="(max-width: 768px) 90vw, 600px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
