import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import reducer from './Reducers';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";
import Login from './Components/Login/Login'
import '../src/styles/common.scss';

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/carousel" component={App}></Route>
        </Router>
        {/* <App /> */}
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
