import fetch from 'isomorphic-unfetch';
import { motion } from 'framer-motion';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
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

const Home = ({ data }) => {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      transition={transition}
      variants={pageVariants}
    >
      <Landing data={data} />
      <Projects data={data} />
      <Footer />
    </motion.div>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${URL}/homepage`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default Home;
