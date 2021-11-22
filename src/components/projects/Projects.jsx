import React from "react";
import { SectionTitle } from "../../styles";
import ProjectCard from "../projectCard/ProjectCard";
import { ProjectContainer } from "./projectStyles";
import { proyectos } from "../../utils/constant";
import FeatureProject from "../featureProject/FeatureProject";

const Projects = () => {
  return (
    <ProjectContainer name="proyectos">
      <SectionTitle>Portafolio</SectionTitle>

      <FeatureProject projects={proyectos} />

      <div className="projects-section">
        <h2>Proyectos</h2>
        <div className="projects-container">
          {proyectos.map((project) => {
            return <ProjectCard {...project} key={project.id} />;
          })}
        </div>
      </div>
    </ProjectContainer>
  );
};

export default Projects;
