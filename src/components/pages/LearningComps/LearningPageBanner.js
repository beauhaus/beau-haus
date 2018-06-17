import React, { Component } from 'react';
import styled from 'styled-components';

const PageBannerWrapper = styled.div`
  grid-column: 3;
  grid-row: 1/4;
  position: relative;
  filter: saturate(40%);
  svg {
    position: absolute;
    opacity: 1;
    top: 0;
    right: -2vw;
    width: 20vh;
    height: 110%;
  }
`;

const CodedPageBanner = props => {
  // fill will be added to pageData.json file (as part of each pg profile)
  const { fill } = props.themeFill;
  return (
    <PageBannerWrapper className="page-banner">
      <svg viewBox="0 380 220 700">
        <g fill="#bbb" id="learning-banner-top">
          <path d="M128.2 133.7c-8.1 3.9-19.3 5.8-33.8 5.8-17.6 0-30.5-3.2-38.6-9.6-8.1-6.4-12.2-15-12.2-25.8 0-7.2 1.7-13.2 5.2-17.9s8.5-8 15-10l-9.2-47.5c-11.2 2.9-20.4 7.2-27.7 13-7.3 5.8-12.6 13-16.1 21.8-3.5 8.7-5.2 21.9-5.2 39.5 0 18.3 2.8 32.8 8.4 43.6 7.2 13.9 17.8 24.4 31.8 31.5 14 7.2 30.4 10.8 49.3 10.8 11.3 0 21.8-1.3 31.5-3.9l1.6-51.3z" />
          <path d="M118 103V70h12.4l1.5-43H83v76zM121.8 322H86.5l36.1-22.6 2.8-83.4H8v46h96.2L8 322.1V369h112.2zM119 404H8v50h109.3zM112.5 594h-26l26.5-16.6 3.1-89.4H8v47h96.2L8 594.3V641h102.9zM108.9 699.7c-1.2 2.3-2.5 5-3.7 8.4-1.8-7.3-4.1-13.2-6.8-17.4-4.3-6.6-10-11.8-16.9-15.6-7-3.8-15.2-5.7-24.8-5.7-11 0-20.3 2.5-28 7.4s-13.2 11.4-16 19.5S8 715.9 8 731.2V814h96.9l4-114.3zM43 764v-21.8c0-9 1.7-15.1 4.7-18.4 3-3.3 7.4-4.9 13-4.9 3.8 0 7.2 1 10.1 3.1 2.9 2.1 4.9 4.7 5.7 8 1.5 6.4 2.5 10.8 2.5 13v21H43zM100.9 930.3L53.4 917l48.5-13.7 1.3-46.7L8 889.5v53.8l91.2 31.5zM97.8 1023H73v76H46v-82H8v131h85.5zM90.1 1247H8v50h80.4z" />
        </g>
        <g id="Learning-banner-bot" fill={fill}>
          <path d="M96.1 1225l-1.7 50H188v-127h-43v77zM114 1076v-76h-10.2l-4.3 126H188V991h-40v85zM107.6 881l13.4-3.9v35l-14.3-4-1.2 44.4 82.5 28.4v-50.3l-29-7.8v-55.9l29-8v-51.6l-78.4 27.1zM126.6 664.9c-4.6 3.4-7.7 6.1-9.1 7.9-.9 1.1-1.8 3-2.7 4.7L110.9 792H188v-50h-71v-4.8c0-4.5 1.5-8.5 4.2-12.1 2-2.6 6.8-5.6 13.7-8.9l53.2-26.3v-55.7L137.6 658c-2.5 1.2-6.3 3.5-11 6.9zM116.9 619H188v-47h-69.5zM119.3 555.3L188 512v-46h-65.9zM123.3 431H188v-49h-63zM126.2 346H188v-46h-60.2zM128.8 276.6l59.2-36.8V193h-56.6zM136.4 48h4.7c4.2 7 7.1 11.9 8.8 16.9 1.7 5 2.6 10.1 2.6 15.6 0 11.6-4 20.6-12 27.1-1.8 1.5-3.9 2.7-6.3 3.9l-1.8 51.3c5.7-1.5 11.1-3.5 16.2-5.9 13.8-6.6 24.3-15.8 31.3-27.7 7-11.9 10.5-27.4 10.5-46.3 0-15.4-1.9-28.3-5.8-39.5s-11.2-24.1-22-38.3h-24.7L136.4 48z" />
        </g>
      </svg>
    </PageBannerWrapper>
  );
};

export default CodedPageBanner;

