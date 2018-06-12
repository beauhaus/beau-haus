import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkDiv = styled.div`
  position: relative;
  border: 1px solid palegreen;
  z-index: 5;
  width: 8vw;
  margin-top: 4%;
  height: 30px;
  
  background: #463d3d;
  text-align: left;
  & > a {
    font-family: "Trebuchet MS", sans-serif;
    font-weight: lighter;
    font-size: 30px;
    z-index: 10;
    color: white;
    text-decoration: none;
  }
  & > a:link, a:hover, a:visited, a:active {
    color: white;
  }
  & >  a:hover {
    color: skyblue;
  }
`;
const NavLink = props => {
  return (
    <NavLinkDiv className="link-container">
      <Link className="link-component" {...props} />
    </NavLinkDiv>
  );
};
export default NavLink;
