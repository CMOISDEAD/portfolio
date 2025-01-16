import { motion } from "motion/react";
import { useEffect } from "react";
import { Link } from "../ui/link";

interface Props {
  id: number;
  title: string;
  description: string;
  image: string;
  index: number;
  active: number | null;
  onHover: (word: string | null) => void;
}

export const Project = ({
  active,
  id,
  index,
  title,
  image,
  onHover,
}: Props) => {
  useEffect(() => {
    if (active === index) onHover(title);
  }, [active, index, title, onHover]);

  return (
    <Link to="/" className="z-10">
      <motion.div
        animate={{
          width: active === index ? "40rem" : "18rem",
          height: active === index ? "50rem" : "24rem",
        }}
        className="project-card flex-basis-[0rem] group h-96 w-72 flex-shrink-0 snap-center overflow-hidden"
      >
        <div>
          <p>0{id}.</p>
          <h3>{title}</h3>
        </div>
        <picture className="h-full w-full overflow-hidden">
          <img
            src={image}
            alt="lamp test image"
            className="h-full w-full object-cover"
          />
        </picture>
      </motion.div>
    </Link>
  );
};
