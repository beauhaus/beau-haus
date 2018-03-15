import React from 'react';
import ReactDOM from 'react-dom';

import ShorePond from './LandingTree/ShorePond';
import BackTree from './LandingTree/BackTree';
import MidTree from './LandingTree/MidTree';
import FrontTree from './LandingTree/FrontTree';
// import Header from './Header';
// import Action from './Action';
// import Options from './Options';

// import OptionModal from './OptionModal';



class Background extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  render() {
    return (
      <div>
      {console.log("background")}</div>
    )
  }
}

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  render() {
    // const title = 'Indecision';
    // const subtitle = 'Indecision Sub';

    return (
      <div className="svg-container">
      <Background/>
      <h1 className="beauhaus-banner">BEAUHAUS</h1>
      <ShorePond/>
      <BackTree/>
      <MidTree/>
      <FrontTree/>
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="none">
          <linearGradient id="bg-grad">
            <stop offset="0" stopColor="var(--offset-match)" />
            <stop offset="1" stopColor="var(--bg-right)" />
          </linearGradient>
          <path id="background" fill="url(#bg-grad)" d="M0 0h1920v1080H0z" />

          <linearGradient id="water-grad" x1="960" x2="960" y1="1080" y2="876" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="var(--water-foreground)" stopOpacity="0" />
            <stop offset="1" stopColor="var(--offset-match)" />
          </linearGradient>
          <path fill="url(#water-grad)" d="M1 876h1918v204H1z" />
          <g className="shore">
            <path
              fill="var(--shore-color-3)"
              d="M1440.3 1079.5h59.4l.7-3.1L1.1 947.6C.8 958.5.4 969.3 0 980.2l1161.4 99.8c93-.4 186-.5 278.9-.5z"
            />
            <path
              fill="var(--shore-color-1"
              d="M0 1027.7c.1 17.4.2 34.9.2 52.3H1567L2.7 974.4c0 3.8-.1 7.6-.1 11.4 0-2.9-2.1 42-1.5 42.2-.4-.1-.7-.2-1.1-.3z"
            />

            <path
              fill="var(--shore-color-2)"
              d="M.56135275 972.91982078l908.75249 52.50468393-.61139146 10.58198-908.75249-52.50468393z"
            />
          </g>
          <path
            fill="var(--tree-back)"
            d="M39.4 1058.4l27 8.2 32.1-178.1-27-8.2zm43.5-186.5l15.6 5.8 37.7-175.3-15.6-5.7zm47.8-178l10.3 4 38.1-174.6-10.4-4.1zm41.7-184l5 2.8 39.2-124.3-5-2.8z"
          />
          <g className="twig">
            <g className="twig-dk">
              <path d="M46 823l1 6.7 41-117.3-1-6.7zm43-123.9l.7 5.8 41.7-111.5-.7-5.9zm46.1-119.9l.2 4.1 42.9-98.4-.3-4.2z" />
              <path d="M84.5 1023.4v6.8l59-109.3.1-6.8zm62.1-115.5l-.3 5.9 58.9-103.6.3-5.8zm63.9-113.4l-.5 4.1 57.9-90.4.5-4.2z" />
              <path d="M1.9 720.4l-4.6-11 54 213.8 4.6 11.1zm100.7 252.3l.5 9.2L45.8 819l-.4-9.1zM-3.9 680.6L43 808.7l-.6-8-46.2-126.3c-.1 2.1-.1 4.1-.1 6.2zm72.7-494.8l3.6-6.5-41.9 124.6-3.6 6.4z" />
              <path d="M145.8 862.8l3.6-6.5-41.9 124.6-3.6 6.4zm92.9-755.9l6.8-5.6-101.4 115-6.7 5.6z" />
            </g>
            <g className="twig-grey">
              <path d="M45.5 444.8l-1.6 8.6 97.2-73 1.6-8.6zm106.9-79.6l-1.5 5.7 93-54.4 1.5-5.7zM90.2 688l-2.9 5.3 77.4-49 2.9-5.3zm85.6-54l-2.6 4.5 74.9-44.6 2.6-4.4zm80.1-49.7l-2 2.9 68.9-34.9 1.9-3z" />
              <path d="M53.5 956.6l-2.2 6.4 90.8-84.8 2.2-6.4zm95.6-89.7l-2.1 5.5 88.8-79.5 2.1-5.4zm94.9-82.2l-1.7 3.8 83.6-67.3 1.8-3.8z" />
              <path d="M141.9 228.8l2.7 5.2-2.6-119.1-2.8-5.2zm-2.7-130.4l1.4 3.9L153.2-4.3l-1.4-4z" />
            </g>
          </g>
          <g className="flower flower-1">
            <path
              fill="var(--fl-base)"
              d="M97.86977 899.55509l20.78874 20.78874-23.54643 23.54643-20.78874-20.78874z"
            />
            <path
              fill="var(--fl-petal)"
              d="M100.70135 912.15622l13.47589 17.76864-15.29856 11.60256-13.47589-17.76864z"
            />
            <path
              fill="var(--fl-frame)"
              d="M101.81915 917.99613l10.45439 13.78291-10.27743 7.79547-10.45439-13.78291z"
            />
            <path fill="var(--fl-stamen)" d="M97.52562 911.99478l9.12493 12.03017-8.20601 6.22429-9.12493-12.03017z" />
          </g>
          <g className="flower flower-2">
            <path fill="var(--fl-frame)" d="M73.7 840.3l9.2-17.1 15.3 12.3-9.2 17.1z" />
            <path fill="var(--fl-petal)" d="M80.4 833.2l3.4-12.2 11.7 5.8-3.3 12.1z" />
            <path fill="var(--fl-stamen)" d="M85.6 829.8l11.3-1.1L96 840l-11.4 1.1z" />
          </g>

          <g className="leaf-dk">
            <g>
              <path d="M40.4 601.9L5.2 673.3l23.7-76z" />
              <path d="M51 607.9L5 673.4l35.3-71.8zm-54.6-29.8v1.2l40.4 18.5 1.4-7.6-41.8-12.1z" />
              <path d="M-3.6 579.2v1.3l38 24.3 2.5-7.1-40.5-18.5z" />
            </g>
            <g>
              <path d="M222.6 792.2l30.1 69.5-37.3-57.1z" />
              <path d="M223.2 795.9l-39.4 36.5 38-44z" />
              <path d="M218.9 798.9l-54.5 15.2 55.7-26.9z" />
            </g>
            <g>
              <path d="M156.9 741.4l-20.5 73 26.3-62.6z" />
              <path d="M156.5 745.1l31 26.9-30.2-34.4z" />
              <path d="M159.9 747.1l41.7 3.2-43.1-14.2z" />
            </g>
            <g>
              <path d="M179.2 526.9l12.8 37.2-17-34.4z" />
              <path d="M179.4 528.6l-21.8 2.5 21.3-6z" />
              <path d="M177 528.5l-28.8-10.7 29.9 6.3z" />
            </g>
          </g>
          <g className="leaf-light">
            <g>
              <path d="M261.5 718.9l47.7 26.2-48.2-16.3z" />
              <path d="M263.4 720.7l-14.9 36.9 11-40.5z" />
              <path d="M261.4 724.2l-33.8 31.3 30.3-38.3z" />
            </g>
            <g>
              <path d="M107.8 462l33.3-14.6-28 22.8z" />
              <path d="M109.5 462.1l14.9 39.8-18.4-39.8z" />
              <path d="M110.7 466.3l4.3 49.3-9.6-52.3z" />
            </g>
            <g>
              <path d="M33.7 477.4L4.6 499.3l22-28.6z" />
              <path d="M32 477.7L8.4 442.4l27 34.5z" />
              <path d="M29.9 473.9l-15.5-47 21.3 48.7z" />
            </g>
          </g>
          <g className="leaf-green">
            <g>
              <path d="M-2.1 778l14-3.7-.8-9.4-13.3 5.7c.1 2.5.1 5 .1 7.4z" />
              <path d="M8.9 766.6l18.9 34.9-14.1-38.3z" />
              <path d="M11.4 769.9l42.7 29.4-38.4-36.1z" />
            </g>
            <g>
              <path d="M108.8 357.3L85 296.9l14.3 61z" />
              <path d="M107.1 355l-35.4 18 38.7-13.1z" />
              <path d="M103.7 357.4l-30.5 41.9 37.1-37.4z" />
            </g>
            <g>
              <path d="M114 409.6l59-21.6-53.7 28.9z" />
              <path d="M116.7 409.3l8.2 37.8-13.8-37.1z" />
              <path d="M117 413.4l-12.4 49.7 5-51.7z" />
            </g>
            <g>
              <path d="M209.3 398.6l53.8 10.3-52-3.7z" />
              <path d="M211.5 399.5l-6 26.4 1.3-28.2z" />
              <path d="M210.4 402.1l-26.2 25.5 21-29.6z" />
            </g>
          </g>
          <path
            fill="var(--tree-mid)"
            d="M52 719.5l34.7 3.6 16.2-182-34.7-3.6zm29.2-192.2l20.3 3.1 23.5-180-20.2-3.1zm29.2-186l13.1 3.2L161 167.3l-13.2-3.2zm42.9-182.2l8 2.7L201 27.5l-8-2.6zm45.8-140.5l6.6 2.1 5.1-21.5-6.6-2.1zM31.2 906l43 4.5 16.3-182.9-43-4.5zm-18.7 168.2l51.3 5.4 14-156.8-51.4-5.3z"
          />
          <g className="flower flower-3">
            <path fill="var(--fl-base)" d="M50.4 872.7l17.4-12.3 9 30.3-17.4 12.2z" />
            <path fill="var(--fl-frame)" d="M51 877l13.9-6.4 3.6 18.4-13.9 6.4z" />
            <path fill="var(--fl-petal)" d="M51.4 880.5l10.8-5 2.5 12.4-10.8 4.9z" />
            <path fill="var(--fl-stamen)" d="M57.9 880.5l9.4-4.4 2 9.9-9.4 4.3z" />
          </g>
          <g className="flower flower-4">
            <path fill="var(--fl-base)" d="M53 767.4l-13 18.3-13.4-19.3 13.1-18.3z" />
            <path fill="var(--fl-frame)" d="M49.3 770.2l-13 13.8-9.3-17.8 13-13.8z" />
            <path fill="var(--fl-petal)" d="M44.7 765.3L36 780l-8.1-9.8 8.7-14.7z" />
            <path fill="var(--fl-stamen)" d="M40 768.4l-5.6 7.9-4.4-6.2 5.7-7.9z" />
          </g>
          <g className="flower flower-5">
            <path fill="var(--fl-base)" d="M81 762.1l6.6-10.2 10.1 7.2-6.6 10.1z" />
            <path fill="var(--fl-frame)" d="M83.1 760.3l6.9-8.1 7.5 7-7 8.1z" />
            <path fill="var(--fl-petal)" d="M86.4 761.9l4.2-7.9 6 3.4-4.2 8z" />
            <path fill="var(--fl-stamen)" d="M89.1 759.9l2.8-4.4 3.3 2.3-2.8 4.4z" />
          </g>
          <g className="twig-dk">
            <path d="M57.1 925.6v6.8l59-109.3v-6.8zm62.1-115.4l-.3 5.8 58.9-103.5.3-5.9zm61.9-107.5l-.5 4.1 57.9-90.4.5-4.2zM91.7 582.9l-1.7 5.5 70.9-79.5 1.7-5.4zm74.2-82.2l-1.4 3.8 66.8-67.3 1.4-3.8z" />
            <path d="M71.7 379.6l-1.3 3.1 14.2-88.6L86 291z" />
            <path d="M102.8 450.5l.7 5.8-55-137.2-.7-5.7z" />
          </g>
          <g className="flower flower-6">
            <path
              fill="var(--fl-frame)"
              d="M57.87117 976.55689l20.78874 20.78874-23.54643 23.54643-20.78874-20.78874z"
            />
            <path
              fill="var(--fl-base)"
              d="M60.69795 989.15432l13.47589 17.76864-15.29856 11.60256-13.47589-17.76864z"
            />
            <path
              fill="var(--fl-frame)"
              d="M61.82315 994.99633l10.45439 13.78291-10.27743 7.79547-10.45439-13.78291z"
            />
            <path fill="var(--fl-stamen)" d="M57.52972 988.99548l9.12493 12.03017-8.20601 6.22429-9.12493-12.03017z" />
          </g>

          <path
            fill="var(--tree-front)"
            d="M69.4 1071.8l50-7.8-25-182-50 7.9zM46.6 858.7l39.2-2.6L77 672.7l-39.2 2.6zM31.2 661l31.5-1.9L55 475.6l-31.5 1.9zm-2.6-192.6l25.2-2.5-14.7-183.1-25.2 2.5zM12.5 274.5l13.9-1.5L11 90l-13.9 1.4z"
          />
          <g className="flower flower-7">
            <path fill="var(--fl-base)" d="M20.21268 841.24048l30.07128-11.22858 11.7183 31.3828-30.07128 11.22858z" />
            <path fill="var(--fl-frame)" d="M20.1942 846.47408l21.34422-10.30002 8.12702 16.84122-21.34422 10.30002z" />
            <path fill="var(--fl-petal)" d="M20.82795 841.34203l27.80745-6.2415 6.0006 26.73418-27.80745 6.2415z" />
            <path fill="var(--fl-stamen)" d="M23.85132 847.83144l13.02152-4.86222 3.77784 10.11744-13.02152 4.86222z" />
          </g>
          <g className="flower flower-8">
            <path fill="var(--fl-base)" d="M80.4 958.6l-27.1 14.3-7.2-28.2 27.2-14.3z" />
            <path fill="var(--fl-petal)" d="M74 959.9l-24.6 9.3-2.7-24.6 24.7-9.2z" />
            <path fill="var(--fl-base)" d="M70.6 952.2l-19.5 12.3-5.4-14.9 19.5-12.3z" />
            <path fill="var(--fl-stamen)" d="M62.7 953.4L51 959.6l-2.3-9.1 11.7-6.2z" />
          </g>
          <g className="flower flower-9">
            <path fill="var(--fl-base)" d="M63.4 936.6l-27.1 14.3-7.2-28.2 27.2-14.3z" />
            <path fill="var(--fl-petal)" d="M57 937.9l-24.6 9.3-2.7-24.6 24.7-9.2z" />
            <path fill="var(--fl-frame)" d="M53.6 930.2l-19.5 12.3-5.4-14.9 19.5-12.3z" />
            <path fill="var(--fl-stamen)" d="M45.7 931.4L34 937.6l-2.3-9.1 11.7-6.2z" />
          </g>
          <g className="leaf-light">
            <g>
              <path d="M144.8 113.8l-38.3-6.4 39.5 1.4z" />
              <path d="M141 112.6l-42.8-28 47 22.5z" />
            </g>
            <g>
              <path d="M150.6 857.2l49.9 14.8-50.6-9.3z" />
              <path d="M152.5 858.2l-15.9 20.3 11.9-22.3z" />
              <path d="M150.4 860.1l-35.7 17.1 32.1-21z" />
            </g>
          </g>
          <g className="leaf-grey">
            <g>
              <path d="M253.7 482.4l-27-42.2 5.1-3.2 22.2 45.1-.3.3z" />
              <path d="M275.9 460.7l-45.8-20.2 2.5-5.5 43.4 25.3c0 .2-.1.3-.1.4z" />
            </g>
            <g>
              <path d="M292.6 744.2l55 52.2-56.8-37.9z" />
              <path d="M291.8 751.9l-44.2 35.3 40.8-46.6z" />
            </g>
            <g>
              <path d="M28.2 918.9l11.1 72-19.7-62.7z" />
              <path d="M-1.6 936.5v2l29.6-16 .4-7.3-30 21.3z" />
              <path d="M-1.6 918.4v4.8l25.3.9 3.5-10.3-28.8 4.6z" />
            </g>
          </g>

          <g className="leaf-green">
            <g>
              <path d="M167.9 353.9l-37.6-9.1 34.8 13.3z" />
              <path d="M166.2 353.9l-2.9 20.9 6.5-20.8z" />
              <path d="M166.3 356.1l10.4 26.5-6-27.9z" />
            </g>

            <g>
              <path d="M244 596.9l41 26-43-20.9z" />
              <path d="M245.4 598.3l-19.3 15.9 16.3-18.8z" />
              <path d="M243.1 599.6l-36.3 8.3 34.1-12.9z" />
            </g>

            <g>
              <path d="M17.6 299.1l-51.9-17.6L12.9 305z" />
              <path d="M15.2 298.9L8 329.6l12.1-30.2z" />
              <path d="M15 302.1l10.9 40.5-4.5-42.1z" />
            </g>
            <g>
              <path d="M47 313.3l-11.8 29.3 16.6-28z" />
              <path d="M46.3 316.5l4.5 41.6 2.1-42.2z" />
            </g>
            <g>
              <path d="M236.2 319.6l15.8 27.3-11.8-30.3z" />
              <path d="M238.3 322.1l35.6 22-32-27.5z" />
            </g>
            <g>
              <path d="M223 632.3l-11.8 29.3 16.6-28z" />
              <path d="M222.3 635.5l4.5 41.6 2.1-42.2z" />
            </g>
            <g>
              <path d="M-.3 97.3L26 114.8l-24-22z" />
              <path d="M2.7 98.6l41.7 4L3.5 92z" />
            </g>
            <g>
              <path d="M30 372.3L2 389.8l25.6-22z" />
              <path d="M26.8 373.6l-44.4 4L26 367z" />
            </g>
            <g>
              <path d="M236.5 113L216 137.1l24.6-21.3z" />
              <path d="M235.4 110.2l-45.3 2.9 48.7 4.8z" />
              <path d="M237.3 114.5l-8.8 41 15.3-39.4z" />
              <path d="M236.3 111.3l-35.6 22 39-16.3z" />
            </g>
          </g>
          <g className="leaf-dk">
            <g>
              <path d="M40.2 502.4L71 563l-39.8-54.4z" />
              <path d="M-3.8 515.9l44.4-10.6-1.2-5.9-43.2 16.1v.4z" />
              <path d="M-3.9 497v3l39.4 5.8 2.1-7.9-41.5-.9z" />
            </g>
            <g>
              <path d="M148.6 573.1l-1 75.8-10.6-67.4z" />
              <path d="M147.7 576.7l-50.9 17.2 52.7-24.6z" />
              <path d="M142.5 577.7l-55.9-8.5 61.9-1.6z" />
            </g>
            <g>
              <path d="M79.1 762.4l62.8 75.1-70.1-64.9z" />
              <path d="M81 766.1l-48.4 25.4 44.3-33z" />
              <path d="M75.4 767.9l-76.3.8 75.1-11.8z" />
            </g>
            <g>
              <path d="M184.1 174.9l37.1 21.6-39.7-15.2zm-4.3 8.6l-8.5 28.6 4.4-28.8z" />
              <path d="M183.6 184.4l-12.3 27.8 8.4-28.7z" />
            </g>
            <g>
              <path d="M66 222.3l-2.4 36.3-7.3-35.3z" />
              <path d="M65.1 223.8L23 218.7l43.7 2z" />
              <path d="M60.9 222.9l-45.8-18.8 50.8 15.5z" />
            </g>
            <g>
              <path d="M99.7 25.1L147.5 10l1.8 5.8-49.3 9.7c-.1-.2-.2-.3-.3-.4z" />
              <path d="M114.9 52.2l31.4-39L151 17l-35.7 35.4c-.2-.1-.3-.2-.4-.2z" />
            </g>
            <g>
              <path d="M85.2 286.1l-26.7 2.1 25.9 7.6z" />
              <path d="M84.1 287l3.5 42.1-1.2-43.8z" />
              <path d="M84.7 291.2l13.6 45.9-11.1-51z" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default IndecisionApp;
