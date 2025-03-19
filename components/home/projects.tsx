import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Agrobiológicos del Quindío",
    description:
      "Developed a scalable website that enhanced Agrobiológicos del Quindío’s online presence, improving customer engagement and accessibility to their products. Built with Next.js (ISR), integrated with Strapi CMS, and deployed on a VPS for optimal performance.",
    tags: ["Next.js", "SSR", "Strapi", "MySQL", "TailwindCSS"],
    demo: "https://agrobiologicosquindio.com",
    repo: "https://github.com/CMOISDEAD",
  },
  {
    title: "Comunidad Deportiva",
    description:
      "Interactive web platform for showcasing athletes, using a 3D map as the main interface. The project included everything from design conception to full front-end implementation, integrating multimedia information (photos, biographies, etc.) and optimizing for a smooth user experience.",
    tags: ["React", "Mapbox"],
    demo: "https://comunidad-xi.vercel.app/",
    repo: "https://github.com/CMOISDEAD",
  },
  {
    title: "Ancient Map",
    description:
      "A interactive map of ancient civilizations, featuring detailed information about historical events, cultures, and landmarks. The project aims to educate users about the rich history of ancient civilizations and their contributions to the world.",
    tags: ["Next.js", "Mapbox", "TailwindCSS"],
    demo: "https://ancient-map.vercel.app/",
    repo: "https://github.com/CMOISDEAD",
  },
  {
    title: "Digital Gallery",
    description:
      "A conceptual project based on a modern and minimalist design, combining classical art with digital interactivity. Explore a collection of iconic paintings in a virtual gallery, featuring fluid animations, drag gestures, and an immersive user experience. Developed with React, Tailwind CSS, Framer Motion, and use-gesture.",
    tags: ["React", "TailwindCSS"],
    demo: "https://digital-gallery-delta.vercel.app/",
    repo: "https://github.com/CMOISDEAD",
  },
];

export function Projects() {
  return (
    <section>
      <h2 className="mb-4 font-serif text-sm font-medium uppercase tracking-wider text-stone-500 dark:text-stone-400 sm:mb-6">
        Projects
      </h2>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="space-y-2">
            <h3 className="font-serif text-lg font-medium text-stone-800 dark:text-stone-100">
              {project.title}
            </h3>
            <p className="text-sm text-stone-600 dark:text-stone-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-stone-200 dark:bg-stone-700 px-2 py-0.5 text-xs text-stone-700 dark:text-stone-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-3 flex gap-4">
              <Link
                href={project.demo}
                target="_blank"
                className="flex items-center gap-1 text-xs text-stone-700 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
              >
                <ExternalLink size={14} />
                <span>Live Demo</span>
              </Link>
              <Link
                href={project.repo}
                target="_blank"
                className="flex items-center gap-1 text-xs text-stone-700 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200"
              >
                <Github size={14} />
                <span>Repository</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
