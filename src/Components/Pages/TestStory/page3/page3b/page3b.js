import React, { Component } from 'react';
// import children
import ButtonOne from './ButtonOne.js';
import ButtonTwo from './ButtonTwo.js';
import "./page3b.css";


class page3b extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page 3 - B
              <div className="buttondiv">
                <ButtonOne />
                <ButtonTwo />
              </div>
          </div>
        )
    }
}

export default page3b;
