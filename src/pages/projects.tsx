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
  year: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "E-Commerce Platform",
    description:
      "Full-stack marketplace with real-time inventory management and payment processing. Built with modern technologies for scalability and performance.",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    year: "2025",
    link: "#",
  },
  {
    id: "02",
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization platform with custom charting and reporting engine. Handles millions of data points with smooth interactions.",
    tech: ["React", "D3.js", "Node.js", "ClickHouse"],
    year: "2024",
    link: "#",
  },
  {
    id: "03",
    title: "API Gateway",
    description:
      "High-performance API management system with rate limiting and authentication. Designed for microservices architecture.",
    tech: ["Go", "gRPC", "Kubernetes", "Prometheus"],
    year: "2024",
    link: "#",
  },
  {
    id: "04",
    title: "CMS Framework",
    description:
      "Headless content management system with GraphQL API and visual editor. Flexible and developer-friendly.",
    tech: ["TypeScript", "GraphQL", "MongoDB", "AWS"],
    year: "2023",
    link: "#",
  },
  {
    id: "05",
    title: "Mobile Banking App",
    description:
      "Secure mobile banking solution with biometric authentication and P2P transfers. Focused on security and user experience.",
    tech: ["React Native", "Node.js", "PostgreSQL", "Plaid"],
    year: "2023",
    link: "#",
  },
];

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

        <ScrollArea className="flex-1">
          <div className="divide-y divide-border">
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
          </div>
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
              src="https://placehold.co/900"
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
