import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import EnrollPage from './pages/enroll';
import HomePage from './pages/home';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/enroll" component={EnrollPage} />
    </Route>
);
