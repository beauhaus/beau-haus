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

/***NOTES
 * There should be an H1 in the JSX
 */
const CreationPageCompDiv = styled.div`
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
  z-index: 1;
  & > div.page-banner-container {
    grid-column: 3;
    grid-row: 1/4;
    position: relative;
    & > img {
      /* svg */
      position: absolute;
      opacity: 1;
      bottom: 0;
      right: -2vw;
      width: 20vh;
      height: 100vh;
    }
  }
  hr {
    width: 70%;
    margin: 0 auto;
  }
  & > .grid-header {
    grid-column: 1/4;
    grid-row: 1;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(5, 4vh);
  }
  & > .grid-ctr {
    grid-column: 2;
    grid-row: 2;
    z-index: 20;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1fr 2px 1fr);
    opacity: 1; /* fixme: during testing this overrides app.css */
    & .creation-proj-desc {
      color: #333;
      padding: 2%;
      & h1 {
        font-weight: 300;
      }
      & h2 {
        margin: -2vh auto 1vh auto;
        font-weight: 300;
        font-size: 1.2em;
        font-family: 'Lato', sans-serif;
      }
      & p {
        margin: 1.5rem auto 0 auto;
        font-family: 'Lato', sans-serif;
        line-height: 2rem;
      }
      & ul {
        text-align: center;
      }
      & li {
        margin: 2vh 1vw;
        display: inline-block;
        color: black;
      }
    }
    .project-img {
      width: 100%;
      height: 100%;
      top: 4vh;
    }
    & > .ctr-row-top {
      grid-column: 1/4;
      grid-row: 1;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      & > .top-text {
        grid-column: 1/3;
        grid-row: 1;
        text-align: right;
      }
    }
    & > .horiz-rule {
      grid-column: 1/4;
      grid-row: 2;
      background: black;
    }
    & > .ctr-row-bot {
      grid-column: 1/4;
      grid-row: 3;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 1fr;
      & > .mid-text {
        text-align: left;
        grid-column: 2/4;
      }
      & > .bot-proj-img {
        position: relative;
        & > img {
          position: absolute;
          top: 0vh;
          left: 2vw;
          width: 12vw;
          height: 18vh;
        }
      }
    }
  }

  /* THIS IS TEMPORARY USED FOR UNDER CONSTRUCTION MESSAGE*/

  .under-construction {
    .page-creation h1,
    p {
      font-weight: 300;
      font-size: 1.8rem;
      color: black;
    }
    h2,
    h3,
    h4 {
      color: black;
    }
    #temp-img {
      top: 20vh;
      margin: 10vh auto 1vh auto;
      border: 1px solid skyblue;
      box-shadow: 4px 4px 10px 0px black;
      width: 70%;
    }
  }
`;

class Creation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      init: 'state',
      profile: props.pageStyles
    };

  }

  render() {
    const { pageStyles, tree, water } = this.props.profile;
    const { fill } = this.props.profile.pageStyles.fill;

    return (
      <CreationPageCompDiv className="page creation-container" style={pageStyles}>
        <div className="grid-header" />
        <div className="page-banner-container">
          <img src="./img/pagesimg/creationbanner.svg" alt="current creation" />
        </div>
        <div className="grid-ctr">
          <div className="ctr-row-top">
            <div className="creation-proj-desc top-text">
              <h1>Meet 'n' Eat</h1>
              <h2>App scheduling appointments for large teams and companies.</h2>
              <p>
                Schedules random, one-on-one dates so that, by the end of each cycle, all members will have met each
                other and will have met and shared a meal.
              </p>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>mongoDB</li>
              </ul>
            </div>

            <div className="top-proj-img project-img">
              <img src="./img/pagesimg/peckish-picker-icon.svg" alt="peckish picker icon" />
            </div>
          </div>
          <hr className="horiz-rule" />
          <div className="ctr-row-bot">
            <div className="bot-proj-img project-img">
              <img src="./img/pagesimg/codejournal-icon.png" alt="code journal icon" />
            </div>
            <div className="creation-proj-desc mid-text">
              <h1>Code Journal</h1>
              <h2>
                Large library of code, advice and tutorials. <br /><i>(Portage from Angular.js to React)</i>
              </h2>
              <p>This project is curently being ported from Angular.js to React into beau.haus/reflection.</p>
              <ul>
                <li>React.js</li>
                <li>node.js</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>
          <div className="ctr-row-bot" />
        </div>
        <LogoTheme themeFill={fill} />
      </CreationPageCompDiv>
    );
  }
}

export default Creation;
// <WaterBg {...water} />
// <WaterBody />
// <Shore />
// <MediumTree db={tree.medium} />
// <TallTree db={tree.tall} />
// <ShortTree db={tree.short} />
// <MuteBtn />

/*

*/
