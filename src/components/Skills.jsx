import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { skills } from "../utils/data/skills";

export const Skills = () => {
  return (
    <div>
      <div className="title">Habilidades</div>
      <div className="flex flex-col flex-wrap gap-3 justify-start md:flex-row md:items-center">
        {skills.map((section, i) => (
          <Card
            isBlurred
            isPressable
            isHoverable
            shadow="lg"
            key={i}
            className="w-full md:w-[49%] p-3 border border-divider"
          >
            <CardHeader className="text-base font-bold md:text-xl">
              {section.title}
            </CardHeader>
            <CardBody className="flex flex-row flex-wrap gap-2 my-1 content">
              {section.items.map((item, i) => (
                <div className="text-4xl text-center group" key={i}>
                  {item.icon}
                </div>
              ))}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};
