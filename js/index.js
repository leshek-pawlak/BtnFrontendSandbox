import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import createBrowserHistory from 'history/lib/createBrowserHistory';

import App from './App';

import { Home } from './pages';

ReactDOM.render(<div>
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
            </Route>
        </Router>
    </Provider>
    <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
    </DebugPanel>
</div>, document.getElementById('root'));
