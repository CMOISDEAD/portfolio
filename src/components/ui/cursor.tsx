import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { createContext, useContext, useEffect, useState } from "react";

type CursorContextType = {
  textEnter: () => void;
  linkEnter: () => void;
  scrollEnter: () => void;
  leave: () => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [variant, setVariant] = useState<
    "default" | "scroll" | "text" | "link"
  >("default");

  const textEnter = () => setVariant("text");
  const linkEnter = () => setVariant("link");
  const scrollEnter = () => setVariant("scroll");
  const leave = () => setVariant("default");

  return (
    <CursorContext.Provider
      value={{ textEnter, linkEnter, scrollEnter, leave }}
    >
      {children}
      <Cursor variant={variant} />
    </CursorContext.Provider>
  );
};

const Cursor: React.FC<{ variant: "default" | "scroll" | "text" | "link" }> = ({
  variant,
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const mouseMove = (e: MouseEvent) =>
      setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: coords.x - 16,
      y: coords.y - 16,
      width: 32,
      height: 32,
      backgroundColor: theme === "dark" ? "#e4e4e7" : "#27272a",
    },
    text: {
      x: coords.x - 75,
      y: coords.y - 75,
      width: 150,
      height: 150,
      backgroundColor: "#e4e4e7",
      mixBlendMode: "difference",
    },
    link: {
      x: coords.x - 40,
      y: coords.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "#ffffff00",
      border: "1px solid #e4e4e7",
      mixBlendMode: "difference",
    },
    scroll: {
      x: coords.x - 40,
      y: coords.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "#ffffff00",
      border: "1px solid #e4e4e7",
      mixBlendMode: "difference",
      content: "'Scroll Down'",
      fontSize: "0.75rem",
    },
  };

  return (
    <motion.div
      // @ts-expect-error `mixBlendMode` is not a valid prop...
      variants={variants}
      animate={variant}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden rounded-full sm:block"
    >
      {variant === "scroll" && (
        <div className="absolute flex h-full w-full items-center justify-center">
          Scroll Down
        </div>
      )}
    </motion.div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
