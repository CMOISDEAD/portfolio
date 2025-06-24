"use client";

import ProjectCard from "../project-card";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  repoUrl: string;
}

interface Props {
  projects: Project[];
}

export default function Projects({ projects }: Props) {
  const [active, setActive] = useState<number>(0);

  return (
    <section
      id="projects"
      className="border-t border-muted relative p-4 flex flex-row gap-8"
    >
      <div className="sticky top-0 left-0 h-screen w-1/4 flex justify-center items-center pl-5">
        <ul className="space-y-36">
          {projects.map((project, i) => (
            <li
              key={i}
              className={cn(
                i === active ? "text-blue-500" : "text-muted-foreground",
                "text-3xl",
              )}
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="w-full flex-grow"
        style={{
          height: `calc(100vh * ${projects.length})`,
        }}
      >
        <AnimatePresence mode="wait">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              index={i}
              action={(index) => setActive(index)}
              showBackgroundAction={(a) => a}
              {...project}
            />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
