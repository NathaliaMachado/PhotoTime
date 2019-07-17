import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/timeline.css';
import './css/login.css';
import './css/reset.css';
import Login from './components/Login.js';
import {Router, Route, browserHistory} from 'react-router';

function verificaAutenticacao(nextState,replace) {
    if(localStorage.getItem('auth-token') === null){
      replace('/?msg=você precisa estar logado para acessar o endereço');
    }
  }

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={Login}/>
            <Route path="/timeline" component={App} onEnter={verificaAutenticacao} />
        </Router>
    ), 
    document.getElementById('root')

);



