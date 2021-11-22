import React, { useEffect, useState } from "react";
import ProjectCard from "../projectCard/ProjectCard";
import { FeaturedContainer } from "./featureStyles";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const FeatureProject = ({ projects }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projects]);

  const dataLength = projects.length;

  const validateSlide = (indexP) => {
    let position = "nextSlide";
    if (indexP === index) {
      return (position = "activeSlide");
    }
    if (indexP === index - 1 || (index === 0 && indexP === dataLength - 1)) {
      return (position = "lastSlide");
    }
    return position;
  };

  return (
    <FeaturedContainer>
      <h2 className="feature-title">Featured Projects</h2>
      <div className="slider">
        {projects.map((projectFeature, projectIndex) => {
          let position = validateSlide(projectIndex);
          return (
            <ProjectCard
              feature
              position={position}
              {...projectFeature}
              key={projectFeature.id}
            />
          );
        })}

        <button
          className="slider-button next"
          onClick={() => setIndex(index + 1)}
        >
          <MdNavigateNext />
        </button>
        <button
          className="slider-button last"
          onClick={() => setIndex(index - 1)}
        >
          <MdNavigateBefore />
        </button>
      </div>
    </FeaturedContainer>
  );
};

export default FeatureProject;
