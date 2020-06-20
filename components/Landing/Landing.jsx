import React from 'react';

import './Landing.scss';
import Github from '../../assets/github.svg';
import Email from '../../assets/email.svg';
import LinkedIn from '../../assets/linkedin.svg';

const Landing = ({ data }) => {
  const { title, description, social_links } = data;

  console.log(social_links);

  return (
    <>
      <section className='landing__container'>
        <h1 className='landing__title'>{title}</h1>
        <h2 className='landing__description'>{description}</h2>
      </section>
      <aside className='landing__socials'>
        <ul>
          <li className='email'>
            <a href={social_links.email} target='_blank'>
              <Email />
            </a>
          </li>
          <li className='github'>
            <a href={social_links.github} target='_blank'>
              <Github />
            </a>
          </li>
          <li className='linkedin'>
            <a href={social_links.linkedin} target='_blank'>
              <LinkedIn />
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Landing;
