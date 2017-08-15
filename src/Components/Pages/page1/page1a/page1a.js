import React, { Component } from 'react';
// import children
import buttonThree from './ButtonThree.js';
import buttonTwo from './ButtonTwo.js';
import buttonOne from './ButtonOne.js';
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
                <buttonOne />
                <buttonTwo />
                <buttonThree />
              </div>
          </div>
        )
    }
}

export default page1a;
