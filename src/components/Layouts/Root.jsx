import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar";

export const Root = () => {
  return (
    <div className="flex relative flex-row justify-between">
      <img
        src="assets/textures/noise.png"
        alt="noise"
        className="absolute top-0 right-5 md:block floating"
      />
      <img
        src="assets/textures/small_noise.png"
        alt="noise"
        className="absolute bottom-0 left-5 md:block floating"
      />
      <Sidebar />
      <div className="container overflow-y-auto flex-grow p-5 mx-auto w-full h-screen md:px-20 backdrop-blur-sm">
        <Outlet />
      </div>
    </div>
  );
};
