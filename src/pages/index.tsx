import styled from 'styled-components';
import FirstSection from '../components/Landing/FirstSection';
const SecondSection = React.lazy(() => import('../components/Landing/SecondSection'));
const ThirdSection = React.lazy(() => import('../components/Landing/ThirdSection'));
const FourthSection = React.lazy(() => import('../components/Landing/FourthSection'));
const FifthSection = React.lazy(() => import('../components/Landing/FifthSection'));
const SixthSection = React.lazy(() => import('../components/Landing/SixthSection'));

import React from 'react';

const LandingPage = () => {
  return (
    <Wrapper>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </Wrapper>
  );
};

export default LandingPage;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 0 auto;
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
  > * {
    scroll-snap-align: start;
    flex: none;
  }
`;
