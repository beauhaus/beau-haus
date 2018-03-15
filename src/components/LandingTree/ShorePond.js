import React from 'react';
import ReactDOM from 'react-dom';

/***ShorePond will be vanishing after page transition from Landing */
class ShorePond extends React.Component {
  // constructor(props) {
  //   super(props);
  state = {
    swellTime: new TimelineLite({
      onComplete() {
        this.restart();
      }
    }),
    waveTime: new TimelineLite({
      onComplete() {
        this.restart();
      }
    })
  };

  componentDidMount() {
    this.state.waveTime
      .fromTo('#wave-1', 3, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '+=1')
      .fromTo('#wave-2', 3, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '+=1')
      .fromTo('#wave-3', 3, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '2')
      .fromTo('#wave-4', 4, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '3')
      .fromTo('#wave-5', 5.5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '3')
      .fromTo('#wave-6', 4, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '4')
      .fromTo('#wave-7', 5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '5')
      .fromTo('#wave-8', 4, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '6')
      .fromTo('#wave-9', 4, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '7')
      .fromTo('#wave-10', 3, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '8')
      .fromTo('#wave-11', 5, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true }, '8');

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

        <g className="shore">
          <path
            fill="var(--shore-color-3)"
            d="M-.4 947.6c-.3 10.9-.7 21.7-1.1 32.6l1180 99.8c94.5-.4 188.9-.5 283.4-.5h60.3"
          />
          <path fill="var(--shore-color-1" d="M0 1080h1566.8L.5 974.4" />
          <path
            fill="var(--shore-color-2)"
            d="M-.24869084 972.9680581l1098.63042 39.99604008-.5784401 15.88887-1098.63042-39.99604007z"
          />
        </g>
        <g id="btn-mute" fill="#A02941">
          <g>
            <path d="M241 963.6c.1 0 .3 0 .2-.1l-.3-.1.1.2zm.6-.8c-.2-.1-.4-.3-.7-.2.3.1.2.2.6.3 0 .1-.1.2-.2.2.1 0-.1.2.1.2.3-.1.3-.3.1-.5 0-.1 0 0 .1 0zm.5-11.2zm.2-7c0 .1.1.1 0 0 .1.1.1 0 0 0zm.4-1.2c0 .1 0 .1 0 0 0 .1 0 .1 0 0zm-.6 8.2l.1-.2c-.1 0 0 .1-.1.2zm-1.3 9.6s0 .1.1.1l-.1-.1zm1.6-6.6c0 .1.1.1.1.1l-.1-.1zm0 2.4c0-.1-.3-.1-.4-.1.1 0 .2.1.2.1h.2zm-.5 3.7c.1.1.1 0 0 0zm.6-7.7h.1c-.1-.1-.1-.1-.1 0zm-2.3 7.9c-.1 0-.1.1 0 0 0 .1 0 0 0 0zm1.4 2.7l-.1.1zm1.5-22.3zm-13 2.7c.2.3-.4.3 0 .6 0-.1.3-.5 0-.6zm10.7 17.2s0-.1 0 0c0-.1 0 0 0 0zm-10.7-16.6zm12.6-10.8c0 .1 0 .2-.1.2.1 0 .1-.1.1-.2zm-.2 6v-.1.1zm-2.3-3.1c-.1 0-.1 0-.1.1.1 0 .1-.1.1-.1zm-2 2.1h.1-.1zm-3.2 18.8c0 .1 0 .2-.1.3.2-.3.4-.1.1-.3zm6 3.6c-.1 0-.1 0-.1-.1v.1c0 .1 0 .1.1 0zm-.9-21.2zm-14.5 13zm14.4-12.9l-.1-.1c-.1 0 0 0 .1.1-.1-.1 0 0 0 0zm-5 17.7z" />
            <path d="M237.1 958.5c-.2-.2-.3.2-.5.4-.4-.1 0-.3 0-.5-.2 0-.6.1-.7 0 0-.1 0-.1.1-.1-.4.1-.6-.4-1-.2v-.1c-.1.2-.2.3-.3.4-.1-.1-.3 0-.2-.2.1.1.1 0 .2-.1h-.2c.1-.4.2 0 .4-.2-.3-.1-.7 0-.8-.2.2-.3.5.2.4-.2l.2.3c.1-.6.1.1.3-.5-.3-.3-.5-.1-.8-.5-.2.1-.1.2-.3.3-.7-.1.1-1-.6-.9-.3.1-.5.4-.8 0 0 0 0-.1.1-.1.1-.1.1-.2.2-.2l-.1-.1c-.6 0-.5.5-1 .3 0-.2.5-.1.4-.2-.2-.2-.3-.1-.4 0 0 .1-.1.2-.2.2v-.3c-.4.1-.9.3-1.4.4 0-.1.1-.2 0-.3-.6.2-1.3 0-1.9-.2l-.2.3c-.1 0-.1-.1 0-.2-.2-.1 0 .2-.1.3-.1 0-.2-.2-.1-.3-.2.1-.5.3-.8.3h-.6s0-.1-.1-.1v-.1c0-.1-.3.6-.4.3l.1-.1h-.4c0-.2 0-.5.3-.6-.2 0-.2 0-.1-.2 0-.2 0-.3-.3-.4.3-.4.4-.3.6-.9 0-.2-.4-.2-.4-.4h.3l-.3-.3.4-.1-.1-.2c0 .1-.1.2-.2.1-.1-.3.2-.7.4-.7l-.3-.7c.1 0 .2.1.2.2-.3-.4.3-.1 0-.4h-.2c.2-.2.2-.5.1-.8l.2.1c.1-.5-.1-1.1-.1-1.6-.1.2-.5.2-.5 0l.3-.1c-.2-.1-.1.2-.4 0 0-.2.4-.1.5 0l-.1-.3c.1 0 .1 0 .3.1-.2-.1.3-.4 0-.6h.1c0-.6-.1-.8-.1-1.3-.3 0-.2-.2-.4-.2.1-.2.3-.2.3-.3-.1-.2-.2-.2-.4-.4.1.1.2.1.2.1.1.1.2.1.2.2.1 0 .1-.1.3-.3 0-.1-.1-.2-.1-.2.1 0 .2.1.2.2 0-.1.3-.1.5-.1s.4.1.6.2c.4.2.8.3 1 0l.6-.3c.3 0-.2.2 0 .4.6-.4 1 .1 1.5-.2.4.8 1.4-.1 1.9.4v-.2c.2-.2.1.1.3.1-.1-.1-.2-.2-.1-.3.4 0 .7-.1 1.1-.1.3-.3.6-.6.9-.8.2-.1.4-.3.6-.4.4-.3.9-.5 1.3-.8.3-.3-.5-.8.2-.9l.1.3c.4-.9 1.3-1.3 1.7-2.1 0 .1.1.2 0 .2.3 0 .5-.5.4-.6.1-.1.1.1.3.1.2 0 .1-.5.4-.4v.1c0-.2.4-.4.1-.5.2-.1.3-.2.3-.3 0-.1.1-.1.1-.2h.1c-.1-.3.2 0 0-.4.2.5.2.3.2 0v.5s.1-.2.1-.6c0 .4 0 .2.1 0s.2-.4 0 .3l.3-.6c.1-.2.2-.2.3-.1-.5.7 0-.2-.5.7.2-.3.6-.6.5-.2-.1.1-.2.2-.3.2.1 0 .1.1.1.2s0 .2.1.3h-.1s-.1.1.1.1h-.1c.1 0 .3 0 .4.1l.3.3c-.6-.2-.1.5-.9.2 0 .1.1.2.3.1 0 .1-.1.1-.3 0 .1.4.3.2.3.6-.1 0-.1-.1-.3-.1.2.2.4.3.3.6-.1 0-.1 0-.1-.1 0 .5.5.8.3 1.4-.4-.2-.1.2-.5.2l.1.3.2-.1c0 .3.3.5.1.7l-.2-.2.1.5.1-.3c.2.3.5 0 .4.3 0-.1 0 .3-.2.4.1.1.2.3.2.4h-.5c.3.1.1.6.4.8-.1-.1-.3-.1-.3 0l.3.1c-.1.1-.1.1-.3.1 0 .4.5-.1.3.3 0 0-.1 0-.1-.1-.1.4.2.8 0 1.2-.4.1-.1-.3-.4-.2.1.6.4 1.2.4 1.7v-.1c.5.1-.3.4 0 .7 0-.1-.3-.1-.2-.1-.1.4.1.8.3 1.3l-.1-.1c-.1.2-.1.6-.1.8.1.1.1.2.3.1-.8.7.4 1.4-.2 2 0-.1-.1-.2-.1-.1l.1.5c.2 0 .1-.1.3-.2.1.1.2.2.2.4-.2-.2-.4 0-.5.1h.2c-.4.3.5 0 .2.4h-.1c.1.1.2.3.2.4-.3.1-.1-.2-.3-.2 0 .2.5.4.2.6-.1-.1-.1-.2-.1-.3-.3.2-.2.2-.3.4l-.1.4.1-.1c.7.3.1.6.6.9-.4-.4-.2-.1-.6-.1-.1.1-.2.2-.3.2.2.2-.2.3.2.5-.1 0 0 .2-.3.1.1.2.2-.1.3 0 .3.4-.4.8.1 1.3.2.4.5.5.7.9-.2.1-.4-.1-.4-.1-.1.2-.1.4 0 .6-.1 0-.2 0-.3.1 0 .2.4.1.2.3-.1 0-.3-.1-.4-.2.1.2.3.4.4.6-.2.1-.3-.1-.4-.2.1.2.2.6.4.7l.1-.1c0 .1-.2 0-.3 0-.2-.2.1-.3.2-.3l.1.1c.6-.1-.1-.6-.1-.9l.4.1-.3-.3c.1-.1.3-.1.4 0 .2-.2-.1-.2.1-.4h.1l-.1-.2c.1 0 .3 0 .2.1.2-.4-.3-.6 0-.7-.1-.5-.3 0-.7-.4l.8-.3-.3-.1c0-.1 0-.2.2-.1-.2-.2-.1 0-.3-.1.3-.3-.1-.7.4-.8-.2-.1-.2.2-.3 0 .5-.1-.1-.3.2-.5.3.1.1.3.4.1-.5-.1.1-.5 0-.6-.4 0-.2-.4-.3-.8.1 0 .2-.6.3-.9h.1c-.4-.1-.3-.4-.4-.6.2 0 .3.1.4.2v-.2c-.1-.1-.2-.1-.2-.3l.3.1c0-.3-.3-.6-.1-1-.3 0-.7.3-.9-.1.1 0 .4 0 .4.1 0 0-.1-.1-.1-.2l.2.2c.1-.2-.2-.1-.2-.2.2 0 .1-.1.3-.1 0 0-.1.1 0 .2 0-.2.2-.3.3-.4-.1 0-.3 0-.3-.1 0-.3.2-.1.3-.3-.1-.1 0-.3-.3-.3 0-.1.1-.1.2-.1-.1-.1 0-.7-.4-.5-.3-.5.2-1 0-1.5h.1c-.1-.3-.1-.6-.3-.9 0-.1.2-.2.3-.2-.1-.2-.2-.2 0-.6.2.2.2-.1.1.2.1-.3.2-.4 0-.7.3.1.3-.2.2-.4l-.2.2v-.4l.3.1c.4-.6-.7-1.1 0-1.5-.2-.2-.2.3-.4.2 0-.3.5-.6.5-.6.2-.4-.5-.3-.4-.7-.1 0-.4.1-.5-.2 0-.3.5-.3.6-.2 0 .1 0 .1-.1.1 0 .1.1.2.2.1h-.1c.1-.1.1-.5.3-.4-.1-.2-.2-.1-.3.1.2-.3 0-.5.1-.9-.1.1-.2.1-.2.1.1-.5-.2-.2-.3-.6.2-.2.4.1.3-.3.1-.2.3 0 .4 0-.2-.3.2-.6.2-.8l.1.2c-.1-.1-.1-.2-.1-.3l-.2.1c0-.1 0-.2.1-.2-.2-.1-.4.1-.6-.1.1-.1-.1-.4.2-.5-.1.4.3 0 .4.3v-.3h.1c.3-.4-.4-.2-.3-.6.2.1.3-.1.3-.2 0 .2-.3.1-.4-.1.1-.1 0-.3 0-.3 0-.1-.1-.1-.1-.2l-.1.2c-.2-.1-.2-.2-.2-.5.1-.1.1.2.2.1-.2-.1-.1-.3 0-.5s.2-.5.1-.7c.1-.3.3-.3.4-.5-.2-.3.2-.9.1-1.3-.2.5-.2.4-.4.3l.2.7-.3-.2c0 .2.1.4.1.5-.2-.1-.1-.1-.3.2.2-.3.1-.4.1-.5-.1-.1-.1-.1 0-.5l.6-.8c.1-.5.1-.7 0-.9-.1-.2-.2-.3-.1-.8l-.1.5c-.2.4 0-.4-.1-.4.1-.2.1-.3.2-.5 0-.1 0-.2.1-.3-.1.3-.5.4-.8 1.3l-.1-.3c-.4.3-.8 1.6-1.1 1.8.2-.5 0-.5.4-1.1-.2.1-.3.2-.3.5-.1-.1-.4.8-.6.7-.1.2-.1.5-.2.6v-.1c0 .1-.2.4-.1.5-.2-.2-.5.1-.8.4-.3.3-.5.6-.8.5-.2.3-.4.5-.6.7 0-.1-.1-.1 0-.1-.4.1.2.6-.2.7-.4-.1 0-.3-.1-.3-.5-.4-.3.4-.8.3v-.1c-.3 0-.2.5-.5.8 0 0 0-.1-.1-.1.1.4-.2.8-.4 1.1-.1-.3 0-.2-.2-.3-.1.1.3.3.2.5-.2 0-.4 0-.6-.1l.2-.2c-.4-.2-.3.3-.4.3l-.1-.1c-.3.3 0 .6-.4.9h.1c.1.5-.3 0-.3.4l-.3-.2c-.1.2-.2.7-.3 1-.1-.3.1-.7.1-1-.1.1-.4.4-.3.6 0-.1 0-.2.1-.2.1.4 0 .7-.3.9-.3-.4-.4-.2-.6-.1-.1 0-.2-.1-.3-.3 0 0 0 .1-.1.1h-.7c-.3-.1-.6-.1-1-.1.2.6-.2 0-.2.6h-.2l-.5-.4c-.1-.2.2-.1.1-.3-.4 0-.1-.3-.4-.4 0 .2-.1.3-.3.2l.3.3c-.5.3-.4-.5-.9-.2l.2-.2c-.3.1-.9 0-1.2.5 0-.1-.1-.2 0-.3-.3 0-.6.1-1 .2-.2.1-.3.1-.5.1s-.5 0-.7-.1v-.1c-.2 0-.2.3-.5.1 0-.1 0-.1-.1-.2-.1.1-.4.3-.7.2l.1-.2c-.4-.1-.7 0-.9 0 .1.7.4 1.3.5 1.8-.4-.2-.6.6-.7 1h-.1c-.1.7.4 1.2.5 1.8-.5.4-.2 1.4-.5 2 .1-.1.3 0 .4.1-.1.2.3.4-.1.4v-.1c-.4.1-.3.4-.3.7h.5c-.8.6.3 1.7-.4 2 .1.2.1.3.3.5h-.3c-.1.4-.1.6 0 1.2l-.2-.1c0 .1.2.4.4.5.2.1.4.2.4.4 0 0-.1.1-.2.1-.1.1-.2.1-.2.1 0 .5-.1 1.2-.1 1.9.3 0 .7 0 1.1-.2-.1.1-.2.2-.3.2.4 0 1.6.3 1.6-.3 0 .2.2.2.5.1.2-.1.4-.2.5-.3v.3c.2-.4.2-.5.6-.6.1 0 .1.2 0 .2.3.1.2-.3.5-.1l-.1.2c.3 0 .2-.1.4-.3.2-.1.5.1.5.3 0-.2.2-.4.3-.3 0 .1 0 .2-.1.2.4.2.7-.3 1-.1 0 .1 0 .1.1.2h-.6c0 .3.3.3.1.7.2-.2.6-.6.9-.5v.1h.2c.1 0 .1.1.2.1 0 .2.3.1.5.1 0-.3.2-.2 0-.5h-.6c.1-.1.2-.3.4-.1.1-.2.2-.4.2-.5.2.4.6.6.6.8.1 0 .1-.1.2-.1l.1-.1c.1 0 .2-.1.6-.2.1 0 0 .2 0 .3-.1 0-.2-.1-.2 0 .3 0 .6.4.9.1.2.3-.3.2 0 .4l-.1.1c.4 1 1.7 0 2 1.2v-.2c.7.9 2 1 2.5 2 .2.3.3.1.6 0l-.1.3.5-.1c.5 0 .2 1 .9 1l.1-.2c.1.1.6.3.4.4 0 0 .2-.1.2 0l-.1.1.6.1c.2.3-.4.5 0 .8.2.1.7 0 .7-.2-.1-.1-.1-.2 0-.3h.2c.3-.4.7-.7.5-1.2h-.4v-.2l.2.1c0-.3-.2-.2-.4-.1 0-.1.1-.2 0-.3l-.5.2c.1-.2.3-.2.2-.4-.2.1-.1.4-.4.4 0-.3.1-.4-.1-.3 0-.1.1-.2.2-.2-.2 0-.4-.2-.6 0 0-.3-.5-.3-.2-.6-.1.1-.4.1-.6.1.5-.3-.4-.3-.1-.8-.4.3-.7-.2-1.2-.2 0 0 .1-.1.1 0-.1-.1-.1-.3-.2-.4-.2.3-.6.2-.8.3 0-.5.4-.3.5-.6-.2.3-.5 0-.6.3 0-.3-.1-.2 0-.5-.3.4-.2 0-.5.1-.1-.4.2-.4-.1-.5-.3 1 0 1 0 1zm-7.2-2.2zm-.6 0h.3c0 .1 0 .2-.1.2 0-.1-.1-.1-.2-.2zm1.3 1.9c-.1 0-.1 0-.1-.1h.2c-.1 0-.1.1-.1.1zm.2-.3c0-.1 0-.1 0 0 0-.1 0-.1 0 0zm11.3-6.2zm-16.4 2h-.1.1zm15.4 1.3z" />
            <path d="M241.1 956.4l-.1.2c0-.1 0-.2.1-.2zm-.2 1.1h.1-.1zm-.3-17.3c-.1 0 0 0 0 0zm.7 5c-.1-.1-.1-.1-.1-.2-.1.2-.1.2.1.2zm-1.2-5.2zm1 4.8c-.1.1 0 .2 0 .2s.1-.1 0-.2zm-.3 17.4c0 .1 0 .1 0 0zm0 .1zm.1.2l-.1-.1.1.1zm0-1.7h-.1.1zm0-.5c0 .1-.2.3-.2.4h.1c-.1 0 .3-.3.1-.4zm1.2-1.8l-.1.4c.1-.1.3-.1.3 0 .4-.5-.2.1-.2-.4zm.2-1.2c.1.2.2 0 .2 0-.1-.1-.1-.1-.2 0zm0-8.2h.3c-.1-.2-.1 0-.3 0zm-1.3-1.6l-.2.1.3.1zm1.8-.9h.1l-.1-.2zm-4.5-8.3l.3.2c0-.2-.1-.5-.3-.2zm-4.1 4.5c-.2-.1-.3 0-.3.2.1-.2.3-.2.3-.2zm-11 9.3l-.1-.2.1.3z" />

