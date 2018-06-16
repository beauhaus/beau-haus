import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkDiv = styled.div`
  position: relative;
  z-index: 5;
  width: 8vw;
  margin-top: 4%;
  height: 3rem;
  text-align: left;
  opacity: 0;
  /*
  .link-container {
    font-family: "Trebuchet MS", sans-serif;
    font-weight: lighter;
    font-size: 30rem;
    z-index: 10;
    text-decoration: none;
  }
  & > a:link, a:hover, a:visited, a:active {
    text-shadow: none;
    &:hover {
      color: skyblue;
      text-shadow: none;
    }
  }
DO ANY OF THESE RULES TAKE EFFECT?
  */
 
`;
const NavLink = props => {
  return (
    <NavLinkDiv className="link-container">
      <Link className="link-component" {...props} />
    </NavLinkDiv>
  );
};
export default NavLink;
