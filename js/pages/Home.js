import React from 'react';


class Home extends React.Component {
    componentDidMount() {
        console.log('Home', this.props);
    }

    render() {
        return <div>
            <h1>Home</h1>
        </div>;
    }
}

export default Home;
