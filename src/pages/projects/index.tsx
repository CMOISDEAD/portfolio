import { Helmet } from "react-helmet";
import { Project } from "@/components/projects/Project";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation/globalNavigation";
import { useRef } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Projects = () => {
  const container = useRef<HTMLDivElement>(null);
  const { t } = useTranslation("projects");

  const projects = t("projects", {
    returnObjects: true,
  }) as Project[];

  return (
    <motion.div
      ref={container}
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="flex h-full flex-col items-center justify-between overflow-y-auto"
    >
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <Helmet>
          <title>Projects</title>
          <meta
            name="description"
            content="See some projects I've been working on."
          />
        </Helmet>
        <Header title={t("title")} />
        <div className="flex max-w-5xl flex-1 flex-col items-center justify-evenly gap-8 text-center">
          <p className="sm:text-2xl md:text-3xl lg:text-4xl">
            {t("description")}
          </p>
          <p className="animate-bounce text-sm md:text-base lg:text-lg">
            Scroll Down
          </p>
        </div>
      </div>

      <Navigation container={container} />

      <div className="flex min-h-screen flex-wrap gap-8">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};
