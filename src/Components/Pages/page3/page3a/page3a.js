import React, { Component } from 'react';
// import children
import ButtonOne from './ButtonOne.js';
import "./page3a.css";


class page3a extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page 3 - A
              <div className="buttondiv">
                <ButtonOne />
              </div>
          </div>
        )
    }
}

export default page3a;
