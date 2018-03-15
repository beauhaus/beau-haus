

/********************************************************/
/****************POND CONTAINER*************************/
/********************************************************/

class Pond extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
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
    }
    componentDidMount() {
      this.state.waveTime
        .fromTo(
          "#wave-1",
          3,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "+=1"
        )
        .fromTo(
          "#wave-2",
          3,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "+=1"
        )
        .fromTo(
          "#wave-3",
          3,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "2"
        )
        .fromTo(
          "#wave-4",
          4,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "3"
        )
        .fromTo(
          "#wave-5",
          5.5,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "3"
        )
        .fromTo(
          "#wave-6",
          4,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "4"
        )
        .fromTo(
          "#wave-7",
          5,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "5"
        )
        .fromTo(
          "#wave-8",
          4,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "6"
        )
        .fromTo(
          "#wave-9",
          4,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "7"
        )
        .fromTo(
          "#wave-10",
          3,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "8"
        )
        .fromTo(
          "#wave-11",
          5,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: Power1.easeInOut, repeat: -1, yoyo: true },
          "8"
        );
  
      this.state.swellTime
        .fromTo(
          "#swell-stop1",
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
          "0"
        )
        .fromTo(
          "#swell-stop2",
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
          "-=3.5"
        )
        .fromTo(
          "#swell-stop3",
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
          "-=3.5"
        )
        .fromTo(
          "#swell-stop4",
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
          "-=3.5"
        );
    }
  
    render() {
      return (
        <svg id="pond-svg" viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <linearGradient
            id="pond-base-grad"
            x1="959"
            x2="959"
            y1="1081"
            y2="881"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              id="pond-stop1"
              offset="0"
              stopColor="var(--darkMist)"
              stopOpacity="1"
            />
            <stop
              id="pond-stop2"
              offset="1"
              stopColor="var(--darkMist)"
              stopOpacity="0"
            />
          </linearGradient>
          <path
            id="pond-base"
            fill="url(#pond-base-grad)"
            d="M-1 881h1920v200H-1z"
            opacity="1"
          />
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
          <path
            id="swells"
            fill="url(#swells-grad)"
            d="M-1 880h1920v200H-1z"
            opacity=".5"
          />
          <g className="waves-container" opacity=".5">
            <radialGradient
              id="wave1-grad"
              cx="391.1543"
              cy="74.3203"
              r="94"
              gradientTransform="matrix(3.883 0 0 .4362 -1349.8418 1026.5841)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-1"
              cx="169"
              cy="1059"
              fill="url(#wave1-grad)"
              rx="365"
              ry="41"
            />
            <radialGradient
              id="wave2-grad"
              cx="660.5352"
              cy="-103.0996"
              r="94"
              gradientTransform="matrix(3.883 0 0 .3457 -1349.8418 1023.1462)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-2"
              cx="1215"
              cy="987.5"
              fill="url(#wave2-grad)"
              rx="365"
              ry="32.5"
            />
            <radialGradient
              id="wave3-grad"
              cx="1123.3218"
              cy="-333.5391"
              r="94"
              gradientTransform="matrix(2.9007 0 0 .2872 -1446.0977 1073.8035)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-3"
              cx="1812.3"
              cy="978"
              fill="url(#wave3-grad)"
              rx="272.7"
              ry="27"
            />
            <radialGradient
              id="wave4-grad"
              cx="800.6421"
              cy="-437.9844"
              r="94"
              gradientTransform="matrix(2.9007 0 0 .2234 -1446.0977 1039.8474)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-4"
              cx="876.3"
              cy="942"
              fill="url(#wave4-grad)"
              rx="272.7"
              ry="21"
            />
            <radialGradient
              id="wave5-grad"
              cx="1288.3618"
              cy="-819.4141"
              r="94"
              gradientTransform="matrix(3.7465 0 0 .1543 -3158.6169 1036.8989)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-5"
              cx="1668.2"
              cy="910.5"
              fill="url(#wave5-grad)"
              rx="352.2"
              ry="14.5"
            />
            <radialGradient
              id="wave6-grad"
              cx="1237.9141"
              cy="-949.0703"
              r="94"
              gradientTransform="matrix(3.7465 0 0 .1543 -3158.6169 1036.8989)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-6"
              cx="1479.2"
              cy="890.5"
              fill="url(#wave6-grad)"
              rx="352.2"
              ry="14.5"
            />
            <radialGradient
              id="wave7-grad"
              cx="410.1729"
              cy="-99.8262"
              r="94"
              gradientTransform="matrix(3.4379 0 0 .3191 -1021.3169 1054.8591)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-7"
              cx="388.8"
              cy="1023"
              fill="url(#wave7-grad)"
              rx="323.2"
              ry="30"
            />
            <radialGradient
              id="wave8-grad"
              cx="803.7827"
              cy="-120.2598"
              r="94"
              gradientTransform="matrix(4.1064 0 0 .266 -2354.6394 1068.9844)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-8"
              cx="946"
              cy="1037"
              fill="url(#wave8-grad)"
              rx="386"
              ry="25"
            />
            <radialGradient
              id="wave9-grad"
              cx="356.0615"
              cy="-471.7422"
              r="94"
              gradientTransform="matrix(4.0106 0 0 .1968 -1261.0344 1036.3424)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-9"
              cx="167"
              cy="943.5"
              fill="url(#wave9-grad)"
              rx="377"
              ry="18.5"
            />
            <radialGradient
              id="wave10-grad"
              cx="1234.4678"
              cy="-79.3936"
              r="94"
              gradientTransform="matrix(3.3936 0 0 .3457 -2588.3118 1071.95)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-10"
              cx="1601"
              cy="1044.5"
              fill="url(#wave10-grad)"
              rx="319"
              ry="32.5"
            />
            <radialGradient
              id="wave11-grad"
              cx="1025.2515"
              cy="-726.1875"
              r="94"
              gradientTransform="matrix(6.5851 0 0 .1436 -6160.3887 1001.7933)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="var(--darkMist)" />
              <stop offset="1" stopColor="var(--darkMist)" stopOpacity="0" />
            </radialGradient>
            <ellipse
              id="wave-11"
              cx="591"
              cy="897.5"
              fill="url(#wave11-grad)"
              rx="619"
              ry="13.5"
            />
          </g>
        </svg>
      );
    }
  }
  
  /********************************************************/
  /****************SCENE COMPONENT*************************/
  /********************************************************/
  
  class Scene extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        sceneSound: new Audio(
          "https://www.dropbox.com/s/yiuttz27526uk1q/atmosphere.mp3?raw=1"
        )
      };
    }
    componentDidMount() {
      this.state.sceneSound.play();
      this.state.sceneSound.loop = true;
    }
    render() {
      return (
        <div className="scene-container">
          <Pond />
          
       
        
        </div>
      );
    }
  }
  /*
  
  <Tree />
    <Bird />
  */
  
//   ReactDOM.render(<Scene />, document.getElementById("app"));
  