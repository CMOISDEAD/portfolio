import React from "react";
import { Card, CardBody, CardHeader, Image, Tooltip } from "@nextui-org/react";
import { skills } from "../utils/data/skills";
import { useTheme } from "next-themes";

export const Skills = () => {
  const { theme } = useTheme();

  const verifyIcon = (item) => {
    if (item.themeable) {
      if (theme === "dark") return item.icondark;
      if (theme === "light") return item.iconlight;
    }
    return item.icon;
  };

  return (
    <div>
      <div className="title">Habilidades</div>
      <div className="flex flex-col flex-wrap gap-3 justify-start md:flex-row">
        {skills.map((section, i) => (
          <Card
            isHoverable
            shadow="lg"
            key={i}
            className="w-full md:w-[49%] p-3 border border-divider"
          >
            <CardHeader className="text-base font-bold md:text-xl">
              {section.title}
            </CardHeader>
            <CardBody className="grid grid-cols-5 grid-flow-row gap-5 content-start items-center py-8">
              {section.items.map((item, i) => (
                <Tooltip key={i} content={item.name}>
                  <Image
                    radius="none"
                    src={`https://svgl.app/library/${verifyIcon(item)}.svg`}
                    alt={`${item.name} icon`}
                    className="object-contain w-10 h-10"
                  />
                </Tooltip>
              ))}
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};
