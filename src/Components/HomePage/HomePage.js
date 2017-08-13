import React, { Component } from 'react';

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
        This is the Home Page
      </div>
    )
  }
}

export default Splash;
    // <Carousel />
    // import Carousel from './Carousel';
