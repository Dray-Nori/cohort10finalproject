import React, { Component } from 'react';
// import children
import ButtonTwo from './ButtonTwo.js';
import ButtonOne from './ButtonOne.js';
import "./page2a.css";


class page2a extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page 2 - A
              <div className="buttondiv">
                <ButtonOne />
                <ButtonTwo />
              </div>
          </div>
        )
    }
}

export default page2a;
