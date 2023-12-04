import styled from 'styled-components';

export const StyledHeader = styled.div`
  @media (max-width: 680px) {
    margin-top: 61px;
    padding: 0;
    z-index: 2;
    position: absolute;
  }
`;

export const StyledHeaderImg = styled.img`
  @media (max-width: 680px) {
    margin-left: 28px;
    position: absolute;
    margin-top: 9.52px;
  }
`;

export const StyledBookBox = styled.button`
  @media (max-width: 680px) {
    border-radius: 6px;
    background: #121212;
    margin-left: 228px;
    padding: 0;
    width: 120px;
    height: 42px;
    border: none;
  }
`;

export const StyledBookText = styled.p`
  @media (max-width: 680px) {
    color: #fff;
    font-family: 'SUIT';
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
    line-height: 26px;
    margin: 0;
  }
`;
