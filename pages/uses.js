import React from 'react';
import Link from 'next/link';
import ReactMarkdown from "react-markdown";
import { motion } from 'framer-motion';
import { URL } from '../config/config';

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0.75, ...transition } }
};
const contentVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition
  }
};

const Uses = ({ data }) => {
  return (
    <motion.section>
      <div className="uses__container">
        <Link href='/'>
          <motion.a className="back" 
          initial="exit" 
          animate="enter" 
          exit="exit" variants={backVariants}>← Back to Home</motion.a>
        </Link>
        <motion.div 
          className="uses__wysiwyg"
          initial="exit" 
          animate="enter" 
          exit="exit"
          variants={contentVariants}
        >
          <ReactMarkdown source={data.content} />
        </motion.div>
        
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
