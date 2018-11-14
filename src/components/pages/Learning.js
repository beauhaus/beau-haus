import React, { Component } from 'react';
import styled from 'styled-components';

import ShortTree from '../scene/trees/ShortTree';
import MediumTree from '../scene/trees/MediumTree';
import TallTree from '../scene/trees/TallTree';
import WaterBg from '../scene/water/WaterBg';
import WaterBody from '../scene/water/WaterBody';
import Shore from '../scene/water/Shore';
import MuteBtn from '../scene/MuteBtn';
import LogoTheme from '../scene/LogoTheme';
import PageBanner from './LearningComps/LearningPageBanner';

const LearningPageCompDiv = styled.div`
  background: fuchsia;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #fff;
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: 20vh 60vh 20vh;
  a,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: #fff;
    font-weight: 100;
  }
  a:hover {
    text-shadow: -2px 2px 0px black;
    color: #a0e9fc;
  }
  
  & > .grid-ctr {
    padding: 2%;
    grid-column: 2;
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    font-family: "Montserrat", Tahoma, Geneva, Verdana, sans-serif;
    text-align: right;
    h1 {
      font-size: 2.5rem;
      span {
        font-style: italic;
        font-size: 1.5rem;
        font-weight: 400;
      }
    }
    & > .ctr-row-top {
      grid-column: 1/4;
      grid-row: 1;
    }
    & > .ctr-row-mid {
      text-align: left;
      grid-column: 1/4;
      grid-row: 2;
    }
    & > .ctr-row-bot {
      grid-column: 1/4;
      grid-row: 3;
    }
  }
`;

class Learning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      profile: props.pageStyles
    };

   }

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles;

    return (
      <LearningPageCompDiv className="page learning-container" style={pageStyles}>
      <PageBanner themeFill={fill} />
        <div className="grid-ctr">
          <div className="ctr-row-top">
          <h1><span>Studying:</span> <br/>SXYWU's <a href="https://frontendmasters.com/courses/d3-js-react/">Data Vis for React Devs</a> </h1>
            <p className="q1">A comprehensive and comprensible walkthrough of D3.js–Its powers and proper application as a complement to React.</p>
          </div>
          <div className="ctr-row-mid">
          <h1><span>Re-Doing:</span> <br/>Brian Holt's <a href="https://frontendmasters.com/courses/complete-react-v4/">Complete Intro to React IV</a></h1>
            <p className="q1">Brian's Holt's yearly walkthrough of react–this time, using the context API, Portals and an alternative tool for Webpack, Parcel.</p>          
          </div>
          <div className="ctr-row-bot">
          <h1><span>Reading:</span> <br/> This excellent site: <a href="https://svgjs.com/docs/2.7/">SVGJS.com</a></h1>
            <p className="q1">An interesting site/project that is updated with reasonable frequency providing exercises and tutorials on SVG and it's peculiarities.</p>
          </div>
        </div>
        <WaterBg {...water} />
        <WaterBody />
        <Shore />
        <LogoTheme themeFill={fill} />
        </LearningPageCompDiv>
      );
    }
  }


export default Learning;
