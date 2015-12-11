import React from 'react';
import { Link } from 'react-router';

import Header from './components/Header';

import styles from '../css/main.css';


class App extends React.Component {
    render() {
        return <div>
            <Header />

            {this.props.children}

            <h1>Footer</h1>
        </div>;
    }
}

export default App;
