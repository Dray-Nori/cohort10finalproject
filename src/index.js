import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Components/HomePage/HomePage';
import Admin from './Components/Admin/Admin';
import Signup from './Components/Signup/Signup';
import Page from './Components/Pages/Page';
import studentLogin from './Components/StudentLogin/studentLogin';
import StoryPicker from './Components/Pages/StoryPicker'
import CreateStory from './Components/Admin/CreateStory'
import Page1Choices from './Components/Admin/Page1Choices'
import Page2Results from './Components/Admin/Page2Results'
import Page2Choices from './Components/Admin/Page2Choices'
import Page3Results from './Components/Admin/Page3Results'
import Page3Choices from './Components/Admin/Page3Choices'
import Page4Results from './Components/Admin/Page4Results'
import Page4Choices from './Components/Admin/Page4Choices'
import Page5Results from './Components/Admin/Page5Results'
import Page5Choices from './Components/Admin/Page5Choices'
import Ending from './Components/Admin/Ending'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/StudentLogin/studentLogin" component={studentLogin} />
        <Route path="/story/:name" component={Page} />
        <Route path="/admin/createstory" component={CreateStory} />
        <Route path="/admin/page1choices" component={Page1Choices} />
        <Route path="/admin/page2results" component={Page2Results} />
        <Route path="/admin/page2choices" component={Page2Choices} />
        <Route path="/admin/page3results" component={Page3Results} />
        <Route path="/admin/page3choices" component={Page3Choices} />
        <Route path="/admin/page4results" component={Page4Results} />
        <Route path="/admin/page4choices" component={Page4Choices} />
        <Route path="/admin/page5results" component={Page5Results} />
        <Route path="/admin/page5choices" component={Page5Choices} />
        <Route path="/admin/ending" component={Ending} />
        <Route path="/stories" component={StoryPicker} />
        <Route path="/login" component={Signup} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Homepage} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
