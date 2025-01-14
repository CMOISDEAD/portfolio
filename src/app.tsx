import { Layout } from "@/components/layout/layout";
import { Home } from "@/pages/home";
import { Projects } from "@/pages/projects";
import { Works } from "@/pages/works";
import { About } from "@/pages/about";
import { Contact } from "@/pages/contact";
import { Route, Routes, useLocation } from "react-router";
import { Providers } from "@/components/layout/providers";

export const App = () => {
  const location = useLocation();

  return (
    <Providers>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Providers>
  );
};
