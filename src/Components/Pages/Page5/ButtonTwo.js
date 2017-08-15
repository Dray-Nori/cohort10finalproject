import React, { Component } from 'react';
import "./page5.css";
import { Link } from 'react-router-dom';

class ButtonTwo extends Component {

    render() {
        return (
          <div><Link className="link" to="/page6b">To Page 6-B</Link></div>
        )
    }
};

export default ButtonTwo;
