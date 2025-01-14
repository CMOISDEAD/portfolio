import { useState } from "react";
import { motion, useAnimate } from "motion/react";
import { Link } from "@/components/ui/link";
import { Topbar } from "./topbar";

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

export const Navigation = () => {
  const [word, setWord] = useState<string | null>(null);
  const [background, animateBakground] = useAnimate();

  const onMouseEnter = (word: string) => {
    animateBakground(background.current, {
      height: "15vh",
      backgroundColor: "#1d1d1d",
      color: "#fff",
    });
    setWord(word);
  };

  const onMouseOut = () => {
    animateBakground(background.current, {
      height: "fit-content",
      backgroundColor: "#0000000",
      color: "#1d1d1d",
    });
    setWord(null);
  };

  return (
    <>
      <Topbar onMouseEnter={onMouseEnter} onMouseOut={onMouseOut} />

      <div className="relative flex max-h-[15vh] min-h-[15vh] w-full flex-none items-center justify-center overflow-hidden">
        <section
          ref={background}
          className="group flex h-fit w-full content-center items-center justify-center px-6"
        >
          <ul className="z-10 flex w-full justify-between gap-4 text-sm">
            {links.map(({ name, path }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  onMouseOver={() => onMouseEnter(name)}
                  onMouseOut={onMouseOut}
                >
                  {`0${i + 1}. ${name}`}
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
              className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-fit w-fit text-9xl font-bold text-neutral-200/20"
            >
              {word.split("").map((letter, i) => (
                <motion.li key={i}>{letter}</motion.li>
              ))}
            </motion.ul>
          )}
        </section>
      </div>
    </>
  );
};
