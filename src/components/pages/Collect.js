import React from 'react';
import ReactDOM from 'react-dom';

class Collect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPgColor: '#FFCC91'
    };
  }
  render() {
    return (
      <div className="page-collect">
      <br/><br/><br/>
      <h1>Collect Something!</h1>
      </div>
    );
  }
}

export default Collect;