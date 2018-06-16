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
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: justify;
    padding: 2%;
    background: #7a7a7a;
    opacity: 0;
    animation: fadeIn 1.5s .8s ease-in-out forwards;
    text-align: justify;
    & > h3 {
      text-align: center;
      margin-top: 1vh;
      font-size: 2.8rem;
      font-weight: 300;
    }
    & > p {
      margin-top: 1.8rem;
      line-height: 2.8vh;
      font-size: 1vw;
      color: #ddd;
      font-weight: 300;
      
    }
  }
  .grid-slideshow-container {
    grid-row: 1/22;
    grid-column: 14/-1;
    position: relative;
  }
`;
const ShowCaseGrid = props => {
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