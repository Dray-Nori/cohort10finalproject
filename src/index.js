import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/HomePage/HomePage.js';
import Admin from './Components/Admin/Admin.js';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/Admin" component={Admin} />
        <Route path="/" component={Homepage} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
