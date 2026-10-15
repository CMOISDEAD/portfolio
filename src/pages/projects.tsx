import { useEffect } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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
    // Below lg the list and the detail are separate views (master / detail),
    // so opening a project never renders it off-screen under the list
    <div className="flex h-full">
      <aside className="hidden xl:flex bg-card w-1/6 border-r flex-col justify-between p-6">
        <span className="text-xs text-muted-foreground">/work</span>
        <p className="text-xs text-muted-foreground leading-relaxed">
          A collection of projects built with attention to detail and clean
          architecture.
        </p>
      </aside>

      <div
        className={cn(
          "bg-background w-full lg:w-2/5 xl:w-2/6 lg:border-r border-border flex-col",
          selectedProject ? "hidden lg:flex" : "flex",
        )}
      >
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

        <ScrollArea className="flex-1 min-h-0">
          <nav aria-label="Projects">
            <ul className="divide-y divide-border lg:divide-y-0">
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
                    <div className="flex items-start justify-between gap-4">
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
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </ScrollArea>
      </div>

      <div
        className={cn(
          "bg-secondary/30 flex-1 min-w-0",
          selectedProject ? "block" : "hidden lg:block",
        )}
      >
        {selectedProject ? (
          <ProjectDetail key={selectedProject.slug} project={selectedProject} />
        ) : (
          <div className="h-full flex items-center justify-center p-6">
            <p className="text-muted-foreground text-sm">
              Select a project to view details
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const navigate = useNavigate();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.target instanceof HTMLElement && e.target.isContentEditable) return;
      if (e.key === "p") navigate(`/projects/${prev.slug}`);
      else if (e.key === "n") navigate(`/projects/${next.slug}`);
      else if (e.key === "Escape") navigate("/projects");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [navigate, prev.slug, next.slug]);

  return (
    <article className="h-full flex flex-col">
      <div className="px-6 h-12 shrink-0 border-b border-border flex items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 hover:text-foreground transition-colors lg:hidden"
        >
          <ArrowLeft className="size-3.5" />
          cd ..
        </Link>
        <span className="truncate">~/projects/{project.slug}</span>
        <span className="shrink-0">
          [{String(index).padStart(2, "0")}/
          {String(projects.length - 1).padStart(2, "0")}]
        </span>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-6 max-w-2xl mx-auto lg:mx-0 lg:max-w-lg animate-in fade-in duration-200 motion-reduce:animate-none">
          <span className="block text-xs text-muted-foreground mb-4">
            {project.year}
          </span>

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

          <nav
            aria-label="More projects"
            className="mt-10 pt-4 border-t border-border flex items-center justify-between gap-4 text-xs"
          >
            <Link
              to={`/projects/${prev.slug}`}
              className="text-muted-foreground hover:text-foreground transition-colors truncate"
            >
              [p]rev · {prev.title}
            </Link>
            <Link
              to={`/projects/${next.slug}`}
              className="text-muted-foreground hover:text-foreground transition-colors truncate text-right"
            >
              {next.title} · [n]ext
            </Link>
          </nav>
        </div>
      </div>
    </article>
  );
}
