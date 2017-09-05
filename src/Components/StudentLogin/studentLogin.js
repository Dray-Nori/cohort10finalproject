import React, { Component } from 'react';
import studentLoginForm from './studentLoginForm';
import '../../styles/StudentLogin.css';
import StudentHeader from '../StudentHeader/StudentHeader.js';

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
          <StudentHeader />
          <h4>Hey Kid, To Play a New Game</h4>
          <h4>Enter Your Username and Password</h4>
          <studentLoginForm />
        </div>
      </div>
    )
  }
}

export default studentLogin;
