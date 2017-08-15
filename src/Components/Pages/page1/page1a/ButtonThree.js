import React, { Component } from 'react';
import "./page1a.css";
import { Link } from 'react-router-dom';

class ButtonThree extends Component {

    render() {
        return (
          <div><Link className="link" to="/page2c">To Page 2-C</Link></div>
        )
    }
};

export default ButtonThree;
