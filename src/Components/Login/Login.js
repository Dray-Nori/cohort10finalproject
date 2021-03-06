import React, { Component } from 'react';
import '../../styles/login.css';

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

  handleUserName(event) {
    this.setState({ username: event.target.value });
  }
  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleStringChange(event) {
    this.setState({ str: event.target.value });
  }

  doUserValidation = e => {
    e.preventDefault();
    console.log('attempting to validate the user...');
    this.setState({
      username: e.target.value,
      password: e.target.value
    });
    console.log('Username: ' + this.state.username);
    console.log('Password: ' + this.state.password);
    let userItem = this.props.validateUser(this.state.username, this.state.password);
  }

  render() {
    return (
        <div className="userLoginContainer">
          <form>
              <input autocomplete="off"
                className="userLoginForm"
                name="username"
                onChange={this.handleUserName}
                type="text"
                value={this.state.username}
                placeholder="Username:"
              />
              <br />
              <input autocomplete="off"
                className="userLoginForm"
                name="password"
                onChange={this.handlePassword}
                type="password"
                value={this.state.password}
                placeholder="Password"
              />
              <br />
              <button className="loginButton" type="submit" onClick={this.doUserValidation}>
                Submit<i aria-hidden="true" />
              </button>
          </form>
        </div>

    );
  }
}

export default Login;
