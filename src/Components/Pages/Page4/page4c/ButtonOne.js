import React, { Component } from 'react';
import "./page4c.css";
import { Link } from 'react-router-dom';

class ButtonOne extends Component {

    render() {
        return (
          <div><Link className="link" to="/page5">To Page 5</Link></div>
        )
    }
};

export default ButtonOne;
