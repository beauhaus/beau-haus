import React from 'react';
import ReactDOM from 'react-dom';

import RoutesContainer from './components/RoutesContainer.js';

/*******TESTING */
// import './sandStyles.css';


import './styles/styles.scss';
import 'normalize.css/normalize.css';
// import Sandbox from './sandbox/Sandbox.js';

const appRoot = document.getElementById('app');


ReactDOM.render(<RoutesContainer />, appRoot);


/*******TESTING */
// ReactDOM.render(<Sandbox />, appRoot);