import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="h-screen overflow-y-hidden bg-zinc-50 sm:cursor-none md:p-5">
      <main className="h-full overflow-x-hidden overflow-y-hidden rounded bg-background text-foreground shadow-xl dark:bg-foreground dark:text-background">
        <Outlet />
      </main>
    </div>
  );
};
