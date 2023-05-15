export const Card = ({ title, description, year, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="group hover:bg-gradient-to-tr hover:from-green-400 hover:to-blue-500 hover:bg-clip-text hover:translate-x-9 hover:text-transparent transition-transform ease-linear w-fit my-1"
    >
      <div className="text-xl md:text-2xl font-bold transition-all ease-out">
        {title}
      </div>
      <div className="content text-xs md:text-sm">{description}</div>
      <div className="content text-xs italic">{year}</div>
    </a>
  );
};
