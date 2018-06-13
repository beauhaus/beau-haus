import React, { Component, Children } from 'react';

import styled from 'styled-components';

/* Left Side */
 const SlideshowFrame = styled.div`
  grid-column: 1/22;
  grid-row: 1/-1;
  opacity: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50vh 20vh;
  z-index: 2;
   
  & > .photo-div {
    grid-row: 1;
    grid-column: 1/2;
    width: 100%;
    height: 100%;
    position: relative;
    & > img {
      position: absolute;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }

    & path#display-frame-edge {
      grid-column: 1;
      grid-row: 1/3;
      width: 100%;
      height: 100%;
      stroke: white;
      stroke-width: 1;
      fill: none;
      stroke: transparent;
      stroke-dasharray: 1260px;
      stroke-dashoffset: 0px;
      animation: 1s 1.5s dash linear forwards;
    }
    & > #frame-path {
      width: 100%;
      height: 100%;
      stroke: #fff;
    }
    & > .shad-layer::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset -10px 10px 25px rgba(0, 0, 0, 0.5);
      opacity: 0;
      animation: emboss 3s 2.5s ease-out forwards;
    }
  }

  & > .reflected-div {
    grid-row: 2;
    grid-column: 1;
    display: grid;
    transform-origin: 50% 50%;
    position: relative;
    transform: scaleY(-1);
    filter: FlipV;
    & > .shad-layer-reflect::after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      box-shadow: inset -10px 10px 25px 0px rgba(0, 0, 0, 0.2);
      opacity: 0;
      animation: emboss 3s 2.5s ease-out forwards;
    }

    @keyframes emboss {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
    & .reflected-svg {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20vh;
    }
    & #frame-path-reflected-container {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20vh;
      stroke-width: 0px;
      stroke: #fff;
    }
    & #frame-path-reflected {
      border: 1px solid green;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20vh;
      stroke: white;
      stroke-width: 1;
      fill: none;
      stroke: transparent;
      stroke-dasharray: 1260px;
      stroke-dashoffset: 0px;
      animation: 1s 1.5s dash linear forwards;
    }
  }

  @keyframes dash {
    0% {
      stroke: #fff;
      stroke-dashoffset: 1260px;
    }

    50% {
      stroke: #000;
    }
    100% {
      stroke-dashoffset: 2660px;
      stroke: transparent;
    }
  }
`;

const Slideshow = props => {
  return (
    <SlideshowFrame className="slideshow-frame">
      <div className="photo-div">
        <svg id="frame-path" viewBox="0 0 400 400" preserveAspectRatio="none">
          <path id="display-frame-edge" d="M399 400V1H1v399" />
        </svg>
        <img src={props.currentSlide.url} alt="" />
        <div className="shad-layer"></div>
      </div>

      <div className="reflected-div shad-layer">
        <div className="shad-layer-reflect"></div>

        <svg className="reflected-svg" viewBox="0 0 400 400" preserveAspectRatio="none">
          <defs>
            <linearGradient opacity="1" id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop stopColor="grey" offset=".5" stopOpacity=".2" />
              <stop stopColor="grey" stopOpacity=".2" offset="1" />
            </linearGradient>
            <mask id="mask1">
              <rect fill="url(#grad)" height="100%" width="100%" y="0vh" />
            </mask>
            <pattern id="pattern1" height="1" width="1" patternContentUnits="objectBoundingBox">
              <image height="1" width="1" preserveAspectRatio="none" y="0" xlinkHref={props.currentSlide.url} />
            </pattern>
          </defs>
          <rect id="reflected-rect" mask="url(#mask1)" width="100%" height="100%" y="0" fill="url(#pattern1)" />
        </svg>

        <svg id="frame-path-reflected-container" viewBox="0 0 400 400" preserveAspectRatio="none">
          <path id="frame-path-reflected" d="M399 400V1H1v399" />
        </svg>
      </div>
      <div className="links">
      </div>
    </SlideshowFrame>
  );
};

export default Slideshow;