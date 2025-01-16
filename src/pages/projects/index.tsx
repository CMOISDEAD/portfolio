import { useState } from "react";
import { Helmet } from "react-helmet";
import { Project } from "@/components/projects/Project";
import { Navigation } from "@/components/ui/navigation/projectsNavigation";
import { useTranslation } from "react-i18next";
import { useCursor } from "@/components/ui/cursor";
import { motion } from "motion/react";
import { Link } from "react-router";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Projects = () => {
  const [active, setActive] = useState<number>(0);
  const { linkEnter, leave } = useCursor();
  const { t } = useTranslation("projects");

  const projects = t("projects", {
    returnObjects: true,
  }) as Project[];

  const onHover = (i: number) => {
    linkEnter();
    setActive(i);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="relative flex h-full flex-col items-center"
    >
      <Helmet>
        <title>Projects - Camilo Davila;</title>
        <meta
          name="description"
          content="See some projects I've been working on."
        />
      </Helmet>

      <Navigation />

      <div className="flex h-full gap-4 p-16">
        <motion.img
          alt="test"
          src={projects[active].image}
          layoutId="project-image"
          className="hidden h-fit w-2/5 object-cover md:block"
          transition={{ ease: "easeIn" }}
        />

        <div className="flex h-full w-full flex-grow flex-col justify-between gap-4">
          <p className="w-full">
            {projects.map((project, i) => (
              <Link
                key={i}
                to={`${i}`}
                onMouseEnter={() => onHover(i)}
                onMouseLeave={leave}
                className="text-inactive text-5xl font-bold transition-colors hover:text-foreground hover:dark:text-background md:text-7xl"
              >
                {project.title}
                {i === projects.length - 1 ? "" : ", "}
              </Link>
            ))}
          </p>
          <h3 className="text-center text-5xl font-extrabold uppercase md:text-9xl">
            CamiloDavila
          </h3>
        </div>
      </div>
    </motion.div>
  );
};
