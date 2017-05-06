import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import App from './App';
import routes from './routes';

import './index.scss';


ReactDOM.render(
    <Router history={browserHistory} routes={routes}>
        <App />
    </Router>,
    document.getElementById('app')
);
