import { motion } from "motion/react";

interface Props {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  image?: string;
  description: string;
  skills: string[];
}

export const WorkCard = ({
  id,
  year,
  title,
  subtitle,
  description,
  skills,
}: Props) => {
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
      className="relative flex h-52 max-h-52 w-80 flex-shrink-0 gap-2 md:w-[45rem] md:p-4"
    >
      <p className="hidden text-5xl font-light md:block">{year}</p>
      <div className="flex h-full flex-col justify-between gap-4">
        <h2 className="text-xl font-bold md:hidden">
          {title} - {year}
        </h2>
        <div>
          <h2 className="hidden text-base font-bold sm:text-lg md:block md:text-xl">
            {title}
          </h2>
          <h3 className="hidden text-sm font-bold sm:text-base md:block">
            {subtitle}
          </h3>
        </div>
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
