"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Props {
  index: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  action: (index: number) => void;
  showBackgroundAction: (show: boolean) => void;
}

export default function ProjectCard({ index, title, image, action }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = cardRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) action(index);
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      },
    );

    if (current) observer.observe(current);

    return () => observer.disconnect();
  }, [index, action]);

  return (
    <div
      ref={cardRef}
      className="h-screen w-full flex flex-col items-center justify-center gap-8"
    >
      <h2 className="text-6xl font-bold">{title}</h2>
      <div className="relative h-96 w-full aspect-square">
        <Image fill src={image} alt="" className="object-cover" />
      </div>
    </div>
  );
}
