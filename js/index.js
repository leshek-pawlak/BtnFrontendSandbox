import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from './App';

import { Home, Brief201 } from './pages';

const history = createBrowserHistory();

ReactDOM.render(<div>
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="201" component={Brief201} />
        </Route>
    </Router>

</div>, document.getElementById('root'));
