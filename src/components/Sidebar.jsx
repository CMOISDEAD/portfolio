import React, { useState } from "react";
import { routes } from "../utils/data/routes";
import { Links } from "./Links";
import { Social } from "./Social";
import { User } from "./User";

export const Sidebar = () => {
  const [view, setView] = useState(false);

  const handleClick = () => {
    setView(!view);
  };

  return (
    <>
      <button
        className="block absolute z-50 mx-5 text-3xl md:hidden text-neutral-500"
        onClick={handleClick}
      >
        &#8801;
      </button>
      <div
        className={`w-3/12 bg-background/80 h-screen border border-divider py-5 max-sm:fixed max-sm:w-screen md:block z-50 ${
          view || "hidden"
        } backdrop-blur-sm`}
      >
        <div className="inline-flex justify-end px-5 w-full md:hidden">
          <button
            className="text-xl text-neutral-500 hover:text-neutral-400"
            onClick={handleClick}
          >
            &#215;
          </button>
        </div>
        <div className="flex flex-col gap-4 justify-center content-center items-center h-full text-center">
          <User />
          <div className="my-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary">
            Navegacion
          </div>
          <Links
            routes={routes}
            className="transition-colors ease-in-out hover:text-focus"
            classActive="text-primary-300"
          />
          <div className="my-6 mt-4 text-center">
            <div className="my-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-foreground to-primary">
              Social
            </div>
            <ul className="flex flex-col gap-4 justify-center content-center items-center text-3xl">
              <Social />
            </ul>
          </div>
          <div className="text-xs text-center text-gray-500">
            Camilo Davila &reg; 2024
          </div>
        </div>
      </div>
    </>
  );
};
