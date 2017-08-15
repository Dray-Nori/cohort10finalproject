import React, { Component } from 'react';
// import children
import ButtonThree from './ButtonThree.js';
import ButtonTwo from './ButtonTwo.js';
import ButtonOne from './ButtonOne.js';
import "./page5.css";


class page5 extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page 5.
              <div className="buttondiv">
                <ButtonOne />
                <ButtonTwo />
                <ButtonThree />
              </div>
          </div>
        )
    }
}

export default page5;
