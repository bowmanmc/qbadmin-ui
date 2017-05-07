import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from './components/sidebar';
import HomePage from './pages/home';


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Sidebar />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.element
};

export default App;
