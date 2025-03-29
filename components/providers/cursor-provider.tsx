"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

type CursorContextType = {
  textEnter: () => void;
  linkEnter: () => void;
  scrollEnter: () => void;
  buttonEnter: () => void; // New cursor type for buttons
  leave: () => void;
};

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [variant, setVariant] = useState<
    "default" | "scroll" | "text" | "link" | "button"
  >("default");

  const textEnter = () => setVariant("text");
  const linkEnter = () => setVariant("link");
  const scrollEnter = () => setVariant("scroll");
  const buttonEnter = () => setVariant("button"); // New function for button hover
  const leave = () => setVariant("default");

  return (
    <CursorContext.Provider
      value={{ textEnter, linkEnter, scrollEnter, buttonEnter, leave }}
    >
      {children}
      <Cursor variant={variant} />
    </CursorContext.Provider>
  );
};

const Cursor: React.FC<{
  variant: "default" | "scroll" | "text" | "link" | "button";
}> = ({ variant }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = "none";

    // // Add jitter factor to make the dot movement more natural
    // let lastCursorX = 0;
    // let lastCursorY = 0;

    const mouseMove = (e: MouseEvent) => {
      // Get the current mouse position
      const currentX = e.clientX;
      const currentY = e.clientY;

      // // Calculate movement speed (used for dynamic animation)
      // const speedX = Math.abs(currentX - lastCursorX);
      // const speedY = Math.abs(currentY - lastCursorY);

      // Update last position
      // lastCursorX = currentX;
      // lastCursorY = currentY;

      // Update coordinates
      setCoords({
        x: currentX,
        y: currentY,
      });

      // Show cursor if not visible
      if (!isVisible) setIsVisible(true);
    };

    const mouseLeave = () => setIsVisible(false);
    const mouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseleave", mouseLeave);
    document.addEventListener("mouseenter", mouseEnter);

    return () => {
      // Restore default cursor
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseleave", mouseLeave);
      document.removeEventListener("mouseenter", mouseEnter);
    };
  }, [isVisible]);

  // We'll stop using the variants object and apply styles directly
  // to fix positioning issues with text-over-cursor and button text

  if (!isVisible) return null;

  // Stone palette colors - classic style
  const stoneColors = {
    light: {
      bg: "#e7e5e4", // stone-200
      text: "#44403c", // stone-700
      border: "#78716c", // stone-500
      accent: "#a8a29e", // stone-400
      transparent: "rgba(231, 229, 228, 0.35)", // stone-200 with transparency
    },
    dark: {
      bg: "#57534e", // stone-600
      text: "#e7e5e4", // stone-200
      border: "#a8a29e", // stone-400
      accent: "#78716c", // stone-500
      transparent: "rgba(87, 83, 78, 0.35)", // stone-600 with transparency
    },
  };

  // Get colors based on current theme
  const colors = theme === "dark" ? stoneColors.dark : stoneColors.light;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] hidden sm:block"
        style={{
          left:
            variant === "default"
              ? coords.x - 10
              : variant === "text"
                ? coords.x - 50
                : variant === "button"
                  ? coords.x - 30
                  : coords.x - 25,
          top:
            variant === "default"
              ? coords.y - 10
              : variant === "text"
                ? coords.y - 50
                : variant === "button"
                  ? coords.y - 30
                  : coords.y - 25,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: variant === "button" ? 0.95 : 1,
          width:
            variant === "default"
              ? 20
              : variant === "text"
                ? 100
                : variant === "button"
                  ? 60
                  : 50,
          height:
            variant === "default"
              ? 20
              : variant === "text"
                ? 100
                : variant === "button"
                  ? 60
                  : 50,
          borderRadius: "50%", // Always circular for minimalist design
          backgroundColor: "transparent",
          border:
            variant === "default"
              ? `1px solid ${colors.border}`
              : variant === "link" || variant === "scroll"
                ? `1px solid ${colors.border}`
                : variant === "button"
                  ? `1px solid ${colors.border}`
                  : `1px solid ${colors.border}`,
          mixBlendMode: variant === "text" ? "difference" : "normal",
          boxShadow: "none", // Remove shadow for minimalist style
          backdropFilter: "none", // Remove blur for minimalist style
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        {variant === "scroll" && (
          <div
            className="absolute inset-0 flex items-center justify-center text-center opacity-80"
            style={{
              color: colors.text,
              fontFamily: "'sans-serif'",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
            }}
          >
            scroll
          </div>
        )}
        {variant === "button" && (
          <div
            className="absolute inset-0 flex items-center justify-center text-center opacity-80"
            style={{
              color: colors.text,
              fontFamily: "'sans-serif'",
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
            }}
          >
            view
          </div>
        )}
      </motion.div>

      {/* Minimalist centered dot */}
      <motion.div
        className="pointer-events-none fixed z-[101] hidden rounded-full sm:block"
        style={{
          height: "4px",
          width: "4px",
          backgroundColor: colors.text,
          left: coords.x - 2,
          top: coords.y - 2,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.15,
          ease: "easeOut",
        }}
      />
    </>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};

// Convenient wrapper components with proper className handling
export const CursorText: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const { textEnter, leave } = useCursor();
  return (
    <div
      className={`cursor-none ${className || ""}`}
      onMouseEnter={textEnter}
      onMouseLeave={leave}
      {...props}
    >
      {children}
    </div>
  );
};

export const CursorButton: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const { buttonEnter, leave } = useCursor();
  return (
    <div
      className={`cursor-none ${className || ""}`}
      onMouseEnter={buttonEnter}
      onMouseLeave={leave}
      {...props}
    >
      {children}
    </div>
  );
};

export const CursorLink: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const { linkEnter, leave } = useCursor();
  return (
    <div
      className={`cursor-none ${className || ""}`}
      onMouseEnter={linkEnter}
      onMouseLeave={leave}
      {...props}
    >
      {children}
    </div>
  );
};

export const CursorScroll: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  const { scrollEnter, leave } = useCursor();
  return (
    <div
      className={`cursor-none ${className || ""}`}
      onMouseEnter={scrollEnter}
      onMouseLeave={leave}
      {...props}
    >
      {children}
    </div>
  );
};
