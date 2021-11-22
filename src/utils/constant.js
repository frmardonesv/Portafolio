import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineSend,
  AiFillGithub,
} from "react-icons/ai";
import { FaRegImages } from "react-icons/fa";

export const links = [
  {
    text: "Home",
    url: "home",
    icon: <AiOutlineHome />,
  },
  {
    text: "Yo",
    url: "acerca",
    icon: <AiOutlineUser />,
  },
  {
    text: "Skills",
    url: "habilidades",
    icon: <AiOutlineFileText />,
  },
  {
    text: "Proyectos",
    url: "proyectos",
    icon: <FaRegImages />,
  },
  {
    text: "Contacto",
    url: "contacto",
    icon: <AiOutlineSend />,
  },
  {
    text: "GIT",
    url: "https://github.com/frmardonesv",
    icon: <AiFillGithub />,
  },
];

export const frontEnd = [
  { id: 1, nombre: "ReactJS" },
  { id: 2, nombre: "JavaScript" },
  { id: 3, nombre: "HTML" },
  { id: 3, nombre: "CSS" },
];

export const backEnd = [
  { id: 1, nombre: "PHP" },
  { id: 2, nombre: "NodeJS" },
  { id: 3, nombre: ".NET" },
  { id: 4, nombre: "C#" },
];

export const complementarios = [
  { id: 1, nombre: "GIT" },
  { id: 2, nombre: "Styled Components" },
  { id: 2, nombre: "MongoDB" },
  { id: 2, nombre: "MySQL" },
];

export const proyectos = [
  {
    id: 1,
    nombre: "API",
    descripcion:
      " API la cual utilizo para consumir cierta información en otros proyectos",
    link: "#API",
    imagen: "",
    tecnologias: ["MongoDB", "NodeJS", "Express"],
    destacado: false,
  },
  {
    id: 2,
    nombre: "Streams",
    descripcion: "Aplicación para ver los últimos videos y drectos",
    imagen: "",
    link: "#Streams",
    tecnologias: ["ReactJS", "JavaScript", "Styled-Components"],
    destacado: true,
  },
  {
    id: 3,
    nombre: "E-Commerce",
    descripcion:
      "API la cual utilizo para consumir cierta información en otros proyectos",
    imagen: "",
    link: "#commerce",
    tecnologias: ["ReactJS", "JavaSciprt", "Styled-Components"],
    destacado: true,
  },
  {
    id: 4,
    nombre: "Admin Dashboard",
    descripcion:
      "API la cual utilizo para consumir cierta información en otros proyectos",
    imagen: "",
    link: "#commerce",
    tecnologias: ["ReactJS", "JavaSciprt", "Styled-Components"],
    destacado: true,
  },
];
