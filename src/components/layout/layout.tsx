import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="h-screen overflow-y-hidden bg-zinc-50 sm:cursor-none md:p-5">
      <main className="bg-background text-foreground dark:bg-foreground dark:text-background h-full rounded shadow-xl">
        <Outlet />
      </main>
    </div>
  );
};
