import React from 'react';
import styled from 'styled-components';

// okay without viewBox
// viewBox="0 0 1920 200"
const ShoreWrapper = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const Shore = () => (
  <ShoreWrapper id="shore-wrapper" viewBox="0 0 1920 200">
    <g className="shore">
      <path fill="#b08d80" d="M0 21.6c-.4 9.9.4 84 0 93.9 0 0 1886.3 83.4 1907.9 83.4" />
      <path fill="#646464" d="M0 200h1910L.5 52.2" />
      <path
        fill="#f2f2f2"
        d="M1.01551442 75.51157516l1470.95858 36.18458052-.38855266 15.79526L.62696176 91.30683516z"
      />
    </g>
  </ShoreWrapper>
);

export default Shore;

/*
  --shore-color-1: #646464;
  --shore-color-2: #f2f2f2;
  --shore-color-3: #b08d80;
*/
