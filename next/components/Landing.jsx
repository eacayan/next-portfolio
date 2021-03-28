import React, { useState } from 'react';
import ReactMarkdown from "react-markdown";
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { URL } from '../config/config';

const Landing = ({ data }) => {
  const [hoverEffect, setHoverEffect] = useState(false);
  const { title, title_2, description_long, profile_image, social_links } = data;

  return (
    <>
      <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
          delay: 0.75
        }}
        className='landing__container'>
        <div className="landing__text-wrapper">
          <h2 className='landing__description'>Hello, I am...</h2>
          <h1 className='landing__title'>{title}</h1>
          <h1 className='landing__title'>{title_2}</h1>
          <h2 className='landing__description'>
            <ReactMarkdown source={description_long} />
          </h2>
        </div>

        <picture className={`${hoverEffect ? 'landing__image-wrapper hovered' : 'landing__image-wrapper'}`}>
          <source media="(min-width: 1024px)" srcSet={`${URL}${profile_image?.formats?.medium?.url}`} />
          <img 
            className={`${hoverEffect ? 'landing__image hovered' : 'landing__image'}`} 
            onMouseEnter={() => setHoverEffect(true)} 
            onMouseLeave={() => setHoverEffect(false)} 
            src={`${URL}${profile_image?.formats?.small?.url}`} alt="personal photo"/>

          <div 
            className="speech-bubble" 
            onMouseEnter={() => setHoverEffect(true)} 
            onMouseLeave={() => setHoverEffect(false)}>
            <ul>
              <li className='email'>
                <a href={`mailto:${social_links.email}`} target='_blank'>
                  <FiMail />
                </a>
              </li>
              <li className='github'>
                <a href={social_links.github} target='_blank'>
                  <FiGithub />
                </a>
              </li>
              <li className='linkedin'>
                <a href={social_links.linkedin} target='_blank'>
                  <FiLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </picture>
      </motion.section>
    </>
  );
};

export default Landing;
