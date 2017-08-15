import React, { Component } from 'react';
import "./page1a.css";
import { Link } from 'react-router-dom';

class ButtonOne extends Component {

    render() {
        return (
          <div><Link className="link" to="/page2a">To Page 2-A</Link></div>
        )
    }
};

export default ButtonOne;
