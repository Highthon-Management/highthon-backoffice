import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ArticleCardProps {
  title: string;
  content: string;
  link: string;
  blogType: 'velog' | 'medium';
  author: string;
}
const ArticleCard = ({ title, content, link, blogType, author }: ArticleCardProps) => (
  <ArticleCardContainer>
    <Link to={link}>
      <header>{title}</header>
      <p>{content}</p>
      <footer>
        <img src={blogType} alt={`${author}님의 글`} />
        <p>{author}</p>
      </footer>
    </Link>
  </ArticleCardContainer>
);

const ArticleCardContainer = styled.li`
  width: 263px;
  height: 171px;
  padding: 24px;
  border-radius: 8px;
  background: #fff;

  box-shadow: 0px 10px 30px 6px rgba(0, 0, 0, 0.06);

  > header {
    color: #333;

    font-family: SUIT;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  p {
    color: #646464;
    margin-top: 12px;

    font-family: SUIT;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  footer {
    display: flex;
    margin-top: 7px;
  }
`;

export default ArticleCard;