            <path d="M219.5 970c.1.1.3 0 .2-.2l-.3-.2.1.4zm.6-1.5c-.2-.3-.4-.6-.7-.4.3.3.2.3.6.6 0 .2-.1.4-.2.4.1.1-.1.4.1.5.3-.3.3-.7.1-1.1 0-.1.1-.1.1 0zm.5-22.5zm.1-14c0 .1 0 .2.1.2 0-.1-.1-.2-.1-.2zm.5-.9zm-.6 14.9l.1-.4c-.1 0-.1.2-.1.4zm-1.3 19.4c0 .1 0 .1.1.2l-.1-.2zm1.6-13.3v.1l.1.1-.1-.2zm0 4.7c0-.1-.3-.1-.4-.2.1.1.2.1.2.2.1.1.1.1.2 0zm-.4 7.5zm.4-15.6zm4.8 22.6c-.1 0-.1 0 0 0zm-5.5-1.4c.1-.1.1-.1.1-.2l-.1.2zm4.7-38.4c-.1 0-.1 0 0 0zm33.4 3.9c.2-.5.3.7.6.1-.1 0-.4-.7-.6-.1zm-38.9 29.8v-.2c-.1.1-.1.2 0 .2zm39.5-29.8c.1 0 0 0 0 0zm-24-4.1l-.1-.1.1.1zm-7.5-.4zm11.4 0c.1 0 .1.1.3 0h-.3zm4-.1c-.1-.1-.2 0-.2 0h.2zm-4.9 40.3c-.1-.1-.1-.2-.2-.3.1.3-.5.3.2.3zm-18.4-5.7c-.1 0-.1-.1-.1-.1v.1h.1zm19.5-36.8h.6-.6zm21.7 34v.1c.1 0 .1-.1 0-.1zm-19.2-34c.1.1.2.2.4.2 0 0 .1 0 .1-.1l-.5-.1zm-3.8 42.3z" />
            <path d="M233.5 971.6c.6 0 .3-.4.4-.6.7-.1.3.3.6.5.5-.1.8-.4 1.1-.4 0 .1.1.1 0 .2.5-.3 1.4 0 2-.4l.1.1c-.1-.2-.1-.4-.1-.5.3 0 .5-.2.6 0-.2 0-.2.1-.3.2l.3-.1c.3.3-.4.1-.4.4.6-.1 1.2-.4 1.6-.3.1.3-1 .1-.4.4l-.7-.1c.5.5-.4 0 .1.5.9.1 1-.2 1.8-.1.2-.2-.1-.3.1-.5 1.2-.3 1 .9 1.9.4.2-.2.3-.7 1-.4l-.2.4c.8 0 .5-.6 1.4-.3-.2.2-.7.1-.5.2.6.3.4-.2.8-.2l.1.3c.9-.1 1.9-.3 2.9-.4-.1.1-.2.2 0 .3 1.3-.2 2.7 0 3.9.2l.5-.3c.1 0 .2.1.1.2.5.1 0-.2.3-.3.3 0 .4.2.2.3.8-.3 2.4-.5 3.3-.2l-.2.1c.7.1.8-.6 1.4-.3l-.1.1h3.4c0-.5 0-.9.1-1.4 0-.2 0-.4.1-.6l.1-.3c0-.1 0-.2.1-.3-.4-.2.2-1.5-.4-1.6.3-.8.4-.6.6-1.8 0-.3-.4-.5-.4-.9h.3l-.3-.5.4-.3-.1-.4c0 .1-.1.3-.2.3-.1-.6.2-1.4.4-1.4l-.3-1.4c.1 0 .2.3.2.4-.3-.7.3-.1 0-.8-.1.1-.2 0-.2-.1.2-.3.2-1.1.1-1.7l.2.1c.1-1-.1-2.1-.1-3.3-.1.4-.5.3-.5 0l.3-.1c-.2-.2-.1.3-.4-.1 0-.4.4-.3.5 0l-.1-.5c.1 0 .1.1.3.1-.2-.2.3-.9 0-1.2h.1c0-1.1-.1-1.7-.1-2.6-.3 0-.2-.4-.4-.7.1-.7.3-1.4.3-2.3-.1-.6-.2-.2-.4-.4.3 0 .2-.9.4-.4 0-1-.1-1.3-.3-2.5-.1.1-.1.3-.2.2 0-.2.1-.5.2-.5v.1c-.4-1.4.7-3.2.2-4.3v.1l-.3-1.2c0-.5.2.3.4-.1-.4-1.2.1-2-.2-3 .8-.8-.1-2.8.4-3.9l-.2.1c-.2-.4.1-.6.1-1-.1.1-.2.6-.3.3 0-.7-.1-1.4-.1-2.1h-3.4l-.8-.1-3-.3c-.9 0-.5.9-1.6.5l.3-.3c-1.8.4-3.6 0-5.4.3.1-.1.1-.2.3-.2-.4-.2-1.4 0-1.4.2-.3 0-.1-.2-.2-.3-.4-.1-.9.3-1.1.1 0 0 .1-.1.2-.1-.2.1-1.1 0-.9.2-.7-.1-1.2.1-1.8 0-.3.3-1.1-.1-1.2.3 0-.5-1.1-.4-1.6-.1.1-.1-.4-.1-.2-.3-.5 0-.9.1-.8.3-.9-.5-1.7.4-2.2-.3-1.4.2-2.7.4-4 .5 0-.5 1.4 0 1.3-.5-1.2.2-1.9.6-3.1.5-.3-.1.2-.2.3-.3-1.2.2-2.3 0-3.4.2 0 0 .1-.1.2-.1-.2 0-.5-.1-.5.1l.2-.1c.3.3-.8.6-.9.8.4-.6-1-.1-.5-.9-.1 0-.3.1-.3.3-.2 0-.3-.1-.1-.3-.7.1-.5.3-1.2.3 0-.1.1-.1.2-.3-.3.2-.7.4-1.3.3 0-.1 0-.1.1-.1-.5 0-.9.1-1.3.2-.2.1-.5.1-.8.1h-1c.1-.4-.6-.1-1.1-.5l.1 1 .2-.2c0 .8.3 1.5.2 2l-.2-.5.1 1.1.1-.5c.2.5.5-.1.4.6 0-.1 0 .5-.2.8.1.3.2.5.2.9-.1.1-.4-.1-.5 0 .3.2.1 1.2.4 1.5-.1-.1-.3-.1-.3-.1l.3.2c-.1.2-.1.3-.3.2 0 .7.5-.2.3.6 0-.1-.1 0-.1-.2-.1.8.2 1.6 0 2.4-.4.2-.1-.7-.4-.4.1 1.1.5 2.3.4 3.4v-.2c.5.1-.3.8 0 1.4 0-.1-.3-.2-.2-.1-.1.7.1 1.5.3 2.6l-.1-.1c-.1.4-.1 1.2-.1 1.6.1.1.1.4.3.2-.8 1.5.4 2.8-.2 4.1 0-.2-.1-.4-.1-.2l.1 1.1c.2-.1.1-.1.3-.4.1.1.2.4.2.7-.2-.5-.4 0-.5.2h.2c-.4.6.5.1.2.9h-.1c.1.3.2.6.2.9-.3.1-.1-.3-.3-.3 0 .4.5.9.2 1.3-.1-.2-.1-.5-.2-.7-.3.4-.2.5-.3.8l-.1.8.1-.2c.7.6.1 1.1.6 1.9-.4-.7-.3-.1-.6-.2-.1.2-.2.5-.3.4.2.4-.2.6.2 1.1-.1 0 0 .4-.3.3.1.5.2-.1.3-.1.3.7-.4 1.7.1 2.7.2.9.5 1 .7 1.9-.2.3-.4-.2-.4-.2-.1.4-.1.8 0 1.2-.1-.1-.2 0-.3.1 0 .3.4.2.2.7-.1-.1-.3-.2-.4-.3.1.4.3.8.4 1.2-.2.1-.3-.2-.4-.4.1.5.2 1.2.4 1.3l.1-.3c0 .2-.2.1-.3 0-.2-.4.1-.6.2-.6l.1.3c.6-.3-.1-1.2-.1-1.8l.4.2-.3-.6c.1-.1.3-.2.4.1.2-.4-.1-.4.1-.7h.1l-.1-.4c.1.1.3-.1.2.2.2-.7-.3-1.2 0-1.5v.1c-.1-1-.3-.1-.7-.9l.8-.5-.3-.1c0-.1 0-.3.2-.3-.2-.4-.1.1-.3-.2.3-.5-.1-1.4.4-1.5-.2-.2-.2.5-.3-.1.5-.2-.1-.6.1-1.1.3.1.1.6.4.1-.5-.3.1-.9 0-1.3-.4 0-.2-.9-.3-1.5.1 0 .2-1.2.3-1.9h.1c-.4-.1-.3-.8-.4-1.2.2 0 .3.1.4.3v-.4c-.1-.1-.2-.2-.2-.5l.3.1c0-.6-.3-1.2-.1-1.9-.3 0-.7.6-.9-.2.1 0 .4-.1.4.1 0-.1-.1-.2-.1-.4l.2.3c.1-.3-.2-.2-.2-.4.2 0 .1-.2.3-.2 0 .1-.1.2 0 .3 0-.3.1-.7.3-.8-.1 0-.3 0-.3-.2 0-.6.2-.2.3-.5-.1-.1 0-.5-.3-.5 0-.2.1-.2.2-.3-.1-.3 0-1.4-.4-1.1v.1c-.3-1 .2-2 0-3h.1c-.1-.6-.1-1.3-.3-1.7 0-.2.2-.4.3-.3-.1-.4-.2-.5 0-1.1.2.4.2-.2.1.5.1-.6.2-.7 0-1.3.3.2.3-.4.2-.7l-.2.4v-.8l.3.1c.4-1.2-.7-2.1 0-3-.2-.3-.2.6-.4.4 0-.5.5-1.1.5-1.3.2-.7-.5-.7-.4-1.5-.1.1-.4.2-.5-.4 0-.5.5-.7.6-.3 0 .1 0 .2-.1.2 0 .2.1.4.2.2l-.1-.1c.1-.1.1-.4.1-.6 0-.1.1-.1.2-.1-.1-.2-.2-.1-.3 0 .1-.2.1-.4.1-.6h.2c-.1-.1-.3-.2-.2-.2.6.1.1-.2.6-.3.1.1.1.2.1.3 0 .1 0 .1.4 0 .4.1.1.3-.1.4.7-.2 1.2.1 1.6.2l-.3.1c.2-.1.4-.1.5-.1l-.2-.2c.2 0 .4 0 .4.1.2-.2-.2-.4.3-.6.3.1.8-.1.9.2-.8-.1.1.3-.6.4h.5s0 .1-.1.1c.8.3.4-.4 1.2-.4-.1.2.2.3.3.3-.3 0-.2-.3.1-.4.5.1.6-.1.9-.1l-.3-.1c.1-.2.4-.2.8-.2 0 .1-.3.1-.2.2.4-.3.9.3 1.5.1.3.1 0 .3.3.4.7-.2.7.2 1.4 0-.2-.2-.2-.2.2-.4l-1.1.2.7-.3c-.3 0-.7.2-.9.1.3-.2.3-.1.1-.3.5.4.9-.2 1.5 0v.6c.8.3 1.4-.3 2.5-.2l-.3-.1c.1-.2.6 0 1-.1 0 .2.2.3.3.4 0-.1.8 0 .9-.4l.5.3c.8.1 1-.6 1.8-.5-.2.2.1.4-.4.5.3 0 .5 0 .5-.1.2.1.8-.3 1-.1.1-.1.2-.3.5-.3v.1c0-.1.5-.1.2-.4.8.6 2.3-.1 3.1.5.6-.1 1.3-.1 1.8-.2 0 .1 0 .1-.1.1.7.2.5-.6 1.3-.4.4.3-.4.2-.2.3.1.6 1-.1 1.6.3h-.1c.4.2 1.1-.2 1.8-.2v.1c.5-.3 1.4-.4 2.1-.5-.2.3-.3.1-.2.4.3 0-.1-.4.5-.5.2.1.6.3.7.5h-.6c.3.4.7 0 1.1 0v.2c.9-.1.9-.4 1.8-.4l-.1-.1c.5-.4.4.2 1-.1l.2.4c.3-.1 1.2-.4 1.8-.5-.3.3-1.1.4-1.5.6.3 0 1.2 0 1.3-.2-.1 0-.3.1-.4.1.4-.3 1-.5 1.6-.5-.1.5.3.4.6.5 0 .2-.1.4-.3.6l.1.1v1.2c-.1.6-.1 1.3-.1 2 .6-.5 0 .4.6.3v.5l-.4 1c-.2.2-.1-.3-.3-.3 0 .7-.3.3-.4.8.2-.1.3.2.2.7l.3-.6c.3 1-.5.9-.2 1.9l-.2-.3c.1.5 0 1.9.5 2.4-.1.1-.2.2-.3 0-.1 1.2.5 2.7.2 3.7l-.1-.1c0 .2.3.4.1.7-.1 0-.1-.1-.2 0 .1.1.3.6.2.9l-.2-.3c-.2 1.2.4 1.8.5 2.8-.4 0-.6.9-.6 1.4h-.1c0 1.4.4 2.4.6 3.7-.5.8-.2 2.7-.5 4 .1-.2.3 0 .4.3-.1.3.3.8-.1.8v-.1c-.4.2-.3.9-.3 1.3l.5.1c-.8 1.3.3 3.3-.4 4 .1.3.1.7.3 1h-.3c-.1.8-.1 1.3 0 2.3l-.2-.2c0 .3.2.5.4.7.2.2.4.4.4.5h-.4c0 .1-.1.2-.1.3-.1 0-.2-.1-.3-.1-.1 0 0 .1-.4.2 0-.1 0-.2.2-.2-.5 0-1.9-.3-1.7.3 0-.4-1.1 0-1.6.1l.1-.3c-.5.4-.5.5-1.1.6-.2 0-.1-.2.1-.2-.5-.1-.4.3-1 .1l.2-.2c-.5 0-.5.1-.8.3-.3.1-1-.1-1.1-.3-.1.2-.4.4-.7.3 0-.1.1-.2.1-.2-.9-.2-1.3.3-1.9.1 0-.1-.1-.1-.1-.2h1.2c0-.3-.6-.3-.1-.7-.5.2-1.2.6-1.8.5 0 0-.1 0-.1-.1h.1-.4c-.2 0-.3-.1-.5-.1-.1-.2-.7-.1-.9-.1 0 .3-.3.2 0 .5h1c-.2.1-.5.3-.8.1-.1.2-.3.4-.4.5-.4-.4-1.1-.6-1.3-.8-.9.2-2.1.1-2.6.6-.2.1-.3-.2-.4-.2.1-.1.3 0 .4-.1-.5.1-1.5.1-1.6.4-.6-.2.4-.3-.5-.3l.1-.1c-1.7-.6-2.7 1-4.6.2.1 0 .2.1.2.1-2.1-.3-4.4.3-6.5-.2-.6-.1-.7.1-1 .3l-.1-.3-.6.3c-.9.3-1.5-.7-2.7-.2l.1.2c-.4 0-1.3.1-1.2-.1 0 0-.1.2-.3.1v-.2l-1 .3c-.8-.1.1-.6-1-.7-.4.1-1.2.5-1 .6.2 0 .4.1.4.3l-.4.1c-.1.5-.4.9.6 1.3l.7-.3.2.2h-.5c.3.2.5 0 .7-.1.1.1.1.2.3.2l.6-.4c.1.2-.3.4.1.5.3-.2-.3-.4.2-.5.3.2.2.4.6.2.1.1 0 .2-.2.2.3-.1.9-.1 1-.3.3.3 1.1-.1 1.1.4.1-.1.6-.3.9-.4-.5.5 1.1 0 1 .6.4-.5 1.5-.2 2.2-.5 0 0-.1.1-.2.1.4 0 .5.2.8.3.1-.4.7-.5 1-.7.5.4-.3.5-.1.8 0-.3.9-.3.7-.6.4.2.3.1.5.4.1-.5.4-.1.7-.4.5.2.1.5.7.3.4 0-.2.2-.2.2zm14.3-.9h-.3.3zm1.2-.1h-.5c0-.1 0-.2.1-.2-.1.1.2.2.4.2zm-2.5-1.9c.2 0 .3 0 .3.1h-.3c-.1 0-.1-.1 0-.1zm-.4.4zm-25.6-23z" />
            <path d="M260.9 963.9h-.1l.1.1zm-41.3-11.2c0 .1-.1.1 0 0-.1.1 0 .1 0 0zm-.1 2.9l-.1.4c.1-.2.1-.3.1-.4zm-.1 2.2h.1-.1zm7.9-28.8c.3-.1.1 0 0 0zm-7.7 4.3c-.1-.1-.1-.2-.1-.3 0 .1 0 .3.1.3zm19.3-4.7h.1zm-19.4 3.9c-.1.2 0 .3 0 .5 0-.2.1-.4 0-.5zm-.2 34.8v.1-.1zm0 .1v.1c.1 0 .1-.1 0-.1zm.1.4l-.1-.2c.1 0 .1.1.1.2zm0-3.4h-.1.1zm0-.9c0 .2-.2.5-.2.8h.1c-.1-.1.3-.6.1-.8zm1.2-3.7l-.1.7c.1-.1.3-.3.3 0 .4-.8-.2.3-.2-.7zm.2-2.3c.1.4.2 0 .2 0-.1-.2-.1-.3-.2 0zm-.1-16.6h.3c-.1-.2-.1.1-.3 0zm-1.3-3.1l-.2.3.3.1zm1.8-1.9l.1.1-.1-.5zm20.9-4.8l-.1-.3c-.2 0-.2.4.1.3zm12-.4c.1.2.5.3.7.1-.2 0-.5-.1-.7-.1zm4.2 30l-.1-.2.1.4z" />
          </g>
          <g id="sound-icon-waves">
            <path d="M248.7 962.8v.3-.4.1zm.3.6c0-.2.1-.5 0-.8 0 .4 0 .2-.1.6 0 0-.1-.1-.1-.2 0 .1-.1-.1-.1.2.1.3.2.3.2 0 .1.1.1.2.1.2zm4.6-2.2zm1.7-2.9s0 .1 0 0zm.6-.4c-.1 0-.1 0 0 0zm-2.3 3.3h.1c-.1-.1-.1-.1-.1 0zm-4.1 1.3zm3.3 0c0 .1 0 .1.1.1l-.1-.1zm-.8.8s-.1-.3-.2-.4c.1.1.1.2.1.2 0 .1 0 .2.1.2zm-2 .4zm3.5-1.8s0 .1 0 0zm-4.1-26.1zm-.8-1.6v-.2zm8 22.8c0 .1 0 .1 0 0zm.8-9.4c-.3.1-.4-.2-.7 0 .1 0 .5.1.7 0zm-7.9 14.9s.1 0 0 0c.1 0 0 0 0 0zm7.2-14.9zm.2 7h-.1.1zm-.8 1.7c0-.1 0 0 0 0zm.6-2.6c0-.1 0-.1 0 0 0-.1 0-.1 0 0 0-.1 0-.1 0 0zm.1-1s-.1 0 0 0zm-5.5-16c0-.1.1-.2.2-.2-.2.2-.3.2-.2.2zm-1.8 26v-.1.1zm4.7-9.5l.1-.1c0 .1-.1.1-.1.1zm-.2-11.3c-.1 0-.1 0 0 0zm.3 10.8h.1-.1zm-2.9-16.2z" />
            <path d="M250.4 936.6c.1.1.3-.3.4-.5.2 0-.1.3-.2.5.1 0 .4-.3.4-.3 0 .1 0 .1-.1.1.3-.2.2.2.6-.1 0 0 0 .1-.1.1.1-.2.3-.3.4-.4 0 0 .3-.1.1.1 0 0-.1 0-.2.1h.1c-.2.3-.2 0-.3.2.2 0 .5-.1.5 0-.3.3-.2-.1-.4.3v-.2c-.3.5 0-.1-.4.4 0 .2.3 0 .3.2.2-.1.2-.2.4-.3.4 0-.6.8-.1.6.2-.1.6-.4.5-.1l-.4.2c.1.2.5-.3.4 0-.2.1-.2 0-.2 0-.2.3.2-.1.3 0l-.3.2c.1.1.5.1.6.3-.1 0-.2.1-.3.2.3.1.2.5.1.8l.3-.1s-.1.1-.2.1c-.1.1.2-.1.3-.1l-.2.2c.3 0 .8.2.5.5h-.1c-.1.2.7-.1.4.1h-.1c0 .3.4.6 0 1 .5-.1-.1.4.5.2-.3.3-.4.3-.5.6 0 .1.4 0 .5 0l-.3.1h.4l-.4.2.1.1s.1-.1.2-.1c.2.1-.2.4-.3.4l.4.2h-.3c.4.1-.3.1 0 .2.1 0 .2 0 .3-.1-.2.1-.2.3 0 .4h-.2c0 .2.2.4.2.7.1-.1.5-.2.5-.1l-.3.1c.2 0 .1-.1.4-.1 0 .1-.4.1-.5.1l.1.1h-.3c.2 0-.3.3.1.2h-.1c0 .2.2.3.2.5.3 0 .3 0 .5.1-.1.2-.3.4-.2.5.2.1.3 0 .5 0-.3 0-.2.2-.4.2.1.2.1.3.3.5.1 0 .2-.1.3-.1.1 0-.1.1-.2.1.5.3-.8.8-.2 1l.3.2c0 .1-.2-.1-.4 0 .5.2 0 .4.3.6-.8.2.1.6-.5.9h.2c.2.1-.1.1-.2.1.2 0 .2-.1.3 0 .3.5-.3 1.1-.5 1.6-.1.2 1 .2.5.4l-.4-.1c.4.4-.1.8.3 1.2-.1 0-.2 0-.2-.1-.3.1 0 .3.2.3 0 .1-.2 0-.3 0-.2.1.3.2 0 .2h-.1c.1.1-.1.2.3.2-.2.1.1.3-.1.4.3.1-.2.2.3.3-.5-.1-.4.2-.2.3-.1-.1-.2.1-.4 0 0 .1.1.2.3.2-.6.1.4.5-.4.4.2.3.3.7.4.9-.5-.1 0-.3-.5-.4.2.3.5.5.4.8-.1 0-.2-.1-.3-.1.1.3-.2.5 0 .8 0 0-.1 0-.1-.1 0 0-.1.1.1.1v-.1c.3 0 .6.4.8.4-.6-.2-.2.2-1-.2 0 0 .1.1.3.1-.1 0-.1 0-.3-.1.1.2.3.2.3.3-.1 0-.1-.1-.3-.1.2.1.4.3.2.4-.1 0-.1 0-.1-.1 0 .2.4.5.2.7-.4-.2-.2 0-.6-.1l.1.2h.2c0 .1.2.3 0 .3l-.1-.1v.2l.2-.1c.2.2.5.2.3.3 0 0 0 .1-.3.1.1.1.2.2.1.2s-.4-.2-.5-.2c.3.2 0 .3.3.5-.1-.1-.3-.1-.3-.2l.2.2c-.1 0-.1 0-.3-.1-.1.1.5.2.2.2 0 0-.1 0-.1-.1-.2.1 0 .4-.2.5-.4-.1 0-.2-.4-.3 0 .2.2.7 0 .8h.1c.5.3-.3 0-.2.2 0 0-.3-.2-.2-.2-.2.1 0 .3 0 .7l-.1-.1c-.2 0-.2.1-.3.2.1.1 0 .1.2.2-.9-.3 0 .8-.7.5 0 0 0-.1-.1-.1l-.1.3c.2.2.1.1.3.2.1.1.1.3.1.3 0-.2-.3-.3-.4-.4l.2.2c-.4-.2.3.4 0 .3l-.1-.1c0 .1.1.3 0 .3-.2-.2 0-.1-.2-.3-.1.1.2.5 0 .4v-.2c-.3-.2-.2-.1-.3-.1h-.2l.1.1c.4.7-.1.3 0 .8-.1-.5-.1-.2-.3-.5-.1-.1-.2-.1-.2-.2.1.3-.2-.1-.1.2-.1-.1-.1 0-.2-.2 0 .1.1.2.2.3 0 .4-.5-.3-.4.3-.1.2 0 .6-.1.8-.1-.1-.1-.4-.1-.4-.1-.1-.2-.1-.2.1 0-.1 0-.2-.1-.3-.1 0 0 .4-.1.3v-.4c0 .1-.1.3-.2.4-.1-.2 0-.3 0-.4-.1.1-.2.2-.2.5l.1.1v-.3c0-.2.1.1.2.2l-.1.1c.2.6.2-.1.4-.1v.5-.4c.1.1.1.4.1.4.2.2 0-.2.2 0v.1l.1-.2c0 .1.1.3 0 .3.3.2.2-.4.4-.1.2-.2-.1-.3-.1-.8l.2.4.2.4-.1-.3s.1 0 .1.1c0-.3-.1-.1-.1-.3.2.2.2-.3.5.2-.1-.2-.2-.1-.2-.3.3.5.1-.1.3 0 .1.3 0 .2.2.4-.2-.5.2 0 .3-.2-.2-.3.1-.3.1-.5.1.1.4 0 .6 0v.1c-.3-.3-.1-.4-.1-.5.2.2.2.3.3.4l.1-.1c-.1-.1-.1-.2-.1-.3l.2.2c.1-.1-.1-.4.2-.4-.2-.2-.7-.4-.7-.7l.3.3s-.1-.1 0-.1l.2.2c.1 0-.1-.2-.1-.2.2.1.1.1.3.2 0 0-.1 0-.1.1.1 0 .2 0 .4.1l-.2-.2c.1-.1.2.1.4.1-.1-.1.1-.1-.2-.3l.2.1c-.1-.1.2-.3-.2-.4-.1-.4.4-.3.4-.6l.1.1c0-.2.1-.3-.1-.5 0 0 .2 0 .3.1 0-.1-.1-.2.1-.3.1.2.2 0 .1.2.1-.1.3 0 .1-.3.2.2.4.1.3 0h-.2c0-.1 0-.1.1-.2l.3.2c.5-.1-.5-.8.3-.7-.2-.2-.2.1-.5-.1.1-.1.6 0 .6-.1.3-.1-.4-.4-.2-.5-.1 0-.5-.1-.5-.3.1-.1.6.1.6.2h-.1c0 .1.1.1.2.1l-.1-.1c.1 0 .2-.2.4-.1-.1-.1-.2-.1-.3-.1.2-.1.1-.2.3-.4-.1 0-.2 0-.2-.1.2-.2-.2-.2-.2-.4.2 0 .4.2.3 0 .2-.1.3.1.4.2-.2-.2.3-.2.3-.3l.1.1v-.1h-.3c.1 0 .1-.1.2 0-.1-.1-.4-.1-.6-.3.1 0-.1-.2.3-.1-.2.2.3.1.4.3v-.1h.1c.4-.1-.4-.2-.3-.4.2.1.4.1.3 0 0 .1-.3 0-.5-.2.2-.1-.1-.2 0-.2l-.1.1c-.2-.1-.1-.1-.2-.2.2 0 .1.1.2.1-.3-.2.4-.1.2-.3.1 0 .4.1.5 0-.2-.2.3-.1.1-.3-.3 0-.2 0-.4-.2l.1.3-.3-.3c0 .1.1.2.1.2-.2-.1-.1-.1-.4-.1.4 0-.2-.3.1-.3l.6.1c.3-.1-.3-.4 0-.6l-.1.1c-.2-.1 0-.2-.1-.3h.4c-.2 0 .1-.2-.4-.3l.3-.1c.1-.2-.6-.3-.5-.5.2.1.4 0 .5.2 0-.1.1-.1-.1-.1.1 0-.3-.2 0-.2-.1 0-.3-.1-.3-.2h.1c-.1 0-.1-.1-.4-.1.7-.1 0-.5.6-.6-.1-.1-.1-.3-.1-.4h.1c.2-.2-.6-.2-.4-.3.4-.1.2.1.3.1.7 0-.1-.2.4-.3.3-.1-.3-.3-.2-.4h.1c-.4-.1-.5-.4-.6-.5.3.1.1.1.4.1 0-.1-.5 0-.5-.2.2 0 .3-.1.6-.1v.1c.4 0 0-.2.1-.2h.2c0-.2-.5-.2-.4-.4h-.1c-.4-.1.2-.1-.1-.2h.4c-.1-.1-.4-.3-.5-.4.3.1.5.3.7.4 0-.1 0-.3-.2-.3l.1.1c-.3-.1-.5-.2-.5-.4.8 0 .2-.4.9-.5-.3-.3.1-.6.1-.9-.7.1 0-.1-.7-.1v-.1l.4-.2c.2-.1.2.1.3.1 0-.2.3-.1.5-.2-.2 0-.4 0-.3-.1l-.3.2c-.4-.2.6-.2.2-.5l.2.1c-.1-.1 0-.5-.6-.5.1 0 .3-.1.3 0 .1-.3-.6-.6-.3-.8h.2c-.1 0-.3-.1-.2-.1h.2c-.1 0-.3-.1-.2-.2h.2c.2-.3-.5-.4-.6-.6.5-.1.6-.3.7-.4h.1c0-.3-.5-.5-.7-.8.5-.3.1-.7.3-1-.1.1-.4.1-.4 0 .1-.1-.4-.1.1-.2.4-.2.3-.3.3-.4l-.6.1c.7-.5-.5-.7.2-1-.2 0-.2-.1-.3-.1l.3-.1c0-.2 0-.3-.1-.6h.2c0-.1-.9.1-1 0l.4-.2c-.1-.2.2-.6-.3-.7.1 0 .2-.1.2 0 0-.1.1-.6-.5-.3.4-.2-.1-.3-.3-.3l.3-.1c-.4.1-.5.1-.7 0l.2-.1c.1-.2-.3 0-.2-.2h.2c0-.1-.1-.1-.4 0-.1 0 0-.2.2-.4-.2.1-.4.1-.4 0 .1-.1.2-.1.2-.1.1-.3-.5-.1-.3-.4l.1-.1c.1.2.1.3.1.3.2-.1.2-.3.6-.4-.2 0-.8.1-.7-.1l.1-.1s0-.1-.1-.1v-.1c.2-.1 0-.2 0-.3-.3.2-.3.1-.4.3h.1l.1.1c-.2 0-.3.1-.2-.1-.2.1-.4.2-.5.2.3-.3.4-.6.6-.8-.3-.1-.4-.4-1-.1-.1 0 .1-.2.1-.2h.2c-.2 0-.3-.3-.6 0 0-.2.3-.2.1-.3l.1-.1c.1-.4-.2-.3-.5-.3-.3.1-.5.1-.5-.4v.1c-.1-.3-.4-.4-.6-.5-.3-.1-.5-.2-.7-.6-.1-.2-.2 0-.4.2l.1-.3-.3.3c-.3.2-.2-.9-.6-.5v.2c-.1-.1-.3.1-.3-.2 0 0-.1.2-.1.1v-.2l-.3.3c-.2-.1.1-.7-.2-.8-.1.1-.3.5-.3.6 0 0 .1.1.1.3l-.1.1c0 .5-.1 1 .1 1.4l.1-.3v.3h-.1c0 .2.1 0 .1-.1v.3l.2-.5c0 .2-.1.4 0 .5.1-.2 0-.5.1-.6 0 .2 0 .4.1.2 0 .1 0 .2-.1.3.1-.2.2-.1.2-.3 0 .3.2 0 .1.5 0-.1.2-.3.2-.3-.3.5.2.1 0 .7.2-.5.3-.1.5-.3l-.1.1v.3c.2-.4.3-.4.5-.6-.1.4-.3.4-.5.8.2-.3.3-.2.4-.5-.1.2 0 .1-.2.5.3-.5.1 0 .3-.3-.1.3-.3.4-.1.4.7-.3.5-.2.5-.2zm2.5 1.4c-.1 0-.1-.1 0 0-.1-.1-.1 0 0 0zm.1.2s0-.1 0 0c0-.2.1-.2.1-.2s-.1.1-.1.2zm1.5-1.6c.1 0 0 .1 0 .1l-.1-.1h.1zm-.4.1zm-.6 24.5c0-.1 0 0 0 0zm.3-19.6z" />
            <path d="M251.8 961.6c-.1 0-.1-.1 0 0-.1 0-.1 0 0 0zm-.5.3h-.1.1zm-.5.1s0 .1.1.1l-.1-.1zm3.3-6.2c-.1-.1-.1-.1 0 0zm0 2.3l-.1-.1c-.1 0-.1.1.1.1zm.1-4.8v-.1zm-.2 4.6c-.1 0-.1.1 0 0 0 .1 0 .1 0 0zm-4.8 4.6c-.1 0-.1 0 0 0zm-.1.1zm0 .1c0-.1 0-.1 0 0zm.6-.2v-.1.1zm.1 0s-.2-.2-.2-.1v.1c.1-.2.3.2.2 0zm1.3.9h-.2c.1.1.2.2.1.3.4.2-.1-.2.1-.3zm.6-.1c-.1.1.1.1.1.2 0-.1 0-.2-.1-.2zm2.7-3.1l.2.1s-.1 0-.2-.1zm-1-1.3h-.2l.3.1zm2 .5h.1l-.1-.1zm1.6-6.5h-.3c0 .1.4.1.3 0zm-.1-2.8c.2 0 .3-.1.1-.2 0 .1-.1.2-.1.2zm-.2-8.5h.1l-.1-.1z" />

