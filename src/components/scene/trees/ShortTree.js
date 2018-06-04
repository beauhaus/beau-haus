import React from 'react';
// import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ShortTreeWrapper = styled.svg`
  position: absolute;
  left: -0.5vw; // FIXME
  bottom: 2vh;
  width: 24vw;
  height: 100vh;
  z-index: 21;
  `

const ShortTree = props => {
    // console.log("Short tree props: ", props)
  const { branches, leaves,opacity } = props.db;
  return (
    <ShortTreeWrapper id="short-tree" viewBox="0 40 570 800" opacity={opacity}>
      <g className="branches-short-tree" fill={branches}>
        <path d="M45.6 1032.8l-17.3-3.8 31.3-132.6 17.3 3.8zm31.7-138.3l-15.2-3.9L82.8 815l15.2 3.9zm20.8-81.4l-12.5-3.9 26.7-79.4 12.5 3.9zm27.4-86.2l-10.2-3.7 25.9-67 10.1 3.7zM152 654l-8.8-3.4 31.1-74.6 8.8 3.4zm31.9-79.9l-8.6-3.7 31.7-68.7 8.7 3.7zm31.7-74.3l-6.7-3.3 35.1-67.2 6.8 3.3zm36.5-72.4l-6-2.9 42.9-82 6 3zm43.8-86.4l-4.6-2.7 60.3-94.6 4.5 2.7z" />
        <path d="M188.2 559.9l-1.1-4.9 66.8-13.9 1.1 4.9zm68.6-15.4l-.5-4 88.6-9 .4 4zm-22.3-87.2l-.5-2.9 78.2-12 .5 2.9zM215 486l-2.6 1.5-17.5-28.6 2.7-1.5zm143.6-239.9l-.5-2.6 59.5-9.9.5 2.6zm-233.7 324l2.9-.9 15.5 47.7-2.9.9zm17.1 52.2l3-.7 4.1 17.8-3.1.7zm102.8-258.2l1.4-1.4L270 386l-1.5 1.4zm-30.6-28.3l1.4-1.5 30 26.5-1.4 1.5zm-40.7 505.1l-.1-3 117-3.8.1 3zm120.2-4l.2-2L380 844l-.2 2zm-219.1-319l1.3-1.6 36.4 26.8-1.3 1.6zm171.8 295.4l-.2-2L354 800.6l.2 2zm-35.2-164.5l-.3-2 106.4-12 .2 2zm94-106.7l.2-2 78.1 9.8-.3 2zm-24.6-173.9l-.2-2 77.9-10.4.3 2zm-114.7 48.5l1.7-1.1 27.9 39.7-1.7 1.1zm-22.1-25.8l1.5-1.3 20.6 22.9-1.5 1.3zm202.6 143.8v-2l120.1-2.5v2zM93.1 495.5l1.9-.8 31.6 70.9-1.9.8zm-7.3 341.7l-5.2 3.3L55 802.8l5.2-3.3zM4.7 733.7l-.5.4v5.7l49 59 3.4-2.6-51.9-62.5zm70.4 148.4l-2.9-5.3 79.5-38.9 2.8 5.3zM135 690.2l-2.8-4.2 27.9-17.2 2.8 4.2zm21.4 151.4l-1.3-3.8 85.2-25.4 1.2 3.8zm-58.3-58.4l3-4.2-61.9-42.4-3.1 4.1zM4.2 720.3v3.5L34 737.6l1.4-2.9-31.2-14.4zM163 671.4l-1.3-2.8 47-21 1.3 2.8zm254.70874039-39.3938299l.02196739.9998-96.28074 2.11545966-.0219674-.9998zM19 488.8l.5-.8 53.6 26.2-.5.8zm253 175l.1-1 89.1 8.8-.1 1zm85.8 137.3l.1-1 58.9 2.5v1zM387 551.6l.1-1 52.1 5.2-.1 1zM266.60857996 661.71615283l.0087802 1-81.7.71734266-.0087802-1zM326.2 298l-.3-.9 72.2-21.3.3 1zM88.6 386.3l.3-1 61.7 17.4-.3 1zM363 356.2l-.1-1 59.8-8.6.1 1zm63.1-10.9H479v1h-52.9zm-108.5 99.3l.1-1 88.6 8.8-.1 1zm-32.8-206.5l.6-.8 23 15.1-.6.9zm25.5 18.2l.9-.6 20.4 25.5-.8.6zm10.1 109.6l.2-1 75.8 15.9-.2.9zm-42.7 80.3l-.3-1 86-22.4.2 1zm-97.9-131.1l.5-.9 33 19.4-.6.9zm-90.7 27.3l.7-.7 53.3 46.1-.7.8zm-45 71.1l.9-.5 44.4 74.5-.9.5z" />
      </g>
      <path
        className="leaves"
        fill={leaves}
        d="M403.8 786.3l12.9 29.7-46.2-29.8m98.1 31.9l12.9 29.6-46.2-29.7M310 847.4l12.8 29.7-46.1-29.8m-10.6-49.5l12.9 29.7-46.2-29.8m105.4-8.2l12.9 29.7-46.2-29.8m92.7 56l12.8 29.6-46.1-29.8M217 838.9l12.9 29.7-46.2-29.8m-40.5-12l12.9 29.7-46.2-29.8m-12.2 44.1l12.8 29.7-46.2-29.8m-60-155.4l39.6-5.7L13.7 696l-9.4 8.1v11.2zm0 31.6l-.1.1c0 6 0 11.9-.1 17.8l30.4-4.3-30.2-13.6zm60.1 10l-24.8 21.5 55-7.8M30 799.7L5.3 821.2l54.9-7.8m309.4-190.8l7.9 18.4-28.5-18.5m73.2 12.7l7.8 18.3-28.4-18.5m43.4-4.8l7.8 18.3-28.4-18.5m-289.1-11.6l14.6 14-33.7-6.6m3.6-62.4l14.5 14-33.6-6.6m.4-40.4l14.6 14-33.6-6.6m19-51.4l14.6 14-33.6-6.6M67 464.4l14.5 14-33.6-6.6m-15.1-29.4l14.5 14-33.6-6.6M4 417.1l32 6.3-14.5-14.1L4 416.1v1zm-.1-22l32.1 6.3-14.5-14.1L4 394.1c-.1.4-.1.7-.1 1zm74.5 25.3l14.5 14-33.6-6.6m-26.5 69.6l14.5 14-33.6-6.6m191.2 55.5l1.7 19.8-21.2-26m92 17.2l1.7 19.8-21.2-26m-15.7-31.8l1.7 19.8-21.2-26m84.8 22.2l1.7 19.8-21.3-26m82.7 11.2l1.8 19.8-21.3-26m70.3 12.2l1.7 19.8-21.3-26m65.2 6.2l1.7 19.8-21.3-26m-74.7-33.8l1.7 19.8-21.2-26m91 2.2l1.7 19.8-21.3-26m65.1 28.2l1.8 19.8-21.3-26m-38.9-76.7l4.3 15.4-20.6-17.6m-29.2 5.2l4.3 15.4-20.7-17.6m-36.4-7.8l4.2 15.4-20.6-17.6m-74.8 11.2l4.3 15.4-20.7-17.6m53.7-.8l4.3 15.4-20.7-17.6m96.1-19.8l4.3 15.4-20.6-17.6m-17.8-9.8l4.3 15.4-20.7-17.6m79.5 6.2l4.3 15.4-20.6-17.6M181.7 307.7l9.7 4.3-17.6 2.6m-10.7-9.9l9.7 4.3-17.7 2.6m15.2 11.1l9.7 4.3-17.6 2.6m64.9-6.9l9.7 4.3-17.7 2.6m286 14.7l3.6 9.7-14.3-10.4m-42.1-8.3l3.5 9.7-14.2-10.4m-27.7 7.7l3.6 9.7-14.3-10.4m80.9 11.6l3.6 9.7-14.3-10.4m-26.6 3.7l3.6 9.7-14.3-10.4m-33.8-.3l3.6 9.7-14.3-10.4m-32.8 4.7l3.6 9.7-14.3-10.4M330 370.2l3.6 9.7-14.3-10.4m-13.1-4.3l3.6 9.7-14.3-10.4m63.5 16.7l3.6 9.7-14.3-10.4m40.8 4.7l3.5 9.7-14.3-10.4m18-12.3l3.6 9.7-14.3-10.4m-192.5-37.8l9.7 4.3-17.6 2.6M307.1 257l8.6 3.8-15.7 2.3m5-26.1l8.6 3.8-15.6 2.3M281.2 226l8.6 3.8-15.6 2.3m2.8 4.9l8.7 3.8-15.7 2.3m139.6 31.1l4.3 8.2-13.8-7.6m-7.2 15.5l4.3 8.2-13.8-7.6m-13.3-.6l4.3 8.2-13.7-7.6m-13.4-.6l4.3 8.2-13.7-7.6m-4 10.4l4.3 8.2-13.8-7.6M430 236.3l4.3 8.2-13.7-7.5m-17.5-10.7l4.3 8.2-13.8-7.5m8.5 15.3l4.3 8.2-13.8-7.5m-12.3-8.7l4.3 8.2-13.7-7.5m-6.1 15.3l4.3 8.2-13.8-7.5m26.1 25.5l4.3 8.1-13.8-7.5m-144.6 78.6l9.7 4.3-17.7 2.6m28.7 10.1l9.7 4.3-17.6 2.6m-169.4-1.1l16.5 1.5-24.4 12.5m25.6-37.3l16.5 1.5-24.4 12.5m26.6-36l16.4 1.5-24.3 12.5m-28.8-8.9l16.5 1.5-24.4 12.5m119.4 93.5l16.4 1.5-24.3 12.6m-44.7-83.4l16.4 1.5-24.3 12.6m40.4 28.5l16.4 1.5-24.3 12.5m-34.1-33.4l16.4 1.5-24.3 12.5m223.5 223.9l7.9 18.4-28.5-18.5m84.6 8.7l7.9 18.3-28.5-18.5m-100.3-14.4l7.8 18.4-28.4-18.5m43.1 34.7l7.9 18.3-28.5-18.5m-63.1-1.4l7.9 18.4-28.4-18.5m191.2 9.7l7.9 18.3-28.5-18.5m-157.3-31.4L218 661l-28.5-18.5m152.9 31.7l7.9 18.3-28.4-18.5m-146 1.6l7.9 18.4-28.4-18.5m-6.6 20.7l7.8 18.3-28.4-18.5M19.8 473.4l14.5 14-33.6-6.6"
      />
    </ShortTreeWrapper>
  );
};

export default ShortTree;
/*



import React from 'react';
import ReactDOM from 'react-dom';

const ShortTree = props => {
  // viewBox="0 0 800 1040">
  const { branches, leaves, opacity } = props.tree;
  return (
    <ShortTreeWrapper id="short-tree" viewBox="0 0 800 1040" opacity={opacity}>
      <g className="branches-short-tree" fill={branches}>
        <path d="M45.6 1032.8l-17.3-3.8 31.3-132.6 17.3 3.8zm31.7-138.3l-15.2-3.9L82.8 815l15.2 3.9zm20.8-81.4l-12.5-3.9 26.7-79.4 12.5 3.9zm27.4-86.2l-10.2-3.7 25.9-67 10.1 3.7zM152 654l-8.8-3.4 31.1-74.6 8.8 3.4zm31.9-79.9l-8.6-3.7 31.7-68.7 8.7 3.7zm31.7-74.3l-6.7-3.3 35.1-67.2 6.8 3.3zm36.5-72.4l-6-2.9 42.9-82 6 3zm43.8-86.4l-4.6-2.7 60.3-94.6 4.5 2.7z" />
        <path d="M188.2 559.9l-1.1-4.9 66.8-13.9 1.1 4.9zm68.6-15.4l-.5-4 88.6-9 .4 4zm-22.3-87.2l-.5-2.9 78.2-12 .5 2.9zM215 486l-2.6 1.5-17.5-28.6 2.7-1.5zm143.6-239.9l-.5-2.6 59.5-9.9.5 2.6zm-233.7 324l2.9-.9 15.5 47.7-2.9.9zm17.1 52.2l3-.7 4.1 17.8-3.1.7zm102.8-258.2l1.4-1.4L270 386l-1.5 1.4zm-30.6-28.3l1.4-1.5 30 26.5-1.4 1.5zm-40.7 505.1l-.1-3 117-3.8.1 3zm120.2-4l.2-2L380 844l-.2 2zm-219.1-319l1.3-1.6 36.4 26.8-1.3 1.6zm171.8 295.4l-.2-2L354 800.6l.2 2zm-35.2-164.5l-.3-2 106.4-12 .2 2zm94-106.7l.2-2 78.1 9.8-.3 2zm-24.6-173.9l-.2-2 77.9-10.4.3 2zm-114.7 48.5l1.7-1.1 27.9 39.7-1.7 1.1zm-22.1-25.8l1.5-1.3 20.6 22.9-1.5 1.3zm202.6 143.8v-2l120.1-2.5v2zM93.1 495.5l1.9-.8 31.6 70.9-1.9.8zm-7.3 341.7l-5.2 3.3L55 802.8l5.2-3.3zM4.7 733.7l-.5.4v5.7l49 59 3.4-2.6-51.9-62.5zm70.4 148.4l-2.9-5.3 79.5-38.9 2.8 5.3zM135 690.2l-2.8-4.2 27.9-17.2 2.8 4.2zm21.4 151.4l-1.3-3.8 85.2-25.4 1.2 3.8zm-58.3-58.4l3-4.2-61.9-42.4-3.1 4.1zM4.2 720.3v3.5L34 737.6l1.4-2.9-31.2-14.4zM163 671.4l-1.3-2.8 47-21 1.3 2.8zm254.70874039-39.3938299l.02196739.9998-96.28074 2.11545966-.0219674-.9998zM19 488.8l.5-.8 53.6 26.2-.5.8zm253 175l.1-1 89.1 8.8-.1 1zm85.8 137.3l.1-1 58.9 2.5v1zM387 551.6l.1-1 52.1 5.2-.1 1zM266.60857996 661.71615283l.0087802 1-81.7.71734266-.0087802-1zM326.2 298l-.3-.9 72.2-21.3.3 1zM88.6 386.3l.3-1 61.7 17.4-.3 1zM363 356.2l-.1-1 59.8-8.6.1 1zm63.1-10.9H479v1h-52.9zm-108.5 99.3l.1-1 88.6 8.8-.1 1zm-32.8-206.5l.6-.8 23 15.1-.6.9zm25.5 18.2l.9-.6 20.4 25.5-.8.6zm10.1 109.6l.2-1 75.8 15.9-.2.9zm-42.7 80.3l-.3-1 86-22.4.2 1zm-97.9-131.1l.5-.9 33 19.4-.6.9zm-90.7 27.3l.7-.7 53.3 46.1-.7.8zm-45 71.1l.9-.5 44.4 74.5-.9.5z" />
      </g>
      <path
        className="leaves"
        fill={leaves}
        d="M403.8 786.3l12.9 29.7-46.2-29.8m98.1 31.9l12.9 29.6-46.2-29.7M310 847.4l12.8 29.7-46.1-29.8m-10.6-49.5l12.9 29.7-46.2-29.8m105.4-8.2l12.9 29.7-46.2-29.8m92.7 56l12.8 29.6-46.1-29.8M217 838.9l12.9 29.7-46.2-29.8m-40.5-12l12.9 29.7-46.2-29.8m-12.2 44.1l12.8 29.7-46.2-29.8m-60-155.4l39.6-5.7L13.7 696l-9.4 8.1v11.2zm0 31.6l-.1.1c0 6 0 11.9-.1 17.8l30.4-4.3-30.2-13.6zm60.1 10l-24.8 21.5 55-7.8M30 799.7L5.3 821.2l54.9-7.8m309.4-190.8l7.9 18.4-28.5-18.5m73.2 12.7l7.8 18.3-28.4-18.5m43.4-4.8l7.8 18.3-28.4-18.5m-289.1-11.6l14.6 14-33.7-6.6m3.6-62.4l14.5 14-33.6-6.6m.4-40.4l14.6 14-33.6-6.6m19-51.4l14.6 14-33.6-6.6M67 464.4l14.5 14-33.6-6.6m-15.1-29.4l14.5 14-33.6-6.6M4 417.1l32 6.3-14.5-14.1L4 416.1v1zm-.1-22l32.1 6.3-14.5-14.1L4 394.1c-.1.4-.1.7-.1 1zm74.5 25.3l14.5 14-33.6-6.6m-26.5 69.6l14.5 14-33.6-6.6m191.2 55.5l1.7 19.8-21.2-26m92 17.2l1.7 19.8-21.2-26m-15.7-31.8l1.7 19.8-21.2-26m84.8 22.2l1.7 19.8-21.3-26m82.7 11.2l1.8 19.8-21.3-26m70.3 12.2l1.7 19.8-21.3-26m65.2 6.2l1.7 19.8-21.3-26m-74.7-33.8l1.7 19.8-21.2-26m91 2.2l1.7 19.8-21.3-26m65.1 28.2l1.8 19.8-21.3-26m-38.9-76.7l4.3 15.4-20.6-17.6m-29.2 5.2l4.3 15.4-20.7-17.6m-36.4-7.8l4.2 15.4-20.6-17.6m-74.8 11.2l4.3 15.4-20.7-17.6m53.7-.8l4.3 15.4-20.7-17.6m96.1-19.8l4.3 15.4-20.6-17.6m-17.8-9.8l4.3 15.4-20.7-17.6m79.5 6.2l4.3 15.4-20.6-17.6M181.7 307.7l9.7 4.3-17.6 2.6m-10.7-9.9l9.7 4.3-17.7 2.6m15.2 11.1l9.7 4.3-17.6 2.6m64.9-6.9l9.7 4.3-17.7 2.6m286 14.7l3.6 9.7-14.3-10.4m-42.1-8.3l3.5 9.7-14.2-10.4m-27.7 7.7l3.6 9.7-14.3-10.4m80.9 11.6l3.6 9.7-14.3-10.4m-26.6 3.7l3.6 9.7-14.3-10.4m-33.8-.3l3.6 9.7-14.3-10.4m-32.8 4.7l3.6 9.7-14.3-10.4M330 370.2l3.6 9.7-14.3-10.4m-13.1-4.3l3.6 9.7-14.3-10.4m63.5 16.7l3.6 9.7-14.3-10.4m40.8 4.7l3.5 9.7-14.3-10.4m18-12.3l3.6 9.7-14.3-10.4m-192.5-37.8l9.7 4.3-17.6 2.6M307.1 257l8.6 3.8-15.7 2.3m5-26.1l8.6 3.8-15.6 2.3M281.2 226l8.6 3.8-15.6 2.3m2.8 4.9l8.7 3.8-15.7 2.3m139.6 31.1l4.3 8.2-13.8-7.6m-7.2 15.5l4.3 8.2-13.8-7.6m-13.3-.6l4.3 8.2-13.7-7.6m-13.4-.6l4.3 8.2-13.7-7.6m-4 10.4l4.3 8.2-13.8-7.6M430 236.3l4.3 8.2-13.7-7.5m-17.5-10.7l4.3 8.2-13.8-7.5m8.5 15.3l4.3 8.2-13.8-7.5m-12.3-8.7l4.3 8.2-13.7-7.5m-6.1 15.3l4.3 8.2-13.8-7.5m26.1 25.5l4.3 8.1-13.8-7.5m-144.6 78.6l9.7 4.3-17.7 2.6m28.7 10.1l9.7 4.3-17.6 2.6m-169.4-1.1l16.5 1.5-24.4 12.5m25.6-37.3l16.5 1.5-24.4 12.5m26.6-36l16.4 1.5-24.3 12.5m-28.8-8.9l16.5 1.5-24.4 12.5m119.4 93.5l16.4 1.5-24.3 12.6m-44.7-83.4l16.4 1.5-24.3 12.6m40.4 28.5l16.4 1.5-24.3 12.5m-34.1-33.4l16.4 1.5-24.3 12.5m223.5 223.9l7.9 18.4-28.5-18.5m84.6 8.7l7.9 18.3-28.5-18.5m-100.3-14.4l7.8 18.4-28.4-18.5m43.1 34.7l7.9 18.3-28.5-18.5m-63.1-1.4l7.9 18.4-28.4-18.5m191.2 9.7l7.9 18.3-28.5-18.5m-157.3-31.4L218 661l-28.5-18.5m152.9 31.7l7.9 18.3-28.4-18.5m-146 1.6l7.9 18.4-28.4-18.5m-6.6 20.7l7.8 18.3-28.4-18.5M19.8 473.4l14.5 14-33.6-6.6"
      />
    </ShortTreeWrapper>
  );
};

export default ShortTree;



*/
