import React, { Component } from 'react';
import '../../styles/header.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleStringChange = this.handleStringChange.bind(this);

    this.state = {
      username: '',
      password: '',
      str: '',
    };
  }

  render() {
    return (
        <div className="signupPage">
          <School />
          <Teacher />
        </div>

    );
  }
}

export default Login;
