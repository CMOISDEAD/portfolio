import { AnimatedLayout } from "@/components/layout/animated";
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation";
import { WorkCard } from "@/components/works/workcard";

import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

interface Work {
  id: number;
  title: string;
  description: string;
  skills: string[];
  year: string;
}

export const Works = () => {
  const [t] = useTranslation("works");

  const works: Work[] = t("works", { returnObjects: true }) as Work[];

  return (
    <AnimatedLayout>
      <Helmet>
        <title>Works - Camilo Davila;</title>
        <meta
          name="description"
          content="See some experiences I've been through in my career."
        />
      </Helmet>

      <Header title={t("title")} description={t("description")} />

      <Navigation />

      <section className="mx-auto flex w-full flex-1 space-x-8 overflow-x-auto overflow-y-hidden p-8">
        {works.map((work) => (
          <WorkCard {...work} key={work.id} />
        ))}
      </section>
    </AnimatedLayout>
  );
};
