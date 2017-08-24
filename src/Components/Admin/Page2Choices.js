import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Page2Choices extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handlepage2ChoiceA = this.handlepage2ChoiceA.bind(this);
    this.handlepage2ChoiceB = this.handlepage2ChoiceB.bind(this);
    this.handlepage2ChoiceC = this.handlepage2ChoiceC.bind(this);
    this.handlepage2ChoiceD = this.handlepage2ChoiceD.bind(this);

    this.state = {
      navigation: [
        {name: 'Home', 'link': '/'},
        {name: 'Title and Summary', 'link': '/admin/createstory'},
        {name: 'Page 2 Results', 'link': '/admin/page2results'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      page2ChoiceA: '',
      page2ChoiceB: '',
      page2ChoiceC: '',
      page2ChoiceD: ''
    }
  }

  handlepage2ChoiceA(event) {
    this.setState({ page2ChoiceA: event.target.value });
  }
  handlepage2ChoiceB(event) {
    this.setState({ page2ChoiceB: event.target.value });
  }
  handlepage2ChoiceC(event) {
    this.setState({ page2ChoiceC: event.target.value });
  }
  handlepage2ChoiceD(event) {
    this.setState({ page2ChoiceD: event.target.value });
  }


  showMore() {
    this.state.rowsToDisplay === 0 ?
    (this.setState({ rowsToDisplay: this.state.navigation.length, expanded: true })) :
    (this.setState({ rowsToDisplay: 0, expanded: false }))
  }

  addToStory = event => {
    event.preventDefault();
    this.setState({
      page2ChoiceA: event.target.value,
      page2ChoiceB: event.target.value,
      page2ChoiceC: event.target.value,
      page2ChoiceD: event.target.value
    });

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        page2ChoiceA: this.state.page2ChoiceA,
        page2ChoiceB: this.state.page2ChoiceB,
        page2ChoiceC: this.state.page2ChoiceC,
        page2ChoiceD: this.state.page2ChoiceD
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      page2ChoiceA: '',
      page2ChoiceB: '',
      page2ChoiceC: '',
      page2ChoiceD: ''
    });
  };


  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Page 2 Choices
          </h1>
          <h2 className="">
            Enter up to 4 Choices for Page 2:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="page2ChoiceA"
                  onChange={this.handlepage2ChoiceA}
                  type="text"
                  value={this.state.page2ChoiceA}
                  placeholder="Choice A:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page2ChoiceB"
                  onChange={this.handlepage2ChoiceB}
                  type="text"
                  value={this.state.page2ChoiceB}
                  placeholder="Choice B:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page2ChoiceC"
                  onChange={this.handlepage2ChoiceC}
                  type="text"
                  value={this.state.page2ChoiceC}
                  placeholder="Choice C:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page2ChoiceD"
                  onChange={this.handlepage2ChoiceD}
                  type="text"
                  value={this.state.page2ChoiceD}
                  placeholder="Choice D:"
                />
              </li>
              <li className="">
                <button
                  className=""
                  type="submit"
                  onClick={this.addToStory}
                >
                  Add Choices<i className="" aria-hidden="true" />
                </button>
              </li>
            </div>
          </ul>
        </form>
        <div className="allNavigationContainer">
          <div className="allNavigationColumn">
            <ul className="navList">
              {this.state.navigation.slice(0,this.state.rowsToDisplay).map((navigation, i) => <li key={i}>
              <a className="contributorsListItem" href={navigation.link}>{navigation.name}</a></li>)}
            </ul>
            <a onClick={this.showMore}>
                {this.state.expanded ?
                  (<span className="showMore">- Hide -</span>) : (<span className="showMore">Next</span>)}
            </a>
          </div>
        </div>

      </div>
    );
  }
}

export default Page2Choices;