            <path d="M246.7 959.3v.3-.4.1zm.2.6c0-.2.1-.5 0-.8v.6s-.1-.1-.1-.2c0 .1-.1-.1-.1.2.1.3.1.3.2 0v.2zm3.6-1.6zm1.4-2.1s.1.1 0 0c.1 0 .1 0 0 0zm.6-.3c0 .1-.1.1 0 0 0 .1 0 .1 0 0zm-2 2.4zm-3.2.7zm2.7.4s0 .1.1.1l-.1-.1zm-.7.6s-.1-.3-.2-.4c.1.1.1.2.1.2 0 .1 0 .2.1.2zm-1.6.2zm2.8-1.2s.1 0 0 0zm-3.3-19.4zm-.6-1.6v-.2zm6.5 17.3zm.6-7.3c-.3.1-.4-.1-.7 0 .2 0 .6.1.7 0zm-6.4 11zm5.8-11zm.3 5.4h-.1.1zm-.8 1.3c.1 0 0 0 0 0zm.5-2c0-.1 0-.1 0 0 0-.1 0 0 0 0zm.1-.7s-.1 0 0 0zm-4.7-11.9l.2-.2c-.2.2-.3.2-.2.2zm-1.2 19.1v-.1.1zm3.4-7zm-.1-8.4c-.1 0-.1 0 0 0zm.1 8h.1-.1zm-2-11.9z" />
            <path d="M247.8 940.2s.2-.3.4-.5c.1 0-.1.3-.2.5.1-.1.4-.3.4-.3 0 .1 0 .1-.1.1.2-.2.2.1.5-.2 0 0 0 .1-.1.1.1-.2.3-.3.4-.4 0 0 .2-.1.1.1 0 0-.1.1-.2.1l.1-.1c-.2.3-.1.1-.3.3.1 0 .4-.2.4-.1-.3.3-.2 0-.4.3v-.2c-.3.5 0-.1-.4.4 0 .2.2-.1.2.1.2-.1.2-.2.4-.3.4-.1-.6.7-.2.5.2-.1.6-.4.4-.2l-.3.2c0 .1.5-.3.4-.1-.1.1-.2 0-.2.1-.2.3.2-.1.3-.1l-.3.2c.1.1.4 0 .6.1-.1.1-.2.1-.3.2.3 0 .2.4.1.6l.3-.1s-.1.1-.2.1c-.1.1.2-.1.3-.1l-.2.2c.3 0 .7.1.4.3h-.1c-.1.1.6-.2.4.1h-.1c0 .3.3.4-.1.7.4-.1-.1.3.5.1-.3.2-.4.2-.5.5 0 .1.4 0 .5 0l-.3.1h.4l-.4.2h.1s.1-.1.2-.1c.2 0-.2.3-.3.3l.3.1h-.3c.4 0-.3.1 0 .1.1 0 .2 0 .3-.1-.2.1-.2.2-.1.3h-.2c0 .2.2.3.2.5.1-.1.5-.2.5-.1l-.3.1c.2 0 .1-.1.4-.1 0 .1-.4.1-.5.1l.1.1h-.3c.2 0-.3.2.1.2h-.1c0 .2.2.2.2.4h.5c-.1.1-.3.3-.3.4.2.1.3 0 .4 0-.3 0-.2.2-.4.1.1.2.1.2.3.4.1 0 .2-.1.3-.1 0 0-.1.1-.2.1.5.2-.8.6-.2.7l.3.2c0 .1-.2 0-.4 0 .5.2 0 .3.3.5-.8.2.1.5-.5.6h.2c.2 0-.1.1-.2.1h.3c.2.4-.3.8-.5 1.2-.1.1 1 .1.5.3l-.4-.1c.4.3 0 .6.3.9-.1 0-.2 0-.2-.1-.3 0 0 .2.2.2h-.3c-.2 0 .3.2.1.2h-.1c.1.1-.1.2.3.2-.2.1.1.2-.1.3.3.1-.2.2.3.2-.5-.1-.4.1-.2.2h-.4c0 .1.1.2.3.2-.6 0 .4.4-.3.3.2.3.3.5.4.7-.5-.1 0-.2-.5-.3.2.2.5.4.4.6-.1 0-.2-.1-.3-.1.2.2-.1.3.1.6 0 0-.1 0-.1-.1 0 0-.1.1.1.1h-.1c.3 0 .6.3.8.4-.6-.2-.2.1-1-.2 0 0 .1.1.3.1-.1 0-.1 0-.3-.1.1.2.3.2.3.3-.1 0-.1-.1-.3-.1.2.1.4.2.2.3-.1 0-.1 0-.1-.1 0 .2.4.4.2.5-.4-.2-.2 0-.6-.1l.1.1h.2c0 .1.2.2.1.3l-.1-.1v.2h.2c.2.2.5.2.3.2 0 0 0 .1-.3 0 .1.1.2.2.1.2s-.4-.2-.5-.2c.3.2 0 .2.3.4-.1-.1-.3-.1-.3-.2l.2.1c-.1 0-.1 0-.3-.1-.1.1.5.2.2.2 0 0-.1 0-.1-.1-.2.1 0 .3-.1.4-.4-.2 0-.1-.4-.3 0 .2.3.6.1.7h.1c.5.3-.3 0-.1.2 0 0-.3-.2-.2-.2-.1 0 0 .3 0 .5l-.1-.1c-.2 0-.2.1-.3.1l.2.2c-.8-.4.1.7-.6.3l-.1-.1v.2c.2.2.1.1.3.2.1.1.1.2.1.3-.1-.2-.3-.3-.4-.4l.2.2c-.4-.3.3.4 0 .3l-.1-.1c0 .1.1.2 0 .2-.2-.2 0-.1-.2-.3 0 0 .2.5 0 .3v-.2c-.3-.2-.2-.2-.3-.2l-.2-.1.1.1c.4.7-.1.2.1.7-.1-.5-.1-.2-.3-.5-.1-.1-.2-.1-.2-.2.1.3-.2-.2 0 .2-.1-.1-.1 0-.2-.2 0 .1.1.2.2.3.1.4-.4-.3-.3.2 0 .2 0 .6-.1.8-.1-.2-.1-.4-.1-.4-.1-.1-.1-.1-.2 0 0-.1 0-.2-.1-.3v-.1c0 .1-.1.3-.1.4v-.4c0 .1-.1.2-.1.5l.1.1v-.3c0-.2.1.1.1.2v.1c.1.6.2-.1.3-.1l.1.5v-.4c0 .1.1.4.1.4.1.2 0-.2.1 0v.1-.2c0 .1.1.3 0 .3.2.2.1-.4.3-.1.1-.2-.1-.3-.1-.7l.4.7-.1-.3s.1 0 .1.1c0-.2-.1-.1-.1-.3.2.2.2-.2.4.2-.1-.2-.2-.1-.2-.3.3.5.1-.1.3.1.1.3 0 .2.2.4-.2-.5.2 0 .2-.1-.2-.3 0-.2.1-.4.1.1.3 0 .5.1v.1c-.2-.3-.1-.3-.1-.5.2.2.2.3.2.4l.1-.1c-.1-.1-.1-.2-.1-.2l.2.2c.1-.1-.1-.4.2-.4-.2-.2-.6-.5-.7-.7l.3.3s-.1-.1 0-.1l.2.2c.1 0-.1-.2-.1-.2.2.1.1.1.3.2 0 0-.1 0 0 0s.2 0 .3.1l-.2-.2c.1-.1.2.1.3.2-.1-.1.1-.1-.2-.3 0 0 .1.1.2.1-.1-.1.1-.2-.2-.4-.1-.3.4-.2.3-.4l.1.1c0-.2.1-.2-.1-.4 0 0 .2 0 .3.1 0-.1-.1-.2.1-.2.1.2.2.1.1.1.1 0 .3 0 .1-.2.2.2.3.1.3 0h-.2c0-.1 0-.1.1-.1l.3.2c.5 0-.5-.7.2-.5-.2-.2-.2 0-.5-.1.1-.1.6.1.6 0 .2 0-.4-.3-.3-.4-.1 0-.5-.2-.5-.3.1-.1.6.1.6.2h-.1s.1.1.2.1l-.1-.1c.1 0 .2-.1.4 0-.1-.1-.2-.1-.3-.1.2 0 .1-.2.2-.3-.1 0-.2 0-.2-.1.2-.1-.2-.2-.2-.3.2 0 .4.2.3 0 .2 0 .3.1.4.2-.2-.2.2-.2.3-.2l.1.1v-.1h-.3c.1 0 .1-.1.2 0-.1-.1-.4-.1-.6-.2.1 0-.1-.2.2-.1-.2.1.3.1.4.2v-.1h.1c.3-.1-.4-.2-.3-.3.2.1.4.1.3 0 0 .1-.3-.1-.4-.2.2-.1-.1-.1 0-.2h-.1c-.2-.1-.1-.1-.2-.2.1 0 .1.1.2.1-.3-.2.4-.1.2-.2.1 0 .4.1.5.1-.2-.2.3-.1.1-.2-.3 0-.2 0-.4-.2l.1.2-.3-.2c0 .1.1.2.1.2-.2-.1-.1-.1-.3-.1.4 0-.2-.2.1-.2l.6.2c.3-.1-.3-.3-.1-.5h-.1c-.2-.1 0-.1-.1-.2h.4c-.2 0 0-.1-.4-.2h.3c.1-.1-.6-.3-.5-.4.2.1.4 0 .5.2 0 0 .1-.1-.1-.1.1 0-.3-.2-.1-.2-.1 0-.3-.1-.3-.1h.1c-.1 0-.1-.1-.4-.1.7 0 0-.4.6-.5-.1-.1-.1-.2-.1-.3h.1c.2-.1-.6-.1-.4-.3.4 0 .2.1.3.1.7.1-.1-.2.3-.2.3-.1-.3-.2-.2-.3h.1c-.4-.1-.5-.3-.6-.4.3.1.1.1.4.1 0-.1-.5 0-.5-.1.2 0 .3-.1.6-.1v.1c.4 0 0-.1.1-.2h.2c0-.2-.5-.2-.4-.3h-.1c-.4-.1.2-.1-.1-.2h.4c-.1-.1-.4-.2-.5-.3.3.1.5.2.7.3 0-.1 0-.2-.2-.2l.1.1c-.3-.1-.5-.2-.5-.3.8 0 .2-.3.9-.4-.3-.2.1-.4.1-.7-.7.1 0-.1-.7 0v-.1l.4-.2c.2-.1.2 0 .3 0 0-.1.3-.1.5-.2-.2 0-.3 0-.3-.1l-.3.1c-.4-.2.6-.2.2-.3h.2c-.1-.1 0-.4-.6-.4.1 0 .3-.1.3 0 .1-.2-.6-.4-.3-.6h.2c-.1 0-.3 0-.2-.1h.2c-.1 0-.3-.1-.2-.1h.2c.2-.2-.5-.3-.6-.4.5-.1.6-.3.7-.4h.1c0-.3-.5-.4-.7-.6.5-.2.1-.5.3-.8-.1.1-.4.1-.4 0 .1-.1-.4-.1.1-.2.4-.1.3-.2.3-.3l-.6.1c.8-.4-.5-.5.2-.8-.2 0-.2-.1-.3-.1l.3-.1c0-.2 0-.3-.1-.4h.2c0-.1-.9.2-.9.1l.4-.2c-.1-.2.2-.5-.2-.5.1 0 .2-.1.2 0 0-.1.1-.5-.4-.2.4-.2 0-.2-.3-.2l.3-.1c-.4.1-.5.1-.6.1l.2-.1c.1-.2-.3.1-.2-.1l.2-.1c0-.1-.1 0-.3 0-.1 0 0-.2.2-.3-.2.1-.4.1-.3 0 .1-.1.2-.1.2-.1.1-.3-.4 0-.2-.3l.1-.1c.1.1.1.2.1.2.2-.1.2-.3.6-.4-.2 0-.7.1-.7 0l.1-.1h-.1v-.1c.2-.1 0-.2 0-.2-.2.2-.2.1-.4.3h.1l.1.1c-.2.1-.3.1-.2-.1l-.4.2c.3-.3.4-.6.6-.7-.2 0-.4-.3-.9 0-.1 0 .1-.2.1-.2h.1c-.2 0-.2-.2-.5.1 0-.2.3-.2.1-.3l.1-.1c.1-.3-.2-.3-.4-.2-.3.1-.5.2-.4-.3v.1c-.1-.3-.3-.3-.5-.4-.2 0-.4-.1-.5-.5-.1-.2-.2.1-.3.2l.1-.3-.2.3c-.2.2-.1-.9-.4-.4v.2c-.1-.1-.3.1-.2-.2 0 0-.1.2-.1.1v-.2l-.2.3c-.1-.1.1-.7-.2-.7-.1.1-.3.5-.2.6 0 0 .1.1.1.3l-.1.1c0 .5 0 1 .1 1.4l.1-.3v.2h-.1c0 .2.1 0 .1-.1v.3l.1-.5c0 .2-.1.4 0 .5.1-.2 0-.4.1-.6v.2c0 .1 0 .2-.1.3.1-.2.1-.1.2-.3 0 .3.2 0 0 .4 0-.1.2-.4.2-.4-.2.5.1.1-.1.7.2-.5.2-.2.4-.4l-.1.1v.3c.2-.4.3-.4.5-.7-.1.4-.3.4-.4.8.2-.3.2-.3.4-.5-.1.2 0 .1-.2.4.3-.5.1-.1.3-.3-.1.3-.3.4-.1.3 0 .5-.2.6-.2.6zm2 .7c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zm.1.2c0-.1 0-.1 0 0 .1-.1.1-.2.2-.2-.1 0-.2.1-.2.2zm1.5-1.6c.1 0 0 .1 0 0 0 .1-.1.1-.1.1l.1-.1zm-.4.2zm-.5 18.6zm-.1-14.7zm-1.4 14.8c-.1 0-.1 0 0 0-.1 0-.1 0 0 0zm-.4.3l-.1-.1.1.1z" />
            <path d="M248.2 958.7s0 .1.1.1l-.1-.1zm2.4-4.6zm.2 1.9l-.1-.1c-.1 0-.1 0 .1.1zm-.1-3.7v-.1zm0 3.5c-.1 0-.1 0 0 0zM247 959zm0 0c0 .1 0 .1 0 0zm0 .1zm.4 0v-.1.1zm.1-.1s-.1-.2-.1-.1v.1c0-.2.1.2.1 0zm1.1 1.1h-.2c.1.1.2.2.1.3.4.2-.1-.3.1-.3zm.5-.1c0 .1.1.1.1.2 0-.1 0-.2-.1-.2zm2.1-2.3l.2.1c.1 0 0 0-.2-.1zm-1-1.2h-.2l.2.1zm2 .6l-.1-.1zm1.2-5h-.3c.1 0 .4.1.3 0zm-.1-2.2c.2 0 .3-.1.1-.1 0 .1-.2.1-.1.1zm-.1-6.5h.1-.1z" />

