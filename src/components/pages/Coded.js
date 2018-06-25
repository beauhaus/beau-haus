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

import SlidesData from '../../data/SlideShowData.json';
import PageBanner from './CodedComps/CodedPageBanner';
import CodedScene from './CodedComps/CodedScene';

import CycleButton from './CodedComps/CycleButton';
import ShowCaseGrid from './CodedComps/ShowCaseGrid';

const CodedPageCompDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: 18vw 64vw 18vw;
  grid-template-rows: 20vh 50vh 15vh 15vh;
  user-select: none;
  & > .grid-ctr-tall {
    grid-column: 2;
    grid-row: 2/-1;
    display: grid;
    grid-template-columns: repeat(34, 1fr);
    grid-template-rows: repeat(21, 1fr) 15vh 15vh;
  }
  & #cycle-btn-container {
    grid-column: 1/14;
    grid-row: 1/22;
    position: relative;
    z-index: 30;
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
    const {total, current, slides}= this.state;
    return (
      <CodedPageCompDiv className="page coded-container" style={pageStyles}>
      <PageBanner themeFill={fill} />
        <div className="grid-ctr-tall">
          <div id="cycle-btn-container" onClick={() => this.onStepFwdHandler()}>
            <CycleButton />
          </div>
          {this.state.slidesEngage && <ShowCaseGrid {...this.props} current={current} slides={slides} total={total}/>}
        </div>
          <WaterBg {...water} />
          <WaterBody />
          <MuteBtn />
          <LogoTheme themeFill={fill} />
          <Shore />
        <CodedScene/>
        </CodedPageCompDiv>
      );
    }
  }

export default Coded;

/*
    <ShortTree db={tree.short} />
    <MediumTree db={tree.medium} />
    <TallTree db={tree.tall} />
  */
