import { AiOutlineStar, AiOutlineBranches } from "react-icons/ai";

export const Card = ({ title, description, link, tech }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group hover:bg-gradient-to-tr hover:from-green-400 hover:to-blue-500 hover:bg-clip-text hover:translate-x-9 hover:text-transparent transition-transform ease-linear w-fit my-1"
    >
      <div className="flex gap-4">
        <img
          src="https://www.popsci.com/uploads/2020/03/05/DSDOU3CKQNAUPNV2H5PZPJ4D4E.jpg?auto=webp&width=1440&height=1012.8"
          alt={`${title} image preview`}
          className="w-32"
          width={128}
        />
        <div className="information h-full flex flex-col justify-start content-start items-start">
          <div className="text-xl md:text-2xl font-bold transition-all ease-out">
            {title}
          </div>
          <div className="content text-sm md:text-sm">{description}</div>
          <div className="github-information flex gap-4 text-xs text-neutral-500 mt-5">
            <div className="inline-flex content-center items-center gap-1 group-hover:text-yellow-500">
              10 <AiOutlineStar />
            </div>
            <div className="inline-flex content-center items-center gap-1">
              18 <AiOutlineBranches />
            </div>
            <div className="text-neutral-600 inline-flex gap-1">
              {tech.map((item, i) => (
                <p key={i}>{`${item}${tech.length !== i + 1 ? "," : ""}`}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
