import React from "react";
import { Link } from "react-router-dom";
import { Skills } from "../components/Skills";
import { Certificates } from "../components/Certificates";

export const About = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="title">Acerca de mi</div>
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
