import { projects as data } from "../utils/data/projects";
import { Card, CardBody, Image, Tab, Tabs } from "@nextui-org/react";

export const Project = () => {
  return (
    <div className="w-full">
      <div className="mb-2 title">Proyectos</div>
      <p className="text-sm text-neutral-500">
        Estos son unos de mis proyectos mas destacables,{" "}
        <span className="font-bold text-blue-500">
          !clickea para ir al repositorio!
        </span>
      </p>
      <Tabs
        aria-label="Project"
        className="mt-5"
        variant="underlined"
        color="primary"
      >
        {data.map(({ title, childs }, i) => (
          <Tab key={i} title={title}>
            <div className="flex flex-col gap-2">
              {childs.map((child, j) => (
                <Card
                  isBlurred
                  isHoverable
                  isPressable
                  key={j}
                  shadow="lg"
                  className="border border-divider"
                >
                  <CardBody className="flex flex-row gap-4">
                    <Image
                      isBlurred
                      width={300}
                      src={child.image}
                      alt={`${child.title} preview image`}
                      fallbackSrc="https://via.placeholder.com/300"
                      className="object-cover max-w-md"
                    />
                    <div className="">
                      <h3 className="text-xl font-bold capitalize text-ellipsis">
                        {child.title}
                      </h3>
                      <p className="text-clip">{child.description}</p>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};
