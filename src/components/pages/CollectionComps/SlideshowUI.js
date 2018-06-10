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

  & > .meta-data-1x1a {
    grid-column: 10/11;
    grid-row: 6/7;
    background-color: hsl(0, 0%, 7.7%);
    opacity: 0;
    animation: fadeIn 0.5s 0.5s ease-in-out forwards;
    transform: translateZ(1px) rotate(-2deg);
  }
  & > .meta-data-1x1b {
    transform: translateZ(1px) rotate(8deg);
    grid-column: 9/10;
    grid-row: 6/7;
    background-color: hsl(0, 0%, 7.7%);
    opacity: 0;
    animation: fadeIn 0.5s 0.75s ease-in-out forwards;
  }
  & > .meta-data-2x2 {
    transform: translateZ(1px) rotate(4deg);
    grid-column: 9/11;
    grid-row: 7/9;
    background-color: hsl(0, 0%, 15.4%);
    opacity: 0;
    animation: fadeIn 0.5s 1s ease-in-out forwards;
  }
  & > .meta-data-3x3 {
    transform: translateZ(1px) rotate(8deg);
    svg {
      width: 100%;
      height: 100%;
      & > #gauge-needle {
        transform-origin: 50% 50%;
        stroke-width: 4px;
        stroke: #aaa;
      }
    }

    grid-column: 11/14;
    grid-row: 6/9;
    position: relative;
    /*
    background-color: hsl(0, 0%, 23.1%);
    */
    opacity: 0;
    animation: fadeIn 0.5s 1.25s ease-in-out forwards;
  }

  & .meta-data-5x5 {
    transform: translate(3px, -4px) rotate(-2deg);
    grid-column: 9/14;
    grid-row: 1/6;
    padding: 4%;
    font-size: 1vw;
    letter-spacing: -1px;
    background-color: hsl(0, 0%, 38.5%);
    box-shadow: -3px 3px 2px 0px rgba(0, 0, 0, 0.9);
    opacity: 0;
    animation: fadeIn 0.5s 1.5s ease-in-out forwards;

    &:hover {
      cursor: pointer;
    }

    & #play-arrow {
      width: 100%;
      height: 100%;
    }
  }
  & > .meta-data-8x8 {
    position: relative;
    transform: translate(-2px, 3px) rotate(1deg);
    grid-column: 1/9;
    grid-row: 1/9;
    box-shadow: 0px 4px 3px -2px rgba(0, 0, 0, 0.5);
    background: hsl(0, 0%, 61.5%);
  }
  & > .fib {
    margin: 2px;
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
    console.log('props>slideshowUI props: ', props);
  }
  render() {
    // <ProgressGauge total={this.state.total} count={this.state.projNum} />
    // onClick={this.props.click}
    return (
      <SlideshowUIWrapper className="slideshow-ui">
        <div className="meta-data-1x1a fib">.</div>
        <div className="meta-data-1x1b fib">.</div>
        <div className="meta-data-2x2 fib">.</div>
        <div className="meta-data-3x3 fib">
          <ProgressGauge {...this.props} />
        </div>
        <div className="meta-data-5x5 fib" onClick={this.props.stepFwd}>
          <CycleButton />
        </div>
        <div className="meta-data-8x8 fib">
          <NumberDisplay {...this.props} />
        </div>
      </SlideshowUIWrapper>
    );
  }
}

export default SlideshowUI;

/*



*/
