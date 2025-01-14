import { useState } from "react";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useCursor } from "@/components/ui/cursor";

export const LanguageSwitcher = () => {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const [t, i18n] = useTranslation("global");
  const { linkEnter, leave } = useCursor();

  const toggleMenu = () => setOpen(!open);
  const handleLangChange = (value: string) => {
    setLang(value);
    i18n.changeLanguage(value);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="text-foreground dark:text-background flex items-center gap-2 p-2 focus:outline-none"
        onMouseOver={linkEnter}
        onMouseLeave={leave}
        onClick={toggleMenu}
      >
        <Languages />
        <span className="hidden sm:inline">{t(`language.${lang}`)}</span>
      </button>
      {open && (
        <div
          className="bg-background dark:bg-foreground dark:border-foreground absolute right-0 mt-2 w-32 rounded border shadow"
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
