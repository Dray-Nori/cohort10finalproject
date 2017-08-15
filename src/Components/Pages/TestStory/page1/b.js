import React, { Component } from 'react';
// import children
import ButtonThree from './ButtonThree.js';
import ButtonTwo from './ButtonTwo.js';
import ButtonOne from './ButtonOne.js';
import "./page1a.css";


class page1a extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page One
              <div className="buttondiv">
                <ButtonOne />
                <ButtonTwo />
                <ButtonThree />
              </div>
          </div>
        )
    }
}

export default page1a;
