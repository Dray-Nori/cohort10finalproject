import React, { Component } from 'react';
import "./page5.css";
import { Link } from 'react-router-dom';

class ButtonOne extends Component {

    render() {
        return (
          <div><Link className="link" to="/page6a">To Page 6-A</Link></div>
        )
    }
};

export default ButtonOne;
