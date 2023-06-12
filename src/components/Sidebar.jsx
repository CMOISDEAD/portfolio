import { User } from "./User";
import { Links } from "./Links";
import { Social } from "./Social";
import { routes } from "../utils/data/routes";
import { useState } from "react";

export const Sidebar = () => {
  const [view, setView] = useState(false);

  const handleClick = () => {
    setView(!view);
  };

  return (
    <>
      <button
        className="max-sm:block hidden absolute text-neutral-500 text-3xl mx-5"
        onClick={handleClick}
      >
        &#8801;
      </button>
      <div
        className={`${
          view || "hidden"
        } w-2/6 h-screen py-5 bg-[#070707] max-sm:fixed max-sm:w-screen md:block z-50`}
      >
        <div className="px-5 inline-flex w-full justify-end md:hidden">
          <button
            className="text-xl text-neutral-500 hover:text-neutral-400"
            onClick={handleClick}
          >
            &#215;
          </button>
        </div>
        <div className="flex flex-col justify-center content-center items-center gap-4 text-center mt-4 my-6">
          <User />
          <div className="my-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Navigation
          </div>
          <Links
            routes={routes}
            className="transition-colors ease-in-out hover:text-blue-500"
            classActive="text-blue-300"
          />
          <div className="text-center mt-4 my-6">
            <div className="my-5 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Social
            </div>
            <ul className="flex flex-col justify-center content-center items-center gap-4 text-3xl">
              <Social />
            </ul>
          </div>
          <div className="text-xs text-gray-500 text-center">
            Camilo Davila &reg; 2023
          </div>
        </div>
      </div>
    </>
  );
};
