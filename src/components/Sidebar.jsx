import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Links } from "./Links";
import { routes } from "../utils/data";
import { User } from "./User";
import { Social } from "./Social";

export const Sidebar = () => {
  return (
    <div className="px-2 w-2/6 bg-[#070707] h-screen">
      <div className="sticky top-0 py-10 flex flex-col justify-between content-center items-center h-full">
        <User />
        <div className="flex flex-col content-start justify-center gap-4 text-center mt-4 my-6">
          <div className="my-3 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Navigation
          </div>
          <Links
            routes={routes}
            className="transition-colors ease-in-out hover:text-blue-500"
            classActive="text-blue-300"
          />
        </div>
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
  );
};
