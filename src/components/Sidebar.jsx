import {
  AiFillHome,
  AiFillBook,
  AiFillProject,
  AiFillContacts,
} from "react-icons/ai";
import { Links } from "./Links";

const routes = [
  {
    icon: <AiFillHome />,
    name: "Home",
    path: "/",
  },
  {
    icon: <AiFillBook />,
    name: "About",
    path: "/about",
  },
  {
    icon: <AiFillProject />,
    name: "Project",
    path: "/project",
  },
  {
    icon: <AiFillContacts />,
    name: "Contact",
    path: "/contact",
  },
];

export const Sidebar = () => {
  return (
    <div className="container mx-auto sm:mx-10 sm:w-64">
      <div className="sm:sticky sm:top-0 sm:py-4">
        <div className="hidden sm:flex flex-col content-center items-center gap-2">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5837359ef5e231d203181634/1493091881001-KQLDMR8M5ZJNLB6LKCOZ/1024px-Individual_eleven.svg.png?format=500w"
            alt="camilo davila logo"
            className="invert w-32"
          />
          <p className="text-xs text-pink uppercase">The portfolio</p>
        </div>
        <div className="flex justify-center content-center items-center gap-2 text-center mt-4 sm:flex-col sm:content-start sm:items-stretch sm:my-6">
          <Links
            routes={routes}
            className="bg-neutral-900 px-1 py-2 border border-neutral-800 rounded-md"
            classActive="text-pink border-neutral-700"
          />
        </div>
      </div>
    </div>
  );
};
