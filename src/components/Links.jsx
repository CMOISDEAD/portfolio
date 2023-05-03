import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";

export const Links = () => {
  const [route, setRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setRoute(path);
  });

  const handleFocus = (path) => {
    if (path == route) {
      return "text-sky-500 translate-x-2 transition-all ease-in";
    }
  };

  return (
    <div>
      <ul>
        {[
          {
            name: "Home",
            path: "/",
          },
          {
            name: "Project",
            path: "/project",
          },
          {
            name: "Contact",
            path: "/contact",
          },
        ].map(({ path }, i) => (
          <li key={i}>
            <Link to={path} className="text-2xl md:text-3xl">
              <RxDotFilled className={`${handleFocus(path)}`} />
              {/* {name} */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
