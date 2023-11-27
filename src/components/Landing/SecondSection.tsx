import styled from 'styled-components';
import LandingLayout from './Layout';
import { Link } from 'react-router-dom';

const SecondSection = () => {
  return (
    <LandingLayout paddingBottom={60}>
      <Title>
        개발자와 디자이너를
        <br />
        꿈꾸는 고등학생이라면?
        <br />
        역시 하이톤!
      </Title>
      <Summary>
        하이톤은 고등학생 대상
        <br />
        해커톤 행사에요.
      </Summary>
      <WhatIsHighthon to="/~~">해커톤이란?</WhatIsHighthon>
    </LandingLayout>
  );
};

const Title = styled.h2`
  margin-top: 34px;

  color: #000;
  font-family: SUIT;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Summary = styled.p`
  color: #000;

  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
  margin-top: auto;
`;

const WhatIsHighthon = styled(Link)`
  color: #ccc;

  margin-top: 28px;

  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-decoration-line: underline;
`;

export default SecondSection;
