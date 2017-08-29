import React, { Component } from 'react';
import '../../styles/header.css';

class Tracker extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const stats = this.props.stats;
    const display = stats.map((stat) => {
      if (stat.name === "helpers") {
        return (
          <div key={stat.name} className={stat.name}>
            <strong>{stat.name}:</strong>
          </div>
        )
      }
      return (
        <div key={stat.name} className={stat.name}>
          <strong>{stat.name}:</strong> {stat.value}
        </div>
      )
    })
    return (

    <div className= "statContainer">
      {display}
    </div>
    )
  }
}

export default Tracker;
