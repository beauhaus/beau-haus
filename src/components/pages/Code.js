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

const CodePageCompDiv = styled.div`
  background: fuchsia;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  font-family: 'Lato', Tahoma, Geneva, Verdana, sans-serif;
  overflow: hidden;
  display: grid;
  grid-template-columns: 26vw repeat(3, 1fr) 26vw;
  grid-template-rows: 20vh repeat(4, 1fr) 20vh;
  z-index: 1;
  & > .grid-ctr {
    grid-column: 2/5;
    grid-row: 2/6;
    z-index: 20;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    border: 1px solid brown;
    & > div {
      border: 1px dashed teal;
    }
  }
`;

class Code extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      profile: props.pageStyles
    };

    // console.log("props>Code: ", props);
  }
  // componentDidMount() {
  //   this.props.location.state
  //     ? this.setState({ profile: this.props.location.state.profile })
  //     : this.setState({ profile: InitialLoad.profile });
  // }

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles.fill;

    return (
      <CodePageCompDiv className="page code-container" style={pageStyles}>
        <div className="grid-ctr">
          <div className="one">one</div>
          <div className="two">two</div>
          <div className="three">three</div>
          <div className="four">four</div>
          <div className="five">five</div>
          <div className="six">six</div>
          <div className="seven">seven</div>
          <div className="eight">eight</div>
          <div className="nine">nine</div>
          <div className="ten">twen</div>
          <div className="eleven">eleven</div>
          <div className="twelve">twelve</div>
        </div>
        <WaterBg {...water} />
        <WaterBody />
        <Shore />
        <MediumTree db={tree.medium} />
        <TallTree db={tree.tall} />
        <ShortTree db={tree.short} />
        <MuteBtn />
        <LogoTheme themeFill={fill} />
      </CodePageCompDiv>
    );
  }
}

export default Code;
/*

        <div className="page-code">
          <img id="temp-img" src="./img/madcoding.gif" alt="woman typing on computer wagging her tongue." />

          <h1>
            <span>Under Construction...</span>
            <br />
            <br />
            Rome wasn't built in a day.<br />
            Neither was this site.
          </h1>
          <p>Your patience is appreciated.</p>
        </div>

        */
