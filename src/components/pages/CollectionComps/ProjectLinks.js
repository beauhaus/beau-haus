import React, { Component } from 'react';
import styled from 'styled-components';

const ProjectLinksWrapper = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1/-1;
  grid-row: 1/-1;
  font-family: 'Montserrat', 'Trebuchet MS', Arial, sans-serif;
  font-size: 4.3rem;
  font-weight: 100;
  position: relative;

  & > svg {
    fill: none;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 12;

    &#links-icon {
      top: -2.5vh;
      height: 12vh;
      opacity: 1;
    }
  }
  & #project-links {
    z-index: 13;
    width: 100%;
    height: 7vh;
    background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
    position: absolute;
    text-align: center;
    opacity: 0;
    &:hover {
      opacity: 1;
      transition: opacity 500ms ease-in-out;
    }
  }
  & ul {
    font-style: italic;
    font-weight: 300;
    text-align: left;
    line-height: 1.6rem;
    color: #bbb;
    width: 100%;
    text-align: center;
    padding: 3%;
    & > li {
      display: inline;
      font-size: 3rem;
      margin: 0 2vw;
    }
  }
  a,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: lemonchiffon;
    text-shadow: -1px 1px 2px #1c1e20;
    font-weight: 400;
  }
  a:hover {
    text-shadow: -2px 2px 2px black;
  }
  .isolate {
    isolation: isolate;
  }
`;

const ProjectLinks = props => {
  console.log('props>ProjLinks: ', props);
  console.log('props>ProjLinks: p.links[0] ', props.links[0]);
  props.links.map((item, idx) => console.log(item.url, item.text));
  return (
    <ProjectLinksWrapper>
      {props.links[0].url && (
        <svg id="links-icon" viewBox="0 0 1125 125">
          <defs>
            <linearGradient
              id="link-A"
              x1="-46.4902"
              x2="-46.4902"
              y1="10.8633"
              y2="48.9685"
              gradientTransform="matrix(.8522 -.8599 .6019 .5965 71.5618 3.2425)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#1b6066" />
              <stop offset=".9957" stopColor="#2ea8b3" />
            </linearGradient>
            <linearGradient
              id="link-B"
              x1="-22.207"
              x2="-22.207"
              y1="11.8828"
              y2="49.9861"
              gradientTransform="matrix(.8522 -.8599 .6019 .5965 71.5618 3.2425)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#948c5c" />
              <stop offset=".9957" stopColor="#fcee9c" />
            </linearGradient>
            <linearGradient
              id="link-C"
              x1="-46.4883"
              x2="-46.4883"
              y1="8.1455"
              y2="49.3842"
              gradientTransform="matrix(.8522 -.8599 .6019 .5965 71.5618 3.2425)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#1b6066" />
              <stop offset=".9957" stopColor="#2ea8b3" />
            </linearGradient>
          </defs>
          <g>
            <path
              fill="url(#link-A)"
              d="M82.7 29.8c6.1 5.7 5.7 15.3-.8 21.4L39.8 91.4c-6.5 6.2-16.7 6.6-22.7.9l-.3-.3c-6.1-5.7-5.7-15.3.8-21.4l42.1-40.1c6.5-6.2 16.7-6.6 22.7-.9l.3.2z"
            />
            <path
              fill="url(#link-B)"
              d="M81 10.2L38.9 50.3c-6.5 6.2-6.8 15.8-.8 21.4l.3.3c6.1 5.7 16.2 5.3 22.7-.9L103.3 31c6.5-6.2 6.8-15.8.8-21.4l-.3-.3C97.7 3.6 87.5 4 81 10.2zm3.1 20.9L61.1 53l-3-2.8 23-21.9 3 2.8z"
            />
            <path
              fill="url(#link-C)"
              d="M82.3 29.4l-23 21.9 1.8 1.7-21.3 20.3-1.8-1.7-21.3 20.2.1.1.3.3c6.1 5.7 16.2 5.3 22.7-.9l42.2-40c6.5-6.2 6.8-15.8.8-21.4l-.3-.3-.2-.2z"
            />
          </g>
        </svg>
      )}
      <div id="project-links" viewBox="0 0 1350 150">
        <ul>
          {props.links.map((item, idx) => (
            <li key={idx}>
              <a target="_blank" href={item.url}>
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </ProjectLinksWrapper>
  );
};

export default ProjectLinks;

/*
        
        
        }
    
      }*/
