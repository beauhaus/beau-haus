import React, { Component, Children } from 'react';

import styled from 'styled-components';

/** FIXME:
 *
 * TODO:
 * put a mix-blend-mode on the reflection to interact with bg
 * try mix-blend-background (?) property.
 *
 * Fix stroke animation
 */
const SlideshowFrame = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50vh 10vh 20vh;
  z-index: 20;
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
      stroke-dasharray: 794;
      stroke-dashoffset: 793;
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
    z-index: 30;

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
        height: 100%;
        stroke: white;
        stroke-width: 1;
        fill: none;
        stroke: transparent;
        stroke-dasharray: 794;
        stroke-dashoffset: 793;
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
      stroke: #888;
      stroke-dasharray: 794;
      stroke-dashoffset: 793;
    }
    50% {
      stroke: #bbb;
    }
    100% {
      stroke-dashoffset: 2384;
      stroke: transparent;
    }
  }
`;
// stroke-dashoffset: 2660px;

const Slideshow = props => {
  return (
    <SlideshowFrame className="slideshow-frame">
      <div className="image-container">
        <svg id="frame-path" viewBox="0 0 200 200" preserveAspectRatio="none">
          <path id="display-frame-edge" d="M1.5 199h199V1H1.5v199" />
        </svg>
        <img src={props.currentSlide.url} alt="" />
        <div className="shad-layer" />
      </div>
      <div className="reflected-div">
        <div className="shad-layer-reflect" />

        <svg className="reflected-image" viewBox="0 0 400 400" preserveAspectRatio="none">
          <defs>
            <linearGradient opacity="1" id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop stopColor="black" offset="0" stopOpacity="1" />
              <stop stopColor="white" stopOpacity="0" offset="1" />
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

        <svg id="reflected-frame" viewBox="0 0 200 200" preserveAspectRatio="none">
          <path id="frame-path-reflected" fill="none" stroke="#000" stroke-width="2" d="M1.5 199h199V1H1.5v199" />
        </svg>
      </div>
    </SlideshowFrame>
  );
};

export default Slideshow;
