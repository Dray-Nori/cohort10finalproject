import React, { Component } from 'react';
import '../../styles/header.css';
import NavBar1 from '../NavBar/NavBar1.js';

class Header extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="headerContainer">
          <img className="headerLogo" src={"draynorilogo.png"} />
          <NavBar1 />

      </div>
    );
  }
}

export default Header;
