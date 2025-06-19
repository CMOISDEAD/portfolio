import { ReactElement, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

interface Props {
  children: ReactElement;
  image?: string;
  alt?: string;
}

export default function MagicCard({ children, image, alt }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div className="relative">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </motion.div>

      <AnimatePresence mode="wait">
        {isHovered && image && (
          <motion.div
            className="hidden md:block absolute pointer-events-none z-50 w-[600px] max-w-[90vw] shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: position.x,
              y: position.y - 200,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="relative w-full h-[300px]">
              <Image
                src={image}
                alt={alt!}
                fill
                sizes="(max-width: 768px) 90vw, 600px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
