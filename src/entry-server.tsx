/* eslint-disable react-refresh/only-export-components -- build-time entry, never hot-reloaded */
import { StrictMode } from "react";
import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router-dom";
import { AppRoutes } from "./App.tsx";
import { ThemeProvider } from "@/components/providers/theme-provider";

export {
  getPrerenderRoutes,
  getRouteMeta,
  NOT_FOUND_META,
  renderHeadTags,
} from "@/lib/seo";
export { SITE } from "@/data/site";

export async function render(url: string) {
  const { prelude } = await prerender(
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </ThemeProvider>
    </StrictMode>,
  );
  return new Response(prelude).text();
}
