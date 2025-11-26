import { Window } from "@/components/windows/window";

interface Props {
  toggleWindow: (key: "projects" | "about" | "experience" | "contact") => void;
}

export function ProjectsWindow({ toggleWindow }: Props) {
  const images = Array.from({ length: 12 }, () => "https://placehold.co/150");

  return (
    <Window
      title="Projects"
      onClose={() => toggleWindow("projects")}
      defaultPosition={{ x: 100, y: 680 }}
      defaultSize={{ width: 1320, height: 200 }}
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
