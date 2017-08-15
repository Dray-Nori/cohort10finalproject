import React, { Component } from 'react';

class Teacher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      health: '',
      }
  }


  render() {
    return (
      <div className= "healthContainer">
        Teacher signup form
        <form className="teacherSignup" action="index.html" method="post">

          <label htmlFor="teacherUserid">Username</label>
          <input type="text" id="teacherUserid" name="teacherUserid" value="" />

          <label htmlFor="teacherPass">Password</label>
          <input type="password" id="teacherPass" name="teacherPass" value="" />

          <label htmlFor="teacherName">Name</label>
          <input type="text" id="teacherName" name="teacherName" value="" />

          <label htmlFor="teacherRole">Teacher's Role</label>
          <input type="text" id="teacherRole" name="teacherRole" value="" />

          <select id="availableSchools">
            <option value="">-- choose a school --</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Teacher;
