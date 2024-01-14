import styled from 'styled-components';
import LandingLayout from './Layout';
import BackgroundCloud from './BackgroundCloud';
import Lottie from 'lottie-react';
import Figma from '../../assets/page3.json';

const ThirdSection = () => {
  return (
    <LandingLayout paddingBottom={69} backgroundImage={<BackgroundCloud />}>
      <Title>
        해커톤 행사가 처음이라도
        <br />
        괜찮아요!
      </Title>
      <LottieSection width={539} height={446} loop={true} autoPlay={true} animationData={Figma} className="lottie" />
      <Summary>
        2017년부터 시작해, <br />
        이번 행사로 9회를 맞은 하이톤. <br />
        <br />
        비슷한 꿈을 꾸는 구성원이 모여 <br />
        함께 성장하고 도전하는 과정을 <br />
        하이톤이 도울게요!
      </Summary>
    </LandingLayout>
  );
};

const Title = styled.h2`
  color: #000;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 34px;
`;

const LottieSection = styled(Lottie)`
  margin-top: 100px;
`;

const Summary = styled.p`
  margin-top: auto;

  color: #000;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;

export default ThirdSection;
