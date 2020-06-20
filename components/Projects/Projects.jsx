import React from 'react';

import './Projects.scss';

const Projects = ({ data }) => {
  const { projects } = data;
  console.log(projects);
  return (
    <section className='projects__wrapper'>
      {projects.length > 0 &&
        projects.map(
          ({ name, description, project_image, project_link }, index) => (
            <div className='projects__container' key={`project-${index}`}>
              <p className='projects__name'>{name}</p>

              <p className='projects__description'>{description}</p>

              <div className='projects__image-wrapper'>
                <span className='projects__btn-info'>Info +</span>

                <img
                  src={`http://localhost:1337${project_image.url}`}
                  alt={`${name} image`}
                />
                <a
                  href={project_link}
                  className='projects__link'
                  target='_blank'
                >
                  Site
                </a>
              </div>
            </div>
          )
        )}
    </section>
  );
};

export default Projects;
