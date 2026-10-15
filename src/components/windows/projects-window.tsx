import { Link } from "react-router-dom";
import { Window } from "@/components/windows/window";
import type { WindowProps } from "@/components/windows/types";
import { projects, type Project } from "@/data/projects";

type Props = WindowProps;

// Must match the translate in the `infinite-scroll` keyframes (-100% / copies)
const MARQUEE_COPIES = 4;

export function ProjectsWindow({ toggleWindow, isMobile, layout }: Props) {
  return (
    <Window
      title="~/workspaces/projects/"
      layout={layout}
      onClose={() => toggleWindow("projects")}
      isMobile={isMobile}
    >
      <div className="overflow-hidden w-full group">
        {/* w-max: the translate % must be relative to the content, not the visible width */}
        <div className="flex w-max whitespace-nowrap animate-infinite-scroll pause-child">
          {Array.from({ length: MARQUEE_COPIES }, (_, copy) =>
            projects.map((project) => (
              <CardLink
                key={`${copy}-${project.slug}`}
                project={project}
                hidden={copy > 0}
              />
            )),
          )}
        </div>
      </div>
    </Window>
  );
}

function CardLink({ project, hidden }: { project: Project; hidden: boolean }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="mx-2 size-28 shrink-0"
      aria-hidden={hidden || undefined}
      tabIndex={hidden ? -1 : undefined}
      title={project.title}
    >
      <img
        src={project.image}
        alt={hidden ? "" : `${project.title} preview`}
        width={112}
        height={112}
        loading="lazy"
        decoding="async"
        className="size-full object-cover select-none pointer-events-none"
        draggable={false}
      />
    </Link>
  );
}
