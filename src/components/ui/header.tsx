import { useCursor } from "@/components/ui/cursor";
import { motion } from "motion/react";

interface Props {
  title: string;
  description?: string;
  className?: string;
}

export const Header = ({ title, description, className }: Props) => {
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
    <header
      className={`flex flex-1 flex-col items-center justify-center ${className}`}
    >
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={leave}
        className="text-nowrap text-center text-5xl font-extrabold uppercase md:text-8xl lg:text-[12rem]"
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
      </h1>
      {description && (
        <p className="text-center text-xs md:text-sm">{description}</p>
      )}
    </header>
  );
};
