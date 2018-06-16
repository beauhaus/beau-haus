import React, { Component } from 'react';
import styled from 'styled-components';

import ProgressGauge from './ProgressGauge';
import NumberDisplay from './NumberDisplay';

const SlideshowUIWrapper = styled.div`
  grid-row: 1/9;
  grid-column: 1/14;
  text-align: justify;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 1.5rem;
  & > .number-display-grid {
    grid-column: 1/9;
    grid-row: 1/9;
    margin-bottom: 0.5rem;
    position: relative;
    opacity: 0;
    animation: fadeIn 1s 1s ease-in-out forwards;
  }
  
  & > .progress-grid {
    grid-column: 9/12;
    grid-row: 4/9;
    opacity: 0;
    animation: fadeIn 1s .5s ease-in-out forwards;
    margin: 1rem;
  }
`;
class SlideshowUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.current,
      total: props.total
    };
  }
  render() {
    return (
      <SlideshowUIWrapper className="slideshow-ui-wrapper">
        <div className="progress-grid">
          <ProgressGauge {...this.props} />
        </div>
        <div className="number-display-grid">
          <NumberDisplay {...this.props} />
        </div>
      </SlideshowUIWrapper>
    );
  }
}

export default SlideshowUI;

// <div className="play-btn-grid" onClick={this.props.stepFwd}>
// <CycleButton />
// </div>
