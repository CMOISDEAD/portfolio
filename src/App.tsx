import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/layout";
import { ThemeProvider } from "@/components/providers/theme-provider";

const HomePage = lazy(() =>
  import("@/pages/home").then((m) => ({ default: m.HomePage })),
);
const ProjectPage = lazy(() =>
  import("@/pages/projects").then((m) => ({ default: m.ProjectPage })),
);
const ExperiencePage = lazy(() =>
  import("@/pages/experience").then((m) => ({ default: m.ExperiencePage })),
);
const NotFoundPage = lazy(() =>
  import("@/pages/not-found").then((m) => ({ default: m.NotFoundPage })),
);

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="projects/:slug" element={<ProjectPage />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
