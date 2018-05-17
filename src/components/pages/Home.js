import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPgColor: '#FFCC91'
    };
  }
  render() {
    return (
      <div className="page-home">
        <img id="temp-img" src="./img/madcoding.gif" alt="woman typing on computer wagging her tongue." />

        <h1>
        <span>Under Construction...</span>
        <br/><br/>
          Rome wasn't built in a day.<br />
          Neither was this site.
        </h1>
        <p>Your patience is appreciated.</p>
      </div>
    );
  }
}

export default Home;
