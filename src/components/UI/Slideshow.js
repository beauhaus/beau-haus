import React, { Component, Children } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// import Slides from '../../data/SlideShowData.json';
// import Preview from './Preview';

const SlideshowFrame = styled.svg`
  grid-row: 3/9;
  grid-column: 2;
    width: 100%;
    height: 100%;
    & rect {
      width: 25vw;
    }
  }
  @media screen and (max-width : 768px) {    // tablet query
    grid-column: 1/3;
    & > .rectangles {
      width: 50vw;
    }
 }
`;

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
    //   <linearGradient opacity=".2" id="grad" x1="0%" y1="10%" x2="10%" y2="100%">
    //   <stop stopColor="transparent" offset="0" />
    //   <stop stopColor="white" stopOpacity="1" offset=".9" />
    // </linearGradient>
    <mask id="mask1">
      <polygon fill="url(#grad)" points="1623 993 841 993 850.5 880 1613.5 880" />
    </mask>;
    // <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
    //   <image
    //     height="1"
    //     width="1"
    //     preserveAspectRatio="none"
    //     href="https://dl.dropbox.com/s/f6vtd4o0vxx1378/ostrich.jpg?dl=0"
    //   />
    // </pattern>
    return (
      // viewBox="0 0 720 640"
      <SlideshowFrame id="display" preserveAspectRatio="none">
        <defs>
          <linearGradient opacity=".2" id="grad" x1="0%" y1="10%" x2="10%" y2="100%">
            <stop stopColor="transparent" offset="0" />
            <stop stopColor="white" stopOpacity="1" offset=".9" />
          </linearGradient>
          <mask id="mask1">
            <rect fill="url(#grad)" height="10vh" y="40vh"/>
          </mask>
          <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
          <image
          height="1"
          width="1"
          preserveAspectRatio="none"
          href="https://dl.dropbox.com/s/f6vtd4o0vxx1378/ostrich.jpg?dl=0"
        />
          </pattern>
        </defs>

        <g className="rectangles">
          <rect height="40vh" y="0" fill="#0F0" />
          <rect height="10vh" y="40vh" fill="#29ABE2" />
        </g>
      </SlideshowFrame>
    );
  }
}

export default Slideshow;

/*
fill="url(#pattern1)"


/****revisited 
 * 
 * <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 640">
  <rect width="720" height="539" y=".2" fill="#0F0"/>
  <rect width="720" height="104" y="536.2" fill="#29ABE2"/>
</svg>



**************PREVIOUS************

<defs>
  <linearGradient opacity=".2" id="grad" x1="0%" y1="10%" x2="10%" y2="100%">
    <stop stopColor="transparent" offset="0" />
    <stop stopColor="white" stopOpacity="1" offset=".9" />
  </linearGradient>
  <mask id="mask1">
    <polygon fill="url(#grad)" points="1623 993 841 993 850.5 880 1613.5 880" />
  </mask>
  <pattern id="pattern1" height="100%" width="100%" patternContentUnits="objectBoundingBox">
    
  </pattern>
</defs>

<g id="display">
  <rect id="view" fill="black" width="784" height="441" x="839.5" y="439" fill="url(#pattern1)" />
  <polygon
    id="reflection"
    mask="url(#mask1)"
    fill="url(#pattern1)"
    points="1623 993 841 993 850.5 880 1613.5 880"
  />
</g>

*/
