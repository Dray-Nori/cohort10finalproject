import React, { Component } from 'react';
import '../../styles/signup.css';
class School extends Component {
  constructor(props) {
    super(props);

    this.state = {
      health: '',
      }
  }


  render() {
    return (
      <div className= "healthContainer1">
        <h6>Add an Organization (optional)</h6>

        <form class="schoolSignup" action="index.html" method="post">
          <label htmlFor="schoolName">School Name</label>
          <input type="text" id="schoolName" name="schoolName" value="" />

          <label htmlFor="schoolAddr1">Street Address</label>
          <input type="text" id="schoolAddr1" name="schoolAddr1" value="" />
          <label htmlFor="schoolAddr2">Street Address 2</label>
          <input type="text" id="schoolAddr1" name="schoolAddr1" value="" />
          <label htmlFor="schoolCity">City</label>
          <input type="text" id="schoolCity" name="schoolCity" value="" />
          <label htmlFor="schoolState">State</label>
          <input type="text" id="schoolState" name="schoolState" value="" />
          <label htmlFor="schoolZip">Zip Code</label>
          <input type="text" id="schoolZip" name="schoolZip" value="" />

          <label htmlFor="schoolContact">Contact Name</label>
          <input type="text" id="schoolContact" name="schoolContact" value="" />

          <label htmlFor="schoolPhone">Phone #</label>
          <input type="text" id="schoolPhone" name="schoolPhone" value="" />

            <button className="loginButton" type="submit" onClick={this.doUserValidation}>
              Submit<i aria-hidden="true" />
            </button>

        </form>      </div>
    )
  }
}

export default School;
