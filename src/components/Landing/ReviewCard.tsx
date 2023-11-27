import styled from 'styled-components';

interface ReviewCardProps {
  title: string;
  content: string;
}

const ReviewCard = ({ title, content }: ReviewCardProps) => (
  <ReviewCardContainer>
    <header>😊 {title}</header>
    <p>{content}</p>
  </ReviewCardContainer>
);

const ReviewCardContainer = styled.li`
  width: 263px;
  height: 130px;

  padding: 18px 20px;
  border-radius: 8px;
  background: #fff;

  box-shadow: 0px 10px 30px 6px rgba(0, 0, 0, 0.06);

  header {
    color: #333;
    font-family: SUIT;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }

  p {
    color: #646464;
    font-family: SUIT;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-top: 10px;
  }
`;

export default ReviewCard;
