import React, { Component } from 'react';
import '../../styles/header.css';

class Identification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      identficationArray: []
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="allProducts">
        <span className="ident">Your School Name:</span>
        <span className="ident">Your Teacher Name:</span>
        <span className="ident">Your User Name:</span>
        <span className="ident">Your Avatar:</span>
      </div>
    );
  }
}

export default Identification;
