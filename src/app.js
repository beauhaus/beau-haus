import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './components/AppContainer.js';

const appRoot = document.getElementById('app');

/********App Start*/

import './styles/styles.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(<AppContainer />, appRoot);

/********App END*/

/*******TESTING START*/
// import Sandbox from './sandbox/Sandbox.js';
// import './sandbox/test.css';

// ReactDOM.render(<Sandbox />, appRoot);
/*******TESTING END */