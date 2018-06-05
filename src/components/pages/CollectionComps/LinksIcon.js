import React, { Component } from 'react';
import styled from 'styled-components';

const LinksIconContainer = styled.svg`
 width: 100%;
 height: 100%;
`
const LinksIcon = props => {
  return (
    <LinksIconContainer viewBox="0 0 77 59" preserveAspectRatio="none">
      <linearGradient
        id="a"
        x1="28.3789"
        x2="28.3789"
        y1="37.3262"
        y2="14.0533"
        gradientTransform="rotate(-34.694 42.1853408 18.33635557)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#799493" />
        <stop offset="1" stopColor="#283030" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="M66.1 11.8c3.6 4.8 2.2 11.3-3 14.7L19.4 54.4c-5.3 3.4-12.4 2.2-16-2.5-3.6-4.8-2.2-11.3 3-14.7l43.7-28c5.2-3.3 12.4-2.2 16 2.6z"
      />
      <linearGradient
        id="b"
        x1="374.4551"
        x2="374.4551"
        y1="-150.9268"
        y2="-173.6953"
        gradientTransform="rotate(145.306 183.37515186 -121.07642606)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#945765" />
        <stop offset=".9957" stopColor="#240008" />
      </linearGradient>
      <path
        fill="url(#b)"
        d="M26.8 36.8c-3.6-4.8-3.3-10.6.6-13.1L59.7 3.1c3.9-2.5 10-.6 13.5 4.1 3.6 4.8 3.3 10.6-.6 13.1L40.4 41c-3.9 2.4-10 .6-13.6-4.2z"
      />
      <linearGradient
        id="c"
        x1="18.6953"
        x2="18.6953"
        y1="36.5166"
        y2="14.5469"
        gradientTransform="rotate(-34.694 42.1853408 18.33635557)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#799493" />
        <stop offset="1" stopColor="#283030" />
      </linearGradient>
      <path fill="url(#c)" d="M16.9 56l32.3-20.6c3.9-2.5 4.1-8.4.6-13.1L3.3 51.8c3.6 4.8 9.7 6.6 13.6 4.2z" />
    </LinksIconContainer>
  );
};

export default LinksIcon;