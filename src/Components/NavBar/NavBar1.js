import React, { Component } from 'react';
import '../../styles/navbar.css';
import { Link } from 'react-router-dom';

class NavBar1 extends Component {
  constructor(props) {
    super(props);

}

    render() {
      return (

        <div className="teacher-navigation">
          <div className="dropdownBtn">
          <div className="navItem1">Admin</div>
          <div className="dropdown">
            <Link className="link" to="/">Add or Remove Admins</Link>
            <Link className="link" to="/">Create an Organization</Link>
            <Link className="link" to="/">Add Teacher to an Organization</Link>
            <Link className="link" to="/">Add a New Teacher</Link>
          </div>
        </div>
          <div className="dropdownBtn">
          <div className="navItem2">Teachers</div>
          <div className="dropdown">
            <Link className="link" to="/">Add a New Classroom</Link>
            <Link className="link" to="/">Add Students to a Classroom</Link>
            <Link className="link" to="/">Sign Up a New Student</Link>
            <Link className="link" to="/">Show Available Games</Link>
            <Link className="link" to="/admin/createstory">Create a New Story</Link>
            <Link className="link" to="/StudentLogin/studentLogin">Go to Student Login</Link>
            </div>
          </div>
            <div className="dropdownBtn">
          <div className="navItem3">About Us</div>
          <div className="dropdown">
            <Link className="link" to="https://www.linkedin.com/in/brbroge/">Brad Broge</Link>
            <Link className="link" to="https://www.linkedin.com/in/jasonmgrigg/">Jason Grigg</Link>
            <Link className="link" to="https://www.linkedin.com/in/oresti-arsi/">Oresti Arsi</Link>
            <Link className="link" to="https://www.linkedin.com/in/ethanjarrell/">Ethan Jarrell</Link>
        </div>
      </div>
        </div>

      )
    }
  }

  export default NavBar1;
