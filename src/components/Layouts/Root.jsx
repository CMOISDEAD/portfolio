import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { ScrollShadow } from "@nextui-org/react";

export const Root = () => {
  return (
    <div className="flex flex-row justify-between">
      <Sidebar />
      <div className="container overflow-y-auto p-5 mx-auto h-screen md:px-20">
        <ScrollShadow>
          <Outlet />
        </ScrollShadow>
      </div>
    </div>
  );
};
