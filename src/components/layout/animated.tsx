import { motion } from "motion/react";
import { ForwardedRef, forwardRef } from "react";

// FIX: Since im using react 18, i need to use forwardRef
// to pass a ref as a prop. Remove this when updating to react 19.
export const AnimatedLayout = forwardRef(
  (
    { children }: { children: React.ReactNode },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
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
        className="flex h-full flex-col items-center justify-between overflow-y-auto overflow-x-hidden"
      >
        {children}
      </motion.div>
    );
  },
);
