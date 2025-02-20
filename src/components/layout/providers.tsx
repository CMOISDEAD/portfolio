import { AnimatePresence } from "motion/react";
import { CursorProvider } from "@/components/ui/cursor";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { IntroProvider } from "../home/introContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <CursorProvider>
        <I18nextProvider i18n={i18n}>
          <AnimatePresence mode="wait">
            <IntroProvider>{children}</IntroProvider>
          </AnimatePresence>
        </I18nextProvider>
      </CursorProvider>
    </ThemeProvider>
  );
};
