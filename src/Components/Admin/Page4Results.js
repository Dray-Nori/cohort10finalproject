import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Page4Results extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handlepage4ResultA = this.handlepage4ResultA.bind(this);
    this.handlepage4ResultB = this.handlepage4ResultB.bind(this);
    this.handlepage4ResultC = this.handlepage4ResultC.bind(this);
    this.handlebackgroundUrl = this.handlebackgroundUrl.bind(this);

    this.state = {
      navigation: [
        {name: 'Home', 'link': '/'},
        {name: 'Title and Summary', 'link': '/admin/createstory'},
        {name: 'Page 1 Choices', 'link': '/admin/page1choices'},
        {name: 'Page 2 Results', 'link': '/admin/page2results'},
        {name: 'Page 2 Choices', 'link': '/admin/page2choices'},
        {name: 'Page 3 Choices', 'link': '/admin/page3choices'},
        {name: 'Page 4 Choices', 'link': '/admin/page4choices'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      page4ResultA: '',
      page4ResultB: '',
      page4ResultC: '',
      backgroundUrl: ''
    };
  }

  handlepage4ResultA(event) {
    this.setState({ page4ResultA: event.target.value });
  }
  handlepage4ResultB(event) {
    this.setState({ page4ResultB: event.target.value });
  }
  handlepage4ResultC(event) {
    this.setState({ page4ResultC: event.target.value });
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
      page4ResultA: event.target.value,
      page4ResultB: event.target.value,
      page4ResultC: event.target.value,
      backgroundUrl: event.target.value
    });
    console.log('Title of the story is:     ' + this.state.storyTitle);
    console.log('Summary of the story is:     ' + this.state.storySummary);

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        page4ResultA: this.state.page4ResultA,
        page4ResultB: this.state.page4ResultB,
        page4ResultC: this.state.page4ResultC,
        backgroundUrl: this.state.backgroundUrl
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      page4ResultA: '',
      page4ResultB: '',
      page4ResultC: '',
      backgroundUrl: ''
    });
  };


  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Page 4 Results
          </h1>
          <h2 className="">
            Enter a result for Page 2 Choices:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="page4ResultA"
                  onChange={this.handlepage4ResultA}
                  type="textarea"
                  value={this.state.page4ResultA}
                  placeholder="Page 4 Result A:"
                  />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page4ResultB"
                  onChange={this.handlepage4ResultB}
                  type="textarea"
                  value={this.state.page4ResultB}
                  placeholder="Page 4 Result B:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page4ResultC"
                  onChange={this.handlepage4ResultC}
                  type="textarea"
                  value={this.state.page4ResultC}
                  placeholder="Page 4 Result C:"
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

export default Page4Results;
