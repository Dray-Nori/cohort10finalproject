import React, { Component } from 'react';
import "./page3b.css";
import { Link } from 'react-router-dom';

class ButtonTwo extends Component {

    render() {
        return (
          <div><Link className="link" to="/page4b">To Page 4-B</Link></div>
        )
    }
};

export default ButtonTwo;
