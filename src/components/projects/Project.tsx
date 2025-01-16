import { motion } from "motion/react";
import { useEffect } from "react";
import { Link } from "react-router";
import { useCursor } from "../ui/cursor";

interface Props {
  id: number;
  title: string;
  description: string;
  image: string;
  index: number;
  active: number | null;
  link: string;
  onHover: (word: string | null) => void;
}

export const Project = ({
  active,
  id,
  index,
  title,
  image,
  link,
  onHover,
}: Props) => {
  const { scrollEnter, leave } = useCursor();

  useEffect(() => {
    if (active === index) onHover(title);
  }, [active, index, title, onHover]);

  return (
    <Link
      onMouseEnter={scrollEnter}
      onMouseLeave={leave}
      to={link}
      target="_blank"
      className="z-10 h-fit cursor-none snap-start"
    >
      <motion.div
        animate={{
          width: active === index ? "50rem" : "18rem",
          height: active === index ? "50rem" : "24rem",
        }}
        className="project-card flex-basis-[0rem] group flex h-96 w-72 flex-shrink-0 flex-col justify-center gap-4 overflow-hidden"
      >
        <div>
          <p>0{id}.</p>
          <h3>{title}</h3>
        </div>
        <picture className="h-full w-full overflow-hidden">
          <img
            src={image}
            alt={`Project ${id} - ${title} thumnail by CMOISDEAD`}
            className="h-full w-full object-cover"
          />
        </picture>
      </motion.div>
    </Link>
  );
};
