import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Project } from "@/components/projects/Project";
import { useTranslation } from "react-i18next";
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation/globalNavigation";
import { AnimatedLayout } from "@/components/layout/animated";
import projects from "@/data/projects";
import { useMotionValueEvent, useScroll } from "motion/react";

//TODO: duplicated
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  year: number;
}

export const Projects = () => {
  const { t } = useTranslation("projects");
  const container = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll({ container });

  // this should be here because for some reason on production don't work if
  // this method is in the navigation component maybe some bad ref passing or something
  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > lastScrollY) setHidden(true);
    else if (latest < lastScrollY) setHidden(false);

    setLastScrollY(latest);
  });

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

        <Navigation container={container} hidden={hidden} />

        <div className="flex max-w-5xl flex-1 flex-col items-center justify-evenly gap-8 text-center">
          <p className="sm:text-2xl md:text-3xl lg:text-4xl">
            {t("description")}
          </p>
          <p className="animate-bounce text-sm md:text-base lg:text-lg">
            {t("scroll")}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </AnimatedLayout>
  );
};
