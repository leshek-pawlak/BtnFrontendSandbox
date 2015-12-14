import React from 'react';


class Footer extends React.Component {
    componentDidMount() {
        console.log('Footer', this.props);
    }

    render() {
        return <div>
            <h1>Footer</h1>
        </div>;
    }
}

export default Footer;
