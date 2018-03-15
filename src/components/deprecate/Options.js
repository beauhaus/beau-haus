import React from 'react';
import ReactDOM from 'react-dom';

import Option from './Option';

const uniqueID = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );

const Options = props => (
  <div className="options">
    {!props.contents.length && <p>Please enter an option to get started...</p>}
    <button 
    className="btn btn--link btn--remove"
    onClick={props.wipe}
    >REMOVE ALL
    </button>
    {props.contents.map(item => <Option key={uniqueID()} optionText={item} delSingleOption={props.delSingleOption} />)}
  </div>
);

export default Options;
