import { Layout } from "../components/Layout";

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
        <strong className="underline text-sky-200">
          ¡no dude en ponerse en contacto conmigo!.
        </strong>
      </div>
      <div className="text-xl md:text-4xl title">Habilidades</div>
      <div className="grid grid-rows-4 grid-flow-col md:grid-rows-6 text-xs md:text-base">
        <li>HTML / CSS</li>
        <li>Javascript / Typescript</li>
        <li>React / Vue / Svelte</li>
        <li>Next / Nuxt / SvelteKit</li>
        <li>Linux / Terminal</li>
        <li>Git / Github</li>
        <li>Node.js / Express.js / Nest.js</li>
        <li>Flask / Django</li>
        <li>Tailwind / Bootstrap / MaterialUI</li>
        <li>MongoDB / MySql / PostegrSQL</li>
        <li>More...</li>
      </div>
    </Layout>
  );
};
