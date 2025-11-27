import { useState } from "react";
import { Window } from "@/components/windows/window";
import { Button } from "@/components/ui/button";

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech: string[];
}

interface Props {
  toggleWindow: (key: "projects" | "about" | "experience" | "contact") => void;
}

const experiences: Experience[] = [
  {
    company: "TechCorp Inc.",
    role: "Senior Frontend Developer",
    period: "2022 - Present",
    description:
      "Building scalable interfaces and design systems with focus on performance and accessibility.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description:
      "Developed REST APIs, microservices architecture and real-time features for SaaS platform.",
    tech: ["Node.js", "PostgreSQL", "Redis", "Docker"],
  },
];

export function ExperienceWindow({ toggleWindow }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const exp = experiences[currentIndex];

  const lines = [
    `company    : ${exp.company}`,
    `role       : ${exp.role}`,
    `period     : ${exp.period}`,
    "",
    exp.description,
    "",
    `stack      : ${exp.tech.join(", ")}`,
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
      onClose={() => toggleWindow("experience")}
      defaultPosition={{ x: 300, y: 190 }}
      defaultSize={{ width: 448, height: 200 }}
    >
      <div className="text-sm min-h-[220px]">
        <div className="text-muted-foreground mb-2">
          <span className="text-green-500">~</span> Running experience.sh...
        </div>

        <div className="space-y-1">
          {lines.map((line, i) => (
            <div key={i} className={line === "" ? "h-3" : ""}>
              {line && line.includes(":") ? (
                <p>
                  <span className="text-muted-foreground">
                    {line.split(":")[0]}:
                  </span>
                  <span className="text-muted-foreground bg-muted pr-2">
                    {line.split(":").slice(1).join(":")}
                  </span>
                </p>
              ) : (
                <span className="text-muted-foreground">{line}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between border-t text-xs">
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
    </Window>
  );
}
