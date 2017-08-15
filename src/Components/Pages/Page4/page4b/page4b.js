import React, { Component } from 'react';
// import children
import "./page4b.css";
import ButtonOne from './ButtonOne.js';


class page4b extends Component {
  constructor() {
    super();

}

    render() {
        return (
            <div className="bodydiv">
              This is page 4b.
              <div className="buttondiv">
                <ButtonOne />
              </div>
          </div>
        )
    }
}

export default page4b;
