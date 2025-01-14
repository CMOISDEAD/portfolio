import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="h-screen overflow-y-hidden bg-gray-50 sm:cursor-none md:p-5">
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};
