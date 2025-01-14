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
      className="flex w-[40rem] flex-shrink-0 gap-4 p-4"
    >
      <p className="text-5xl font-light">{year}</p>
      <div className="flex flex-col justify-between gap-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-xs">{description}</p>
        <div className="flex content-center items-center gap-4 text-xs italic">
          {skills.map((skill, i) => (
            <p key={i}>{skill}</p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
