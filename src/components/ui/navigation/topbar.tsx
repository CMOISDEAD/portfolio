import { useTranslation } from "react-i18next";
import { Link } from "@/components/ui/link";
import { LanguageSwitcher } from "@/components/ui/navigation/language";
import { ThemeSwitcher } from "@/components/ui/navigation/theme";

interface Props {
  onMouseEnter: (word: string) => void;
  onMouseOut: () => void;
}

export const Topbar = ({ onMouseEnter, onMouseOut }: Props) => {
  const [t] = useTranslation("global");

  return (
    <>
      <button className="absolute left-0 top-0 m-auto w-fit p-10">
        <Link
          to="/"
          onMouseOver={() => onMouseEnter(t("navigation.home"))}
          onMouseOut={onMouseOut}
          className="jusitfy-center flex items-center font-sans text-sm"
        >
          00. {t("navigation.home")}
        </Link>
      </button>
      <div className="absolute right-0 top-0 m-auto flex w-fit items-center justify-center gap-4 p-10">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </>
  );
};
