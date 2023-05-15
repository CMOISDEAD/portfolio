import { useRoutes } from "../hooks/useRoutes";
import { Link } from "react-router-dom";

export const Links = ({ routes, className, classActive }) => {
  const links = useRoutes(routes);

  return (
    <>
      {links.map(({ icon, name, path, active }, i) => (
        <Link
          key={i}
          to={path}
          className={`${active && classActive} ${className}`}
        >
          <div className="inline-flex content-center items-center justify-between gap-2">
            {icon}
            {name}
          </div>
        </Link>
      ))}
    </>
  );
};
