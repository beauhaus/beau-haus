import React from 'react';
import styled from 'styled-components';

const WaterBgWrapper = styled.svg`
  position: absolute;
  width: 101vw;
  height: 10vw;
  bottom: 0;
  left: -1px;
`;

// NB: Height is 10vw!!!
const WaterBg = props => {
  // console.log('props >WaterBg', props);
  const { left } = props.bgGradient;
  const { right } = props.bgGradient;
  return (
    <WaterBgWrapper className="water-bg">
      <linearGradient id="bg-grad">
        <stop offset="0" stopColor={left} />
        <stop offset="1" stopColor={right} />
      </linearGradient>
      <path fill="url(#bg-grad)" d="M.5 0h1920v1080H.5z" />
    </WaterBgWrapper>
  );
};
// <Banner/>

export default WaterBg;