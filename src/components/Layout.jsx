import moment from "moment";
import { Links } from "./Links";
import { Social } from "./Social";

export const Layout = ({ children }) => {
  return (
    <>
      <div className="fixed inline-flex gap-2 top-10 left-10 font-mono text-sm">
        DOOM5D4Y — <Social />
      </div>
      <div className="fixed right-10 bottom-10 font-mono text-xs italic">
        Last update {moment("20230502", "YYYYMMDD").fromNow()}
      </div>
      <div className="absolute top-20 left-10 right-10 special">{children}</div>
      <div className="fixed bottom-64 right-2 md:right-2">
        <Links />
      </div>
    </>
  );
};
