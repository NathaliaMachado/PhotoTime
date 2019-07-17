import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/timeline.css';
import './css/login.css';
import './css/reset.css';
import Login from './components/Login.js';
import {Router, Route, browserHistory} from 'react-router';


ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Login}/>
            <Route path="/timeline" component={App} />
        </Router>
    ), 
    document.getElementById('root')

);



