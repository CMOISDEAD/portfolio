import { useTheme } from "next-themes";
import { useCursor } from "@/components/ui/cursor";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { linkEnter, leave } = useCursor();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      onMouseOver={() => linkEnter()}
      onMouseOut={() => leave()}
    >
      {theme}
    </button>
  );
};
