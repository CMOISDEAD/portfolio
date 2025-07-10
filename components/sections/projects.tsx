"use client";

import ProjectCard from "../project-card";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { projects } from "@/data/portfolio-data";

export default function Projects() {
  const [active, setActive] = useState<number>(0);

  return (
    <section
      id="projects"
      className="border-t border-muted relative p-0 flex flex-row gap-8"
    >
      <div className="hidden sticky top-0 left-0 h-screen md:w-1/4 md:flex justify-center items-center pl-5">
        <ul className="space-y-36">
          {projects.map((project, i) => (
            <li
              key={i}
              className={cn(
                i === active
                  ? "text-accent-foreground"
                  : "text-muted-foreground",
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
              length={projects.length}
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
