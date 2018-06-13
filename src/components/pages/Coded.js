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

import PageBanner from './CodedComps/CodedPageBanner';
import SlidesData from '../../data/SlideShowData.json';
import SlideshowUI from './CodedComps/SlideshowUI';

import Slideshow from './CodedComps/Slideshow';
import ProjectLinks from './CodedComps/ProjectLinks';

const CodedPageCompDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: 20vw 60vw 20vw;
  grid-template-rows: 20vh 50vh 10vh 20vh;
  user-select: none;

  & > .grid-ctr-tall {
    grid-column: 2;
    grid-row: 2/-1;
    display: grid;
    grid-template-columns: repeat(34, 1fr);
    grid-template-rows: repeat(21, 1fr) 15vh 15vh;
  }

  & .grid-section-left {
    grid-column: 1/14;
    grid-row: 1/22;
    display: grid;
    grid-template-columns: repeat(13, 1fr);
    grid-template-rows: repeat(21, 1fr);

    & > .grid-slideshowUI {
      grid-column: 1/14;
      grid-row: 1/9;
      display: grid;
      grid-template-columns: repeat(13, 1fr);
      grid-template-rows: repeat(8, 1fr);
    }

    & > .grid-description {
      grid-column: 1/-1;
      grid-row: 9/-1;
      opacity: 0;
      animation: fadeIn 5s 1.75s ease-in-out forwards;
      text-align: justify;
      margin: .5rem;
      margin-left: .2rem;
      padding: 2%;
      background: #7a7a7a;
      & h3 {
        text-align: center;
        margin-top: 1vh;
        font-size: 2.8rem;
        font-weight: 300;
      }
      & p {
        margin-top: 1.8rem;
        line-height: 2.4vh;
        font-size: 1vw;
        color: #ddd;
        font-weight: 300;
      }
    }
  }

  & .grid-section-right {
    border: 1px solid navy;
    grid-column: 14/-1;
    grid-row: 1/22;
    background: rgba(302, 302, 23, 1);
  }

  & .grid-section-bot {
    border: 1px solid navy;
    grid-column: 1/-1;
    grid-row: 23;
    background: lightblue;
  }

  /* 
    
      & .desc-container {
        grid-column: 1/14;
        grid-row: 9/22;
        text-align: justify;
        background-color: hsl(0, 0%, 80%);
      }

      & > .slideshow-container-tall-21x21 {
        grid-column: 14/35;
        grid-row: 1/-1;
        display: grid;
        grid-template-columns: repeat(21, 1fr);
        grid-template-rows: repeat(21, 1fr) 20vh;
        position: relative;
      }
    }
  }
  */

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  & #btn-mute {
    z-index: 50;
    fill: maroon;
  }
`;

class Coded extends Component {
  constructor(props) {
    super(props);
    const { slides } = SlidesData;
    this.state = {
      slides,
      profile: props.pageStyles,
      total: slides.length,
      current: 0,
      slidesEngage: false
    };
    this.onStepFwdHandler = this.onStepFwdHandler.bind(this);
  }
  componentDidMount() {}
  onStepFwdHandler() {
    this.setState({
      current: this.state.current + 1 === this.state.total ? 0 : this.state.current + 1,
      slidesEngage: true
    });
  }
  componentWillUnmount() {}

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles;
    const currentSlide = this.state.slides[this.state.current];
    const { proj_icon, proj_number, proj_title, proj_tech, proj_desc, proj_links } = currentSlide;
    return (
      <CodedPageCompDiv className="page coded-container" style={pageStyles}>
        <PageBanner fill={fill} />
        <div className="grid-ctr-tall">
          <section className="grid-section-left">
            <div className="grid-slideshowUI">
              <SlideshowUI stepFwd={this.onStepFwdHandler} current={this.state.current} total={this.state.total} />
            </div>

            <div className="grid-description fader">
              <h3 className="text-copy">{proj_title}</h3>
              <p className="text-copy">{proj_desc}</p>
            </div>
          </section>

          <section className="grid-section-right">
            <div className="slideshow-container-tall-21x21">
              {/*
            <Slideshow currentSlide={this.state.slides[this.state.current]}  />
            <ProjectLinks links={proj_links} />
          */}
            </div>
          </section>
          <section className="grid-section-bot" />
        </div>

        <Shore />
        <MuteBtn />
        <LogoTheme themeFill={fill} />
      </CodedPageCompDiv>
    );
  }
}

export default Coded;

/*
  <WaterBg {...water} />
  <WaterBody />
    <ShortTree db={tree.short} />
    <MediumTree db={tree.medium} />
    <TallTree db={tree.tall} />
  */
