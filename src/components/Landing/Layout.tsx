import { ReactElement } from 'react';
import styled from 'styled-components';

interface LandingLayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
  paddingBottom?: number;
  backgroundImage?: ReactElement;
}

const LandingLayout = ({
  children,
  backgroundColor = '#ffffff',
  paddingBottom = 0,
  backgroundImage,
}: LandingLayoutProps) => {
  return (
    <LayoutContainer backgroundColor={backgroundColor}>
      <Wrapper paddingBottom={paddingBottom}>{children}</Wrapper>
      {backgroundImage}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.section<LandingLayoutProps>`
  width: 100%;
  height: 100vh;
  position: relative;

  background-color: ${(props) => props.backgroundColor};
`;

const Wrapper = styled.div<LandingLayoutProps>`
  width: 100%;
  height: 100%;
  padding: 61px 28px 0 28px;

  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 99;

  padding-bottom: ${(props) => props.paddingBottom}px;
`;

export default LandingLayout;
