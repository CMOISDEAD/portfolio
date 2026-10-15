import { useState } from "react";
import type { WindowProps } from "@/components/windows/types";
import { Window } from "@/components/windows/window";
import { Button } from "@/components/ui/button";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

type Props = WindowProps;

const experiences: Experience[] = [
  {
    company: "Daidokoro",
    role: "Full Stack Developer",
    period: "2025",
    description:
      "Led the development of a modern and scalable web platform for a Miami-based carpentry company using Next.js, implementing SSR and ISR to improve performance and reduce load times. Integrated Strapi CMS on a self-managed Linux VPS, implemented secure authentication with JWT, and managed the database with MySQL for reliable content, service catalogs, and project galleries.",
    tech: ["Next.js", "Strapi CMS", "JWT", "MySQL", "VPS", "Linux"],
  },
  {
    company: "Agrobiológicos del Quindío",
    role: "Full Stack Developer",
    period: "2025",
    description:
      "Led the development of a modern and scalable web platform using Next.js, implementing SSR and ISR to improve performance and reduce page-to-page load times. Integrated Strapi CMS on a self-configured Linux VPS, implemented secure authentication with JWT, and managed the database using MySQL for robust data handling.",
    tech: ["Next.js", "Strapi CMS", "JWT", "MySQL", "VPS", "Linux"],
  },
  {
    company: "Private Client",
    role: "Frontend Developer",
    period: "2024",
    description:
      "Developed an interactive web platform for showcasing athletes, featuring a 3D map as the main interface. Built a modern and responsive UI using React and TailwindCSS, integrated Mapbox for 3D navigation, and optimized multimedia content loading to deliver a smooth and accessible user experience.",
    tech: ["React", "Mapbox", "TailwindCSS"],
  },
];

export function ExperienceWindow({ toggleWindow, isMobile, layout }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const exp = experiences[currentIndex];

  const fields = [
    ["company", exp.company],
    ["role", exp.role],
    ["period", exp.period],
  ];

  const handleNext = () => {
    setCurrentIndex((i) => (i < experiences.length - 1 ? i + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : experiences.length - 1));
  };

  return (
    <Window
      title="./experience.sh"
      layout={layout}
      onClose={() => toggleWindow("experience")}
      isMobile={isMobile}
    >
      <div className="text-sm flex flex-col space-y-2 h-full">
        <div className="text-muted-foreground">
          <span className="text-green-500">~</span> Running experience.sh...
        </div>

        <div className="space-y-1 flex-1 text-muted-foreground">
          {fields.map(([label, value]) => (
            <p key={label}>
              {label} :<span className="bg-muted pr-2"> {value}</span>
            </p>
          ))}
          <p className="pt-3 pb-3">{exp.description}</p>
          <p>
            stack :<span className="bg-muted pr-2"> {exp.tech.join(", ")}</span>
          </p>
        </div>

        <div className="flex items-center justify-between border-t text-xs mt-2">
          <span className="text-muted-foreground">
            [{currentIndex + 1}/{experiences.length}]
          </span>
          <div className="flex gap-3">
            <Button onClick={handlePrev} variant="ghost" size="sm">
              [p]rev
            </Button>
            <Button onClick={handleNext} variant="ghost" size="sm">
              [n]ext
            </Button>
          </div>
        </div>
      </div>
    </Window>
  );
}
