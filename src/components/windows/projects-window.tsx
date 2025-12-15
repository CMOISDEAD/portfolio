import { Window } from "@/components/windows/window";

interface Props {
  toggleWindow: (key: "projects" | "about" | "experience" | "contact") => void;
  isMobile: boolean;
}

const projects = [
  {
    href: "https://agrobiologicosquindio.com/",
    image:
      "/projects/agro.webp",
  },
  {
    href: "https://comunidad-xi.vercel.app/",
    image:
      "/projects/comunidad.webp",
  },
  {
    href: "https://ancient-map.vercel.app/",
    image:
      "/projects/ancient.webp",
  },
  {
    href: "https://digital-gallery-delta.vercel.app/",
    image:
      "/projects/digital.webp",
  },
  {
    href: "https://monkey-psi-sen.vercel.app",
    image:
      "/projects/monkey.png",
  },
  {
    href: "https://github.com/CMOISDEAD/dotrs",
    image:
      "/projects/dotrs.png",
  },
{
    href: "https://github.com/CMOISDEAD/balance",
    image:
      "/projects/balance.png",
  }
];

export function ProjectsWindow({ toggleWindow, isMobile }: Props) {
  return (
    <Window
      title="~/workspaces/projects/"
      anchor="bottom-left"
      offset={isMobile ? { x: 0, y: 165 } : { x: 0, y: 220 }}
      defaultSize={{ width: "100%", height: "17%" }}
      onClose={() => toggleWindow("projects")}
      isMobile={isMobile}
    >
      <div className="overflow-hidden w-full group">
        <div className="flex whitespace-nowrap animate-infinite-scroll pause-child">
          {projects.map((project, i) => (
            <CardLink key={i} {...project} />
          ))}
          {projects.map((project, i) => (
            <CardLink key={i} {...project} />
          ))}
          {projects.map((project, i) => (
            <CardLink key={i} {...project} />
          ))}
          {projects.map((project, i) => (
            <CardLink key={i} {...project} />
          ))}
        </div>
      </div>
    </Window>
  );
}

function CardLink({ image, href }: { image: string; href: string }) {
  return (
    <a href={href} target="_blank" className="mx-2 size-28 shrink-0">
      <img
        src={image}
        className="size-full object-cover select-none pointer-events-none"
        draggable={false}
      />
    </a>
  );
}
