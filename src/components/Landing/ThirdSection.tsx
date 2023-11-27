import styled from 'styled-components';
import LandingLayout from './Layout';
import BackgroundCloud from './BackgroundCloud';

const ThirdSection = () => {
  return (
    <LandingLayout paddingBottom={69} backgroundImage={<BackgroundCloud />}>
      <Title>
        해커톤 행사가 처음이라도
        <br />
        괜찮아요!
      </Title>
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

  font-family: SUIT;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Summary = styled.p`
  margin-top: auto;

  color: #000;

  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;

export default ThirdSection;
