import {
  AiOutlineHome,
  AiOutlineBook,
  AiOutlineProject,
  AiOutlineContacts,
} from "react-icons/ai";

export const routes = [
  {
    icon: <AiOutlineHome />,
    name: "Home",
    path: "/",
  },
  {
    icon: <AiOutlineBook />,
    name: "About",
    path: "/about",
  },
  {
    icon: <AiOutlineProject />,
    name: "Project",
    path: "/project",
  },
  {
    icon: <AiOutlineContacts />,
    name: "Contact",
    path: "/contact",
  },
];
