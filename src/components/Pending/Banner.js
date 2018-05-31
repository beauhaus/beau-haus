import React from 'react';
import ReactDOM from 'react-dom';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPgColor: '#FFCC91'
    };
  }
  render() {
    return (
      <svg className="banner" viewBox="0 0 1920 1080">
      <path d="M1830.8 942.2c11.5 0 20.3 4.1 26.3 12.3 6.1 8.2 9.1 20.4 9.1 36.7v57.5h-135.5V995c0-14.2 2.9-25.3 8.8-33.4 5.9-8.1 14.4-12.1 25.4-12.1 8.5 0 15.5 2.4 20.8 7.1 5.4 4.7 9 11.3 10.9 19.6 3.2-22.6 14.6-34 34.2-34zm-96.4 102.6h61.1v-50.5c0-13-2.6-23.1-7.8-30.2-5.2-7.1-12.8-10.6-22.7-10.6-9.9 0-17.5 3.5-22.7 10.6-5.2 7.1-7.8 17.2-7.8 30.2v50.5zm96.4-98.7c-10.7 0-18.6 3.7-23.8 11.1-5.2 7.4-7.7 18.5-7.7 33.2v54.4h63.3v-54.4c-.1-29.5-10.6-44.3-31.8-44.3zm31.7-132.4h3.7v90.2h-135.5v-87.3h3.7V900h61.1v-74.7h3.7V900h63.3v-86.3zm-37.1-121.3v82.8l40.8 19v4.5l-135.5-62.9v-3.9l135.5-62.9v4.5l-40.8 18.9zm-3.7 1.7l-85.7 39.7 85.7 39.7v-79.4zm30.6-62.3c-9.7 9.2-23.9 13.7-42.8 13.7h-78.8v-3.9h78.6c17.8 0 31.2-4.2 40.3-12.5 9-8.3 13.5-20.3 13.5-35.9 0-15.6-4.5-27.6-13.5-35.9-9-8.3-22.4-12.5-40.3-12.5h-78.6v-3.9h78.8c18.8 0 33.1 4.6 42.8 13.7 9.7 9.2 14.5 22 14.5 38.5 0 16.7-4.8 29.6-14.5 38.7zm-121.5-249h135.5v3.9h-67v98.7h67v3.9h-135.5v-3.9h64.8v-98.7h-64.8v-3.9zm94.6-135.3v82.8l40.8 19v4.5l-135.5-62.9V287l135.5-62.9v4.5l-40.8 18.9zm-3.7 1.8L1736 289l85.7 39.7v-79.4zm30.6-62.3c-9.7 9.2-23.9 13.7-42.8 13.7h-78.8v-3.9h78.6c17.8 0 31.2-4.2 40.3-12.5 9-8.3 13.5-20.3 13.5-35.9 0-15.6-4.5-27.6-13.5-35.9-9-8.3-22.4-12.5-40.3-12.5h-78.6v-3.9h78.8c18.8 0 33.1 4.6 42.8 13.7 9.7 9.2 14.5 22 14.5 38.5 0 16.7-4.8 29.5-14.5 38.7zm9.2-146.5c-3.5 8.6-8.2 15.3-13.8 19.9l-2.5-2.7c5.2-4.4 9.5-10.6 12.9-18.8 3.4-8.1 5.1-16.8 5.1-25.9 0-14.1-2.8-24.7-8.4-31.8-5.6-7.2-12.9-10.7-21.8-10.7-7 0-12.5 1.9-16.6 5.6-4.1 3.7-7.2 8.4-9.3 13.8-2.1 5.5-4.2 12.9-6.4 22.2-2.4 9.9-4.8 17.8-7.1 23.6-2.3 5.8-5.7 10.7-10.4 14.8-4.7 4.1-11 6.1-18.9 6.1-6.2 0-11.9-1.6-17-4.8-5.2-3.2-9.3-8.3-12.4-15.1-3.1-6.8-4.6-15.3-4.6-25.3 0-7.2 1.1-14.3 3.4-21.3s5.3-13 9-18l3.1 2.1c-3.9 5.3-6.8 11.2-8.8 17.7-2 6.5-3 12.9-3 19.3 0 13.5 2.9 23.9 8.6 31 5.7 7.1 13.1 10.6 22 10.6 7 0 12.5-1.9 16.7-5.6 4.2-3.7 7.3-8.4 9.4-13.9 2.1-5.5 4.3-13 6.6-22.4 2.5-9.8 4.8-17.6 7.1-23.4 2.3-5.8 5.7-10.7 10.3-14.7 4.6-4 10.7-6 18.5-6 6.2 0 11.9 1.7 17 5 5.2 3.4 9.3 8.5 12.3 15.4S1867 2.7 1867 13c-.2 9.6-2 18.8-5.5 27.5z"/>
      <circle id="banner-dot" fill={this.props.dot} cx="1864" cy="517" r="5"/>
      </svg>
    );
  }
}

export default Banner;

/*
<svg viewBox="0 0 1920 1080">
  <path fill="none" d="M1876.5-109V974h-139V-109z"/>
  <text fontSamily="'MontSrrat-Thin'" font-size="183" letter-spacing="-2" transform="matrix(0 -1.0056 1 0 1873.2832 973.9844)">
    BEAUHAUS
  </text>
  <ellipse cx="1866.5" cy="461.2" rx="5" ry="5"/>
</svg>


.banner {
    position: absolute;
    top: -3vh;
    opacity: 1;
    fill: #bfbfbf;
    transform: scale(1.04);
    font-weight: 100;
      & > .dot {
      font-size: 85px;
    }
  }
  
  #banner-dot {
    filter: url(#sat-adjust);
  }

*/