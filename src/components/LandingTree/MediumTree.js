import React from 'react';
import ReactDOM from 'react-dom';

/**Top <path> of the JSX is the tree-trunk */
// class MediumTree extends React.Component {
const MediumTree = (props) =>{
  const {leaves, opacity, branches} = props.tree;
    // viewBox="0 0 800 1040"
    return (
      <svg id="medium-tree" opacity={opacity}>
        <g fill={branches}>
          <path
            d="M102.0661 288.0042l7.9448.9384-16.0701 136.0547-7.9448-.9384zm21.60472-137.87562l4.9505.703-19.2622 135.6437-4.9505-.703zM62.02806874 625.68777554l15.9536 1.21460016-16.01753961 210.3881-15.9536-1.21460016zm18.55055465-196.01316722l13.04498 1.19326393-17.3068815 189.202-13.04498-1.19326393zM38.7626852 841.51763675l22.9816.92306015-7.50488035 186.8504-22.9816-.92306015z"
          />
          <path d="M11.61371 823.65243l1.8318-.8026 11.31666 25.82838-1.8318.8026zm24.71624-231.26668l1.7878-.8966 13.0007 25.9231-1.7878.8966zM152.9179 509.8725l.7071.7071-73.5384 73.5384-.7071-.7071zm-48.55745-369.93015l.5544-.8323 19.47582 12.97296-.5544.8323zM41.5628 319.58206l.1543-.988 27.7628 4.33583-.1543.988zM.7 314v1l38.4 3.6.1-1L.7 314zm157.00885-175.71515l.5685.8227-34.88248 24.1044-.5685-.8227zm33.82325-16.729l.4244.9055-31.5114 14.76912-.4244-.9055zM129.0416 252.7746l.6311.7757-21.7196 17.6708-.6311-.7757zm25.8687-13.2614l.4307.9025-25.27 12.0596-.4307-.9025zm59.98225-16.5984l.2359.9718-55.48978 13.46989-.2359-.9718zM286.686 528.9301l-.1514.9885-64.2525-9.841.1514-.9885z" />
          <path d="M56.3934 307.9497l.7952-.6063 39.4095 51.688-.7952.6063zm-29.34436-26.89944l.6595-.7517 28.5646 25.061-.6595.7517zM196.9455 477.9092l.6041.7969-41.4388 31.4132-.6041-.7969zm47.0452-25.9805l.4859.874-45.448 25.2668-.4859-.874zm52.0858-17.3937l.3074.9516-49.4832 15.9848-.3074-.9516zm-159.87712 96.82211l-.1298-.9915 112.4361-14.71932.1298.9915zM73.02929 129.84125l.3052-.9523 28.75946 9.21704-.3052.9523zM8.17913 543.35577l.8727-.4883 26.71001 47.73669-.8727.4883zm124.49503 146.08319l.555.8318-26.45124 17.649-.555-.8318zm47.92127-27.54737l.5074.8617-44.11904 25.97888-.5074-.8617zM.3 592.1v1.1l44.5 24.3.5-.9-45-24.5zm.74098 208.70956l.903-.4297 10.3128 21.672-.903.4297zM77.409 706.99682l.9375-.3479 9.70641 26.15625-.9375.3479zm38.47397-21.97631l1.748.9718-21.81691 39.2426-1.748-.9718zM24.0804 851.9574l2.7726-1.1457 14.1303 34.1954-2.7726 1.1457zm24.81017-232.46461l2.8032-1.0683 11.7513 30.8352-2.8032 1.0683z" />
          <path d="M92.75369 725.09889l3.1331 2.15042-27.67251 40.31805-3.1331-2.15042z" />
        </g>
        <g fill={leaves} >
          <path d="M178.8 658.8l11.7 16.5-31.5-12" />
          <path d="M178.8 647.8l11.7 16.5-31.5-12m131-121.9l-1.6 13-9.7-19.4m.3 6.4l-1.6 13-9.7-19.4m-10.7 1.4l-1.6 13-9.7-19.4" />
          <path d="M245.8 512.5l8.5 9.9-20.9-5.8m-16.6 2.9l8.5 9.9-20.9-5.8m-13.1.8l2.7 12.8-15.5-15.2M81.3 634.4l2.7 12.8L68.5 632m133.2-152.1l5.4 11.9-18.5-11.4m34.9-33.6l6.2 11.5-19.2-10.1m57 9.6l6.2 11.5-19.2-10.1m-97 53.6l6.2 11.5-19.2-10.1M23.2 316.8l12.9 1.8-19.5 9.4m28.6-11.2l12.9 1.8-19.5 9.4M.7 323.1l13.4-6.5-12.9-1.8-.5.9v7.4zm18.5-47.3l12.9 1.8-19.5 9.4m39.6-4.2l12.9 1.8-19.5 9.4m6.6 3.8l12.9 1.8-19.5 9.4m174.8-88.2l6.4 11.4-19.3-9.8m-26.1-.6l6.4 11.4-19.3-9.8m29.2-100.2l3.5 6.3-10.7-5.4m7.2-11.9l3.5 6.3-10.7-5.4m-3.8-.9l3.5 6.3-10.7-5.4m-14.8 3.1l3.5 6.3-10.7-5.4m7.2 10.1l3.5 6.3-10.7-5.4m-14.8 14.1l3.5 6.3-10.7-5.4m32.2.1l3.5 6.3-10.7-5.4m29.2-11.9l3.5 6.3-10.7-5.4m-70 1.9l6.5 3.1-11.8 1.8M79.5 135l6.5 3.1-11.8 1.8m5.3-15.9l6.5 3.1-11.8 1.8M57.5 124l6.5 3.1-11.8 1.8m155.2 95.9l6.4 11.4-19.3-9.8M152.8 241l5 12.1-18.1-12.1m-10.9 20l5 12.1-18.1-12.1m184.5 169.7l7.2 10.9-20-8.4m12.8 8.5l7.2 10.9-20-8.4m-20.2-13.5l7.2 10.9-20-8.4m-97.6 238.6l11.7 16.5-31.5-12m-2.2 6.5l11.7 16.5-31.5-12m-38.7 21.5l16.8-1.3-22 17.4" />
          <path d="M76.3 719.8l16.8-1.3-22 17.4m39-56.6l16.7 2.1-25.1 12.6M12.5 810.8l15.2 7.5L-.1 822m11.9 25l16.2 4.9-26.9 8.2" />
          <path d="M27.8 836l16.2 5-26.9 8.1M39.6 613l10.5 13.2-26.7-8.5M37 591l15.9 5.6-27.2 6.9m1.1-34.7l14.7 8.4-28 2m-13-33.7l19-1.3-14.7-8.4-4.3 3.4v6.3z" />
        </g>
      </svg>
    );
  }


export default MediumTree;
/*
*/
