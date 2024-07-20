import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Link,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { projects as data } from "../utils/data/projects";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineExport } from "react-icons/ai";

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
        {data.map(({ title, childs, disabled }, i) => (
          <Tab key={i} title={title} disabled={disabled}>
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
                    className="w-full border border-divider"
                  >
                    <CardBody className="flex gap-4 md:flex-row">
                      <Image
                        removeWrapper
                        src={child.image}
                        alt={`${child.title} preview image`}
                        fallbackSrc="https://via.placeholder.com/300"
                        className="object-cover flex-grow h-full"
                      />
                    </CardBody>
                    <CardFooter className="flex justify-between gap-2">
                      <h4 className="font-bold text-sm md:text-lg">
                        {child.title}
                      </h4>
                      <div className="flex flex-col md:flex-row gap-2 content-center text-sm">
                        {child.repo && (
                          <Link
                            href={child.repo}
                            target="_blank"
                            className="gap-1 text-xs md:text-sm"
                          >
                            <AiOutlineGithub />
                            Repositorio
                          </Link>
                        )}
                        {child.link && (
                          <Link
                            href={child.link}
                            target="_blank"
                            className="gap-1 text-xs md:text-sm"
                          >
                            <AiOutlineExport />
                            Ver Proyecto
                          </Link>
                        )}
                      </div>
                    </CardFooter>
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
