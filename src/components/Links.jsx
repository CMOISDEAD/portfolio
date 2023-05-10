import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Links = () => {
  const [route, setRoute] = useState("");
  const location = useLocation();
  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Project",
      path: "/project",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  useEffect(() => {
    const path = location.pathname;
    setRoute(path);
  });

  return (
    <>
      {routes.map(({ path, name }, i) => (
        <Link to={path} className="text-sm md:text-xl" key={i}>
          <div
            className={`inline-flex pr-2 transition-all duration-200 ease-linear hover:underline mx-2 ${
              path == route && "text-pink underline"
            }`}
          >
            {name}
          </div>
        </Link>
      ))}
    </>
  );
};
