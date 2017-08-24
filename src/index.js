import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Components/HomePage/HomePage';
import Admin from './Components/Admin/Admin';
import Signup from './Components/Login/Signup';
import Page from './Components/Pages/Page'
import StoryPicker from './Components/Pages/StoryPicker'
import CreateStory from './Components/Admin/CreateStory'
import Page1Choices from './Components/Admin/Page1Choices'
import Page2Results from './Components/Admin/Page2Results'
import Page2Choices from './Components/Admin/Page2Choices'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/story/:name" component={Page} />
        <Route path="/admin/createstory" component={CreateStory} />
        <Route path="/admin/page1choices" component={Page1Choices} />
        <Route path="/admin/page2results" component={Page2Results} />
        <Route path="/admin/page2choices" component={Page2Choices} />
        <Route path="/stories" component={StoryPicker} />
        <Route path="/login" component={Signup} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Homepage} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
