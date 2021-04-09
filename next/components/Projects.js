import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectItem from './ProjectItem';

const transition = { type: 'spring', duration: 0.75, bounce: 0.2 }
const projectsVariants = {
  enter: { x: 0 },
  exit: { x: '-100vw' },
}

const Projects = ({ data }) => {
  const { projects } = data;
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: projectsVariants.enter.x,
        transition
      })
    }
    if (!inView) {
      animation.start({ x: projectsVariants.exit.x })
    }
  }, [inView])

  return (
    <section className="projects">
      <h2 className="projects__heading">Selected Works</h2>
      <div className="projects__wrapper" ref={ref}>
        <motion.div 
          className="projects__container"
          animate={animation}
        >
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectItem projectData={project} key={project.id} />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
