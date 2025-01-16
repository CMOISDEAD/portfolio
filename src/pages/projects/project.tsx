import { useCursor } from "@/components/ui/cursor";
import { Link } from "@/components/ui/link";
import { Navigation } from "@/components/ui/navigation/projectsNavigation";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

const variants = {
  container: {
    hidden: {
      y: "-100vw",
    },
    visible: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  },
  letter: {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
};

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Project = () => {
  const { t } = useTranslation("projects");
  const { textEnter, leave } = useCursor();
  const { index } = useParams();

  const projects = t("projects", {
    returnObjects: true,
  }) as Project[];

  const project: Project = projects[parseInt(index as string)];
  const next =
    parseInt(index as string) === projects.length - 1
      ? 0
      : parseInt(index as string) + 1;

  return (
    <motion.div
      exit={{
        opacity: 0,
        y: 100,
      }}
      className="relative h-full overflow-y-auto"
    >
      <Navigation />
      <div className="container mx-auto py-8">
        <header className="flex flex-col items-center justify-center">
          <h1
            onMouseEnter={textEnter}
            onMouseLeave={leave}
            className="text-[2rem] font-extrabold uppercase md:text-[12rem]"
          >
            <motion.ul
              variants={variants.container}
              animate="visible"
              initial="hidden"
            >
              {project.title.split("").map((letter, index) => (
                <motion.li
                  key={index}
                  className="inline-block"
                  variants={variants.letter}
                >
                  {letter}
                </motion.li>
              ))}
            </motion.ul>
          </h1>
          <h3 className="text-5xl">2024</h3>
        </header>

        <main className="flex w-full flex-col justify-center space-y-8 py-8">
          <p>{project.description}</p>
          <motion.img
            alt="test"
            src={project.image}
            layoutId="project-image"
            initial={{
              y: 500,
            }}
            animate={{ y: 0 }}
            className="object-cover"
          />
        </main>

        <div>
          <Link
            to={`/projects/${projects[next].id}`}
            className="flex flex-col items-center justify-center text-center"
          >
            <ArrowRight className="h-12 w-12" />
            <p className="">{projects[next].title}</p>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
