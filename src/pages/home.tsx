import { AnimatedLayout } from "@/components/layout/animated";
import { Header } from "@/components/ui/header";
import { Navigation } from "@/components/ui/navigation";
import { FunctionSquare, SquareCode } from "lucide-react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const [t] = useTranslation("home");

  return (
    <AnimatedLayout>
      <Helmet>
        <title>Camilo Davila; - Fullstack Developer</title>
        <meta
          name="description"
          content="Fullstack developer passionate to create innovative and usefull web experiences. Specialized in React, Next.js, Node.js, and MongoDB. Always looking for new challenges to learn and grow as a developer."
        />
      </Helmet>

      <Header title="Camilo Davila;" />

      <Navigation />

      <section className="flex w-full flex-1 flex-col items-center justify-between gap-8 p-16 text-center md:flex-row">
        <div className="flex flex-col items-center justify-center gap-4">
          <FunctionSquare className="hidden h-8 w-8 md:block" />
          <p className="w-80 text-sm md:w-96 md:text-base">
            {t("features.one")}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <SquareCode className="hidden h-8 w-8 md:block" />
          <p className="w-80 text-sm md:w-96 md:text-base">
            {t("features.two")}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <FunctionSquare className="hidden h-8 w-8 md:block" />
          <p className="w-80 text-sm md:w-96 md:text-base">
            {t("features.three")}
          </p>
        </div>
      </section>
    </AnimatedLayout>
  );
};
