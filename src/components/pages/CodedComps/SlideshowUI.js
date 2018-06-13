import React, { Component } from 'react';
import styled from 'styled-components';

import ProgressGauge from './ProgressGauge';
import NumberDisplay from './NumberDisplay';
import CycleButton from './CycleButton';

const SlideshowUIWrapper = styled.div`
  grid-row: 1/-1;
  grid-column: 1/-1;
  text-align: justify;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(8, 1fr);

  & > .progress-grid {
    grid-column: 9/12;
    grid-row: 4/9;
    position: relative;
    opacity: 0;
    animation: fadeIn 0.5s 1.25s ease-in-out forwards;
  }

  & .play-btn-grid {
    transform: translate(3px, -4px) rotate(0deg);
    grid-column: 9/14;
    grid-row: 1/6;
    opacity: 0;
    animation: fadeIn 0.5s 1.25s ease-in-out forwards;
    position: relative;
  }

  & > .number-display-grid {
    grid-column: 1/9;
    grid-row: 1/9;
    position: relative;
    margin-bottom: .5rem;
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
  }
  render() {
    return (
      <SlideshowUIWrapper className="slideshow-ui">
        <div className="progress-grid">
          <ProgressGauge {...this.props} />
        </div>
        <div className="play-btn-grid" onClick={this.props.stepFwd}>
          <CycleButton />
        </div>
        <div className="number-display-grid">
          <NumberDisplay {...this.props} />
        </div>
      </SlideshowUIWrapper>
    );
  }
}

export default SlideshowUI;
