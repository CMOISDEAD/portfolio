import { useState } from "react";
import { Layout } from "../components/Layout";
import { Card } from "../components/Card";
import { BreadCrumb } from "../components/BreadCrumb";
import { projects as data } from "../utils/data";

export const Project = () => {
  const [list, setList] = useState(data.frontend);
  return (
    <Layout>
      <div>
        <div className="text-xl text-white font-bold mb-2 md:text-4xl">
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
