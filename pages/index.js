import fetch from 'isomorphic-unfetch';
import styled from '@emotion/styled';

import Landing from 'components/Landing/Landing';
import LandingAnimation from 'components/Landing/LandingAnimation';
import Projects from 'components/Projects/Projects';

const Home = ({ data }) => {
  const HomeStyled = styled.main`
    position: relative;
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  `;

  return (
    <>
      <HomeStyled>
        <Landing data={data} />
        <LandingAnimation />
      </HomeStyled>
      <Projects data={data} />
    </>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/homepage`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
export default Home;
