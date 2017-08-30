import React, { Component } from 'react';

class page1 extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            stories: [],
            text: []
        };
    }


    componentDidMount() {
      fetch('https://damp-reef-35552.herokuapp.com/pages').then(results => {
            return results.json();
          }).then(data => {
            this.setState({stories: data});
            console.log("state", this.state.stories);
          })

      }


      render() {
        let textList = this.state.stories.map((textItem) => {
          console.log("TextItem", textItem);
          return(
            <div>
              <p>{textItem.text}</p>
            </div>
          )
        }
        )
    return (
      <div className="col-6">
        {textList}
      </div>
    );
  }
}

export default page1;
