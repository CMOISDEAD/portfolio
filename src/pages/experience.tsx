import Dither from "@/components/dither";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const experiences = [
  {
    period: "2025 — Present",
    role: "Full Stack Developer",
    company: "Agrobiológicos del Quindío",
    description:
      "Led the development of a modern and scalable web platform, enhancing the company's digital presence and improving client access to products and services. Built the frontend with Next.js, implementing SSR and ISR to reduce navigation load times by 40%. Integrated Strapi CMS on a self-managed Linux VPS, implemented secure authentication with JWT, and optimized MySQL queries for stable and efficient data handling.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Strapi CMS",
      "MySQL",
      "Linux",
      "JWT",
    ],
  },
  {
    period: "2024",
    role: "Frontend Developer",
    company: "Private Client",
    description:
      "Developed an immersive web platform for athlete showcasing, featuring a 3D interactive map using Mapbox. Built a fast and responsive UI with React and Tailwind CSS, integrating multimedia content such as galleries, biographies, and dynamic athlete profiles. The project received highly positive feedback for its innovative visual approach and user-friendly interaction.",
    technologies: ["React", "Mapbox GL", "TailwindCSS"],
  },
  {
    period: "2023 — 2024",
    role: "Full Stack Developer",
    company: "TechNova Labs (Freelance)",
    description:
      "Worked on a modular internal dashboard to manage client analytics, integrating REST APIs and improving data-fetching performance. Designed reusable frontend components, improved Lighthouse accessibility scores by 25%, and implemented server-side optimizations to support real-time updates. Collaborated with designers and backend engineers to streamline workflows and improve product reliability.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
  },
  {
    period: "2021 — 2023",
    role: "Junior Developer",
    company: "Digital Agency (Freelance & Projects)",
    description:
      "Built and maintained websites for small businesses, focusing on performance, responsive design, and maintainable code. Participated in improving legacy systems, migrating parts of them to modern JavaScript tooling, and automating basic deployment workflows on Linux servers.",
    technologies: ["JavaScript", "PHP", "MySQL", "Linux"],
  },
];

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Git",
  "Docker",
  "AWS",
  "PHP",
  "Linux",
];

export function ExperiencePage() {
  return (
    <main className="flex flex-col md:flex-row h-full">
      <div className="hidden md:flex bg-card h-full md:w-1/6 border-r flex-col justify-between p-6">
        <div>
          <span className="text-xs text-muted-foreground font-mono">
            /experience
          </span>
        </div>
        <div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Professional journey and technical expertise.
          </p>
        </div>
      </div>

      <ScrollArea className="h-full w-full md:w-2/6 border-r border-border">
        <div className="p-6 md:p-8 lg:p-10">
          <header className="mb-10 border-b border-border pb-6">
            <h1 className="text-2xl font-medium tracking-tight text-foreground mb-1">
              Camilo Davila
            </h1>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer
            </p>
          </header>

          <section className="mb-10">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-6">
              Experience
            </h2>
            <div className="space-y-0">
              {experiences.map((exp, index) => (
                <article
                  key={index}
                  className="group py-5 border-b border-border hover:bg-muted/30 transition-colors -mx-6 px-6 md:-mx-8 md:px-8 lg:-mx-10 lg:px-10"
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-foreground font-medium text-sm">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-muted-foreground font-mono">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-xs">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-xs mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="rounded-none font-normal text-[10px] px-2 py-0.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>


          <section className="mb-10">
            <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="rounded-none font-normal text-[10px] px-2 py-0.5"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          <footer className="pt-6 border-t border-border">
            <p className="text-xs text-muted-foreground font-mono">
              camiloesteban661@gmail.com
            </p>
          </footer>
        </div>
      </ScrollArea>

      <div className="hidden md:block relative bg-background grow">
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
      </div>
    </main>
  );
}
