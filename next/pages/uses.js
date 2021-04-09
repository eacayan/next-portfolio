import React from 'react';
import Link from 'next/link';
import ReactMarkdown from "react-markdown";
import { motion } from 'framer-motion';
import { URL } from '../config/config';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const pageVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: { duration: 1.5, ...transition }
  }
};
const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
};

const Uses = ({ data }) => {
  return (
    <motion.section 
      initial="exit"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <div className="uses__container">
        <Link href='/'>
          <motion.a className="back" variants={backVariants}>← Back to Home</motion.a>
        </Link>
        <div className="uses__wysiwyg">
          <ReactMarkdown source={data.content} />
        </div>
        
      </div>
    </motion.section>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${URL}/uses`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Uses;
