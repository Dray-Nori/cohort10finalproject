import React, { Component } from 'react';
import Header from '../Header/Header.js';
import Signup from '../Signup/Signup.js';
import Login from '../Login/Login.js';
import '../../styles/HomePage.css';

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
        <div className="HPbodyWrapper">
          <div className="HPheader">
          <Header className="header" />
          </div>
          <div className="HPbody">

          <div className="HPlogin">
            <div className="login">
            <h3>Already a Member?</h3>
            <h4>Login Here</h4>
          <Login />
          </div>
          <div className="signup">
          <h3>Not a Member Yet?</h3>
          <h4>Sign Up Here</h4>
          <Signup className="signup" />
          </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Splash;
