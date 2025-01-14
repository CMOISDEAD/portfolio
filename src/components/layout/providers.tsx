import { AnimatePresence } from "motion/react";
import { CursorProvider } from "@/components/ui/cursor";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <CursorProvider>
        <AnimatePresence mode="wait">{children}</AnimatePresence>
      </CursorProvider>
    </ThemeProvider>
  );
};
