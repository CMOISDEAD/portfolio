import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useRoutes = (routes) => {
  const [route, setRoute] = useState("");
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    setRoute(path);
  });

  return routes.map((item) => ({
    ...item,
    active: item.path === route,
  }));
};
