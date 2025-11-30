import { Link, Outlet } from "react-router-dom";
import { Button } from "./ui/button";
// import { ThemeSwitcher } from "./theme-switcher";

export function Layout() {
  return (
    <div className="h-screen min-h-screen flex flex-col font-mono">
      <header className="h-8 flex items-center justify-between px-4 border-b border-border bg-card">
        <div className="size-2 bg-muted-foreground hover:bg-foreground" />
        <div className="flex gap-16 items-center justify-center">
          <nav className="hidden md:block">
            <ul className="flex gap-4 items-center justify-center">
              <li>
                <Button asChild variant="link" size="sm">
                  <Link to="/">home</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" size="sm">
                  <Link to="/projects">projects</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" size="sm">
                  <Link to="/experience">experience</Link>
                </Button>
              </li>
            </ul>
          </nav>
          <p className="text-sm text-muted-foreground">
            [
            {new Date().toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}
            ]
          </p>
        </div>
        <Button variant="ghost" size="icon-sm" className="md:hidden">
          [x]
        </Button>
      </header>
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
      <footer className="h-8 flex items-center justify-center px-4 border-t border-border bg-card">
        <p className="text-xs text-muted-foreground">
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </footer>
    </div>
  );
}