/*
<svg  width="186.8" height="1080">
  <g fill="#F7931E" id="Learning-banner-bot">
    <path d="M139.9 980c5.2 5.7 7.8 14.1 7.8 25.2 0 11.5-3.2 20.4-9.7 26.7-6.4 6.3-18.3 9.4-35.5 9.5l-1.5 58.2h1.4c19.5 0 35.6-4.7 48.1-14.1 12.5-9.4 21.3-20.6 26.2-33.6 5-13 7.5-29.7 7.5-50.1 0-16.9-2-30.7-6.1-41.7s-10.1-20-18.2-27.4c-8-7.4-18-12.7-30-16.2l-12.9 51c10.1 2.7 17.7 6.8 22.9 12.5zM109.6 759.2c13.1 1 22.4 4.3 28 10 6.8 6.8 10.2 16.5 10.2 29 0 12.2-3.5 21.8-10.4 28.8-6.3 6.4-16.2 9.9-29.8 10.5l-1.5 58.2c17-.5 31.2-4.8 42.8-12.9 12.2-8.6 21.2-19.9 26.9-33.8 5.7-13.9 8.5-31.5 8.5-52.7 0-20.9-3.3-38.3-9.8-52.3-6.6-14-15.7-24.7-27.5-32.1-9.7-6.1-21.7-9.7-35.9-10.8l-1.5 58.1zM114.8 554.4c6.8.6 12.1 1.9 15.9 3.9 5.6 2.9 9.7 6.9 11.9 12.1 2.3 5.1 3.5 13.8 3.5 25.9V610h-32.7l-1.5 58H181v-85.7c0-10.4-1.1-21.9-4-34.7-2.1-9.3-6.1-18.1-12.4-26.2-6.3-8.1-14-14.5-23.2-19.1-6.5-3.2-14.9-5.3-25.2-6.3l-1.4 58.4z"/>
    <polygon points="117.1 462 181 462 181 404 118.5 404"/>
    <polygon points="119.6 362 181 362 181 307 121 307"/>
    <polygon points="121.2 286 181 237.2 181 182 124.1 182"/>
    <path d="M128.4 10h10.9c3.8 8 6.5 14.5 8.1 20.4 1.6 5.9 2.4 12.2 2.4 18.7 0 13.7-3.7 24.4-11 32.1-3.2 3.4-7.3 6-12.4 7.9l-1.5 59.3c7.6-1.9 14.7-4.9 21.3-9 12.6-7.7 22.1-18.7 28.5-32.7 6.4-14.1 9.6-32.3 9.6-54.6 0-18.1-1.8-34-5.3-47.2S168.7-24 158.9-41h-29.2l-1.3 51z"/>
  </g>
  <g fill="grey" id="Learning-banner-top" >
    <path  d="M121.6 101.2c-7.4 7-19.2 10.5-35.5 10.5-16 0-27.8-3.8-35.2-11.4-7.4-7.6-11.1-17.7-11.1-30.5 0-8.6 1.6-15.6 4.7-21.1 3.2-5.5 7.7-9.4 13.6-11.7l-8.4-56.1c-10.2 3.4-18.6 8.5-25.2 15.3C18 3 13.2 11.5 10 21.9 6.9 32.2 5.3 47.7 5.3 68.5c0 21.6 2.5 38.7 7.6 51.5 6.6 16.3 16.2 28.8 29 37.2 12.7 8.5 27.7 12.7 44.8 12.7 12.2 0 23.3-2.1 33.4-6.4l1.5-62.3z"/>
  <path  d="M108 68V29h15.2c.1 0 .1.2.2.4l1.3-51.4H75v90h33z"/>
  <polygon  points="116 326 79 326 116.7 295.4 119.1 201 8 201 8 256 95.1 256 8 327 8 381 114.6 381"/>
  <polygon  points="113.5 423 8 423 8 481 112.1 481"/>
  <path  d="M108.3 629H43v-13.9c0-15.1 3.4-25.8 9.6-32.3 6.2-6.5 17.7-9.8 34.4-9.8 9.5 0 17.1.8 22.7 2.5l1.5-58.7c-7.1-1.5-15.4-2.2-25-2.2-10.7 0-20.9 1.5-30.5 4.6-9.6 3.1-18 8-25.2 14.9-7.2 6.8-12.8 15.5-16.6 26-4 10.4-5.9 24.2-5.9 41.2V687h98.9l1.4-58zM102.7 855.2c-4.6.9-9.8 1.4-15.7 1.4-16 0-27.5-3.5-34.5-10.7-6.9-7.1-10.4-16.5-10.4-28.2 0-12.2 3.4-21.9 10.3-29.1 6.8-7.1 17.7-10.7 32.5-10.7 7.6 0 14.1.6 19.7 1.9l1.5-58.3c-6.3-1.2-13.1-1.8-20.5-1.8-25.4 0-45.1 8.5-59.1 25.4C12.4 762 5.4 786.2 5.4 817.5c0 30.5 7.2 54.4 21.5 71.5s34.3 25.7 60 25.7c5 0 9.8-.3 14.4-1l1.4-58.5zM97.5 1059.9c-3.5.4-7.4.5-11.5.5-14.1 0-24.4-2.7-31-8-8.9-7-13.3-17.1-13.3-30.3 0-5.8 1-11.1 3-15.8 2-4.7 4.9-8.7 8.6-11.9 2.2-2 5.7-3.9 10.5-5.6l-9.6-51.3c-16.6 6.6-28.9 16.7-37 30.2-8 13.6-12 32.2-12 55.9 0 30.3 7 53.7 21 70.3 14 16.6 34 24.8 60.1 24.8 3.4 0 6.6-.1 9.7-.4l1.5-58.4z"/>  
  </g>  
</svg>

*/
