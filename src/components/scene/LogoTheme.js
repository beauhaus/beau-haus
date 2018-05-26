import React from 'react';
import styled from 'styled-components';

const LogoThemeWrapper = styled.svg`
  position: absolute;
  top: 5vh;
  left: 4vw;
  z-index: 10;
  width: 80px;
  height: 65px;
  opacity: 1;
  z-index: 50;
`;
//This adds a half-circle above the portalled BHLogo Component fading in a particular page's "theme fill" color
const LogoTheme = props => {
  return (
    <LogoThemeWrapper viewBox="0 0 440 325">
      <path id="logo-theme-dot" fill={props.fill} d="M183.5 293.5c0 17.4 14.1 31.5 31.5 31.5v-63c-17.4 0-31.5 14.1-31.5 31.5z" />
    </LogoThemeWrapper>
  );
};

export default LogoTheme;
