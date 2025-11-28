import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { Layout } from "@/components/layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ProjectPage } from "./pages/projects";
import { ExperiencePage } from "./pages/experience";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="experience" element={<ExperiencePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
