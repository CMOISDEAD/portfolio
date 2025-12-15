"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  year: string;
  link?: string;
}


const projects: Project[] = [
  {
    id: "01",
    title: "Agrobiológicos Quindío",
    description:
      "Led the end-to-end development of a scalable production-ready web platform. Implemented SSR and ISR with Next.js to optimize performance and SEO, significantly reducing page load times. Integrated a headless Strapi CMS deployed on a self-managed Linux VPS, secured with JWT-based authentication, and backed by a MySQL database for reliable content and data management.",
    tech: ["Next.js", "Strapi", "MySQL", "JWT", "Linux VPS"],
    year: "2025",
    link: "https://agrobiologicosquindio.com/",
    image: "/projects/agro.webp",
  },
  {
    id: "02",
    title: "Comunidad XI",
    description:
      "Designed and developed an interactive platform to showcase athletes through an immersive 3D map experience. Built a responsive and accessible UI with React and Tailwind CSS, integrated Mapbox for real-time 3D navigation, and optimized media delivery to ensure smooth performance across devices.",
    tech: ["React", "Tailwind CSS", "Mapbox", "Three.js"],
    year: "2024",
    link: "https://comunidad-xi.vercel.app/",
    image: "/projects/comunidad.webp",
  },
  {
    id: "03",
    title: "Ancient Map",
    description:
      "An interactive global 3D map for exploring historical empires and cultures across key moments in time. Focused on spatial storytelling, data visualization, and intuitive exploration using Mapbox and modern web technologies.",
    tech: ["React", "Mapbox", "WebGL", "TypeScript"],
    year: "2024",
    link: "https://ancient-map.vercel.app/",
    image: "/projects/ancient.webp",
  },
  {
    id: "04",
    title: "Digital Gallery",
    description:
      "A conceptual and immersive virtual art gallery combining classical paintings with modern digital interaction. Features fluid animations, drag-based navigation, and a minimalist aesthetic, with a strong emphasis on motion design and user experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "use-gesture"],
    year: "2024",
    link: "https://digital-gallery-delta.vercel.app/",
    image: "/projects/digital.webp",
  },
  {
    id: "05",
    title: "MonkeyType Clone",
    description:
      "A modern typing test application inspired by MonkeyType, featuring code typing modes, customizable keyboard layouts, and detailed performance metrics. Built with a futuristic UI and a strong focus on responsiveness and precision.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    year: "2025",
    link: "https://monkey-psi-sen.vercel.app",
    image: "/projects/monkey.png",
  },
  {
    id: "06",
    title: "dotrs",
    description:
      "A minimalist dotfiles manager written in Rust, focused on speed, clarity, and full user control. Designed with a no-bloat philosophy, offering a clean and predictable workflow for managing development environments efficiently.",
    tech: ["Rust"],
    year: "2025",
    link: "https://github.com/CMOISDEAD/dotrs",
    image: "/projects/dotrs.png",
  },
  {
    id: "07",
    title: "Balance",
    description:
      "A lightweight and minimalist expense tracking mobile app focused on usability and clarity. Built to help users manage daily expenses efficiently through a clean interface and intuitive interactions.",
    tech: ["Flutter", "Dart"],
    year: "2024",
    link: "#",
    image: "/projects/balance.png",
  },
];
;

export function ProjectPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="flex flex-col md:flex-row h-full overflow-auto">
      <div className="hidden bg-card h-1/6 md:h-full md:w-1/6 border-r md:flex flex-col justify-between p-6">
        <div>
          <span className="text-xs text-muted-foreground">/work</span>
        </div>
        <div className="hidden md:block">
          <p className="text-xs text-muted-foreground leading-relaxed">
            A collection of projects built with attention to detail and clean
            architecture.
          </p>
        </div>
      </div>

      <div className="bg-background md:w-2/6 border-r border-border flex flex-col">
        <header className="p-6 border-b border-border">
          <h1 className="text-2xl font-light tracking-tight">Projects</h1>
          <p className="text-muted-foreground text-xs mt-1">
            Selected work · {projects.length} projects
          </p>
        </header>

        <ScrollArea className="flex-1 overflow-auto">
            {projects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={cn(
                  "p-6 cursor-pointer transition-colors",
                  "hover:bg-muted/50",
                  selectedProject?.id === project.id && "bg-muted",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.id}
                      </span>
                      <h2 className="font-medium text-sm">{project.title}</h2>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {project.year}
                  </span>
                </div>
              </article>
            ))}
        </ScrollArea>
      </div>

      <div className="bg-secondary/30 flex-1">
        {selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : (
          <div className="h-full flex items-center justify-center p-6">
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                Select a project to view details
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-border flex items-center justify-between lg:hidden">
        <span className="text-xs text-muted-foreground font-mono">
          {project.id}
        </span>
        <button
          onClick={onClose}
          className="p-1 hover:bg-muted transition-colors"
        >
          <X className="size-4" />
        </button>
      </div>

      <div className="flex-1 p-6 lg:p-12 overflow-auto">
        <div className="max-w-lg">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs text-muted-foreground font-mono hidden lg:block">
              {project.id}
            </span>
            <span className="text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          <div className="aspect-video bg-muted mb-8 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <h2 className="text-2xl font-light tracking-tight mb-4">
            {project.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="mb-8">
            <h3 className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="rounded-none font-normal"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.link && (
            <a
              href={project.link}
              className="inline-flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors group"
            >
              View project
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
