import React, { Component } from 'react';
import "./page2a.css";
import { Link } from 'react-router-dom';

class ButtonOne extends Component {

    render() {
        return (
          <div><Link className="link" to="/page3a">To Page 3-A</Link></div>
        )
    }
};

export default ButtonOne;
