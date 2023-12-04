import React from 'react';
import hightonLogo from '../../../logo.svg';
import { StyledHeader, StyledHeaderImg, StyledBookBox, StyledBookText } from '../../../styles/Header';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="allHeader">
        <StyledHeaderImg src={hightonLogo} className="headerImg" alt="Header Logo" />
        <StyledBookBox>
          <StyledBookText>신청 바로하기</StyledBookText>
        </StyledBookBox>
      </div>
      <link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css" rel="stylesheet" />
    </StyledHeader>
  );
};

export default Header;
