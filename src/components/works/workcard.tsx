import { motion } from "motion/react";

interface Props {
  id: number;
  year: string;
  title: string;
  description: string;
  skills: string[];
}

export const WorkCard = ({ id, year, title, description, skills }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        translateY: 100,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
        transition: {
          delay: id * 0.1,
        },
      }}
      exit={{
        opacity: 0,
        translateY: 100,
        transition: {
          delay: id * 0.1,
        },
      }}
      className="flex h-56 w-80 flex-shrink-0 gap-4 md:w-[40rem] md:p-4"
    >
      <p className="hidden text-5xl font-light md:block">{year}</p>
      <div className="flex h-full flex-col justify-between gap-4">
        <h3 className="text-xl font-bold md:hidden">
          {title} - {year}
        </h3>
        <h3 className="hidden text-xl font-bold md:block">{title}</h3>
        <p className="text-xs md:text-sm">{description}</p>
        <div className="flex content-center items-center gap-4 text-xs italic">
          {skills.map((skill, i) => (
            <p key={i}>{skill}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
