import React, { Component } from 'react';
// import children
import "./page4a.css";
import ButtonOne from './ButtonOne.js';


class page4a extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page 4a.
              <div className="buttondiv">
                <ButtonOne />
              </div>
          </div>
        )
    }
}

export default page4a;
