import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Page3Results extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handlepage3ResultA = this.handlepage3ResultA.bind(this);
    this.handlepage3ResultB = this.handlepage3ResultB.bind(this);
    this.handlepage3ResultC = this.handlepage3ResultC.bind(this);
    this.handlepage3ResultD = this.handlepage3ResultD.bind(this);
    this.handlebackgroundUrl = this.handlebackgroundUrl.bind(this);

    this.state = {
      navigation: [
        {name: 'Home', 'link': '/'},
        {name: 'Title and Summary', 'link': '/admin/createstory'},
        {name: 'Page 1 Choices', 'link': '/admin/page1choices'},
        {name: 'Page 2 Results', 'link': '/admin/page2results'},
        {name: 'Page 2 Choices', 'link': '/admin/page2choices'},
        {name: 'Page 3 Choices', 'link': '/admin/page3choices'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      page3ResultA: '',
      page3ResultB: '',
      page3ResultC: '',
      page3ResultD: '',
      backgroundUrl: ''
    };
  }

  handlepage3ResultA(event) {
    this.setState({ page3ResultA: event.target.value });
  }
  handlepage3ResultB(event) {
    this.setState({ page3ResultB: event.target.value });
  }
  handlepage3ResultC(event) {
    this.setState({ page3ResultC: event.target.value });
  }
  handlepage3ResultD(event) {
    this.setState({ page3ResultD: event.target.value });
  }
  handlebackgroundUrl(event) {
    this.setState({ backgroundUrl: event.target.value });
  }

  showMore() {
    this.state.rowsToDisplay === 0 ?
    (this.setState({ rowsToDisplay: this.state.navigation.length, expanded: true })) :
    (this.setState({ rowsToDisplay: 0, expanded: false }))
  }

  addToStory = event => {
    event.preventDefault();
    this.setState({
      page3ResultA: event.target.value,
      page3ResultB: event.target.value,
      page3ResultC: event.target.value,
      page3ResultD: event.target.value,
      backgroundUrl: event.target.value
    });
    console.log('Title of the story is:     ' + this.state.storyTitle);
    console.log('Summary of the story is:     ' + this.state.storySummary);

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        page3ResultA: this.state.page3ResultA,
        page3ResultB: this.state.page3ResultB,
        page3ResultC: this.state.page3ResultC,
        page3ResultD: this.state.page3ResultD,
        backgroundUrl: this.state.backgroungUrl
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      page3ResultA: '',
      page3ResultB: '',
      page3ResultC: '',
      page3ResultD: '',
      backgroundUrl: ''
    });
  };


  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Page 3 Results
          </h1>
          <h2 className="">
            Enter a result for Page 2 Choices:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="page3ResultA"
                  onChange={this.handlepage3ResultA}
                  type="textarea"
                  value={this.state.page3ResultA}
                  placeholder="Page 3 Result A:"
                  />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page3ResultB"
                  onChange={this.handlepage3ResultB}
                  type="textarea"
                  value={this.state.page3ResultB}
                  placeholder="Page 3 Result B:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page3ResultC"
                  onChange={this.handlepage3ResultC}
                  type="textarea"
                  value={this.state.page3ResultC}
                  placeholder="Page 3 Result C:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page3ResultD"
                  onChange={this.handlepage3ResultD}
                  type="textarea"
                  value={this.state.page3ResultD}
                  placeholder="Page 3 Result D:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="backgroundUrl"
                  onChange={this.handlebackgroundUrl}
                  type="textarea"
                  value={this.state.backgroundUrl}
                  placeholder="Background URL:"
                />
              </li>
              <li className="">
                <button
                  className=""
                  type="submit"
                  onClick={this.addToStory}
                >
                  Add Page 3 Results<i className="" aria-hidden="true" />
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

export default Page3Results;