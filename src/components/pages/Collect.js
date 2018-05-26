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

const CollectPageCompDiv = styled.div`
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
  color: #fff;
  display: grid;
  grid-template-columns: 25vw 50vw 25vw;
  grid-template-rows: 20vh 60vh 20vh;
  z-index: 1;
  & > .grid-ctr {
    grid-column: 2;
    grid-row: 2;
    z-index: 20;
    border: 2px solid navy;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);

    & > .ctr-row-top {
      grid-column: 1/4;
      grid-row: 1;
      border: 2px solid green;
    }
    & > .ctr-row-mid {
      grid-column: 1/4;
      grid-row: 2;
      border: 2px solid yellow;
    }
    & > .ctr-row-bot {
      grid-column: 1/4;
      grid-row: 3;
      border: 2px solid orangered;
    }
  }
`;

class Collect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      profile: props.pageStyles
    };

    // console.log("props>Collect: ", props);
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
      <CollectPageCompDiv className="page collect-container" style={pageStyles}>
        <div className="grid-ctr">
          <div className="ctr-row-top">
            <p className="q1">Learn fast and fix things.</p>
          </div>
          <div className="ctr-row-mid">
            <p className="q2">Learn fast and fix things.</p>
          </div>
          <div className="ctr-row-bot">
            <p className="q3">Learn fast and fix things.</p>
          </div>
        </div>
        <WaterBg {...water} />
        <WaterBody />
        <Shore />
        <MediumTree db={tree.medium} />
        <TallTree db={tree.tall} />
        <ShortTree db={tree.short} />
        <MuteBtn />
        <LogoTheme themeFill={fill} />
      </CollectPageCompDiv>
    );
  }
}

export default Collect;
