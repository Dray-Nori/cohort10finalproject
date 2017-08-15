import React, { Component } from 'react';

import '../../styles/signup.css';

import School from './School';
import Teacher from './Teacher';
import Login from '../Header/Login';

class Signup extends Component {
  constructor(props) {
    super(props);

    // this.handleUserName = this.handleUserName.bind(this);
    // this.handlePassword = this.handlePassword.bind(this);
    // this.handleStringChange = this.handleStringChange.bind(this);

    this.state = {
      username: '',
      password: '',
      str: '',
    };
  }

  render() {
    return (
        <div className="signupPage">
          <div className="signupForms">
            <School />
            <Teacher />
          </div>
          <div className="loginForm">
            <Login />
          </div>
        </div>

    );
  }
}

export default Signup;
