import React, { Component } from 'react';
import "./page2c.css";
import { Link } from 'react-router-dom';

class ButtonTwo extends Component {

    render() {
        return (
          <div><Link className="link" to="/page3d">To Page 3-D</Link></div>
        )
    }
};

export default ButtonTwo;
