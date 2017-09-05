import React, { Component } from 'react';
import '../../styles/StudentLogin.css';
import Identification from './Identification.js';

class StudentHeader extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="headerContainer">
          <img className="headerLogo" src={"draynorilogo.png"} />
          <Identification className="identificationbox" />

      </div>
    );
  }
}

export default StudentHeader;
