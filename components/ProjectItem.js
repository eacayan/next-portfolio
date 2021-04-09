import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { URL } from '../config/config';

const ProjectItem = ({ projectData }) => {
  const { name, description, project_image, project_link } = projectData;
  const [isInfoShown, setIsInfoShown] = useState(false);

  const showInfo = () => {
    setIsInfoShown(!isInfoShown);
  }

  return (
    <div className="projects__item">
      <p className="projects__name">{name}</p>

      <div className="projects__image-wrapper">
        <span className="projects__btn-info" onClick={showInfo}>
          {isInfoShown ? "Close x" : "Info +"}
        </span>
        <picture>
          <source media="(min-width: 768px)" srcSet={`${URL}${project_image?.formats?.medium?.url}`} />
          <img  
            src={`${URL}${project_image?.formats?.small?.url}`}
            alt={`${project_image?.name} photo`}/>

          <div className={`projects__description ${isInfoShown ? "--show" : ""}`}>
            <ReactMarkdown source={description} />
          </div>
        </picture>
        <a
          href={project_link}
          className="projects__link"
          target="_blank"
        >
          Site
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
