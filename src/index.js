import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/timeline.css';
import './css/login.css';
import './css/reset.css';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import {Router, Route, browserHistory} from 'react-router';


function verificaAutenticacao(nextState,replace) {
    if(localStorage.getItem('auth-token') === null){
      replace('/?msg=You must be logged');
    }
  }

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Login}/>
            <Route path="/timeline" component={App} onEnter={verificaAutenticacao} />
            <Route path="/logout" component={Logout}/>
        </Router>
    ), 
    document.getElementById('root')

);



