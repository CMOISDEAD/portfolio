import { Layout } from "@/components/layout/layout";
import { Home } from "@/pages/home";
import { Projects } from "@/pages/projects";
import { Works } from "@/pages/works";
import { About } from "@/pages/about";
import { Contact } from "@/pages/contact";
import { AnimatePresence } from "motion/react";
import { Route, Routes, useLocation } from "react-router";
import { CursorProvider } from "./components/ui/cursor";

export const App = () => {
  const location = useLocation();

  return (
    <CursorProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </CursorProvider>
  );
};
