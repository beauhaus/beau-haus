import React, { Component } from 'react';
import styled from 'styled-components';

import Moon from './Moon';

const SlideshowUIWrapper = styled.div`
  grid-row: 1/22;
  grid-column: 1/14;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 0rem; /* from 1.5rem*/
  position: relative;
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
        <Moon {...this.props} />
      </SlideshowUIWrapper>
    );
  }
}
// <div className="number-display-grid">
//   <NumberDisplay {...this.props} />
// </div>

export default SlideshowUI;

// <div className="play-btn-grid" onClick={this.props.stepFwd}>
// <CycleButton />
// </div>
