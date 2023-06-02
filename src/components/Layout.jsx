import moment from "moment";
import { Links } from "./Links";
import { Social } from "./Social";
import { Sidebar } from "./Sidebar";
import { routes } from "../utils/data/routes";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <div className="absolute inline-flex gap-2 top-10 left-10 font-mono text-sm text-white">
        DOOM5D4Y
      </div>
      <div className="absolute top-20 left-10 right-10 backdrop-blur-md">
        {children}
      </div>
      <div className="absolute bottom-10 w-full flex justify-between px-10">
        <div className="inline-flex gap-2 left-10 font-mono text-xl text-white grow basis-0 max-sm:hidden">
          <Social />
        </div>
        <div className="bottom-20 sm:bottom-10 special">
          <Links
            routes={routes.slice(1)}
            className="mx-2 hover:text-blue-500"
            classActive="text-blue-700"
          />
        </div>
        <div className="font-mono text-xs md:text-sm italic text-white grow basis-0 text-end">
          Last update {moment("2023-05-15", "YYYYMMDD").fromNow()}
        </div>
      </div>
    </>
  );
};

export const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-row justify-between bg-[#0d0c0d]">
        <Sidebar />
        <div className="container mx-auto md:mx-20 p-5 h-auto min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
};
