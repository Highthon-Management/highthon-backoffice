import styled from 'styled-components';
import FirstSection from '../components/Landing/FirstSection';
const SecondSection = React.lazy(() => import('../components/Landing/SecondSection'));
const ThirdSection = React.lazy(() => import('../components/Landing/ThirdSection'));
const FourthSection = React.lazy(() => import('../components/Landing/FourthSection'));
const FifthSection = React.lazy(() => import('../components/Landing/FifthSection'));
import React from 'react';

const LandingPage = () => (
  <Wrapper>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
  </Wrapper>
);

export default LandingPage;

const Wrapper = styled.section`
  overflow: scroll;
  height: 100vh;
  scroll-snap-type: y mandatory;
  > * {
    scroll-snap-align: start;
    flex: none;
  }
`;
