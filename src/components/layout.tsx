import { Suspense, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Timer } from "@/components/layout/timer";
import { useIsClient } from "@/hooks/use-client";
import { useRouteMeta } from "@/lib/seo";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { to: "/", label: "/home" },
  { to: "/projects", label: "/projects" },
  { to: "/experience", label: "/experience" },
];

export function Layout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  useRouteMeta(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  const navItems = NAV_LINKS.map(({ to, label }) => (
    <li key={to}>
      <Button asChild variant="link" size="sm">
        <NavLink to={to} end={to === "/"}>
          {label}
        </NavLink>
      </Button>
    </li>
  ));

  return (
    <div className="h-dvh flex flex-col font-mono">
      <header className="relative z-50 h-8 flex items-center justify-between px-4 border-b border-border">
        <Link to="/" aria-label={`${SITE.name} home`}>
          <img
            src="/logo-header.png"
            alt={`${SITE.name} logo`}
            width={40}
            height={28}
            className="w-10 h-7 object-contain invert"
          />
        </Link>
        <div className="flex gap-16 items-center justify-center">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-4 items-center justify-center">{navItems}</ul>
          </nav>
          <Timer />
        </div>
        <Button
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "[x]" : "[≡]"}
        </Button>
        <nav
          id="mobile-nav"
          aria-label="Main"
          className={cn(
            "absolute top-full right-0 bg-background border-l border-b md:hidden",
            !menuOpen && "hidden",
          )}
        >
          <ul className="flex flex-col items-start p-2">{navItems}</ul>
        </nav>
      </header>
      <main className="flex-1 overflow-hidden">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer className="h-8 overflow-hidden flex items-center justify-between px-4 border-t border-border">
        <div className="flex items-center">
          <Button asChild variant="link" size="sm">
            <a href={SITE.github} target="_blank" rel="me noopener noreferrer">
              [GIT]
            </a>
          </Button>
          <Button asChild variant="link" size="sm">
            <a href={SITE.linkedin} target="_blank" rel="me noopener noreferrer">
              [IN]
            </a>
          </Button>
        </div>

        <CurrentDate />

        <div className="size-0 bg-transparent" />
      </footer>
    </div>
  );
}

function CurrentDate() {
  const isClient = useIsClient();

  return (
    <p className="text-xs text-muted-foreground">
      {isClient
        ? new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : null}
    </p>
  );
}
