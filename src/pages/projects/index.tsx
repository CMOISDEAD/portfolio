import { Helmet } from "react-helmet";
import { AnimatedLayout } from "@/components/layout/animated";
import { motion } from "motion/react";
import { InView } from "react-intersection-observer";
import { Navigation } from "@/components/ui/navigation/projectsNavigation";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@/components/ui/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  year: number;
}

export const Projects = () => {
  const [t] = useTranslation("projects");
  const [project, setProject] = useState<Project | null>(null);
  const projects = t("projects", { returnObjects: true }) as Project[];

  return (
    <AnimatedLayout>
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="See some projects I've been working on."
        />
      </Helmet>

      <Navigation />

      <div className="flex w-full gap-4 overflow-hidden">
        <motion.div className="flex flex-1 snap-y snap-mandatory flex-col overflow-y-auto overflow-x-hidden scroll-smooth">
          {projects.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setProject={setProject}
            />
          ))}
        </motion.div>
        <div className="hidden h-full w-1/2 flex-col items-center justify-between px-10 py-20 md:flex">
          <div className="flex flex-col items-center justify-center space-y-8">
            <h1 className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              {project?.title || t("title")}
            </h1>
            <p className="text-sm md:text-lg">{project?.description}</p>
          </div>
          <Link to={project?.link || "#"} target="_blank">
            [Link]
          </Link>
        </div>
      </div>
    </AnimatedLayout>
  );
};

interface Props {
  project: Project;
  setProject: (project: Project) => void;
}

const ProjectCard = ({ project, setProject }: Props) => {
  return (
    <InView
      threshold={1}
      onChange={(inView) => {
        if (inView) setProject(project);
      }}
    >
      {({ ref, inView }) => (
        <Link to={project.link} target="_blank">
          <motion.div
            ref={ref}
            animate={{
              rotateY: inView ? 0 : 45,
            }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 snap-center md:h-[500px] md:w-[800px]"
          >
            <motion.img
              draggable={false}
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </Link>
      )}
    </InView>
  );
};
