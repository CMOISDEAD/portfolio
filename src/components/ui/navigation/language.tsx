import { useState } from "react";
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
        className="flex items-center gap-2 p-2 text-background focus:outline-none dark:text-foreground"
        onMouseOver={linkEnter}
        onMouseLeave={leave}
        onClick={toggleMenu}
      >
        lang
      </button>
      {open && (
        <div
          className="absolute right-0 z-20 mt-2 w-32 rounded border border-foreground bg-foreground shadow dark:bg-background"
          onMouseLeave={() => setOpen(false)}
        >
          <ul className="py-1 [&>*]:cursor-pointer">
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
