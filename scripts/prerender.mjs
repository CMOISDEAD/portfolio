import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const dist = path.resolve("dist");
const serverDir = path.join(dist, "server");

const template = await fs.readFile(path.join(dist, "index.html"), "utf-8");
const {
  render,
  getPrerenderRoutes,
  getRouteMeta,
  NOT_FOUND_META,
  renderHeadTags,
  SITE,
} = await import(pathToFileURL(path.join(serverDir, "entry-server.js")).href);

const page = async (url, meta) => {
  const html = await render(url);
  return template
    .replace("<!--app-head-->", renderHeadTags(meta))
    .replace("<!--app-html-->", html);
};

// With `cleanUrls`, Vercel serves /projects from projects.html
const fileFor = (route) =>
  route === "/" ? "index.html" : `${route.slice(1)}.html`;

const routes = getPrerenderRoutes();
for (const route of routes) {
  const file = path.join(dist, fileFor(route));
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, await page(route, getRouteMeta(route)));
  console.log(`prerendered ${route} -> ${path.relative(dist, file)}`);
}

await fs.writeFile(
  path.join(dist, "404.html"),
  await page("/404", NOT_FOUND_META),
);
console.log("prerendered 404.html");

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${new URL(route, SITE.url).href.replace(/\/$/, route === "/" ? "/" : "")}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;
await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap);
console.log(`wrote sitemap.xml (${routes.length} urls)`);

await fs.rm(serverDir, { recursive: true, force: true });
