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

const CreatePageCompDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  .page-create {
    // color: red;
    // z-index: 20;
    position: relative;
    top: 0;
    font-size: 2em;
    width: 50vh;

    height: 70vh;
    margin-left: 30vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .page-create h1,
  p {
    font-weight: lighter;
    width: 100%;
    font-size: 0.8em;
    color: dimgray;
  }
  h1 span {
    font-style: italic;
    color: black;
  }
  #temp-img {
    top: 20vh;
    margin: 10vh auto 1vh auto;
    border: 2px solid skyblue;
    box-shadow: 4px 4px 10px 0px black;
    width: 100%;
  }
`;

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      profile: props.pageStyles
    };

    // console.log("props>Create: ", props);
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
      <CreatePageCompDiv className="page create-container" style={pageStyles}>
        <div className="page-create">
          <img id="temp-img" src="./img/madcoding.gif" alt="woman typing on computer wagging her tongue." />

          <h1>
            <span>Under Construction...</span>
            <br />
            <br />
            Rome wasn't built in a day.<br />
            Neither was this site.
          </h1>
          <p>Your patience is appreciated.</p>
        </div>{' '}
        <WaterBg {...water} />
        <WaterBody />
        <Shore />
        <MediumTree db={tree.medium} />
        <TallTree db={tree.tall} />
        <ShortTree db={tree.short} />
        <MuteBtn />
        <LogoTheme themeFill={fill} />
      </CreatePageCompDiv>
    );
  }
}

export default Create;
