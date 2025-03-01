import { useEffect, useState } from "react";
import { motion, useAnimate } from "motion/react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { links } from "./links";
import { LanguageSwitcher } from "./language";
import { ThemeSwitcher } from "./theme";
import { Link } from "@/components/ui/link";

interface Props {
  container?: React.RefObject<HTMLDivElement>;
  hidden?: boolean;
}

export const Navigation = ({ container, hidden }: Props) => {
  const [t] = useTranslation("global");
  const { theme } = useTheme();
  const [scope, animate] = useAnimate();
  const [word, setWord] = useState<string | null>(null);

  useEffect(() => {
    animate(scope.current, {
      height: "fit-content",
      backgroundColor: "#0000000",
      color: theme === "light" ? "#27272a" : "#e4e4e7",
    });
  }, [theme, animate, scope]);

  const onMouseEnter = (word: string) => {
    animate(scope.current, {
      height: "15vh",
      backgroundColor: theme === "light" ? "#27272a" : "#e4e4e7",
      color: theme === "light" ? "#e4e4e7" : "#27272a",
    });
    setWord(word);
  };

  const onMouseOut = () => {
    animate(scope.current, {
      height: "fit-content",
      backgroundColor: "#0000000",
      color: theme === "light" ? "#27272a" : "#e4e4e7",
    });
    setWord(null);
  };

  return (
    <>
      <Link
        to="/"
        onMouseOver={() => onMouseEnter(t("navigation.home"))}
        onMouseOut={onMouseOut}
        className="absolute left-5 top-5 z-20 flex w-fit text-sm md:text-base lg:text-lg"
      >
        ~
      </Link>

      <div className="absolute right-5 top-5 z-20 flex w-fit items-center justify-center gap-4">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>

      <motion.nav
        ref={container}
        animate={{
          opacity: hidden ? 0 : 1,
          visibility: hidden ? "hidden" : "visible",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 right-0 top-0 z-20 m-auto flex h-fit max-h-[15vh] min-h-[15vh] w-full flex-none items-center justify-center overflow-hidden"
      >
        <section
          ref={scope}
          className="group flex h-fit w-full content-center items-center justify-center px-16"
        >
          <ul className="z-10 flex w-full justify-between gap-4 text-sm md:text-base lg:text-lg">
            {links.map(({ name, path }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  onMouseOver={() =>
                    onMouseEnter(t(`navigation.${name.toLowerCase()}`))
                  }
                  onMouseOut={onMouseOut}
                >
                  {`0${i + 1}. ${t(`navigation.${name.toLowerCase()}`)}`}
                </Link>
              </li>
            ))}
          </ul>
          {word && (
            <motion.ul
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="absolute text-9xl font-bold text-foreground/20 dark:text-background/20"
            >
              <motion.li>{word}</motion.li>
            </motion.ul>
          )}
        </section>
      </motion.nav>
    </>
  );
};
