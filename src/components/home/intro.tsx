import { motion, AnimatePresence, Variants } from "motion/react";
import { UseIntro } from "./introContext";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
};

export const IntroAnimation = () => {
  const { hasSeenIntro, setHasSeenIntro, setIsAnimating } = UseIntro();

  if (hasSeenIntro) return null;

  return (
    <AnimatePresence>
      {!hasSeenIntro && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{
            duration: 2,
          }}
          variants={containerVariants}
          onAnimationComplete={() => {
            setHasSeenIntro(true);
            setIsAnimating(false);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground dark:bg-background"
        >
          <motion.div
            variants={textVariants}
            className="flex space-x-4 text-center text-lg uppercase text-background dark:text-foreground sm:text-xl md:text-2xl"
          >
            <motion.h1 className="font-bold">Camilo Dávila</motion.h1>
            <motion.span className="font-extralight italic">
              Fullstack Developer
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
