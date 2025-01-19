import { useEffect } from "react";
import { Helmet } from "react-helmet";
import useMeasure from "react-use-measure";
import { FunctionSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import { animate, motion, useMotionValue } from "motion/react";
import { Header } from "@/components/ui/header";
import { AnimatedLayout } from "@/components/layout/animated";
import { Navigation } from "@/components/ui/navigation/globalNavigation";

export const Home = () => {
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

      <Carousel />
    </AnimatedLayout>
  );
};

const Carousel = () => {
  const [t] = useTranslation("home");
  const [ref, { width }] = useMeasure();
  const features = t("features", { returnObjects: true }) as string[];
  const duplicated = [...features, ...features, ...features];

  const x = useMotionValue(0);

  useEffect(() => {
    const finalPos = -width / 3 - 12;
    const controls = animate(x, [0, finalPos], {
      ease: "linear",
      duration: 5,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [x, width]);

  return (
    <section className="flex w-full max-w-7xl flex-1 items-end justify-center gap-8 overflow-hidden py-16 md:flex-row">
      <motion.div ref={ref} style={{ x }} className="flex w-full gap-6">
        {duplicated.map((feature, i) => (
          <Card key={i} feature={feature} />
        ))}
      </motion.div>
    </section>
  );
};

const Card = ({ feature }: { feature: string }) => {
  return (
    <div className="flex h-36 flex-col items-center justify-center gap-4 rounded border border-inactive/20 px-10 py-5 shadow">
      <FunctionSquare className="hidden h-8 w-8 md:block" />
      <p className="w-full text-sm md:w-80 md:text-base">{feature}</p>
    </div>
  );
};
