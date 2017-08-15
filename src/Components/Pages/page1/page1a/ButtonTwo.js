import React, { Component } from 'react';
import "./page1a.css";
import { Link } from 'react-router-dom';

class ButtonTwo extends Component {

    render() {
        return (
          <div><Link className="link" to="/page2b">To Page 2-B</Link></div>
        )
    }
};

export default ButtonTwo;
