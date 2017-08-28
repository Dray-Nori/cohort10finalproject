import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class CreateStory extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handlestoryTitle = this.handlestoryTitle.bind(this);
    this.handlestorySummary = this.handlestorySummary.bind(this);
    this.handlebackgroundUrl = this.handlebackgroundUrl.bind(this);

    this.state = {
      navigation: [
        {name: 'Home', 'link': '/'},
        {name: 'Page 1 Choices', 'link': '/admin/page1choices'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      storyTitle: '',
      storySummary: '',
      backgroundUrl: ''
    };
  }

  handlestoryTitle(event) {
    this.setState({ storyTitle: event.target.value });
  }
  handlestorySummary(event) {
    this.setState({ storySummary: event.target.value });
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
      storyTitle: event.target.value,
      storySummary: event.target.value,
      backgroundUrl: event.target.value
    });
    console.log('Title of the story is:     ' + this.state.storyTitle);
    console.log('Summary of the story is:     ' + this.state.storySummary);

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        storyTitle: this.state.storyTitle,
        storySummary: this.state.storySummary,
        backgroundUrl: this.state.backgroundUrl
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      storyTitle: '',
      storySummary: '',
      backgroundUrl: ''
    });
  };


  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Add a Story
          </h1>
          <h2 className="">
            Enter a title for your story:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="storyTitle"
                  onChange={this.handlestoryTitle}
                  type="textarea"
                  value={this.state.storyTitle}
                  placeholder="Story Title:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="storySummary"
                  onChange={this.handlestorySummary}
                  type="textarea"
                  value={this.state.storySummary}
                  placeholder="Story Summary:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="backgroundUrl"
                  onChange={this.handlebackgroundUrl}
                  type="textarea"
                  value={this.state.backgroundUrl}
                  placeholder="Background Image URL:"
                />
              </li>
              <li className="">
                <button
                  className=""
                  type="submit"
                  onClick={this.addToStory}
                >
                  Add Title and Summary<i className="" aria-hidden="true" />
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

export default CreateStory;
