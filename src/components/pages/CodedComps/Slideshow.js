import React, { Component, Children } from 'react';

import styled from 'styled-components';
import InfoLink from './InfoLink';

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
  grid-template-rows: 50vh 15vh 15vh;
  z-index: 30;
  /* 
  margin: 1.5rem; FIXME: adjust later 
  */
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 1.5rem;
  .grid-image-view {
    grid-column: 1;
    grid-row: 1;
    position: relative;
    & > img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      animation: 2s 3s fadeIn linear forwards;
    }
    & > #frame-path {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      stroke-width: 1;
      fill: none;
      stroke: white;
      stroke-dasharray: 794;
      stroke-dashoffset: 793;
      animation: 500ms 1s dash linear forwards;
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
      animation: emboss 3s 2s ease-out forwards;
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
      animation: emboss 3s 2s ease-out forwards;
    }
    & > svg.reflected-image {
      height: 100%;
      width: 100%;
      opacity: 0;
      animation: 2s 3s fadeIn linear forwards;
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
        stroke-width: 2;
        fill: none;
        stroke: transparent;
        stroke-dasharray: 794;
        stroke-dashoffset: 793;
        animation: 500ms 1s dash linear forwards;
      }
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
  @keyframes emboss {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
//FIXME: may be a problem with shad-layer not positioning inside of showcasegrid
const Slideshow = props => {
  return (
    <SlideshowFrame className="slideshow-frame">
      <div className="grid-image-view">
        <img src={props.currentSlide.url} alt={props.currentSlide.alt} />
        <svg id="frame-path" viewBox="0 0 200.5 200" preserveAspectRatio="none">
          <path d="M1.5 199h199V1H1.5v199" />
        </svg>
        <div className="shad-layer img-infolink-container" />
        {props.currentSlide.proj_tech[0] ? <InfoLink {...props} /> : ''}
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
              <rect fill="url(#grad)" height="100%" width="100%" y="0" />
            </mask>
            <pattern id="pattern1" height="1" width="1" patternContentUnits="objectBoundingBox">
              <image height="1" width="1" preserveAspectRatio="none" y="0" xlinkHref={props.currentSlide.url} />
            </pattern>
          </defs>
          <rect id="reflected-rect" mask="url(#mask1)" width="100%" height="100%" y="0" fill="url(#pattern1)" />
        </svg>
        <svg id="reflected-frame" viewBox="0 0 201 200" preserveAspectRatio="none">
          <path id="frame-path-reflected" fill="none" stroke="#000" strokeWidth="2" d="M1.5 199h199V1H1.5v199" />
        </svg>
        {/*
      */}
      </div>
    </SlideshowFrame>
  );
};

export default Slideshow;
