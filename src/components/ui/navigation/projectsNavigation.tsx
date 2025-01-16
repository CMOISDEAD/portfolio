import { useEffect, useState } from "react";
import { useAnimate } from "motion/react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Link } from "@/components/ui/link";
import { LanguageSwitcher } from "./language";
import { ThemeSwitcher } from "./theme";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Works",
    path: "/works",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const Navigation = () => {
  const [scope, animate] = useAnimate();
  const [t] = useTranslation("global");
  const { theme } = useTheme();

  useEffect(() => {
    animate(scope.current, {
      height: "fit-content",
      backgroundColor: "#0000000",
      color: theme === "dark" ? "#27272a" : "#e4e4e7",
    });
  }, [theme, animate, scope]);

  return (
    <section
      ref={scope}
      className="flex w-full items-center justify-between gap-4 p-8"
    >
      <div className="flex-shrink-0">
        <h1 className="text-lg font-extrabold">CD</h1>
      </div>
      <ul className="flex w-full max-w-6xl flex-1 justify-between text-sm">
        {links.map(({ name, path }, i) => (
          <li key={i}>
            <Link to={path}>
              {`0${i}. ${t(`navigation.${name.toLowerCase()}`)}`}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex h-fit flex-shrink-0 content-center gap-4">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </section>
  );
};
