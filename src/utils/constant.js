import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineSend,
} from "react-icons/ai";
import { FaRegImages } from "react-icons/fa";
import apiImage from "../assets/img/api.png";
import streamsImage from "../assets/img/streams.png";
import comfyImage from "../assets/img/comfy.png";

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
    imagen: apiImage,
    link: "https://hololivfans-project-api.herokuapp.com/api-docs/",
    tecnologias: ["MongoDB", "NodeJS", "Express"],
    destacado: true,
    git: "https://github.com/frmardonesv/API-Info-Holo",
  },
  {
    id: 3,
    nombre: "E-Commerce",
    descripcion: "Un e-commerce, con datos consumidos desde mi API",
    imagen: comfyImage,
    link: "https://comfy-sloth-fmv.netlify.app/",
    tecnologias: ["ReactJS", "JavaSciprt", "Styled-Components"],
    destacado: true,
    git: "https://github.com/frmardonesv/Comfy-Store",
  },
];
