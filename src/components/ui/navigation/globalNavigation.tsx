import { useEffect, useState } from "react";
import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { Link } from "@/components/ui/link";
import { Topbar } from "@/components/ui/navigation/topbar";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const links = [
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

interface Props {
  container?: React.RefObject<HTMLDivElement>;
}

export const Navigation = ({ container }: Props) => {
  const [t] = useTranslation("global");
  const [word, setWord] = useState<string | null>(null);
  const [scope, animate] = useAnimate();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useTheme();
  const { scrollY } = useScroll({
    container,
  });

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (latest > lastScrollY) setHidden(true);
    else if (latest < lastScrollY) setHidden(false);

    setLastScrollY(latest);
  });

  useEffect(() => {
    animate(scope.current, {
      height: "fit-content",
      backgroundColor: "#0000000",
      color: theme === "dark" ? "#27272a" : "#e4e4e7",
    });
  }, [theme, animate, scope]);

  const onMouseEnter = (word: string) => {
    animate(scope.current, {
      height: "15vh",
      backgroundColor: theme === "dark" ? "#27272a" : "#e4e4e7",
      color: theme === "dark" ? "#e4e4e7" : "#27272a",
    });
    setWord(word);
  };

  const onMouseOut = () => {
    animate(scope.current, {
      height: "fit-content",
      backgroundColor: "#0000000",
      color: theme === "dark" ? "#27272a" : "#e4e4e7",
    });
    setWord(null);
  };

  return (
    <>
      <Topbar onMouseEnter={onMouseEnter} onMouseOut={onMouseOut} />

      <motion.nav
        ref={container}
        animate={{
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-0 right-0 top-0 z-10 m-auto flex h-fit max-h-[15vh] min-h-[15vh] w-full flex-none items-center justify-center overflow-hidden"
      >
        <section
          ref={scope}
          className="group flex h-fit w-full content-center items-center justify-center px-6"
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
              className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-fit w-fit text-9xl font-bold text-background/20 dark:text-foreground/20"
            >
              <motion.li>{word}</motion.li>
            </motion.ul>
          )}
        </section>
      </motion.nav>
    </>
  );
};
