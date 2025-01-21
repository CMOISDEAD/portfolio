import { Helmet } from "react-helmet";
import { Project } from "@/components/projects/Project";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation/globalNavigation";
import { useRef } from "react";
import { AnimatedLayout } from "@/components/layout/animated";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Projects = () => {
  const { t } = useTranslation("projects");
  const container = useRef<HTMLDivElement>(null);

  const projects = t("projects", {
    returnObjects: true,
  }) as Project[];

  return (
    <AnimatedLayout ref={container}>
      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <Helmet>
          <title>Projects</title>
          <meta
            name="description"
            content="See some projects I've been working on."
          />
        </Helmet>

        <Header title={t("title")} />

        <Navigation container={container} />

        <div className="flex max-w-5xl flex-1 flex-col items-center justify-evenly gap-8 text-center">
          <p className="sm:text-2xl md:text-3xl lg:text-4xl">
            {t("description")}
          </p>
          <p className="animate-bounce text-sm md:text-base lg:text-lg">
            {t("scroll")}
          </p>
        </div>
      </div>

      <div className="flex min-h-screen flex-wrap gap-8">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </AnimatedLayout>
  );
};
