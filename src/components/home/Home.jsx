import React from "react";
import { HomeContainer } from "./homeStyles";

import { AiOutlineSend } from "react-icons/ai";
import { Button } from "../../styles";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <HomeContainer name="home">
      <div className="container">
        <div className="right-container">
          <div className="container-phone">
            <div className="container-image image"></div>
          </div>
        </div>
        <div className="left-container">
          <div className="name">
            <h1>Hola, soy Francisco</h1>
            <span>Frontend Developer</span>
          </div>
          <p>
            Experiencia personal y como freelance en desarrollo web con
            diferentes tecnologías.
          </p>
          <Button>
            <Link to="contacto">
              <span>Contáctame</span>
              <AiOutlineSend />
            </Link>
          </Button>
        </div>
      </div>
    </HomeContainer>
  );
};

export default Home;
