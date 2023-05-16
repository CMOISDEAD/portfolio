import {
  DiAngularSimple,
  DiCss3,
  DiDocker,
  DiGit,
  DiGithub,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiNodejs,
  DiNpm,
  DiPostgresql,
  DiReact,
  DiRedis,
  DiSqllite,
} from "react-icons/di";
import {
  SiExpress,
  SiNestjs,
  SiSvelte,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

export const skills = [
  {
    title: "Frontend",
    items: [
      {
        name: "HTML",
        icon: <DiHtml5 />,
      },
      {
        name: "CSS",
        icon: <DiCss3 />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript />,
      },
      {
        name: "React",
        icon: <DiReact />,
      },
      {
        name: "Vue",
        icon: <SiVuedotjs />,
      },
      {
        name: "Angular",
        icon: <DiAngularSimple />,
      },
      {
        name: "Svelte",
        icon: <SiSvelte />,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <DiNodejs />,
      },
      {
        name: "Nest",
        icon: <SiNestjs />,
      },
      {
        name: "Express",
        icon: <SiExpress />,
      },
    ],
    // items: ["Node.js", "Nest", "Express", "JWT"],
  },
  {
    title: "Other",
    items: [
      {
        name: "Git",
        icon: <DiGit />,
      },
      {
        name: "Github",
        icon: <DiGithub />,
      },
      {
        name: "NPM",
        icon: <DiNpm />,
      },
      {
        name: "Docker",
        icon: <DiDocker />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
    ],
  },
  {
    title: "Databases",
    items: [
      {
        name: "MySQL",
        icon: <DiMysql />,
      },
      {
        name: "SQLite",
        icon: <DiSqllite />,
      },
      {
        name: "MongoDB",
        icon: <DiMongodb />,
      },
      {
        name: "PostgreSQL",
        icon: <DiPostgresql />,
      },
      {
        name: "Redis",
        icon: <DiRedis />,
      },
    ],
  },
];
