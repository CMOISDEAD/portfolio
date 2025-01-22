import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="custom-scrollbar h-screen overflow-y-hidden bg-zinc-50 md:p-5">
      <main className="relative h-full overflow-hidden bg-background text-foreground shadow-xl dark:bg-foreground dark:text-background md:rounded">
        <Outlet />
      </main>
    </div>
  );
};
