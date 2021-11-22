import React from "react";
import { Button, SectionTitle } from "../../styles";
import { AboutContainer } from "./aboutStyles";
import { BsDownload } from "react-icons/bs";

import curriculum from "../../assets/pdf/CV-Francisco.pdf";

const About = () => {
  return (
    <AboutContainer name="acerca">
      <SectionTitle>Acerca Mío</SectionTitle>
      <p>
        Estudiante de último año en ingeniería en informática, con experiencia
        personal y como freelance en desarrollo web con tecnologías como
        ReactJS, mongoDB, JavaScript, entre otras.
      </p>
      <p>Puedes descargar mi curriculum Aquí.</p>
      <Button>
        <a download="" href={curriculum}>
          <span>Curriculum</span>
          <BsDownload />
        </a>
      </Button>
    </AboutContainer>
  );
};

export default About;
