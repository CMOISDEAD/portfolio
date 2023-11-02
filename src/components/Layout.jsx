import moment from "moment";
import { Links } from "./Links";
import { Social } from "./Social";
import { routes } from "../utils/data/routes";
import { useGithub } from "../hooks/useGithub";

export const HomeLayout = ({ children }) => {
  const { commit } = useGithub();

  return (
    <>
      <div className="inline-flex absolute top-10 left-10 gap-2 font-mono text-sm text-white">
        DOOM5D4Y
      </div>
      <div className="absolute right-10 left-10 top-20 backdrop-blur-md">
        {children}
      </div>
      <div className="flex absolute bottom-10 justify-between px-10 w-full text-white">
        <div className="inline-flex left-10 gap-2 font-mono text-xl [&>*]:text-white grow basis-0 max-sm:hidden">
          <Social />
        </div>
        <div className="bottom-20 text-white sm:bottom-10 special">
          <Links
            routes={routes.slice(1)}
            className="mx-2 text-white hover:text-focus"
            classActive="text-primary"
          />
        </div>
        <div className="font-mono text-xs italic text-white md:text-sm grow basis-0 text-end">
          Last update {moment(commit?.author?.date, "YYYYMMDD").fromNow()}
        </div>
      </div>
    </>
  );
};
