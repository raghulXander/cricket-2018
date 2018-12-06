// Index

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import {renderRoutes} from 'react-router-config';
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';

import './main.scss'
import Header from './components/header.jsx';
import routes from './routes/route'
import history from './routes/history';
import mainReducers from './reducers/reducer';
import Main from './containers/home.jsx';
import Gallery from './containers/gallery.jsx';
import PageNotFound from './containers/pagenotfound.jsx';
import ScrollableBar from './containers/matches.jsx';
import Schedule from './containers/schedule.jsx';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(mainReducers)

class Layout extends Component {
    render() {
        return (
            <div className='index'>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" render={(props) => <Main {...props} />} />
                        <Route path="/gallery" render={(props) => <Gallery {...props} />} />
                        <Route path="/matches" render={(props) => <ScrollableBar {...props} />} />
                        <Route path="/schedule" render={(props) => <Schedule {...props} />} />
                        <Route component={PageNotFound} />
                    </Switch>
                </main>
            </div>
        )
    }
}
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history} >
                    <Layout />
                </Router>
            </Provider>
        )
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

//Hot Reloader
module.hot.accept();
