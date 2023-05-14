import { skills } from "../utils/data";

export const Skills = () => {
  return (
    <>
      <div className="text-xl md:text-4xl title">Habilidades</div>
      <div className="flex flex-col md:flex-row gap-3 flex-wrap justify-start md:items-center py-5">
        {skills.map((section, i) => (
          <div
            className="w-full md:w-[49%] border border-slate-300 rounded-sm p-3"
            key={i}
          >
            <div className="text-base underline md:text-xl">
              {section.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {section.items.map((value, i) => (
                <p key={i}>{value}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
