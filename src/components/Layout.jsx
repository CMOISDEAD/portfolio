import moment from "moment";
import { Links } from "./Links";
import { Social } from "./Social";

export const Layout = ({ children }) => {
  return (
    <>
      <div>
        <div className="inline-flex gap-2 absolute top-10 left-10 font-mono text-sm">
          DOOM5D4Y — <Social />
        </div>
        <div className="absolute right-10 bottom-10 font-mono text-sm">
          Last update {moment("20230502", "YYYYMMDD").fromNow()}
        </div>
        <div className="absolute top-20 left-10 right-10 md:top-28 md:left-11 md:right-44 special">
          {children}
        </div>
        <div className="absolute bottom-20 right-2 md:right-10">
          <Links />
        </div>
      </div>
    </>
  );
};
