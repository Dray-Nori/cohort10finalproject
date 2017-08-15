import React, { Component } from 'react';
import '../../styles/header.css';
import Contributors from './Contributors.js';
import NavBar from './NavBar.js';
import Login from './Login.js';
import Tracker from './Tracker.js';

class Header extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="headerContainer">
      <Contributors />
      <NavBar />
      <Login />
      <Tracker />
      </div>
    );
  }
}

export default Header;
