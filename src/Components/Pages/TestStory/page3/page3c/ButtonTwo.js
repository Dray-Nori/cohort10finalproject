import React, { Component } from 'react';
import "./page3c.css";
import { Link } from 'react-router-dom';

class ButtonTwo extends Component {

    render() {
        return (
          <div><Link className="link" to="/page4c">To Page 4-C</Link></div>
        )
    }
};

export default ButtonTwo;
