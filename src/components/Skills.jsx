import { skills } from "../utils/data/skills";

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
            <div className="flex flex-wrap gap-2 content my-1">
              {section.items.map((item, i) => (
                <div key={i} className="text-4xl group">
                  {item.icon}
                  <div className="hidden special absolute px-2 py-1 bg-black text-blue-500 group-hover:block">
                    {item.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
