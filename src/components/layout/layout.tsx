import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="custom-scrollbar h-screen overflow-y-hidden bg-zinc-50 sm:cursor-none md:p-5">
      <main className="relative h-full overflow-hidden rounded bg-background text-foreground shadow-xl dark:bg-foreground dark:text-background">
        <Outlet />
      </main>
    </div>
  );
};
