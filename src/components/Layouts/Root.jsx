import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { ScrollShadow } from "@nextui-org/react";

export const Root = () => {
  return (
    <div className="flex flex-row justify-between">
      <Sidebar />
      <ScrollShadow>
        <div className="container overflow-y-auto flex-grow p-5 mx-auto h-screen md:px-20">
          <Outlet />
        </div>
      </ScrollShadow>
    </div>
  );
};
