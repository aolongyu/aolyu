/**
 * index.js
 * 
 * @author aolyu
 * @created 2020/10/06 20:14:00
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/login/index';
import Home from './pages//home/index';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route component={Login}/>
    </Switch>
  </HashRouter>
  , document.getElementById('root')
)