import { Link } from "react-router-dom";
import { Window } from "@/components/windows/window";
import type { WindowProps } from "@/components/windows/types";
import { projects, type Project } from "@/data/projects";

type Props = WindowProps;

export function ProjectsWindow({ toggleWindow, isMobile }: Props) {
  return (
    <Window
      title="~/workspaces/projects/"
      anchor="bottom-left"
      offset={isMobile ? { x: 0, y: 165 } : { x: 0, y: 225 }}
      defaultSize={{ width: "100%", height: "17%" }}
      onClose={() => toggleWindow("projects")}
      isMobile={isMobile}
    >
      <div className="overflow-hidden w-full group">
        <div className="flex whitespace-nowrap animate-infinite-scroll pause-child">
          {[0, 1, 2].map((copy) =>
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
