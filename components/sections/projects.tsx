"use client";

import Link from "next/link";
import SectionHeading from "@/components/section-heading";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import MagicCard from "../magic_card";

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
  return (
    <section id="projects" className="py-20 p-3 border-t border-muted">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          description="Here are some of my recent projects that showcase my skills and creativity. (HOVER THE CARDS...)"
        />
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <MagicCard
              key={i}
              image={project.image}
              alt={`Project image for ${project.title}`}
            >
              <Link href={project.demoUrl} target="_blank">
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  {project.title}
                  <ArrowUpRight className="ml-1 size-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground border border-muted px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </MagicCard>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="https://github.com/CMOISDEAD"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-muted-foreground hover:text-foreground text-sm"
          >
            <span className="mr-2 group-hover:mr-4 transition-all">
              See more projects on GitHub
            </span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
