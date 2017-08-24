import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Page2Results extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handlepage2ResultA = this.handlepage2ResultA.bind(this);
    this.handlepage2ResultB = this.handlepage2ResultB.bind(this);
    this.handlepage2ResultC = this.handlepage2ResultC.bind(this);
    this.handlepage2ResultD = this.handlepage2ResultD.bind(this);

    this.state = {
      navigation: [
        {name: 'Home', 'link': '/'},
        {name: 'Title and Summary', 'link': '/admin/createstory'},
        {name: 'Page 1 Choices', 'link': '/admin/page1choices'},
        {name: 'Page 2 Results', 'link': '/admin/page2results'},
        {name: 'Page 2 Choices', 'link': '/admin/page2choices'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      page2ResultA: '',
      page2ResultB: '',
      page2ResultC: '',
      page2ResultD: ''
    };
  }

  handlepage2ResultA(event) {
    this.setState({ page2ResultA: event.target.value });
  }
  handlepage2ResultB(event) {
    this.setState({ page2ResultB: event.target.value });
  }
  handlepage2ResultC(event) {
    this.setState({ page2ResultC: event.target.value });
  }
  handlepage2ResultD(event) {
    this.setState({ page2ResultD: event.target.value });
  }

  showMore() {
    this.state.rowsToDisplay === 0 ?
    (this.setState({ rowsToDisplay: this.state.navigation.length, expanded: true })) :
    (this.setState({ rowsToDisplay: 0, expanded: false }))
  }

  addToStory = event => {
    event.preventDefault();
    this.setState({
      page2ResultA: event.target.value,
      page2ResultB: event.target.value,
      page2ResultC: event.target.value,
      page2ResultD: event.target.value,
    });
    console.log('Title of the story is:     ' + this.state.storyTitle);
    console.log('Summary of the story is:     ' + this.state.storySummary);

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        storyTitle: this.state.storyTitle,
        storySummary: this.state.storySummary
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      page2ResultA: '',
      page2ResultB: '',
      page2ResultC: '',
      page2ResultD: ''
    });
  };


  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Page 2 Results
          </h1>
          <h2 className="">
            Enter a result for Page 1 Choices:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="page2ResultA"
                  onChange={this.handlepage2ResultA}
                  type="text"
                  value={this.state.page2ResultA}
                  placeholder="Page 2 Result A:"
                  />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page2ResultB"
                  onChange={this.handlepage2ResultB}
                  type="text"
                  value={this.state.page2ResultB}
                  placeholder="Page 2 Result B:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page2ResultC"
                  onChange={this.handlepage2ResultC}
                  type="text"
                  value={this.state.page2ResultC}
                  placeholder="Page 2 Result C:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page2ResultD"
                  onChange={this.handlepage2ResultD}
                  type="text"
                  value={this.state.page2ResultD}
                  placeholder="Page 2 Result D:"
                />
              </li>
              <li className="">
                <button
                  className=""
                  type="submit"
                  onClick={this.addToStory}
                >
                  Add Page 2 Results<i className="" aria-hidden="true" />
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

export default Page2Results;
