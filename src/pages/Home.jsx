import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Skills } from "../components/Skills";
import { Certificates } from "../components/Certificates";

export const Home = () => {
  return (
    <Layout>
      <div className="text-xs py-3 font-bold sm:text-center md:text-4xl">
        Camilo Davila
        <span className="italic text-sm font-normal text-sky-200 ml-5">
          Fullstack Developer
        </span>
      </div>
      <div className="text-xl md:text-4xl">Acerca de mi</div>
      <div className="py-5 text-xs sm:text-base">
        Soy un programador fullstack apasionado por crear experiencias web
        atractivas y eficientes con las ultimas tecnologias, Me gusta mantenerme
        al día con las últimas tendencias y tecnologías en el desarrollo web, y
        siempre estoy buscando nuevas formas de mejorar la experiencia del
        usuario. Si está buscando un programador frontend junior apasionado y
        comprometido,
        <Link
          className="underline text-sky-200 font-bold cursor-pointer"
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
