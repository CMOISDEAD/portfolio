import { skills } from "../utils/data";

export const Skills = () => {
  return (
    <>
      <div className="title">Habilidades</div>
      <div className="flex flex-col md:flex-row flex-wrap justify-start gap-3 md:items-center">
        {skills.map((section, i) => (
          <div
            className="w-full md:w-[49%] border border-blue-500 border-dashed rounded-sm p-3"
            key={i}
          >
            <div className="text-base underline md:text-xl text-blue-500">
              {section.title}
            </div>
            <div className="flex flex-wrap gap-2 content">
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
