import React, { Component } from 'react';
import "./page3b.css";
import { Link } from 'react-router-dom';

class ButtonOne extends Component {

    render() {
        return (
          <div><Link className="link" to="/page4a">To Page 4-A</Link></div>
        )
    }
};

export default ButtonOne;
