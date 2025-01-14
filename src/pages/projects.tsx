import { AnimatedLayout } from "@/components/layout/animated";
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation";
import { Helmet } from "react-helmet";

export const Projects = () => {
  return (
    <AnimatedLayout>
      <Helmet>
        <title>Projects - Camilo Davila;</title>
        <meta
          name="description"
          content="See some projects I've been working on."
        />
      </Helmet>

      <Header title="Projects" />

      <Navigation />

      <section className="flex w-full flex-1 items-center justify-center p-16 text-xs">
        <p>
          Fullstack developer passionate to create innovative and usefull web
          experiences.
        </p>
      </section>
    </AnimatedLayout>
  );
};
