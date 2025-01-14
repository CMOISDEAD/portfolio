import { AnimatedLayout } from "@/components/layout/animated";
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation";
import { FunctionSquare, SquareCode } from "lucide-react";

export const Home = () => {
  return (
    <AnimatedLayout>
      <Header title="Camilo Davila;" />

      <Navigation />

      <section className="flex w-full flex-1 flex-col items-center justify-between gap-8 p-16 text-center md:flex-row">
        <div className="flex flex-col items-center justify-center gap-4">
          <FunctionSquare className="hidden h-8 w-8 md:block" />
          <p className="w-80 text-sm md:w-96 md:text-base">
            Fullstack developer passionate to create innovative and usefull web
            experiences.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <SquareCode className="hidden h-8 w-8 md:block" />
          <p className="w-80 text-sm md:w-96 md:text-base">
            Specialized in React, Next.js, Node.js, and MongoDB.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <FunctionSquare className="hidden h-8 w-8 md:block" />
          <p className="w-80 text-sm md:w-96 md:text-base">
            Always looking for new challenges to learn and grow as a developer.
          </p>
        </div>
      </section>
    </AnimatedLayout>
  );
};
