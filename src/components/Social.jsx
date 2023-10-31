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
        className="transition-colors ease-in-out hover:text-focus"
        target="_blank"
      >
        <AiOutlineGithub />
      </a>
      <a
        href="https://linkedin.com"
        className="transition-colors ease-in-out hover:text-focus"
        target="_blank"
      >
        <AiOutlineLinkedin />
      </a>
      <a
        href="https://doom-log.vercel.app/"
        className="transition-colors ease-in-out hover:text-focus"
        target="_blank"
      >
        <AiOutlineCompass />
      </a>
    </>
  );
};
