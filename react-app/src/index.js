import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
//import { Router } from "react-router-redux";

//import { ConnectedRouter } from "react-router-redux";
//import { createBrowserHistory as createHistory } from 'history'

import {  default as store } from "./redux/store";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//const history = createHistory()


ReactDOM.render(<Provider store={store}>
    <Router >
    <App />
</Router></Provider> , document.getElementById('react_root'));


serviceWorker.unregister();
