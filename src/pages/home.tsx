import { AnimatedLayout } from "@/components/layout/animated";
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation";
import { FunctionSquare, SquareCode } from "lucide-react";

export const Home = () => {
  return (
    <AnimatedLayout>
      <Header title="Camilo Davila;" />

      <Navigation />

      <section className="flex w-full flex-1 items-center justify-between p-16">
        <div className="flex flex-col items-center justify-center gap-4">
          <FunctionSquare className="h-8 w-8" />
          <p className="w-96">
            Fullstack developer passionate to create innovative and usefull web
            experiences.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <SquareCode className="h-8 w-8" />
          <p className="w-96">
            Specialized in React, Next.js, Node.js, and MongoDB.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <FunctionSquare className="h-8 w-8" />
          <p className="w-96">
            Always looking for new challenges to learn and grow as a developer.
          </p>
        </div>
      </section>
    </AnimatedLayout>
  );
};
