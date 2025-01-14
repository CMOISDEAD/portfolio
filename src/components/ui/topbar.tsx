import { Languages, Moon, Sun } from "lucide-react";
import { useCursor } from "./cursor";
import { Link } from "./link";
import { useTheme } from "next-themes";

interface Props {
  onMouseEnter: (word: string) => void;
  onMouseOut: () => void;
}

export const Topbar = ({ onMouseEnter, onMouseOut }: Props) => {
  const { linkEnter, leave } = useCursor();
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button className="absolute left-0 top-0 m-auto w-fit p-10">
        <Link
          to="/"
          onMouseOver={() => onMouseEnter("Home")}
          onMouseOut={onMouseOut}
          className="jusitfy-center flex items-center font-sans text-sm"
        >
          00. Home
        </Link>
      </button>
      <div className="absolute right-0 top-0 m-auto flex w-fit items-center justify-center gap-4 p-10">
        <button onMouseOver={() => linkEnter()} onMouseOut={() => leave()}>
          <Languages />
        </button>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          onMouseOver={() => linkEnter()}
          onMouseOut={() => leave()}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
      </div>
    </>
  );
};
