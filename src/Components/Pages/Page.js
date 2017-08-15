import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header'

// import children
// import "./Page.css";


class Page extends Component {
  constructor(props) {
    super(props);

    // register listeners

    this.state = {
      stats: [],
      text: [],
      art: "",
      options: []
    }
  }

  componentDidMount() {
    let json = require(`/${this.props.match.params.name}/index.json`)
    console.log(json);
    this.setState({
      stats: json.stats,
      text: json.text,
      art: json.art,
      options: json.options
    })
  };


  onButtonPress = (e) => {
    // TODO stuff
  };

  render() {
    // let stories = json.stories.map((story) => {
    //   <button key={story.title} value={story.index}>{story.title}</button>
    // })
    console.log('state', this.state);
    return (
      <div className="storyPage">
        <Header stats={this.state.stats} />
        <br />
        {this.state.text}
      </div>
    )
  }
}

export default Page;
