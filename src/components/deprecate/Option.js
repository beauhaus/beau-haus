import React from 'react';
import ReactDOM from 'react-dom';
const Option = props => (
  // Still unsure why the unused e param is needed below
  <div className="option">
    <button className="btn btn--link del-option" onClick={e => props.delSingleOption(props.optionText)}>
      delete
    </button>
    <h1>{props.optionText}</h1>
  </div>
);
export default Option;
