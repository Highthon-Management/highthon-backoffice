import { ReactElement } from 'react';
import styled from 'styled-components';
import { useResponsive } from '../../hooks/useResponsive';

interface LandingLayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
  paddingBottom?: number;
  backgroundImage?: ReactElement;
  isMobile?: boolean;
}

const LandingLayout = ({
  children,
  backgroundColor = '#ffffff',
  paddingBottom = 0,
  backgroundImage,
}: LandingLayoutProps) => {
  const { isMobile } = useResponsive();

  return (
    <LayoutContainer backgroundColor={backgroundColor}>
      <Wrapper isMobile={isMobile} paddingBottom={paddingBottom}>
        {children}
      </Wrapper>
      {backgroundImage}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.section<LandingLayoutProps>`
  position: relative;
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.backgroundColor};
`;

const Wrapper = styled.div<LandingLayoutProps>`
  width: 100%;
  overflow: hidden;
  height: 100%;
  ${({ isMobile }) => !isMobile && 'padding-top: 61px;'};

  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 99;
  > * {
    padding: 0 28px;
  }
  > .lottie {
    position: absolute;

    left: 50%;
    transform: translate(-50%, 0);
    padding: 0 0;
    width: 500px;
    height: 400px;
  }

  padding-bottom: ${(props) => props.paddingBottom}px;
`;

export default LandingLayout;
