import { AnimatedLayout } from "@/components/layout/animated";
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation";

export const Projects = () => {
  return (
    <AnimatedLayout>
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
