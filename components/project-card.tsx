"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface Props {
  index: number;
  length: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
  action: (index: number) => void;
  showBackgroundAction: (show: boolean) => void;
}

export default function ProjectCard({
  index,
  title,
  length,
  description,
  demoUrl,
  repoUrl,
  image,
  action,
}: Props) {
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
      <div className="relative h-full w-full aspect-square">
        <div className="absolute inset-0">
          <Image fill src={image} alt="" className="object-cover" />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 flex h-full items-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="mb-4">
                <span className="text-sm text-white/70 tracking-wider">
                  2025
                </span>
              </div>

              <h1 className="font-bold mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tight">
                {title}
              </h1>

              <p className="mb-6 sm:mb-8 max-w-full sm:max-w-xl lg:max-w-2xl text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50"
                >
                  <Link
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </Link>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-black hover:bg-white/90"
                >
                  <Link
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </Link>
                </Button>
              </div>

              <div className="mt-12 flex items-center space-x-4 text-sm text-white/70">
                <span>Scroll to explore</span>
                <div className="h-px w-8 bg-white/30" />
                <span>
                  {String(index + 1).padStart(2, "0")} of{" "}
                  {String(length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
