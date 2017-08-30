import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Page5Results extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handlepage5ResultA = this.handlepage5ResultA.bind(this);
    this.handlepage5ResultABackgroundUrl = this.handlepage5ResultABackgroundUrl.bind(this);

    this.state = {
      navigation: [
        {name: 'Home', 'link': '/'},
        {name: 'Title and Summary', 'link': '/admin/createstory'},
        {name: 'Page 1 Choices', 'link': '/admin/page1choices'},
        {name: 'Page 2 Results', 'link': '/admin/page2results'},
        {name: 'Page 2 Choices', 'link': '/admin/page2choices'},
        {name: 'Page 3 Choices', 'link': '/admin/page3choices'},
        {name: 'Page 3 Results', 'link': '/admin/page3Results'},
        {name: 'Page 4 Results', 'link': '/admin/page4Results'},
        {name: 'Page 4 Choices', 'link': '/admin/page4choices'},
        {name: 'Page 5 Choices', 'link': '/admin/page5choices'},
        ],
      rowsToDisplay : 0,
      expanded: false,
      page5ResultA: '',
      page5ResultABackgroundUrl: ''
    };
  }

  handlepage5ResultA(event) {
    this.setState({ page5ResultA: event.target.value });
  }
  handlepage5ResultABackgroundUrl(event) {
    this.setState({ page5ResultABackgroundUrl: event.target.value });
  }

  showMore() {
    this.state.rowsToDisplay === 0 ?
    (this.setState({ rowsToDisplay: this.state.navigation.length, expanded: true })) :
    (this.setState({ rowsToDisplay: 0, expanded: false }))
  }

  addToStory = event => {
    event.preventDefault();
    this.setState({
      page5ResultA: event.target.value,
      page5ResultABackgroundUrl: event.target.value
    });
    console.log('Title of the story is:     ' + this.state.storyTitle);
    console.log('Summary of the story is:     ' + this.state.storySummary);

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        page5ResultA: this.state.page5ResultA,
        page5ResultABackgroundUrl: this.state.page5ResultABackgroundUrl
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      page5ResultA: '',
      page5ResultABackgroundUrl: ''
    });
  };


  render() {
    return (
      <div className="bodyWrapper">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Page 5 Results
          </h1>
          <h2 className="">
            Enter a result for Page 4 Choices:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="page5ResultA"
                  onChange={this.handlepage5ResultA}
                  type="textarea"
                  value={this.state.page5ResultA}
                  placeholder="Page 4 Result A:"
                  />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page5ResultABackgroundUrl"
                  onChange={this.handlepage5ResultABackgroundUrl}
                  type="textarea"
                  value={this.state.page5ResultABackgroundUrl}
                  placeholder="Page 5 Result A Background URL:"
                />
              </li>
              <li className="">
                <button
                  className="submitBtn"
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

export default Page5Results;
