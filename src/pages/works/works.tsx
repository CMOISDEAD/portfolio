import { AnimatedLayout } from "@/components/layout/animated";
import { Link } from "@/components/ui/link";
import { Navigation } from "@/components/ui/navigation/globalNavigation";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router";

interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Work = () => {
  const container = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useTranslation("works");
  const { index } = useParams();
  const { scrollY } = useScroll({ container });

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > lastScrollY) setHidden(true);
    else if (latest < lastScrollY) setHidden(false);

    setLastScrollY(latest);
  });

  const works = t("works", {
    returnObjects: true,
  }) as Work[];

  const project: Work | undefined = works.find(
    (work) => work.id === parseInt(index!),
  );

  if (!project) {
    return null;
  }

  return (
    <AnimatedLayout ref={container}>
      <Helmet>
        <title>{project.title} - Camilo Davila</title>
        <meta name="description" content="Some of my projects." />
      </Helmet>
      <main className="my-20">
        <h1 className="text-4xl font-bold sm:text-6xl md:text-8xl">
          {project.title}
        </h1>

        <Navigation container={container} hidden={hidden} />

        <section className="container mx-auto my-20 flex w-full flex-col gap-8">
          <Link to={project.link} className="text-lg" target="_blank">
            <img src={project.image} alt={project.title} className="w-full" />
          </Link>

          <p className="text-base sm:text-lg md:text-xl">
            {project.description}
          </p>
        </section>
      </main>
    </AnimatedLayout>
  );
};
