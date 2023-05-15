import moment from "moment";
import { Links } from "./Links";
import { Social } from "./Social";
import { Sidebar } from "./Sidebar";
import { routes } from "../utils/data";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <div className="absolute inline-flex gap-2 top-10 left-10 font-mono text-sm text-white">
        DOOM5D4Y
      </div>
      <div className="absolute inline-flex gap-2 bottom-10 left-10 font-mono text-xl text-white">
        <Social />
      </div>
      <div className="absolute top-20 left-10 right-10 backdrop-blur-md">
        {children}
      </div>
      <div className="absolute bottom-20 left-1/3 -translate-x-1/4 sm:bottom-10 sm:left-1/2 transform sm:-translate-x-1/2 special">
        <Links
          routes={routes.slice(1)}
          className="mx-2 hover:text-pink"
          classActive="text-pink"
        />
      </div>
      <div className="fixed right-10 bottom-10 font-mono text-xs md:text-sm italic text-white">
        Last update {moment("2023-05-13", "YYYYMMDD").fromNow()}
      </div>
    </>
  );
};

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-row justify-between content-center items-center h-screen bg-[#0d0c0d]">
      <Sidebar />
      <div className="container mx-20 p-5">{children}</div>
    </div>
  );
};
