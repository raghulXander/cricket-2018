import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';

import Home from './containers/home.jsx';
import './main.scss'
import routes from './routes/route'
import history from './routes/history';
import mainReducers from './reducers/reducer';
import Main from './containers/main.jsx';
import Gallery from './containers/gallery.jsx';
import PageNotFound from './containers/pagenotfound.jsx';
import ScrollableBar from './containers/home.jsx';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(mainReducers)


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} >
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/matches" component={ScrollableBar} />
                <Route component={PageNotFound} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

//Hot Reloader
module.hot.accept();
