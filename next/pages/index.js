import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import { URL } from '../config/config';

const Home = ({ data }) => {
  return (
    <>
      <Landing data={data} />
      <Projects data={data} />
      <Footer />
    </>
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
