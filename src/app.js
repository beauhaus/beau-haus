import React from 'react';
import ReactDOM from 'react-dom';

import AppContainer from './components/AppContainer.js';

/*******TESTING */
// import './sandStyles.css';


import './styles/styles.scss';
import 'normalize.css/normalize.css';
// import Sandbox from './sandbox/Sandbox.js';

const appRoot = document.getElementById('app');


ReactDOM.render(<AppContainer />, appRoot);


/*******TESTING */
// ReactDOM.render(<Sandbox />, appRoot);