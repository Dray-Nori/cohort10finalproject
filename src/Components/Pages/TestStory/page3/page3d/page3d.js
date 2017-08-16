import React, { Component } from 'react';
// import children
import ButtonOne from './ButtonOne.js';
import "./page3d.css";


class page3d extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page 3 - D
              <div className="buttondiv">
                <ButtonOne />
              </div>
          </div>
        )
    }
}

export default page3d;
