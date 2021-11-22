import React from "react";
import { FooterContainer, TopArrow } from "./footerStyles";
import { IoIosArrowUp } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-scroll";

const Footer = () => {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <FooterContainer>
      <TopArrow>
        <IoIosArrowUp onClick={() => handleTop()} />
      </TopArrow>
      <div className="container-content">
        <div>
          <h3>Francisco Mardones Venegas</h3>
          <span>Frontend Developer</span>
        </div>
        <ul>
          <li>
            <Link to="acerca">Acerca mio</Link>
          </li>
          <li>
            <Link to="habilidades">Habilidades</Link>
          </li>
          <li>
            <Link to="proyectos">Proyectos</Link>
          </li>
          <a href="https://github.com/frmardonesv">
            <AiFillGithub size="2.5rem" color="#fff" />
          </a>
        </ul>
      </div>
    </FooterContainer>
  );
};

export default Footer;
