import React, { Component } from 'react';
import '../../styles/header.css';
import Contributors from "./Contributors.js";

class Header extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="headerContainer">
      <Contributors />
      </div>
    );
  }
}

export default Header;
