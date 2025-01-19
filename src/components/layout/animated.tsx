import { motion } from "motion/react";

export const AnimatedLayout = ({
  children,
  ref,
}: {
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <motion.div
      ref={ref}
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
      className="relative flex h-full flex-col items-center justify-between"
    >
      {children}
    </motion.div>
  );
};
