import { motion } from "motion/react";
import { createContext, useContext, useEffect, useState } from "react";

type CursorContextType = {
  textEnter: () => void;
  linkEnter: () => void;
  leave: () => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [variant, setVariant] = useState<"default" | "text" | "link">(
    "default",
  );

  const textEnter = () => setVariant("text");
  const linkEnter = () => setVariant("link");
  const leave = () => setVariant("default");

  return (
    <CursorContext.Provider value={{ textEnter, linkEnter, leave }}>
      {children}
      <Cursor variant={variant} />
    </CursorContext.Provider>
  );
};

const Cursor: React.FC<{ variant: "default" | "text" | "link" }> = ({
  variant,
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) =>
      setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: { x: coords.x - 16, y: coords.y - 16, width: 32, height: 32 },
    text: {
      x: coords.x - 75,
      y: coords.y - 75,
      width: 150,
      height: 150,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
    link: {
      x: coords.x - 40,
      y: coords.y - 40,
      width: 80,
      height: 80,
      backgroundColor: "#ffffff00",
      border: "1px solid #fff",
      mixBlendMode: "difference",
    },
  };

  return (
    <motion.div
      // @ts-expect-error `mixBlendMode` is not a valid prop...
      variants={variants}
      animate={variant}
      className="pointer-events-none fixed left-0 top-0 hidden rounded-full bg-neutral-900 sm:block"
    />
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
