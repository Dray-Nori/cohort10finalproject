import React, { Component } from 'react';
import "./page2a.css";
import { Link } from 'react-router-dom';

class ButtonTwo extends Component {

    render() {
        return (
          <div><Link className="link" to="/page3b">To Page 3-B</Link></div>
        )
    }
};

export default ButtonTwo;
