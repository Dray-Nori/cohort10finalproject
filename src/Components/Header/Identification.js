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
        Your School Name:
        Your Teacher Name:
        Your User Name:
        Your Avatar:
      </div>
    );
  }
}

export default Identification;
