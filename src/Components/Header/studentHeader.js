import React, { Component } from 'react';
import '../../styles/header.css';
import statusBar from '../StatusBar/statusBar.js';

class studentHeader extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="headerContainer">
          <img className="headerLogo" src={"draynorilogo.png"} />
          <statusBar />
          
      </div>
    );
  }
}

export default studentHeader;
