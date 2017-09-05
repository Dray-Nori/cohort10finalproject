import React, { Component } from 'react';
import '../../styles/admin.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';

class Admin extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="adminForms">
        <div className="bodyWrapper">
            <img src={"draynorilogo.png"} />
          <h2>Administrator Options</h2>

          <h3>Organization Options</h3>
          <Link className="link" to="/CreateStory">Add or Remove Administrators</Link>
            <Link className="link" to="/CreateStory">Create an Organization</Link>
            <Link className="link" to="/CreateStory">Add Teacher to an Organization</Link>
          <h3>Teacher Options</h3>
          <Link className="link" to="/CreateStory">Sign Up New Teachers</Link>
          <Link className="link" to="/CreateStory">Add a New Class to Existing Teacher</Link>
          <h3>Game Options</h3>
          <Link className="link" to="/CreateStory">Show Available Games</Link>
          <Link className="link" to="/admin/createstory">Create a New Story</Link>
        </div>
      </div>
    );
  }
}

export default Admin;
