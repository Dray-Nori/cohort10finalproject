import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer.js';
import './HomePage.css';

class Splash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }
  }

  render() {
    console.log('current status in HomePage: ');
    console.log(this.state.status);
    return (
      <div className="App">
        <div className="bodyWrapper">

          <Header />

          <Footer />
        </div>
      </div>
    )
  }
}

export default Splash;
