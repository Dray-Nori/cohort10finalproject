import React, { Component } from 'react';
import "./page3c.css";
import { Link } from 'react-router-dom';

class ButtonOne extends Component {

    render() {
        return (
          <div><Link className="link" to="/page4b">To Page 4-B</Link></div>
        )
    }
};

export default ButtonOne;
