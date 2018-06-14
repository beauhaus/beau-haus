import React, { Component } from 'react';
import styled from 'styled-components';

import SlideshowUI from './SlideshowUI';
import Slideshow from './Slideshow';

const ShowCaseGridWrapper = styled.div`
  grid-row: 1/-1;
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(34, 1fr);
  grid-template-rows: repeat(21, 1fr) 15vh 15vh;
  position: relative;
  .grid-description {
    grid-row: 9/22;
    grid-column: 1/14;
  }
  .grid-slideshow-container {
    grid-row: 1/22;
    grid-column: 14/-1;
    position: relative;
  }
`;
const ShowCaseGrid = props => {
  // console.log('p>shCase: ', props);
  const btnFill = 'hsl(0, 0%, 38.5%)';
  const currentSlide = props.slides[props.current];
  const { proj_icon, proj_title, proj_tech, proj_desc, proj_links } = currentSlide;

  return (
    <ShowCaseGridWrapper id="triggered-slides">
      <SlideshowUI current={props.current} total={props.total} engage={props.slidesEngage} />
      <div className="grid-description fader">
        <h3 className="text-copy">{proj_title}</h3>
        <p className="text-copy">{proj_desc}</p>
      </div>
      <section className="grid-slideshow-container">
        <Slideshow currentSlide={currentSlide} />
      </section>
    </ShowCaseGridWrapper>
  );
};

export default ShowCaseGrid;