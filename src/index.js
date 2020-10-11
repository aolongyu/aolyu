/**
 * index
 * 
 * @author aolyu
 * @created 2020/10/06 20:14:00
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './pages/Index/index';
import Test from './pages/Index/InputBox/index';

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/test" component={Test}/>
      <Route component={App}/>
    </Switch>
  </HashRouter>
  , document.getElementById('root'))