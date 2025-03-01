import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { useTranslation } from "react-i18next";
import { animate, motion, useMotionValue } from "motion/react";

export const Carousel = () => {
  const [t] = useTranslation("home");
  const [ref, { width }] = useMeasure();
  const features = t("features", { returnObjects: true }) as string[];
  const duplicated = [...features, ...features, ...features];

  const x = useMotionValue(0);

  useEffect(() => {
    const finalPos = -width / 3 - 12;
    const controls = animate(x, [0, finalPos], {
      ease: "linear",
      duration: 12,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [x, width]);

  return (
    <section className="relative flex w-full max-w-7xl flex-1 items-end justify-center gap-8 overflow-hidden py-16 md:flex-row">
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-foreground to-transparent dark:from-background"></div>
        <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-foreground to-transparent dark:from-background"></div>
      </div>
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
    <div className="flex min-w-fit flex-col items-center justify-center gap-4 border border-inactive/20 p-5 shadow md:min-w-96">
      <p>{"{ }"}</p>
      <p className="w-60 text-xs md:w-80 md:text-base">{feature}</p>
    </div>
  );
};
