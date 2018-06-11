import React, { Component } from 'react';
import styled from 'styled-components';

import ProgressGauge from './ProgressGauge';
import NumberDisplay from './NumberDisplay';
import CycleButton from './CycleButton';

const SlideshowUIWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(8, 1fr);

 

  & > .meta-data-3x3 {
    grid-column: 9/14;
    grid-row: 6/9;
    position: relative;
    opacity: 0;
    transform: translate(-2px, 3px) rotate(2deg);
    animation: fadeIn 0.5s 1.25s ease-in-out forwards;
    padding: 0;
  }

  & .meta-data-5x5 {
    transform: translate(3px, -4px) rotate(-1deg);
    grid-column: 9/14;
    grid-row: 1/6;
    opacity: 0;
    animation: fadeIn 0.5s 1.25s ease-in-out forwards;
    box-shadow: -3px 3px 2px 0px rgba(0, 0, 0, 1);
    
  }
  & > .meta-data-8x8 {
    position: relative;
    transform: translate(-2px, 3px) rotate(1deg);
    grid-column: 1/9;
    grid-row: 1/9;
    box-shadow: 0px 4px 3px -2px rgba(0, 0, 0, 0.5);
    background: hsl(0, 0%, 61.5%);
  }
`;
class SlideshowUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: 'holder',
      current: props.current,
      total: props.total
    };
    // console.log('props>slideshowUI props: ', props);
  }
  render() {
    return (
      <SlideshowUIWrapper className="slideshow-ui">
        <div className="meta-data-3x3">
          <ProgressGauge {...this.props} />
        </div>
        <div className="meta-data-5x5" onClick={this.props.stepFwd}>
          <CycleButton />
        </div>
        <div className="meta-data-8x8">
          <NumberDisplay {...this.props} />
        </div>
      </SlideshowUIWrapper>
    );
  }
}

export default SlideshowUI;

/*



*/
