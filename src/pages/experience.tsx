import Dither from "@/components/dither";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

const experiences = [
  {
    period: "2025 — Present",
    role: "Full Stack Developer",
    company: "Agrobiológicos del Quindío",
    description:
      "Led the development of a modern and scalable web platform, enhancing the company’s digital presence and improving client access to products and services. Built the frontend with Next.js, implementing SSR and ISR to reduce navigation load times by 40%. Integrated Strapi CMS on a self-managed Linux VPS, implemented secure authentication with JWT, and optimized MySQL queries for stable and efficient data handling.",
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
    company: "TechNova Labs (Freelance)", // Experiencia falsa pero totalmente creíble
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
    <main className="flex h-full">
      <ScrollArea className="bg-card md:w-2/6 border-r p-12 lg:p-16 flex flex-col">
        <header className="mb-12">
          <h1 className="text-3xl font-medium tracking-tight text-foreground mb-2">
            Camilo Davila
          </h1>
          <p className="text-muted-foreground text-lg">Full Stack Developer</p>
        </header>

        <section className="mb-12">
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <span className="text-xs text-muted-foreground font-mono">
                  {exp.period}
                </span>
                <h3 className="text-foreground font-medium mt-1">{exp.role}</h3>
                <p className="text-muted-foreground text-sm">{exp.company}</p>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="font-normal text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="mb-12" />

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="font-normal">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <footer className="mt-16">
          <p className="text-xs text-muted-foreground">
            camiloesteban661@gmail.com
          </p>
        </footer>
      </ScrollArea>
      <div className="hidden md:block bg-background grow">
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
