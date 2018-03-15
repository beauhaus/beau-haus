import React from 'react';
import ReactDOM from 'react-dom';

const Action = props => (
  <button className="bg-btn" onClick={props.rando} 
  disabled={!props.optionsExist}>
    What should I do?
  </button>
);

export default Action;
