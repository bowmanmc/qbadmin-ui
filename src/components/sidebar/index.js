import React from 'react';
import {Link} from 'react-router';


class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Sidebar">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/enroll">Enroll</Link>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
