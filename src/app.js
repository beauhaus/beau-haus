import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer.js';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const appRoot = document.getElementById('app');

ReactDOM.render(<AppContainer />, appRoot);