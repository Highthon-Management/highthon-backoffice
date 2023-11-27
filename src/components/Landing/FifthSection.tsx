import styled from 'styled-components';
import LandingLayout from './Layout';

const FifthSection = () => (
  <LandingLayout paddingBottom={110}>
    <Title>
      하이톤과
      <br />
      함께한 기업들
    </Title>
    <Summary>
      완성도 있는 행사운영을 위해
      <br />
      여러 IT/교육 기업에게 후원을 받고 있어요.
    </Summary>
  </LandingLayout>
);

const Title = styled.h2`
  color: #000;

  margin-top: 34px;
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

export default FifthSection;
