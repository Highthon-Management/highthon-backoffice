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
        <img
          src={
            blogType === 'velog'
              ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7s68FItYtc_8WXKoCD_bBXMrktSpbOVhEHBu7eL10mRkJs8bd6w3DFF5XOytkch7Hs_s&usqp=CAU'
              : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///+3t7f8/Pzs7Oz39/d6enpPT0/IyMjy8vL19fWtra04ODhxcXHU1NSqqqpeXl6Xl5fc3NwJCQl/f38WFhbm5uaPj4/AwMArKyuFhYVNTU1kZGQREREyMjJFRUUiIiKgoKBoaGgnJyc9PT2MjIwcHBxWVlbgTdlVAAAEsUlEQVR4nO3c6XqqMBAGYHDD3dbj1rpUu9j7v8NTCAhhnYQZofZ7f/LEmGHJRoLjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQJtdp95hNpsd9qdj00Xh9zHoLEdubDSfDP41XSg+h04yuFhv4TVdNA6nST83vDDIy9Usu9VuMx7NF98yhbVwmJeEp+zeyLkdO/GpWQmWmm6/rIzPNzzRsltpv1qeRctOsR6S4vNNKPl10r96ko6gwis5vh/jQ2V+Off7IC/ddL67T2NU/QDqOhX55d4QOVfx2nXdjUhEOq+sAs3XeynLcJL/o2kmYXAmLmKBRQbG8flKmoD3otOSTngKDnclg/NdrAIseK5868KfpG/u8Fq/yga4sAzQdYsauZJaOdUtGqujc9EAL9YBFl3Fp5Jf6LWKFx1eCwb4XCNA133Py3JT9gvthrzdPoU3fH2zWgG6bk4frjzLfjLprRNV1fjY+6wZoF5gpfQS6g/v7WCmkmWTP04ykakkyp5CX+JJ9OKjUqPPTN/RwnMqz8rubdyObuODQp3WqtNNo3duitvCyC7vBKfPExPzvlqepZbntvoHt7SJ0ZpMVXNhCTBV1VfUM1r6xBleZotX35UpQK0+fSGkH0aJE8dGEhFyVDNK4iH6IiSPOtpe8qBAgGyXULuIpImCsOLUhjSf/BEWDOGsxF2xLiX5QqXVOowz/ghJZSG6dUneSMnDakV7TL7YA1wV/b2VaFBEaCt8KrF2R/OP800nZspFzdmOllydEG3ycldcVDvVXQ8jUV3ToyVXz63WKR4Wl9WO0eQhQXibEh9uNeGqdanYm3z69C+Nqh6pg7F59nSwj5/GzBGqS1A0x5YWhHPWDnHPt52YAwyrR/KUiJ94Khohb1vhCx5E8rTd2cm0ncwRcnZolKB6JD/deyfVLWWfbuOuaMLqkfZ6zlUDqNT4u/QtgTnCKM7Q0Chb/4of9EPMXW/OTqkSTDCRJ7a2TmbWkf5uuaEIe0bZ+r3Q1PugPWuA5/z/rSMYpJNTL6QjpMw1GOrXjZB3KYtAhN2Hj7Bl1/Dxn0N6UchaVpf+gfawDX2a1FAru06jlqb7pf7coWy/1H51QhGzsYVfccqOLfjHh99GJ+7sSI8P+RvEINsWjfEff56m4bk2dT5k59q450vDl/Mtmi9tds5bvYaRnfNu9r2F6qHJvrf4A++e2vb+UGAB5uO/A2YcI3K8x2fueAf41mJs40zbtBaD7yK2dj2Nc2GKsLVromTWtRE637e04uva0m8OLOnboI6V6XPXJm7TZWPSyPrSeCmp/PpScj+yBNMaYakAU6NQC61f500esxYxXquvNQt3WKt///0W2j6bS3RUcL9FS/bMyG5BtA+Rbd+TUHt/Y3uj/pq9a7Zbgzj2H4Z1uWRwyv7R95A6ze0DPt5pH7BjOL3Yt9rLnTuMn86H9/rixpE4T+b+1v34PzzRbyp8yBae6Jv1uxjXxHcxRDstRk6Tsnc2I9Nvm7zuNv3RvG2ffXkq+j7NpGUFreO8euhvDEXWU+89+E7U9AG/EwUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ/wFTZUNtMEP4sAAAAABJRU5ErkJggg=='
          }
          alt={`${author}님의 글`}
        />
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

  header {
    color: #333;

    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  p {
    color: #646464;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  footer {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 20px;
    > img {
      border-radius: 3px;
      width: 20px;
      height: 20px;
    }
  }
`;

export default ArticleCard;
