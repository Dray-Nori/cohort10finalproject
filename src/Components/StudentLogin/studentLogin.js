import React, { Component } from 'react';
import studentLoginForm from './studentLoginForm.js';
import studentHeader from '../Header/studentHeader.js';
import '../../styles/StudentLogin.css';


class studentLogin extends Component {
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
        <div className="SLIbodyWrapper">
          <studentHeader />
          <h4>To Play a New Game</h4>
          <h4>Enter Your Username and Password</h4>
          <studentLoginForm />
        </div>
      </div>
    )
  }
}

export default studentLogin;
