import { useEffect } from "react";
import { SITE } from "@/data/site";
import { findProject, projects } from "@/data/projects";

export interface RouteMeta {
  title: string;
  description: string;
  path: string;
  image: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
}

const absolute = (path: string) => new URL(path, SITE.url).href;

const PERSON_ID = `${SITE.url}/#person`;
const WEBSITE_ID = `${SITE.url}/#website`;

const DEFAULT_DESCRIPTION =
  "Camilo Dávila, Full Stack Developer building fast, scalable web apps with React, Next.js, TypeScript, Node.js and Strapi CMS. Projects, experience and contact.";

function truncate(text: string, max = 155) {
  if (text.length <= max) return text;
  return `${text.slice(0, text.lastIndexOf(" ", max - 1))}…`;
}

function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export const NOT_FOUND_META: RouteMeta = {
  title: `Page not found · ${SITE.name}`,
  description: DEFAULT_DESCRIPTION,
  path: "/404",
  image: SITE.ogImage,
  noindex: true,
};

export function getRouteMeta(pathname: string): RouteMeta {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (path === "/") {
    return {
      title: `${SITE.name} · ${SITE.jobTitle} | React, Next.js & TypeScript`,
      description: DEFAULT_DESCRIPTION,
      path,
      image: SITE.ogImage,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: absolute("/"),
          mainEntity: { "@id": PERSON_ID },
          isPartOf: { "@id": WEBSITE_ID },
        },
      ],
    };
  }

  if (path === "/projects") {
    return {
      title: `Projects · ${SITE.name}, ${SITE.jobTitle}`,
      description:
        "Selected work by Camilo Dávila: production Next.js platforms with Strapi CMS, immersive 3D Mapbox experiences, real-time WebRTC apps, Rust CLI tools and more.",
      path,
      image: SITE.ogImage,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Projects",
          url: absolute(path),
          isPartOf: { "@id": WEBSITE_ID },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: projects.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: absolute(`/projects/${p.slug}`),
              name: p.title,
            })),
          },
        },
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Projects", path },
        ]),
      ],
    };
  }

  if (path === "/experience") {
    return {
      title: `Experience · ${SITE.name}, ${SITE.jobTitle}`,
      description:
        "Professional experience of Camilo Dávila as a Full Stack Developer: Next.js, Strapi CMS, MySQL and Linux VPS platforms, React and Mapbox interfaces, and the skills behind them.",
      path,
      image: SITE.ogImage,
      jsonLd: [
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Experience", path },
        ]),
      ],
    };
  }

  const projectMatch = path.match(/^\/projects\/([^/]+)$/);
  const project = projectMatch && findProject(projectMatch[1]);
  if (project) {
    return {
      title: `${project.title} (${project.year}) · Projects · ${SITE.name}`,
      description: truncate(project.description.replace(/^\(WIP\)\s*/, "")),
      path,
      image: project.image,
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.description,
          url: absolute(path),
          image: absolute(project.image),
          dateCreated: project.year,
          keywords: project.tech.join(", "),
          author: { "@id": PERSON_ID },
          ...(project.link?.startsWith("http") && { sameAs: project.link }),
        },
        breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path },
        ]),
      ],
    };
  }

  return NOT_FOUND_META;
}

export function getPrerenderRoutes() {
  return [
    "/",
    "/projects",
    "/experience",
    ...projects.map((p) => `/projects/${p.slug}`),
  ];
}

export const SITE_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE.name,
      alternateName: SITE.alternateName,
      url: absolute("/"),
      image: absolute(SITE.ogImage),
      jobTitle: SITE.jobTitle,
      email: `mailto:${SITE.email}`,
      sameAs: [SITE.github, SITE.linkedin],
      knowsAbout: SITE.knowsAbout,
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: absolute("/"),
      name: SITE.name,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
  ],
};

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const jsonScript = (data: unknown) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;

export function renderHeadTags(meta: RouteMeta) {
  const url = absolute(meta.path);
  const image = absolute(meta.image);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}" />`,
    meta.noindex ? "" : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${meta.path === "/" ? "profile" : "website"}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE.name)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="${title}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    jsonScript(SITE_JSON_LD),
    ...(meta.jsonLd ?? []).map(jsonScript),
  ]
    .filter(Boolean)
    .join("\n    ");
}

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const metaTag = (key: "name" | "property", id: string) => () => {
  const el = document.createElement("meta");
  el.setAttribute(key, id);
  return el;
};

export function useRouteMeta(pathname: string) {
  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const url = absolute(meta.path);
    const image = absolute(meta.image);

    document.title = meta.title;
    upsert('meta[name="description"]', metaTag("name", "description"), "content", meta.description);
    upsert(
      'meta[name="robots"]',
      metaTag("name", "robots"),
      "content",
      meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    );
    upsert(
      'link[rel="canonical"]',
      () => Object.assign(document.createElement("link"), { rel: "canonical" }),
      "href",
      url,
    );
    upsert('meta[property="og:title"]', metaTag("property", "og:title"), "content", meta.title);
    upsert('meta[property="og:description"]', metaTag("property", "og:description"), "content", meta.description);
    upsert('meta[property="og:url"]', metaTag("property", "og:url"), "content", url);
    upsert('meta[property="og:image"]', metaTag("property", "og:image"), "content", image);
    upsert('meta[name="twitter:title"]', metaTag("name", "twitter:title"), "content", meta.title);
    upsert('meta[name="twitter:description"]', metaTag("name", "twitter:description"), "content", meta.description);
    upsert('meta[name="twitter:image"]', metaTag("name", "twitter:image"), "content", image);
  }, [pathname]);
}
