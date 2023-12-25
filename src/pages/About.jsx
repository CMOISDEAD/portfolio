import React from "react";
import { Image } from "@nextui-org/react";
import { Skills } from "../components/Skills";
import { Certificates } from "../components/Certificates";

export const About = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="title">Acerca de mi</div>
      <div className="relative mb-10 h-[30vh]">
        <Image
          isBlurred
          src="assets/images/tokyo.jpg"
          alt="tokyo image"
          className="object-cover border max-h-[30vh] w-[100vw] border-divider"
        />
        <div className="absolute left-0 bottom-5 z-50 m-auto md:left-5 md:-bottom-9 max-sm:right-0 w-fit">
          <Image
            isBlurred
            radius="full"
            src="https://avatars.githubusercontent.com/u/51010598?v=4"
            alt="Camilo Davila avatar image"
            className="w-36 border border-divider"
          />
        </div>
      </div>
      <div className="content">
        Soy un programador <span className="font-bold">fullstack</span>{" "}
        apasionado por crear experiencias web atractivas y eficientes con las
        ultimas tecnologias, Me gusta mantenerme al día con las últimas
        tendencias y tecnologías en el desarrollo web, y siempre estoy buscando
        nuevas formas de mejorar mi trabajo. Me encanta aprender y compartir
        conocimientos con los demás. Si tiene alguna pregunta o desea que
        trabajemos juntos.
      </div>
      <Skills />
      <Certificates />
    </div>
  );
};
