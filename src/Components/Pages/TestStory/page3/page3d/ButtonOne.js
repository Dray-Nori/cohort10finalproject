import React, { Component } from 'react';
import "./page3d.css";
import { Link } from 'react-router-dom';

class ButtonOne extends Component {

    render() {
        return (
          <div><Link className="link" to="/page4c">To Page 4-C</Link></div>
        )
    }
};

export default ButtonOne;
