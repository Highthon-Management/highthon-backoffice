import React from 'react';
import LandingLayout from './Layout';
import SixthBackgroundImage from '../../assets/SixthBackgroundImage.png';
import styled from 'styled-components';

const SixthSection = () => {
  const today = new Date();
  const end = new Date('2024-01-30');

  return (
    <LandingLayout
      backgroundImage={
        <img
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
          src={SixthBackgroundImage}
          alt=""
        />
      }
    >
      <Title>
        도전의 한 걸음을
        <br />
        같이 내딛어요
      </Title>
      <Summary>
        이번 겨울방학엔
        <br />
        꿈을 향한 열정의 온기를 나눌
        <br />
        하이톤 참여 어때요?
      </Summary>
      <CalendarWrapper>
        <CalendarHead>Highthon Calendar</CalendarHead>
        <PeriodTitle>행사기간</PeriodTitle>
        <PeriodText>2024.02.17 ~ 18</PeriodText>
        <Hr />
        <PeriodTitle>신청기간</PeriodTitle>
        <PeriodText>2024.01.16 ~ 2024.01.30</PeriodText>
      </CalendarWrapper>
      <RemainPeriod>신청마감까지 {end.getDate() - today.getDate()}일 남았어요!</RemainPeriod>
    </LandingLayout>
  );
};

export default SixthSection;

const Title = styled.h2`
  color: #000;

  margin-top: 34px;

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Summary = styled.p`
  margin-top: 24px;
  color: #000;

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;

const CalendarWrapper = styled.main`
  position: relative;
  height: 300px;
  margin: 0 28px;
  margin-top: 60px;
  padding: 0 28px;
  padding-top: 95px;

  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 10px 30px 6px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
`;

const CalendarHead = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  margin: 0 auto;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  align-items: center;
  padding: 0 28px;

  font-size: 22px;
  font-weight: 800;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.background};
  background: linear-gradient(180deg, #51cbff 0%, #b1e8ff 100%);
`;

const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 20px 0;
`;

const PeriodTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 26px;
  color: #000;
  margin-bottom: 4px;
`;

const PeriodText = styled.h2`
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #555555;
`;

const RemainPeriod = styled.h3`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  color: #7b7b7b;
`;
