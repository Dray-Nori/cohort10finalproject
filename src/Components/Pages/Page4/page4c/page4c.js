import React, { Component } from 'react';
// import children
import "./page4c.css";
import ButtonOne from './ButtonOne.js';


class page4c extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page 4c.
              <div className="buttondiv">
                <ButtonOne />
              </div>
          </div>
        )
    }
}

export default page4c;
