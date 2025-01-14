import React from "react";
import { useLocation, useOutlet } from "react-router";

export const Layout = () => {
  const { pathname } = useLocation();
  const element = useOutlet();
  return (
    <div className="font-ono h-screen cursor-none overflow-y-hidden bg-gray-50 p-5">
      <main className="h-full">
        {element && React.cloneElement(element, { key: pathname })}
      </main>
    </div>
  );
};
