import React, { Component } from 'react';
import '../../styles/header.css';

class Tracker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      health: '',
      }
  }


  render() {
    return (

      <div className= "healthContainer">
      This is Health
    </div>
    )
  }
}

export default Tracker;
