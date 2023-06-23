import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Skills } from "../components/Skills";
import { Certificates } from "../components/Certificates";

export const About = () => {
  return (
    <Layout>
      <div className="title">Acerca de mi</div>
      <div className="content">
        Soy un programador <span className="font-bold">fullstack</span>{" "}
        apasionado por crear experiencias web atractivas y eficientes con las
        ultimas tecnologias, Me gusta mantenerme al día con las últimas
        tendencias y tecnologías en el desarrollo web, y siempre estoy buscando
        nuevas formas de mejorar la experiencia del usuario. Si está buscando un
        programador frontend junior apasionado y comprometido,
        <Link
          className="underline text-blue-700 font-bold cursor-pointer"
          to="/contact"
        >
          ¡no dude en ponerse en contacto conmigo!.
        </Link>
      </div>
      <Skills />
      <Certificates />
    </Layout>
  );
};
