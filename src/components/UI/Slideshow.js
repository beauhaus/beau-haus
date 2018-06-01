import React, { Component, Children } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// import Slides from '../../data/SlideShowData.json';
// import Preview from './Preview';
// width="25vw" height="40vh"
// transform: scaleX(-1);
// transform: translateY(530px) scaleY(-1);
// filter: FlipV;
// transform: scaleX(-1);


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
  & > svg {
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
  & > svg {
    position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 20vh;
      stroke: yellow;
      stroke-width: 0px;
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
    console.log('props.slides>slideshow: ', slides);

    // const cards = slides.map(item => <image className="fadeIn" key={item.id} href={item.url} alt={item.alt} />);
    // <button onClick={this.showNext}>fwd</button>

    return (
      <SlideshowFrame className="slideshow-frame">
        <div className="photo-div">
          <svg id="display-img" viewBox="0 0 400 400" preserveAspectRatio="none">
            <image y="0" xlinkHref={slides[4].url} />
          </svg>
        </div>

        <div className="reflected-div">
          <svg viewBox="0 0 400 400" preserveAspectRatio="none">
            <defs>
              <linearGradient opacity="1" id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
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
                fill="grey"
                fill="url(#pattern1)"
              />
          </svg>
        </div>

      </SlideshowFrame>
    );
  }
}

export default Slideshow;

/*
fill="url(#pattern1)"

**************PREVIOUS************
<defs>

          <linearGradient opacity="1" id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop stopColor="black" offset=".1" />
            <stop stopColor="white" stopOpacity="1" offset="1" />
          </linearGradient>
          
          <mask id="mask1">
            <rect fill="url(#grad)" height="20vh" width="100%" y="40vh" />
          </mask>
          <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
            <image
              height="1"
              width="1"
              preserveAspectRatio="none"
              y="0"
              xlinkHref={slides[4].url}
            />
          </pattern>
        </defs>

        <g className="graphic" >
          <svg id="display-img"  viewBox="0 0 400 400" preserveAspectRatio="none">
            <image  y="0" xlinkHref={slides[4].url} />
          </svg>
          <rect className="reflected"
          mask="url(#mask1)"
          width="100%"
          height="20vh"
          y="40vh"
          fill="url(#pattern1)"/>
        </g>

*/
