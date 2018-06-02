import React, { Component, Children } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// import Slides from '../../data/SlideShowData.json';
/*
#door {
  stroke: transparent;
  stroke-dasharray: 1260px;
  stroke-dashoffset: 0px;
  animation: 1s 3s dash ease-out forwards;
}

*/

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
    & path#display-frame-edge {
      grid-column: 1;
      grid-row: 1/3;
      width: 100%;
      stroke: white;
      stroke-width: 1;
      fill: none;
      stroke: transparent;
      stroke-dasharray: 1260px;
      stroke-dashoffset: 0px;
      animation: 1s 3s dash ease-out forwards;
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
    & > .reflected-svg {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20vh;
      stroke-width: 0px;
    }
  }
  @keyframes dash {
    0% {
      stroke: #fff;
      stroke-dashoffset: 1260px;
    }
    100% {
      stroke: #fff;
      stroke-dashoffset: 2520px;
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
*/
class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      current: 0
    };
    this.showNext = this.showNext.bind(this);
    // this.slides = Slides.slides;
  }
  componentDidMount() {
    this.setState({
      total: 10
    });
  }
  showNext() {
    const { total, current } = this.state;
    console.log('NEXT!');
    this.setState({
      current: current + 1 === total ? 0 : current + 1
    });
  }

  render() {
    const { slides } = this.props.slides;
    // console.log('props.slides>slideshow: ', slides);

    // const cards = slides.map(item => <image className="fadeIn" key={item.id} href={item.url} alt={item.alt} />);
    // <button onClick={this.showNext}>fwd</button>

    return (
      <SlideshowFrame className="slideshow-frame">
        <div className="photo-div">
          <svg id="display-img" viewBox="0 0 400 400" preserveAspectRatio="none">
            <filter id="inset-shadow-img" x="-100%" y="-100%" width="300%" height="200%">
              <feComponentTransfer in="SourceAlpha">
                <feFuncA type="table" tableValues="1 0" />
              </feComponentTransfer>
              <feGaussianBlur stdDeviation="8" />
              <feOffset dx="-18" dy="18" result="offsetblur" />
              <feFlood floodColor="#1c0000" result="color" />
              <feComposite in2="offsetblur" operator="in" />
              <feComposite in2="SourceAlpha" operator="in" />
              <feMerge>
                <feMergeNode in="SourceGraphic" />
                <feMergeNode />
              </feMerge>
            </filter>
            <image y="0" filter="url(#inset-shadow-img" xlinkHref={slides[4].url} />
            <path id="display-frame-edge"   d="M399 400V1H1v399" />
          </svg>
        </div>

        <div className="reflected-div">
          <svg className="reflected-svg" viewBox="0 0 400 400" preserveAspectRatio="none">
            <defs>
              <linearGradient opacity="1" id="grad" x1="0%" y1="0%" x2="0%" y2="200%">
                <stop stopColor="black" offset=".1" />
                <stop stopColor="white" stopOpacity="1" offset="1" />
              </linearGradient>
              <mask id="mask1">
                <rect fill="url(#grad)" height="100%" width="100%" y="0vh" />
              </mask>
              <pattern id="pattern1" height="1" width="1" patternContentUnits="objectBoundingBox">
                <image height="1" width="1" preserveAspectRatio="none" y="0vh" xlinkHref={slides[4].url} />
              </pattern>
            </defs>
            <rect
              id="reflected-rect"
              mask="url(#mask1)"
              width="100%"
              height="100%"
              y="0"
              fill="url(#pattern1)"
              filter="url(#inset-shadow-img"
            />
          </svg>
          </div>
          </SlideshowFrame>
        );
      }
    }
    
              // <svg className="display-frame-edge">
                
              // </svg>

export default Slideshow;

/*

**************FAKING FILTER TRANSITION************
https://codepen.io/beauhaus/pen/PaPEvg?editors=1000


*/
