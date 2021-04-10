import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const landingVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};

const Landing = ({ data }) => {
  const [hoverEffect, setHoverEffect] = useState(false);
  const { title, title_2, description_long, profile_image, social_links } = data;

  return (
    <motion.section
      className="landing__container"
      initial="initial"
      animate="enter"
      exit="exit"
      transition={transition}
      variants={landingVariants}
    >
      <div className="landing__text-wrapper">
        <h2 className="landing__description">Hello, I am...</h2>
        <h1 className="landing__title">{title}</h1>
        <h1 className="landing__title">{title_2}</h1>
        <h2 className="landing__description">
          <ReactMarkdown source={description_long} />
        </h2>
        <Link href="/uses">
          <a className="landing__links">
            <span>/uses</span>
          </a>
        </Link>
      </div>

      <picture className={`${hoverEffect ? "landing__image-wrapper hovered" : "landing__image-wrapper"}`}>
        <source media="(min-width: 1024px)" srcSet={`${profile_image?.formats?.medium?.url}`} />
        <img 
          className={`${hoverEffect ? "landing__image hovered" : "landing__image"}`} 
          onMouseEnter={() => setHoverEffect(true)} 
          onMouseLeave={() => setHoverEffect(false)} 
          src={`${profile_image?.formats?.small?.url}`} alt="personal photo"/>

        <div 
          className="speech-bubble" 
          onMouseEnter={() => setHoverEffect(true)} 
          onMouseLeave={() => setHoverEffect(false)}>
          <ul>
            <li className="email">
              <a href={`mailto:${social_links.email}`} target="_blank">
                <FiMail />
              </a>
            </li>
            <li className="github">
              <a href={social_links.github} target="_blank">
                <FiGithub />
              </a>
            </li>
            <li className="linkedin">
              <a href={social_links.linkedin} target="_blank">
                <FiLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </picture>
    </motion.section>
  );
};

export default Landing;
