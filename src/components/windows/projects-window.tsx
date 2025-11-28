import { Window } from "@/components/windows/window";

interface Props {
  toggleWindow: (key: "projects" | "about" | "experience" | "contact") => void;
  isMobile: boolean;
}

export function ProjectsWindow({ toggleWindow, isMobile }: Props) {
  const images = Array.from({ length: 12 }, () => "https://placehold.co/150");

  return (
    <Window
      title="~/workspaces/projects/"
      onClose={() => toggleWindow("projects")}
      defaultPosition={isMobile ? { x: 10, y: 380 } : { x: 100, y: 660 }}
      defaultSize={
        isMobile ? { width: 355, height: 220 } : { width: 1320, height: 220 }
      }
      isMobile={isMobile}
    >
      <div className="overflow-hidden w-full group">
        <div className="flex whitespace-nowrap animate-infinite-scroll pause-child">
          {images.map((src, i) => (
            <CardLink key={i} src={src} />
          ))}
          {images.map((src, i) => (
            <CardLink key={i} src={src} />
          ))}
        </div>
      </div>
    </Window>
  );
}

function CardLink({ src }: { src: string }) {
  return (
    <a
      href="https://github.com/CMOISDEAD"
      target="_blank"
      className="mx-2 size-32 shrink-0"
    >
      <img
        src={src}
        className="size-full object-cover select-none pointer-events-none"
        draggable={false}
      />
    </a>
  );
}
