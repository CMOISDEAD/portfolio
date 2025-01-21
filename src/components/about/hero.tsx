import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  container: React.RefObject<HTMLDivElement>;
}

export const Hero = ({ container }: Props) => {
  const { t } = useTranslation("about");
  const section = useRef(null);
  const [index, setIndex] = useState(1);

  const { scrollYProgress } = useScroll({
    container,
    target: section,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.4) {
      setIndex(1);
    } else if (latest < 0.7) {
      setIndex(2);
    } else {
      setIndex(3);
    }
  });

  return (
    <div
      ref={section}
      className="relative flex w-full items-end justify-center px-48 pt-48"
    >
      <motion.img
        src={`https://huyml.co/Images/about_hero_${index}.jpg`}
        alt={`about hero image ${index}`}
        width={1216}
        height={1555}
        className="rounded"
      />
      <p className="absolute left-16 top-16 w-1/3 text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl">
        {t("hero.one")}
      </p>
      <p className="absolute bottom-16 right-16 w-1/3 text-xl font-bold sm:text-2xl md:text-3xl lg:text-5xl">
        {t("hero.two")}
      </p>
    </div>
  );
};
