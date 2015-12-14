import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            briefnumber: this.props.path.substring(1),
        };
    }

    render() {
        let number = this.state.briefnumber || '';

        return <div className="header">
            <h1>Incident Briefing (ICS {number})</h1>
        </div>;
    }
}

export default Header;
