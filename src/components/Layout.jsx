import moment from "moment";
import { Links } from "./Links";
import { Social } from "./Social";

export const HomeLayout = ({ children }) => {
  return (
    <>
      <div className="absolute inline-flex gap-2 top-10 left-10 font-mono text-sm text-white">
        DOOM5D4Y — <Social />
      </div>
      <div className="fixed right-10 bottom-10 font-mono text-xs md:text-sm italic text-white">
        Last update {moment("20230502", "YYYYMMDD").fromNow()}
      </div>
      <div className="absolute top-20 left-10 right-10 special backdrop-blur-md">
        {children}
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Links />
      </div>
    </>
  );
};

// general layout
export const Layout = ({ children }) => {
  return <div className="special container mx-auto my-5">{children}</div>;
};
