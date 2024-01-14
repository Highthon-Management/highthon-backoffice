import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const isTablet = useMediaQuery({
    query: '(max-width:1024px)',
  });

  const isPc = useMediaQuery({
    query: '(min-width:1025px)',
  });

  const Responsive = ({
    mobile,
    tablet,
    pc,
  }: {
    mobile?: React.ReactNode;
    tablet?: React.ReactNode;
    pc?: React.ReactNode;
  }) => {
    return (
      <>
        {isMobile && mobile}
        {isTablet && tablet}
        {isPc && pc}
      </>
    );
  };

  return { isMobile, isTablet, isPc, Responsive };
};
