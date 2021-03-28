import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = ({ data }) => {
  const { projects } = data;

  console.log(projects);

  return (
    <section className='projects__container'>
      {projects.length > 0 &&
        projects.map((project) => (
          <ProjectItem projectData={project} key={project.id} />
        )
      )}
    </section>
  );
};

export default Projects;
