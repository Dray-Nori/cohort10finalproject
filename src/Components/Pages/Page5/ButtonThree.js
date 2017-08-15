import React, { Component } from 'react';
import "./page5.css";
import { Link } from 'react-router-dom';

class ButtonThree extends Component {

    render() {
        return (
          <div><Link className="link" to="/page6c">To Page 6-C</Link></div>
        )
    }
};

export default ButtonThree;
