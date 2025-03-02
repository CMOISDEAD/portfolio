import { useTranslation } from "react-i18next";
import { Link } from "@/components/ui/link";
import { LanguageSwitcher } from "./language";
import { ThemeSwitcher } from "./theme";
import { linksProject as links } from "./links";

// FIX: is used ?
export const Navigation = () => {
  const [t] = useTranslation("global");

  return (
    <section className="sticky top-0 flex w-full items-center justify-between gap-4 px-6 py-8">
      <Link to="/" className="flex w-fit text-sm md:text-base lg:text-lg">
        ~
      </Link>
      <ul className="flex gap-8">
        {links.map(({ name, path }, i) => (
          <li key={i}>
            <Link to={path}>
              {`0${i + 1}. ${t(`navigation.${name.toLowerCase()}`)}`}
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
