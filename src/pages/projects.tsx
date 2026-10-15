import { useEffect } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { findProject, projects, type Project } from "@/data/projects";
import { NotFoundPage } from "@/pages/not-found";

export function ProjectPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedProject = findProject(slug);

  // Legacy links used `/projects?project=<title>`. Redirect after hydration so
  // the prerendered /projects markup still matches.
  const legacyTitle = searchParams.get("project");
  useEffect(() => {
    if (!legacyTitle) return;
    const legacy = projects.find((p) => p.title === legacyTitle);
    navigate(legacy ? `/projects/${legacy.slug}` : "/projects", {
      replace: true,
    });
  }, [legacyTitle, navigate]);

  if (slug && !selectedProject) return <NotFoundPage />;

  return (
    <div className="flex flex-col md:flex-row h-full overflow-auto">
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
          {selectedProject ? (
            <p className="text-2xl font-medium tracking-tight text-foreground mb-1">
              Projects
            </p>
          ) : (
            <h1 className="text-2xl font-medium tracking-tight text-foreground mb-1">
              Projects
            </h1>
          )}
          <p className="text-muted-foreground text-xs mt-1">
            Selected work · {projects.length} projects
          </p>
        </header>

        <ScrollArea className="flex-1 overflow-auto">
          <nav aria-label="Projects">
            <ul>
              {projects.map((project, i) => (
                <li key={project.slug}>
                  <Link
                    to={`/projects/${project.slug}`}
                    aria-current={
                      selectedProject?.slug === project.slug
                        ? "page"
                        : undefined
                    }
                    className={cn(
                      "block p-6 transition-colors",
                      "hover:bg-muted/50",
                      selectedProject?.slug === project.slug && "bg-muted",
                    )}
                  >
                    <article className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs text-muted-foreground font-mono">
                            {String(i).padStart(2, "0")}
                          </span>
                          <h2 className="font-medium text-sm">
                            {project.title}
                          </h2>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground shrink-0">
                        {project.year}
                      </span>
                    </article>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </div>

      <div className="bg-secondary/30 flex-1">
        {selectedProject ? (
          <ProjectDetail project={selectedProject} />
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
    </div>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="h-full flex flex-col">
      <div className="p-6 border-b border-border flex items-center justify-between lg:hidden">
        <span className="text-xs text-muted-foreground font-mono">
          ~/projects/{project.slug}
        </span>
        <Link
          to="/projects"
          aria-label="Close project details"
          className="p-1 hover:bg-muted transition-colors"
        >
          <X className="size-4" />
        </Link>
      </div>

      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-lg">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs text-muted-foreground font-mono hidden lg:block">
              ~/projects/{project.slug}
            </span>
            <span className="text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          <div className="aspect-video bg-muted mb-8 overflow-hidden">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              width={1600}
              height={900}
              decoding="async"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>

          <h1 className="text-2xl mb-4">{project.title}</h1>
          <p className="text-muted-foreground mb-8">{project.description}</p>

          <div className="mb-8">
            <h2 className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li key={tech}>
                  <Badge variant="secondary" className="rounded-none font-normal">
                    {tech}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-muted-foreground transition-colors group"
            >
              View project
              <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
