import React, { Component } from 'react';
import '../../styles/header.css';
import Contributors from './Contributors.js';
import NavBar from './NavBar.js';
import Login from './Login.js';
import Identification from './Identification.js';

class Header extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="headerContainer">
        <Contributors />
        <NavBar />
        <Identification />
        <Login />
      </div>
    );
  }
}

export default Header;