            <path d="M244.5 954.8v.2-.2zm.1.6v-.7.5c0 .3.1.3.1 0-.1 0-.1.1-.1.2zm2.4-.6zm1.1-1.2c0 .1.1.1 0 0 .1.1.1.1 0 0zm.5 0zm-1.6 1.2zm-2.2-.2c0 .1 0 0 0 0zm1.8.9s0 .1.1.1l-.1-.1zm-.5.4s-.1-.2-.1-.4c0 .1.1.2.1.2v.2zm-1-.2zm1.9-.4s.1.1 0 0zm-2.2-11zm-.4-1.4v-.2zm4.7 10.3c0 .1 0 0 0 0zm.6-4.6c-.2.1-.3-.1-.6 0h.6zm-4.9 6zm4.3-6c-.1 0 0 0 0 0zm.3 3.4h-.1.1zm-.7.7zm.4-1.2zm.1-.5c-.1 0-.1 0 0 0zm-3.7-6.5c0-.1.1-.1.1-.2 0 .1-.1.2-.1.2zm-.7 10.2v-.1.1zm2.1-3.7zm0-4.7c-.1 0 0 0 0 0zm.1 4.5h.1-.1zm-1.3-6.5z" />
            <path d="M245.1 944.7s.2-.3.3-.5c.1-.1-.1.3-.3.5.2-.2.3-.4.4-.4 0 .1 0 .1-.1.1.2-.2.1 0 .3-.3v.1c.1-.2.2-.3.3-.4 0 0 .2-.2 0 0l-.1.1.1-.1c-.2.3-.1.1-.2.3.1-.1.3-.3.3-.2-.2.3-.1 0-.3.3v-.1l-.3.5c0 .1.1-.1.1 0 .1-.1.2-.2.3-.4.3-.2-.5.7-.1.4.2-.2.4-.5.3-.3l-.3.3c0 .1.4-.4.3-.1l-.1.1c-.2.3.2-.1.2-.1l-.2.3c.1 0 .3-.1.4-.1-.1.1-.2.1-.2.2.2 0 .1.2 0 .4l.3-.1-.1.1c-.1.1.2-.1.3-.2l-.2.2c.2-.1.6-.1.3.1h-.1c-.1.1.6-.3.3-.1-.1.2.3.2-.1.5.4-.2-.1.2.4 0-.2.2-.3.2-.5.4l.4-.1-.3.1.3-.1-.3.2h.1s.1-.1.2-.1c.2 0-.2.2-.3.2h.3-.2c.3 0-.3.1 0 .1.1 0 .2-.1.2-.1-.2.1-.1.1-.1.2l-.2.1c0 .1.1.1.2.2.1-.1.4-.2.5-.1l-.3.1c.2 0 .1-.1.4-.1 0 0-.4.1-.5.1h.1c-.1 0-.1 0-.3.1.2 0-.3.2.1.1h-.1c0 .1.1.1.2.2.3-.1.2 0 .4 0-.1.1-.3.2-.2.3h.4c-.3 0-.2.1-.4.1.1.1.1.1.3.2.1 0 .1 0 .2-.1 0 0-.1.1-.2.1.4.1-.7.4-.2.4l.3.1c0 .1-.2 0-.3 0 .4.1 0 .2.2.3-.8.1.1.3-.4.4h.4c.2.2-.3.4-.4.6-.1.1.9.1.5.2l-.3-.1c.4.2 0 .3.3.5h-.2c-.2 0 0 .1.2.1h-.3c-.1 0 .3.1.1.1h-.1c.1 0 0 .1.2.1-.1 0 .1.1-.1.2.3.1-.2.1.3.2-.4-.1-.4 0-.2.1-.1 0-.1 0-.3-.1 0 0 .1.1.3.1-.5 0 .4.3-.3.1.2.2.3.3.4.5-.4-.1 0-.1-.5-.3.2.2.5.3.4.4-.1 0-.2-.1-.3-.1.1.2-.1.2.1.4 0 0-.1 0-.1-.1 0 0-.1 0 .1.1.3.1.6.3.7.4-.5-.2-.2 0-.8-.3 0 0 .1.1.2.1 0 0-.1 0-.3-.1.1.1.3.2.3.2-.1 0-.1-.1-.2-.1.2.1.3.2.2.2-.1 0-.1-.1-.1-.1 0 .1.4.4.2.4-.4-.2-.1 0-.5-.2l.1.1.2.1s.2.2.1.2l-.1-.1v.1h.1c.1.1.4.2.3.2h-.2c.1.1.2.2.1.2-.1-.1-.4-.2-.4-.3.3.2 0 .1.3.3-.1-.1-.2-.2-.3-.2l.2.2c-.1 0-.1 0-.2-.1-.1 0 .4.2.2.2l-.1-.1c-.1 0 .1.2-.1.2-.3-.2 0-.1-.3-.3 0 .1.2.4.1.5.4.4-.2-.1-.1.1l-.2-.2c-.1 0 0 .2.1.4l-.1-.1c-.1-.1-.1 0-.2 0l.2.2c-.6-.5.1.5-.4 0 0 0 0-.1-.1-.1v.2c.1.2.1.1.2.2s.1.2.1.2c0-.2-.2-.3-.3-.4 0 .1.1.1.1.2-.3-.3.2.4 0 .2l-.1-.1c0 .1.1.2 0 .2-.1-.2 0-.1-.1-.3 0 0 .2.5 0 .3v-.2c-.2-.3-.1-.2-.2-.2l-.1-.1.1.1c.3.7 0 .2.1.6-.1-.4-.1-.2-.2-.5 0-.1-.1-.2-.1-.2.1.2-.1-.2 0 .2 0-.1 0 0-.1-.2 0 .1.1.2.1.3 0 .3-.2-.3-.2.1v.7c-.1-.1 0-.4 0-.4-.1-.1-.1-.1-.1 0 0-.1 0-.2-.1-.3v-.2c0 .1 0 .3-.1.4v-.4c0 .1-.1.2-.1.4v-.2c0-.2.1.1.1.2v.1c.1.6.1-.1.2-.1v.4-.4c0 .1.1.3.1.4.1.2 0-.2.1.1v.1-.1c0 .1.1.3 0 .2.1.2.1-.3.2 0 .1-.2-.1-.3-.1-.7l.3.7-.1-.3.1.1c0-.2 0-.1-.1-.3.1.2.1-.2.3.3-.1-.2-.1-.1-.1-.3.2.5 0-.1.2.1.1.3 0 .1.1.3-.1-.4.1.1.2 0-.2-.3 0-.2 0-.3.1.1.2.1.4.2v.1c-.2-.3-.1-.3-.1-.4.1.2.2.3.2.4-.1-.1-.1-.2-.1-.2l.1.2c.1-.1-.1-.3.1-.3-.2-.2-.5-.5-.5-.7.1.1.2.3.3.3 0 0-.1-.1 0-.1l.1.2c.1.1-.1-.2-.1-.2.1.2.1.1.2.2 0 0-.1 0 0 0s.2.1.3.2l-.2-.2c0-.1.2.2.3.2-.1-.1.1 0-.1-.3 0 0 .1.1.2.1-.1-.1.1-.1-.1-.3-.1-.3.3 0 .3-.2l.1.1c0-.1 0-.2-.1-.3 0 0 .2.1.3.2 0-.1-.1-.2.1-.1l.1.1c.1 0 .2.1.1-.1.2.2.3.1.2.1l-.2-.1s0-.1.1-.1l.3.2c.4.1-.4-.6.2-.3-.2-.2-.2 0-.4-.2.1 0 .5.2.5.1.2 0-.4-.3-.2-.3-.1 0-.4-.2-.5-.3.1 0 .5.2.5.3h-.1s.1.1.2.1l-.1-.1c.1 0 .2-.1.3.1-.1-.1-.2-.1-.2-.1.2 0 .1-.1.2-.1-.1 0-.2-.1-.2-.1.2 0-.2-.1-.2-.2.2 0 .4.2.3.1.1 0 .3.1.4.2-.2-.2.2-.1.3-.1l.1.1v-.1l-.2-.1h.1c-.1-.1-.4-.1-.5-.3.1 0-.1-.1.2 0-.1.1.3.1.3.2v-.1h.1c.3 0-.3-.2-.3-.3.2.1.3.1.3.1s-.3-.1-.4-.2c.1 0-.1-.1 0-.1h-.1c-.2-.1-.1-.1-.2-.2.1 0 .1.1.1.1-.3-.1.3 0 .2-.1.1 0 .3.1.4.1-.2-.1.3 0 .1-.1-.2 0-.2 0-.4-.2l.1.2-.3-.2.1.1c-.2-.1-.1-.1-.3-.1.4.1-.2-.2.1-.1l.6.2c.3 0-.2-.2-.1-.3h-.1c-.2-.1 0-.1-.1-.1.2.1.3 0 .4.1-.1 0 0-.1-.3-.2h.3c.1-.1-.5-.2-.4-.3.2.1.3.1.5.2l-.1-.1c.1 0-.2-.1-.1-.1-.1 0-.3-.1-.3-.1h.1c-.1 0-.1-.1-.3-.1.6 0 0-.3.5-.2-.1-.1-.1-.2-.1-.2h.1c.2-.1-.6-.1-.3-.2.3 0 .2.1.3.1.6.1-.1-.1.3-.1.2 0-.2-.1-.2-.2h.1c-.3-.1-.4-.2-.5-.3.3 0 .1 0 .4.1 0 0-.4 0-.5-.1h.5v.1c.4 0 0-.1.1-.1h.2c0-.1-.4-.1-.4-.2h-.1c-.4-.1.2 0-.1-.1h.4c-.1 0-.4-.1-.4-.2.3 0 .4.1.6.2 0 0 0-.1-.2-.2 0 0 .1 0 .1.1-.3-.1-.5-.1-.5-.2.8 0 .2-.2.8-.2-.3-.1.1-.3.1-.4-.6.1 0 0-.6 0v-.1l.4-.1h.3c0-.1.3 0 .4-.1-.2 0-.3 0-.2-.1l-.3.1c-.3-.1.5-.1.2-.2h.2c-.1 0 0-.2-.5-.2h.3c.1-.2-.6-.2-.3-.4h.1s-.3 0-.1-.1h.2c-.1 0-.3 0-.2-.1h.2c.2-.2-.4-.1-.6-.2.4-.1.6-.2.6-.3h.1c0-.2-.4-.2-.6-.3.4-.2.1-.4.3-.6-.1 0-.3.1-.4.1.1-.1-.3 0 .1-.1s.2-.2.2-.2l-.5.2c.7-.4-.4-.3.2-.6h-.3l.3-.1c0-.1 0-.2-.1-.3l.2-.1c0-.1-.8.3-.8.2l.4-.2c-.1-.1.2-.4-.2-.3.1 0 .2-.1.2-.1 0-.1.1-.4-.4 0 .3-.2 0-.1-.2-.1l.2-.1c-.3.1-.4.2-.5.2 0 0 .2-.1.1-.1.1-.1-.2.1-.2 0l.2-.1c0-.1-.1 0-.3.1-.1 0 0-.1.2-.3-.1.1-.3.2-.3.1.1-.1.1-.1.2-.1.1-.2-.3.1-.2-.2l.1-.1.1.1c.2-.2.2-.3.5-.4-.2.1-.6.3-.5.1l.1-.1h-.1v-.1c.1-.2 0-.1 0-.2-.2.2-.2.1-.3.3h.2c-.1.1-.2.1-.1 0-.1.1-.3.2-.4.3.2-.3.3-.5.5-.7-.2 0-.3-.1-.7.3-.1 0 .1-.1.1-.2 0 0 .1 0 .1-.1-.1.1-.2-.1-.4.2 0-.2.2-.2.1-.3l.1-.1c.1-.6-.8.6-.6-.2v.1c-.1-.4-.6.1-.7-.5 0-.1-.1.1-.2.3l.1-.3-.2.3c-.1.2-.1-.8-.3-.3v.2s-.2.1-.1-.1v.1-.2l-.1.3c-.1-.1.1-.6-.1-.7-.1.1-.2.5-.1.6v1.7l.1-.3v.2c0 .2 0 0 .1-.1v.2l.1-.4v.5c0-.2 0-.4.1-.5v.4c0-.1.1-.1.1-.3 0 .3.1-.1 0 .4 0-.1.1-.3.1-.3-.1.5.1 0-.1.6.1-.5.1-.2.3-.4v.4c.1-.4.2-.4.3-.7-.1.4-.2.4-.3.8.1-.3.2-.3.2-.5-.1.2 0 .1-.1.4.2-.5.1-.1.2-.3-.1.2-.2.4-.1.3-1.8-.4-1.9-.3-1.9-.3zm1.3-.1zm.1.1c.1-.1.1-.2.1-.2-.1.1-.1.2-.1.2zm1.2-1.5c.1 0 0 0 0 0 0 .1 0 .1 0 0l-.1.1c.1 0 .1-.1.1-.1zm-.3.2c0 .1 0 .1 0 0zm-.4 11.4zm-.3-8.6h.1-.1z" />
            <path d="M245.9 954.5c-.1-.1-.1 0 0 0zm-.3.1c0-.1 0-.1 0 0zm-.2-.1v.1-.1zm1.5-2.4zm.2 1.1l-.1-.1c0 .1 0 .1.1.1zm-.2-2.2zm.2 2.1c-.1 0-.1 0 0 0zm-2.4 1.5c-.1 0-.1 0 0 0zm-.1 0s.1 0 0 0zm0 .1c0-.1 0-.1 0 0zm.3 0v-.1.1zm.1-.1s-.1-.2-.1-.1l.1.1c-.1-.2 0 .2 0 0zm.7 1.1h-.1c0 .1.1.2.1.3.1.2-.2-.3 0-.3zm.3.1c0 .1.1.1.1.2 0-.1-.1-.2-.1-.2zm1.6-1.3l.2.2-.2-.2zm-.9-1l-.2-.1.2.1zm1.6.8v-.1zm1.1-3.1h-.3.3zm-.2-1.4c.2 0 .3 0 .1-.1l-.1.1zm0-4.2h.1-.1z" />
          </g>
        </g>
      </svg>
    );
  }
}

export default ShorePond;

/*
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
 
  
</svg>

*/
