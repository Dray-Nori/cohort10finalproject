import React, { Component } from 'react';
// import children
import ButtonTwo from './ButtonTwo.js';
import ButtonOne from './ButtonOne.js';
import "./page2b.css";


class page2b extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page 2 - B
              <div className="buttondiv">
                <ButtonOne />
                <ButtonTwo />
              </div>
          </div>
        )
    }
}

export default page2b;
