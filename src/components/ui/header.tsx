import { useCursor } from "@/components/ui/cursor";
import { motion } from "motion/react";

interface Props {
  title: string;
  description?: string;
}

export const Header = ({ title, description }: Props) => {
  const { textEnter, leave } = useCursor();

  const containerVariant = {
    hidden: {
      y: "-100vw",
    },
    visible: {
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariant = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="flex flex-1 flex-col items-center justify-center py-16">
      <div
        onMouseEnter={textEnter}
        onMouseLeave={leave}
        className="text-center text-[2rem] font-extrabold uppercase md:text-[12rem]"
      >
        <motion.ul
          variants={containerVariant}
          animate="visible"
          initial="hidden"
        >
          {title.split("").map((letter, index) => (
            <motion.li
              key={index}
              className="inline-block"
              variants={letterVariant}
            >
              {letter}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      {description && (
        <p className="text-center text-xs md:text-sm">{description}</p>
      )}
    </section>
  );
};
