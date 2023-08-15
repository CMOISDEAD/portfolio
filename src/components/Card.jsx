import { AiOutlineStar, AiOutlineBranches } from "react-icons/ai";

export const Card = ({ title, image, description, link, tech }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="py-2 pr-2 my-1 w-5/6 rounded border transition-transform ease-linear hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-tr hover:from-green-400 hover:to-blue-500 hover:border-blue-500 hover:translate-x-9 border-neutral-500/60 group"
    >
      <div className="flex gap-4">
        <img
          src={image}
          alt={`${title} image preview`}
          className="w-32"
          width={128}
        />
        <div className="flex flex-col justify-start content-start items-start h-full information">
          <div className="text-xl font-bold transition-all ease-out md:text-2xl">
            {title}
          </div>
          <div className="text-sm md:text-sm content">{description}</div>
          <div className="flex gap-4 mt-5 text-xs github-information text-neutral-500">
            <div className="inline-flex gap-1 content-center items-center group-hover:text-yellow-500">
              10 <AiOutlineStar />
            </div>
            <div className="inline-flex gap-1 content-center items-center">
              18 <AiOutlineBranches />
            </div>
            <div className="inline-flex gap-1 text-neutral-600">
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
