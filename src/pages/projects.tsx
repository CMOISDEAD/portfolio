import { useState } from "react";
import { Helmet } from "react-helmet";
import { AnimatedLayout } from "@/components/layout/animated";
import { Project } from "@/components/projects/Project";
import { Navigation } from "@/components/ui/navigation/projectsNavigation";
import { useTranslation } from "react-i18next";
import { useInfiniteScroll } from "@/hooks/useInfinityScroll";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Projects = () => {
  const [word, setWord] = useState<string | null>("Projects");
  const { scrollContainer, activeId } = useInfiniteScroll();
  const { t } = useTranslation("projects");

  const projects = t("projects", {
    returnObjects: true,
  }) as Project[];

  const onHover = (word: string | null) => {
    setWord(word);
  };

  return (
    <AnimatedLayout>
      <Helmet>
        <title>Projects - Camilo Davila;</title>
        <meta
          name="description"
          content="See some projects I've been working on."
        />
      </Helmet>

      <div className="w-full">
        <Navigation />
        <div
          ref={scrollContainer}
          className="scrollbar-hide flex h-[50vh] overflow-y-hidden overflow-x-scroll whitespace-nowrap md:h-[60vh] lg:h-[80vh]"
        >
          {[...projects, ...projects, ...projects].map((project, i) => (
            <Project
              {...project}
              onHover={onHover}
              active={activeId}
              index={i}
              key={i}
            />
          ))}
        </div>
      </div>

      <section className="absolute bottom-0 flex w-full flex-1 justify-center overflow-hidden">
        <h3 className="text-nowrap text-center text-4xl font-bold uppercase md:text-8xl lg:text-[18rem]">
          {word}
        </h3>
      </section>
    </AnimatedLayout>
  );
};
