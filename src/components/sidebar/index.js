import React from 'react';
import {Link} from 'react-router';

import Logo from '../Logo';


class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Sidebar">
                <div className="SidebarLogo">
                    <Logo />
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/enroll">Enroll</Link>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
