import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/HomePage/HomePage.js';
import page1a from './Components/Pages/page1/page1a/page1a.js';
import page2a from './Components/Pages/page2/page2a/page2a.js';
import page2b from './Components/Pages/page2/page2b/page2b.js';
import page2c from './Components/Pages/page2/page2c/page2c.js';
import page3a from './Components/Pages/page3/page3a/page3a.js';
import page3b from './Components/Pages/page3/page3b/page3b.js';
import page3c from './Components/Pages/page3/page3c/page3c.js';
import page3d from './Components/Pages/page3/page3d/page3d.js';
import page4a from './Components/Pages/page4/page4a/page4a.js';
import page4b from './Components/Pages/page4/page4b/page4b.js';
import page4c from './Components/Pages/page4/page4c/page4c.js';
import page5 from './Components/Pages/page5/page5.js';
import page6a from './Components/Pages/page6/page6a/page6a.js';
import page6b from './Components/Pages/page6/page6b/page6b.js';
import page6c from './Components/Pages/page6/page6c/page6c.js';
import Admin from './Components/Admin/Admin.js';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/Admin" component={Admin} />
        <Route path="/page1a" component={page1a} />
        <Route path="/page2a" component={page2a} />
        <Route path="/page2b" component={page2b} />
        <Route path="/page2c" component={page2b} />
        <Route path="/page3a" component={page3a} />
        <Route path="/page3b" component={page3b} />
        <Route path="/page3c" component={page3c} />
        <Route path="/page3d" component={page3d} />
        <Route path="/page4a" component={page4a} />
        <Route path="/page4b" component={page4b} />
        <Route path="/page4c" component={page4c} />
        <Route path="/page5" component={page5} />
        <Route path="/page6a" component={page6a} />
        <Route path="/page6b" component={page6b} />
        <Route path="/page6c" component={page6c} />
        <Route path="/" component={Homepage} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
