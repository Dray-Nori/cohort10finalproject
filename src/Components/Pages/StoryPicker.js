import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header'

// import children
// import "./StoryPicker.css";

const json = require('./index.json');

class StoryPicker extends Component {
  render() {
    let stories = json.stories.map((story) => {
      let link = `/story/${story.title}`
      return (
        <Link key={story.title} to={link}>{story.title}</Link>
      )
    })

    return (
      <div className="storyPage">
        <Header />
        <br />
        {stories}
      </div>
    )
  }
}

export default StoryPicker;
