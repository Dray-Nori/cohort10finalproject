import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Page5Choices extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handlepage5ChoiceA = this.handlepage5ChoiceA.bind(this);
    this.handlepage5ChoiceB = this.handlepage5ChoiceB.bind(this);
    this.handlepage5ChoiceC = this.handlepage5ChoiceC.bind(this);
    this.handlebackgroundUrl = this.handlebackgroundUrl.bind(this);

    this.state = {
      navigation: [
        {name: 'Home', 'link': '/'},
        {name: 'Title and Summary', 'link': '/admin/createstory'},
        {name: 'Page 1 Choices', 'link': '/admin/page1choices'},
        {name: 'Page 2 Results', 'link': '/admin/page2results'},
        {name: 'Page 2 Choices', 'link': '/admin/page2choices'},
        {name: 'Page 3 Results', 'link': '/admin/page3results'},
        {name: 'Page 3 Choices', 'link': '/admin/page3choices'},
        {name: 'Page 4 Results', 'link': '/admin/page4results'},
        {name: 'Page 4 Choices', 'link': '/admin/page4choices'},
        {name: 'Page 5 Results', 'link': '/admin/page5results'},
        {name: 'Ending', 'link': '/admin/ending'},
        ],
      rowsToDisplay : 0,
      expanded: false,
      page5ChoiceA: '',
      page5ChoiceB: '',
      page5ChoiceC: '',
      backgroundUrl: ''
    }
  }

  handlepage5ChoiceA(event) {
    this.setState({ page5ChoiceA: event.target.value });
  }
  handlepage5ChoiceB(event) {
    this.setState({ page5ChoiceB: event.target.value });
  }
  handlepage5ChoiceC(event) {
    this.setState({ page5ChoiceC: event.target.value });
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
      page5ChoiceA: event.target.value,
      page5ChoiceB: event.target.value,
      page5ChoiceC: event.target.value,
      backgroundUrl: event.target.value
    });

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        page5ChoiceA: this.state.page5ChoiceA,
        page5ChoiceB: this.state.page5ChoiceB,
        page5ChoiceC: this.state.page5ChoiceC,
        backgroundUrl: this.state.backgroundUrl
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      page5ChoiceA: '',
      page5ChoiceB: '',
      page5ChoiceC: '',
      backgroundUrl: ''
    });
  };


  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Page 5 Choices
          </h1>
          <h2 className="">
            Enter up to 3 Choices for Page 5:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="page5ChoiceA"
                  onChange={this.handlepage5ChoiceA}
                  type="textarea"
                  value={this.state.page5ChoiceA}
                  placeholder="Choice A:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page5ChoiceB"
                  onChange={this.handlepage5ChoiceB}
                  type="textarea"
                  value={this.state.page5ChoiceB}
                  placeholder="Choice B:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page5ChoiceC"
                  onChange={this.handlepage5ChoiceC}
                  type="textarea"
                  value={this.state.page5ChoiceC}
                  placeholder="Choice C:"
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

export default Page5Choices;
