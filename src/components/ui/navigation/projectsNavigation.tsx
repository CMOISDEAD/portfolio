import { useTranslation } from "react-i18next";
import { Link } from "@/components/ui/link";
import { LanguageSwitcher } from "./language";
import { ThemeSwitcher } from "./theme";
import { links } from "./links";

export const Navigation = () => {
  const [t] = useTranslation("global");

  return (
    <section className="sticky top-0 flex w-full items-center justify-between gap-4 px-6 py-8">
      <div className="hidden md:block" />
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
