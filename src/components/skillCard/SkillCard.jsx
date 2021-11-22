import React, { useState } from "react";
import { SkillCardContainer } from "./cardStyles";
import { IoIosArrowDown } from "react-icons/io";

const SkillCard = ({ title, icon, data }) => {
  const [active, setActive] = useState(false);
  return (
    <SkillCardContainer className={`${active && "activo"}`} items={data.length}>
      <div className="top-section">
        <div>
          {icon}
          <h3>{title}</h3>
        </div>
        <IoIosArrowDown className="arrow" onClick={() => setActive(!active)} />
      </div>
      <ul className="content">
        {data.map((item) => {
          const { id, nombre } = item;
          return <li key={`${id} ${nombre}`}>{nombre}</li>;
        })}
      </ul>
    </SkillCardContainer>
  );
};

export default SkillCard;
