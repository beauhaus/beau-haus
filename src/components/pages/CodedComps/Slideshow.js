import React, { Component, Children } from 'react';

import styled from 'styled-components';

const SlideshowFrame = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50vh 10vh 20vh;
  z-index: 2;
  & > .image-container {
    grid-column: 1;
    grid-row: 1;
    position: relative;
    & > #frame-path {
      position: absolute;
      left: 0;
      top: 0;
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
    & > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
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
    grid-column: 1;
    grid-row: 3;
    position: relative;
    transform-origin: 50% 50%;
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
    & > svg.reflected-image {
      height: 100%;
      width: 100%;
    }
    & > #reflected-frame {
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      & > #frame-path-reflected {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        stroke: white;
        stroke-width: 3;
        fill: none;
        stroke: transparent;
        stroke-dasharray: 1260px;
        stroke-dashoffset: 0px;
        animation: 1s 1.5s dash linear forwards;
      }
    }
  }

  @keyframes emboss {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
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
      <div className="image-container">
        <svg id="frame-path" viewBox="0 0 400 400" preserveAspectRatio="none">
          <path id="display-frame-edge" d="M399 400V1H1v399" />
        </svg>
        <img src={props.currentSlide.url} alt="" />
        <div className="shad-layer" />
      </div>
      <div className="reflected-div">
        <div className="shad-layer-reflect" />

        <svg className="reflected-image" viewBox="0 0 400 400" preserveAspectRatio="none">
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

        <svg id="reflected-frame" viewBox="0 0 400 400" preserveAspectRatio="none">
          <path id="frame-path-reflected" d="M399 400V1H1v399" />
        </svg>
      </div>
      {/*
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
  </div>
  <div className="links">
  </div>
*/}
    </SlideshowFrame>
  );
};

export default Slideshow;
