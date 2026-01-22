import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Timer } from "@/components/layout/timer";

export function Layout() {
  return (
    <div className="h-screen min-h-screen flex flex-col font-mono">
      <header className="h-8 flex items-center justify-between px-4 border-b border-border">
        <Link to="/">
          <img src="/logo.png" alt="camilo davila logo" className="w-10 h-7 invert" />
        </Link>
        <div className="flex gap-16 items-center justify-center">
          <nav className="hidden md:block">
            <ul className="flex gap-4 items-center justify-center">
              <li>
                <Button asChild variant="link" size="sm">
                  <Link to="/">/home</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" size="sm">
                  <Link to="/projects">/projects</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" size="sm">
                  <Link to="/experience">/experience</Link>
                </Button>
              </li>
            </ul>
          </nav>
          <Timer />
        </div>
        <Button variant="ghost" size="icon-sm" className="md:hidden">
          [x]
        </Button>
      </header>
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
      <footer className="h-8 flex items-center justify-between px-4 border-t border-border">
        <div className="flex items-center">
          <Button variant="link" size="sm">
            <a href="https://github.com/CMOISDEAD" target="_blank">
              [GIT]
            </a>
          </Button>
          <Button variant="link" size="sm" className="hidden">
            <a href="https://github.com/CMOISDEAD" target="_blank">
              [YT]
            </a>
          </Button>
        </div>


        <p className="text-xs text-muted-foreground">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="size-0 bg-transparent" />
      </footer>
    </div>
  );
}
