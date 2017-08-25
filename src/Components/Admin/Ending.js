import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Ending extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handleendingChoiceA = this.handleendingChoiceA.bind(this);
    this.handleendingChoiceB = this.handleendingChoiceB.bind(this);
    this.handleendingChoiceC = this.handleendingChoiceC.bind(this);

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
        {name: 'Page 5 Choices', 'link': '/admin/page5choices'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      endingChoiceA: '',
      endingChoiceB: '',
      endingChoiceC: ''
    }
  }

  handleendingChoiceA(event) {
    this.setState({ endingChoiceA: event.target.value });
  }
  handleendingChoiceB(event) {
    this.setState({ endingChoiceB: event.target.value });
  }
  handleendingChoiceC(event) {
    this.setState({ endingChoiceC: event.target.value });
  }



  showMore() {
    this.state.rowsToDisplay === 0 ?
    (this.setState({ rowsToDisplay: this.state.navigation.length, expanded: true })) :
    (this.setState({ rowsToDisplay: 0, expanded: false }))
  }

  addToStory = event => {
    event.preventDefault();
    this.setState({
      endingChoiceA: event.target.value,
      endingChoiceB: event.target.value,
      endingChoiceC: event.target.value
    });

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        endingChoiceA: this.state.page5ChoiceA,
        endingChoiceB: this.state.page5ChoiceB,
        endingChoiceC: this.state.page5ChoiceC
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      endingChoiceA: '',
      endingChoiceB: '',
      endingChoiceC: ''
    });
  };


  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Ending
          </h1>
          <h2 className="">
            Enter up to 3 Choices for an Ending:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="endingChoiceA"
                  onChange={this.handleendingChoiceA}
                  type="textarea"
                  value={this.state.endingChoiceA}
                  placeholder="Ending A:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="endingChoiceB"
                  onChange={this.handleendingChoiceB}
                  type="textarea"
                  value={this.state.endingChoiceB}
                  placeholder="Ending B:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="endingChoiceC"
                  onChange={this.handleendingChoiceC}
                  type="textarea"
                  value={this.state.endingChoiceC}
                  placeholder="Ending C:"
                />
              </li>
            <li className="">
                <button
                  className=""
                  type="submit"
                  onClick={this.addToStory}
                >
                  Add Ending<i className="" aria-hidden="true" />
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

export default Ending;
