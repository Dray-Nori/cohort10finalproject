import React, { Component } from 'react';
// import children
import ButtonTwo from './ButtonTwo.js';
import ButtonOne from './ButtonOne.js';
import "./page2c.css";


class page2c extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page 2 - C
              <div className="buttondiv">
                <ButtonOne />
                <ButtonTwo />
              </div>
          </div>
        )
    }
}

export default page2c;
