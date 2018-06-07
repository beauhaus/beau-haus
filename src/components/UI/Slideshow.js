import React, { Component, Children } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const SlideshowFrame = styled.div`
  grid-column: 1;
  grid-row: 1/3;
  display: grid;
  opacity: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 45vh 20vh;

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
    & > .shad-layer::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      box-shadow: inset -10px 10px 25px rgba(0, 0, 0, 0.5);
      opacity: 0;
      
      animation: 1.5s 3.4s emboss ease-out forwards;
      
    }
    & path#display-frame-edge {
      grid-column: 1;
      grid-row: 1/3;
      width: 100%;
      stroke: white;
      stroke-width: 2;
      fill: none;
      stroke: transparent;
      stroke-dasharray: 1260px;
      stroke-dashoffset: 0px;
      animation: 2s 1.5s dash linear forwards;
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
  
    & > #display-img {
      width: 100%;
      height: 100%;
    }
  }

  & > .reflected-div {
    grid-row: 2;
    transform-origin: 50% 50%;
    position: relative;
    transform: scaleY(-1);
    filter: FlipV;
    & .shad-layer-reflect::after {
      position: absolute;
      opacity: 0;
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      box-shadow: inset -10px 10px 25px 0px rgba(0, 0, 0, 0.2);
      /* animation: 3s 10s emboss ease-out forwards; */
    }
    & .reflected-svg {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20vh;
      stroke-width: 0px;
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
/*
  @media screen and (max-width : 768px) {    // tablet query
    grid-column: 1/3;
    & > .rectangles {
      width: 50vw;
    }
 }
 <svg id="display-img" viewBox="0 0 400 400" preserveAspectRatio="none">
           <path id="display-frame-edge" d="M399 400V1H1v399" />
 </svg>

 */
const Slideshow = props => {
  // console.log("> slideshow: props: ", props);
  return (
    <SlideshowFrame className="slideshow-frame">
      <div className="photo-div">
        <img src={props.currentSlide.url} alt="" />
        <svg id="display-img" viewBox="0 0 400 400" preserveAspectRatio="none">
        <path id="display-frame-edge" d="M399 400V1H1v399" />
</svg>

        <div className="shad-layer" />
      </div>

      <div className="reflected-div">
        <div className="shad-layer-reflect" />

        <svg className="reflected-svg" viewBox="0 0 400 400" preserveAspectRatio="none">
          <defs>
            <linearGradient opacity="1" id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop stopColor="black" offset=".5" />
              <stop stopColor="white" stopOpacity="1" offset="1" />
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
    </SlideshowFrame>
  );
};


export default Slideshow;

/*

**************FAKING FILTER TRANSITION************
https://codepen.io/beauhaus/pen/PaPEvg?editors=1000


*/
