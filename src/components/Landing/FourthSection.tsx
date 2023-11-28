import styled from 'styled-components';
import LandingLayout from './Layout';
import ReviewCard from './ReviewCard';
import ArticleCard from './ArticleCard';
import BackgroundCloud from './BackgroundCloud';

const FourthSection = () => {
  return (
    <LandingLayout backgroundImage={<BackgroundCloud />}>
      <Title marginTop={34}>
        지난 하이톤 참가자의
        <br />
        생생한 소감이에요
      </Title>
      <ReviewList>
        <ReviewCard
          title="재밌었어요"
          content="다른 학교 친구들 선배님 후배님들과 직접 보고 소통하고 개발해보니 너무 재미있었어요"
        />
      </ReviewList>
      <Title marginTop={80}>블로그와 기사도 있어요</Title>
      <ArticleList>
        <ArticleCard
          title="7th Highthon 대상 후기"
          content="팀 빌딩은 자유 형태로 이루어졌으며 참가자들끼리 연락을 하면서 팀원을 꾸리는 형태로 이루어져 ..."
          author="silverbenn.log"
          blogType="velog"
          link="~~"
        />
      </ArticleList>
    </LandingLayout>
  );
};

const Title = styled.h2<{
  marginTop: number;
}>`
  color: #000;

  margin-top: ${({ marginTop }) => marginTop}px;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ReviewList = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 16px;
`;

const ArticleList = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 16px;
`;

export default FourthSection;
