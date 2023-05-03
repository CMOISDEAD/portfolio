import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import { BreadCrumb } from "../components/BreadCrumb";
import { useState } from "react";

const data = {
  frontend: [
    {
      title: "Book-Reader / Electron Library",
      description:
        "Administrador de libros virtuales, creado a partir de tecnologia web",
      date: "2023",
      link: "https://github.com/CMOISDEAD/next-library",
    },
    {
      title: "DOOM-BLOG / Blog Personal",
      description: "Blog enfocado a hablar sobre temas de desarrollo.",
      date: "2023",
      link: "https://github.com/CMOISDEAD/next-blog",
    },
    {
      title: "Marked / Markdown - notas",
      description:
        "Aplicacion de notas pensado para estudiantes de ciencias de la computacion.",
      date: "2023",
      link: "https://github.com/CMOISDEAD/Notes-app",
    },
  ],
  backend: [
    {
      title: "DoomNews / red social tipo HackerNews",
      description:
        "Infraestructura para una red social al estilo de HackerNews.",
      date: "2023",
      link: "#",
    },
    {
      title: "0_Drive / Intranet storage",
      description:
        "Servicio de almacenamiento tipo Drive pero corriendo en una intranet.",
      year: "2021",
      link: "#",
    },
  ],
  mobile: [
    {
      title: "TODO / React Native App",
      description:
        "Aplicacion de manejo de tiempo y tareas, creada en React Native",
      date: "2023",
      link: "#",
    },
  ],
};

export const Project = () => {
  const [list, setList] = useState(data.frontend);
  return (
    <Layout>
      <div>
        <div className="text-xl text-white font-bold special mb-2 md:text-4xl">
          Proyectos
        </div>
        <BreadCrumb callback={setList} data={data} />
        <div className="flex flex-col gap-4">
          {list.map((item, i) => (
            <Card {...item} key={i} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
