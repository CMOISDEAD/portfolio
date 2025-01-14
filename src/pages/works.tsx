import { AnimatedLayout } from "@/components/layout/animated";
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation";
import { WorkCard } from "@/components/works/workcard";

import works from "@/data/works";
import { Helmet } from "react-helmet";

export const Works = () => {
  return (
    <AnimatedLayout>
      <Helmet>
        <title>Works - Camilo Davila;</title>
        <meta
          name="description"
          content="See some experiences I've been through in my career."
        />
      </Helmet>

      <Header
        title="Works"
        description="See some experiences I've been through in my career."
      />

      <Navigation />

      <section className="mx-auto flex w-full flex-1 space-x-8 overflow-x-auto overflow-y-hidden p-8">
        {works.map((work) => (
          <WorkCard {...work} key={work.id} />
        ))}
      </section>
    </AnimatedLayout>
  );
};
