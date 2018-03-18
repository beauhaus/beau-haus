import React from 'react';
import ReactDOM from 'react-dom';
import WhiteCaps from './WhiteCaps';
import MuteButton from './MuteButton';
import Shore from './Shore';

/***ShorePond will be vanishing after page transition from Landing */



class Pond extends React.Component {
  // constructor(props) {
  //   super(props);
  state = {
    swellTime: new TimelineLite({
      onComplete() {
        this.restart();
      }
    })
  };

  componentDidMount() {
    this.state.swellTime
      .fromTo(
        '#swell-stop1',
        6,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '0'
      )
      .fromTo(
        '#swell-stop2',
        6,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=3.5'
      )
      .fromTo(
        '#swell-stop3',
        6,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=3.5'
      )
      .fromTo(
        '#swell-stop4',
        6,
        {
          css: {
            stopOpacity: 0
          }
        },
        {
          css: {
            stopOpacity: 1
          },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: true
        },
        '-=3.5'
      );
  }

  render() {
    return (
      <svg id="svg-pond" viewBox="0 0 1920 1080">
        <linearGradient id="pond-base-grad" x1="960" x2="960" y1="1080" y2="876" gradientUnits="userSpaceOnUse">
          <stop id="pond-stop1" offset="0" stopColor={this.props.foregroundColor} stopOpacity="1" />
          <stop id="pond-stop2" offset="1" stopColor={this.props.offset} stopOpacity="0" />
        </linearGradient>
        <path id="pond-base" fill="url(#pond-base-grad)" d="M1.5 878h1920v200H1.5z" opacity="1" />

        <linearGradient
          id="swells-grad"
          x1="961.0376"
          x2="956.9628"
          y1="1096.7217"
          y2="863.2787"
          gradientUnits="userSpaceOnUse"
        >
          <stop id="swell-stop4" offset="0" stopColor="var(--darkMist)" />
          <stop id="swell-stop3" offset=".33" stopColor="var(--darkMist)" />
          <stop id="swell-stop2" offset=".66" stopColor="var(--darkMist)" />
          <stop id="swell-stop1" offset="1" stopColor="var(--darkMist)" />
        </linearGradient>

        <path id="swells" fill="url(#swells-grad)" d="M-1 880h1920v200H-1z" opacity=".5" />
        <Shore />
        <WhiteCaps />

        <MuteButton />
      </svg>
    );
  }
}

export default Pond;

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
 
  
</svg>

*/
