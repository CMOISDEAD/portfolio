import React from "react";
import { Card, CardBody, Image, Link, Tab, Tabs } from "@nextui-org/react";
import { AiOutlineExport, AiOutlineGithub } from "react-icons/ai";
import { projects as data } from "../utils/data/projects";
import { motion } from "framer-motion";

export const Project = () => {
  return (
    <div>
      <h2 className="mb-2 title">Proyectos</h2>
      <p>Estos son algunos de mis proyectos mas destacados.</p>
      <Tabs
        aria-label="Project"
        className="mt-2"
        variant="underlined"
        color="primary"
      >
        {data.map(({ title, childs }, i) => (
          <Tab key={i} title={title}>
            <div className="flex flex-col gap-2">
              {childs.map((child, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    isBlurred
                    isHoverable
                    shadow="lg"
                    className="w-full border border-divider"
                  >
                    <CardBody className="flex gap-4 md:flex-row">
                      <Image
                        isBlurred
                        width={300}
                        src={child.image}
                        alt={`${child.title} preview image`}
                        fallbackSrc="https://via.placeholder.com/300"
                        className="object-cover flex-grow w-[80vw]"
                      />
                      <div className="flex flex-col gap-2 justify-between">
                        <div>
                          <h3 className="mb-3 text-xl font-bold capitalize text-ellipsis">
                            {child.title}
                          </h3>
                          <p className="text-clip">{child.description}</p>
                        </div>
                        <div className="flex gap-4 content-center py-2 border-t border-divider">
                          <Link
                            href={child.link}
                            className="flex gap-2 content-center items-center"
                          >
                            <AiOutlineGithub /> Repositorio
                          </Link>
                          <Link
                            href={child.link}
                            className="flex gap-2 content-center items-center"
                          >
                            <AiOutlineExport /> Ver Pagina
                          </Link>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};
