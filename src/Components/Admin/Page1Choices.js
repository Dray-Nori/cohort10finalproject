import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Page1Choices extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handlepage1ChoiceA = this.handlepage1ChoiceA.bind(this);
    this.handlepage1ChoiceB = this.handlepage1ChoiceB.bind(this);
    this.handlepage1ChoiceC = this.handlepage1ChoiceC.bind(this);
    this.handlepage1ChoiceD = this.handlepage1ChoiceD.bind(this);

    this.state = {
      navigation: [
        {name: 'Home', 'link': '/'},
        {name: 'Title and Summary', 'link': '/admin/createstory'},
        {name: 'Page 2 Results', 'link': '/admin/page2results'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      page1ChoiceA: '',
      page1ChoiceB: '',
      page1ChoiceC: '',
      page1ChoiceD: ''
    };
  }

  handlepage1ChoiceA(event) {
    this.setState({ page1ChoiceA: event.target.value });
  }
  handlepage1ChoiceB(event) {
    this.setState({ page1ChoiceB: event.target.value });
  }
  handlepage1ChoiceC(event) {
    this.setState({ page1ChoiceC: event.target.value });
  }
  handlepage1ChoiceD(event) {
    this.setState({ page1ChoiceD: event.target.value });
  }


  showMore() {
    this.state.rowsToDisplay === 0 ?
    (this.setState({ rowsToDisplay: this.state.navigation.length, expanded: true })) :
    (this.setState({ rowsToDisplay: 0, expanded: false }))
  }

  addToStory = event => {
    event.preventDefault();
    this.setState({
      page1ChoiceA: event.target.value,
      page1ChoiceB: event.target.value,
      page1ChoiceC: event.target.value,
      page1ChoiceD: event.target.value
    });

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        page1ChoiceA: this.state.page1ChoiceA,
        page1ChoiceB: this.state.page1ChoiceB,
        page1ChoiceC: this.state.page1ChoiceC,
        page1ChoiceD: this.state.page1ChoiceD
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      page1ChoiceA: '',
      page1ChoiceB: '',
      page1ChoiceC: '',
      page1ChoiceD: ''
    });
  };


  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Page 1 Choices
          </h1>
          <h2 className="">
            Enter up to 4 Choices for Page 1:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="page1ChoiceA"
                  onChange={this.handlepage1ChoiceA}
                  type="textarea"
                  value={this.state.page1ChoiceA}
                  placeholder="Choice A:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page1ChoiceB"
                  onChange={this.handlepage1ChoiceB}
                  type="textarea"
                  value={this.state.page1ChoiceB}
                  placeholder="Choice B:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page1ChoiceC"
                  onChange={this.handlepage1ChoiceC}
                  type="textarea"
                  value={this.state.page1ChoiceC}
                  placeholder="Choice C:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page1ChoiceD"
                  onChange={this.handlepage1ChoiceD}
                  type="textarea"
                  value={this.state.page1ChoiceD}
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

export default Page1Choices;
