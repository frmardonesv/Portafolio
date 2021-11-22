import React from "react";
import { SectionTitle } from "../../styles";
import SkillCard from "../skillCard/SkillCard";
import { SkillsContainer } from "./skillsStyles";
import { FaServer } from "react-icons/fa";
import { frontEnd, backEnd, complementarios } from "../../utils/constant";

const Skills = () => {
  return (
    <SkillsContainer name="habilidades">
      <SectionTitle>Habilidades</SectionTitle>
      <div className="container-cards">
        <SkillCard title="Frontend" icon={<FaServer />} data={frontEnd} />
        <SkillCard title="Backend" icon={<FaServer />} data={backEnd} />
        <SkillCard
          title="Complementarios"
          icon={<FaServer />}
          data={complementarios}
        />
      </div>
    </SkillsContainer>
  );
};

export default Skills;
