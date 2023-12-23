import React from "react";
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
        rel="noreferrer"
      >
        <AiOutlineGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/camilo-esteban-davila"
        className="transition-colors ease-in-out hover:text-focus"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineLinkedin />
      </a>
      <a
        href="https://cmoisdead.github.io/"
        className="transition-colors ease-in-out hover:text-focus"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineCompass />
      </a>
    </>
  );
};
