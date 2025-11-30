import Dither from "@/components/dither";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Window } from "@/components/windows/window";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

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
      "Full-stack marketplace with real-time inventory management and payment processing",
    tech: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    year: "2025",
    link: "#",
  },
  {
    id: "02",
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization platform with custom charting and reporting engine",
    tech: ["React", "D3.js", "Node.js", "ClickHouse"],
    year: "2024",
    link: "#",
  },
  {
    id: "03",
    title: "API Gateway",
    description:
      "High-performance API management system with rate limiting and authentication",
    tech: ["Go", "gRPC", "Kubernetes", "Prometheus"],
    year: "2024",
    link: "#",
  },
  {
    id: "04",
    title: "CMS Framework",
    description:
      "Headless content management system with GraphQL API and visual editor",
    tech: ["TypeScript", "GraphQL", "MongoDB", "AWS"],
    year: "2023",
    link: "#",
  },
  {
    id: "05",
    title: "Mobile Banking App",
    description:
      "Secure mobile banking solution with biometric authentication and P2P transfers",
    tech: ["React Native", "Node.js", "PostgreSQL", "Plaid"],
    year: "2023",
    link: "#",
  },
];

// Posiciones en cascada para las ventanas
const getWindowPosition = (index: number) => {
  const baseX = 40;
  const baseY = 40;
  const offsetX = 30;
  const offsetY = 30;

  return {
    x: baseX + index * offsetX,
    y: baseY + index * offsetY,
  };
};

export function ProjectPage() {
  const [openWindows, setOpenWindows] = useState<Set<number>>(new Set());

  const openProjectWindow = (projectIndex: number) => {
    setOpenWindows((prev) => {
      const updated = new Set(prev);
      updated.add(projectIndex);
      return updated;
    });
  };

  const closeProjectWindow = (projectIndex: number) => {
    setOpenWindows((prev) => {
      const updated = new Set(prev);
      updated.delete(projectIndex);
      return updated;
    });
  };

  return (
    <main className="flex flex-col md:flex-row h-full">
      {/* Sidebar izquierdo */}
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

      {/* Lista de proyectos */}
      <div className="bg-secondary h-3/6 md:h-full md:w-2/6 border-r">
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-border">
            <h1 className="text-2xl font-light tracking-tight">Projects</h1>
            <p className="text-muted-foreground text-xs mt-1">Selected work</p>
          </div>

          <ScrollArea className="flex-1 overflow-auto">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className="p-6 border-b border-border hover:bg-muted/50 transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-muted-foreground">
                        {project.id}
                      </span>
                      <h2 className="font-medium truncate">{project.title}</h2>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge variant="secondary" key={tech}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs text-muted-foreground">
                      {project.year}
                    </span>
                    {project.link && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openProjectWindow(index)}
                      >
                        View <ArrowRight className="size-3" />
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </ScrollArea>

          <div className="p-4 border-t border-border">
            <Button variant="link" size="sm">
              <ArrowLeft className="size-3" /> Back
            </Button>
          </div>
        </div>
      </div>

      {/* Área de visualización con ventanas */}
      <div className="relative bg-background grow">
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.01}
        />
        {[...openWindows].map((projectIndex, windowIndex) => (
          <ProjectWindow
            key={projectIndex}
            project={projects[projectIndex]}
            position={getWindowPosition(windowIndex)}
            onClose={() => closeProjectWindow(projectIndex)}
          />
        ))}
      </div>
    </main>
  );
}

interface ProjectWindowProps {
  project: Project;
  position: { x: number; y: number };
  onClose: () => void;
}

function ProjectWindow({ project, position, onClose }: ProjectWindowProps) {
  return (
    <Window
      title={project.title}
      anchor="top-left"
      offset={position}
      defaultSize={{
        width: 350,
        height: 350,
      }}
      onClose={onClose}
      isMobile={true}
    >
      <div className="w-full space-y-3">
        <img
          draggable={false}
          src={`https://placehold.co/400x200?text=${project.title.replace(
            / /g,
            "+",
          )}`}
          alt={project.title}
          className="w-full h-28 object-cover rounded-md"
        />

        <div className="space-y-1">
          <h2 className="text-base font-semibold leading-tight">
            {project.title}
          </h2>

          <p className="text-xs text-muted-foreground">{project.year}</p>

          <p className="text-sm text-muted-foreground line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-2 py-[2px] rounded-md bg-secondary/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View project →
        </a>
      </div>
    </Window>
  );
}
