import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";

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
    <div>
      <ul>
        {routes.map(({ path }, i) => (
          <li key={i}>
            <Link to={path} className="text-xl md:text-3xl">
              <div
                className={`inline-flex pr-2 transition-all duration-200 ease-linear ${path == route && "text-pink"
                  }`}
              >
                <RxDotFilled />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
