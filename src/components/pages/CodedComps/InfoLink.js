import React, { Component } from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: 1s 4s fadeIn linear forwards;

  & > div,
  svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  & #info-icon {
    transform: scale(2, 2);
    z-index: 4;
  }
  & .tech-list {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    width: 100%;
    height: 100%;
    z-index: 12;
    box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    hr {
      margin: 5vh auto 1vh auto;
      width: 80%;
    }
    ul {
      color: #fff;
      font-weight: 100;
      width: 100%;
      text-align: center;
      padding: 3%;
      & > li {
        font-size: 3rem;
        margin: 0 2vw;
      }
    }
  }
  & > .info-list-container {
    opacity: 0;
    z-index: 150;
    & > svg {
      filter: sepia(20%) contrast(145%) brightness(20%);
    }
  }
  &:hover {
    .info-list-container {
      opacity: 0;
      animation: fadeIn 0.5s  ease-in-out forwards;
    }
    #info-icon {
      opacity: 1;
      animation: fadeOut 0.5s  ease-in-out forwards;
    }
  }
  a,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: lemonchiffon;
    text-shadow: -1px 1px 2px #1c1e20;
    font-weight: 300;
  }
  a:hover {
    text-shadow: -2px 2px 2px black;
    color: #78ada0;
  }
`;

const InfoLink = props => {
  const { proj_links, proj_tech } = props.currentSlide;
  return (
    <InfoWrapper>
    <div className="info-icon-container">
        <svg className="infolink-container" viewBox="0 0 620 400" preserveAspectRatio="none">
          <g id="info-icon">
            <polyline fill="#BB3D3D" points="26 0 0 0 0 26" />
            <polyline fill="#ddd" points="8 0 17 9 26 0" />
            <rect fill="black" width="5" height="10" x="1" y="0" transform="rotate(-155 5.5 8.5)" />
            <circle cx="12" cy="6" r="3.5" fill="black" />
            <rect fill="#6B6B6B" width="5" height="10" x="0" y="1" transform="rotate(-155 5.5 8.5)" />
            <circle cx="13" cy="5" r="3.5" fill="#B3B3B3" />
          </g>
        </svg>
      </div>
      <div className="info-list-container">
        <div className="tech-list">
          <ul>
            {proj_tech.map((tech, idx) => <li key={idx}>{tech}</li>)}
            <hr />
            {proj_links.map((link, idx) => (
              <li key={idx}>
                <a target="_blank" key={idx} href={link.url}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <svg className="infolist-bg" opacity=".7" viewBox="0 0 620 400" preserveAspectRatio="none">
          <g>
            <path
              fill="#3F4E36"
              d="M621.3-.8C518.6-.2 415.8 0 313 0 240.7 0 168.4-.1 96-.4L-2 .2l-.2 34.9 313 182.8 310.4-186c.1-10.9.1-21.8.1-32.7z"
            />
            <path
              fill="#932805"
              d="M621 209c0-67.1.1-134.3.3-201.4l-335.4 196L616 400.2h5.3c-.2-63.7-.3-127.5-.3-191.2z"
            />
            <polygon fill="#E8BE62" points="620.8 400 0 400 0 35.6" />
          </g>
        </svg>
      </div>
    </InfoWrapper>
  );
};
export default InfoLink;
