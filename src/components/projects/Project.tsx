import { motion } from "motion/react";
import { Link } from "../ui/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  year: number;
}

interface Props {
  project: Project;
}

export const Project = ({ project }: Props) => {
  const { title, image, link, year } = project;

  return (
    <Link to={link}>
      <div className="max-w-xl md:w-[36rem]">
        <picture className="block max-w-[36rem] overflow-hidden">
          <motion.img
            initial={{
              transform: "scale(1.1) rotate(2deg)",
            }}
            whileInView={{
              transform: "scale(1) rotate(0deg)",
              transition: {
                duration: 0.3,
              },
            }}
            viewport={{
              once: true,
            }}
            src={image}
            alt={`Project ${title}`}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out"
          />
        </picture>
        <div className="flex justify-between gap-4 px-4 py-6">
          <p className="text-xl md:text-3xl lg:text-4xl">({year})</p>
          <div className="text-end">
            <p className="text-xs md:text-sm">Application</p>
            <h3 className="sm:text-sm md:text-base lg:text-lg">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
