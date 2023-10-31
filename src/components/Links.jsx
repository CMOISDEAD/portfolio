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
          className={`${active && classActive} ${className} text-foreground`}
        >
          <div className="inline-flex gap-2 justify-between content-center items-center">
            {icon}
            {name}
          </div>
        </Link>
      ))}
    </>
  );
};
