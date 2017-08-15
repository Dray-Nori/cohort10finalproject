import React, { Component } from 'react';
import "./page2b.css";
import { Link } from 'react-router-dom';

class ButtonTwo extends Component {

    render() {
        return (
          <div><Link className="link" to="/page3c">To Page 3-C</Link></div>
        )
    }
};

export default ButtonTwo;
