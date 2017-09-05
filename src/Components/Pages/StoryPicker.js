import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header'

// import "./StoryPicker.css";

class StoryPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: [],
    }
  }

  componentDidMount() {
    fetch('https://damp-reef-35552.herokuapp.com/api/v1/stories')
    .then( res => {
      return res.json()
    })
    .then( storyList => {
      let allStories = storyList.map((story) => {
        let link = `/story/${story.name}`
        return (
          <div key={story.name} className="storyPickerListItem">
            <li>
              <img src={story.img} />
              <Link to={link}>{story.name}</Link>
            </li>
          </div>
        )
      })
      this.setState({
        stories: allStories
      })
    })
  }

  render() {

    return (
      <div className="storyPage">
        <Header />
        <br />
        <ul>
          {this.state.stories}
        </ul>
      </div>
    )
  }
}

export default StoryPicker;
