import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/home";
import { Layout } from "@/components/layout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ProjectPage } from "./pages/projects";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
