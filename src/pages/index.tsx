import styled from 'styled-components';
import FirstSection from '../components/Landing/FirstSection';
import SecondSection from '../components/Landing/SecondSection';
import ThirdSection from '../components/Landing/ThirdSection';
import FourthSection from '../components/Landing/FourthSection';
import FifthSection from '../components/Landing/FifthSection';

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
