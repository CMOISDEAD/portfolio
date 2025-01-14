import { motion } from "motion/react";

export const AnimatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 100,
      }}
      transition={{ duration: 0.3 }}
      className="relative flex h-full flex-col items-center justify-between rounded bg-gray-200 shadow-xl"
    >
      {children}
    </motion.div>
  );
};
