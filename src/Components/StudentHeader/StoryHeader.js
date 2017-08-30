import React, { Component } from 'react';
import '../../styles/header.css';
import Tracker from './Tracker.js';
import Identification from './Identification.js';

class StoryHeader extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="headerContainer">
        <Identification />
        <Tracker stats={this.props.stats}/>
      </div>
    );
  }
}

export default StoryHeader;
