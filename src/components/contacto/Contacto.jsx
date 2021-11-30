import React from "react";
import { Button, SectionTitle } from "../../styles";
import { ContactoContainer } from "./contactoStyles";

const Contacto = () => {
  return (
    <ContactoContainer name="contacto">
      <SectionTitle>Contacto</SectionTitle>
      <div className="contact-info">
        <div>
          <h3>Correo</h3>
          <span>fr.mardonesv25@gmail.com</span>
        </div>

        <div>
          <h3>Celular</h3>
          <span>+56 9 79272516</span>
        </div>
        <div>
          <h3>Residencia</h3>
          <span>Chile, Santiago</span>
        </div>
      </div>

      <div className="git-info">
        <p>También puedes visitar mi repositorio en GIT.</p>
        <Button padding="10px 35px" margin="0">
          <a href="https://github.com/frmardonesv">
            <span>GIT</span>
          </a>
        </Button>
      </div>
    </ContactoContainer>
  );
};

export default Contacto;
