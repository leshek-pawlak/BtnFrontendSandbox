import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import styles from '../css/main.css';


class App extends React.Component {
    componentDidMount() {
        console.log('App', this.props);
    }

    render() {
        return <div>
            <Header path={this.props.location.pathname}/>

            {this.props.children}

            <Footer path={this.props.location.pathname} />
        </div>;
    }
}

export default App;
