import React from "react";
import { Button } from "../../styles";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ProjectCardContainer } from "./cardStyles";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({
  nombre,
  descripcion,
  link,
  imagen,
  tecnologias,
  position,
  feature,
  git,
}) => {
  return (
    <ProjectCardContainer
      className={`${position && position} ${
        feature ? "feature" : "all-project"
      }`}
    >
      <div className="project-image">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="project-info">
        <h2>{nombre}</h2>
        <p>{descripcion}</p>
        {!feature && (
          <ul className="tecno">
            {tecnologias.map((tecnologia) => (
              <li>{tecnologia}</li>
            ))}
          </ul>
        )}
        <div className="project-links">
          <Button padding="7px 20px" font="14px">
            <a href={git}>
              <span>GIT</span>
              <AiFillGithub size="25px" />
            </a>
          </Button>
          <Button padding="7px 20px" font="14px" margin="0">
            <a href={link}>
              <span>Demo</span>
              <MdKeyboardArrowRight size="25px" />
            </a>
          </Button>
        </div>
      </div>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
