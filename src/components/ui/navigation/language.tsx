import { useState } from "react";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCursor } from "@/components/ui/cursor";

export const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);
  const [t, i18n] = useTranslation("global");
  const { linkEnter, leave } = useCursor();

  const toggleMenu = () => setOpen(!open);
  const handleLangChange = (value: string) => {
    i18n.changeLanguage(value);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 p-2 text-foreground focus:outline-none dark:text-background"
        onMouseOver={linkEnter}
        onMouseLeave={leave}
        onClick={toggleMenu}
      >
        <Languages />
      </button>
      {open && (
        <div
          className="absolute right-0 z-20 mt-2 w-32 rounded border bg-background shadow dark:border-foreground dark:bg-foreground"
          onMouseLeave={() => setOpen(false)}
        >
          <ul className="py-1">
            <li className="px-4 py-2" onClick={() => handleLangChange("en")}>
              {t("language.en")}
            </li>
            <li className="px-4 py-2" onClick={() => handleLangChange("es")}>
              {t("language.es")}
            </li>
            <li className="px-4 py-2" onClick={() => handleLangChange("de")}>
              {t("language.de")}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
