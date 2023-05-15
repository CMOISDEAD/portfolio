import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineCompass,
} from "react-icons/ai";

export const Social = () => {
  return (
    <>
      <a
        href="https://github.com/CMOISDEAD"
        className="hover:text-neutral-500 transition-colors ease-in-out"
        target="_blank"
      >
        <AiOutlineGithub />
      </a>
      <a
        href="https://linkedin.com"
        className="hover:text-blue-700 transition-colors ease-in-out"
        target="_blank"
      >
        <AiOutlineLinkedin />
      </a>
      <a
        href="https://doom-log.vercel.app/"
        className="hover:text-blue-500 transition-colors ease-in-out"
        target="_blank"
      >
        <AiOutlineCompass />
      </a>
    </>
  );
};
