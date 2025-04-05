"use client";

import Link from "next/link";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/section-heading";

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
    <section
      id="projects"
      className="px-6 md:px-20 lg:px-32 py-20 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" />
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="https://github.com/CMOISDEAD"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-zinc-400 hover:text-white text-lg"
          >
            <span className="mr-2 group-hover:mr-4 transition-all">
              See more projects on GitHub
            </span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
