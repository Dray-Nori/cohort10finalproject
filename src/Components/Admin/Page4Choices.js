import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Page4Choices extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handlepage4ChoiceA = this.handlepage4ChoiceA.bind(this);
    this.handlepage4ChoiceB = this.handlepage4ChoiceB.bind(this);
    this.handlepage4ChoiceC = this.handlepage4ChoiceC.bind(this);
    this.handlepage4ChoiceD = this.handlepage4ChoiceD.bind(this);
    this.handlepage4ChoiceE = this.handlepage4ChoiceE.bind(this);
    this.handlepage4ChoiceF = this.handlepage4ChoiceF.bind(this);

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
        {name: 'Page 5 Results', 'link': '/admin/page5results'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      page4ChoiceA: '',
      page4ChoiceB: '',
      page4ChoiceC: '',
      page4ChoiceD: '',
      page4ChoiceE: '',
      page4ChoiceF: ''
    }
  }

  handlepage4ChoiceA(event) {
    this.setState({ page4ChoiceA: event.target.value });
  }
  handlepage4ChoiceB(event) {
    this.setState({ page4ChoiceB: event.target.value });
  }
  handlepage4ChoiceC(event) {
    this.setState({ page4ChoiceC: event.target.value });
  }
  handlepage4ChoiceD(event) {
    this.setState({ page4ChoiceD: event.target.value });
  }
  handlepage4ChoiceE(event) {
    this.setState({ page4ChoiceE: event.target.value });
  }
  handlepage4ChoiceF(event) {
    this.setState({ page4ChoiceF: event.target.value });
  }



  showMore() {
    this.state.rowsToDisplay === 0 ?
    (this.setState({ rowsToDisplay: this.state.navigation.length, expanded: true })) :
    (this.setState({ rowsToDisplay: 0, expanded: false }))
  }

  addToStory = event => {
    event.preventDefault();
    this.setState({
      page4ChoiceA: event.target.value,
      page4ChoiceB: event.target.value,
      page4ChoiceC: event.target.value,
      page4ChoiceD: event.target.value,
      page4ChoiceE: event.target.value,
      page4ChoiceF: event.target.value
    });

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        page4ChoiceA: this.state.page4ChoiceA,
        page4ChoiceB: this.state.page4ChoiceB,
        page4ChoiceC: this.state.page4ChoiceC,
        page4ChoiceD: this.state.page4ChoiceD,
        page4ChoiceE: this.state.page4ChoiceE,
        page4ChoiceF: this.state.page4ChoiceF
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      page4ChoiceA: '',
      page4ChoiceB: '',
      page4ChoiceC: '',
      page4ChoiceD: '',
      page4ChoiceE: '',
      page4ChoiceF: ''
    });
  };


  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Page 4 Choices
          </h1>
          <h2 className="">
            Enter up to 4 Choices for Page 4:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="page4ChoiceA"
                  onChange={this.handlepage4ChoiceA}
                  type="textarea"
                  value={this.state.page4ChoiceA}
                  placeholder="Choice A:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page4ChoiceB"
                  onChange={this.handlepage4ChoiceB}
                  type="textarea"
                  value={this.state.page4ChoiceB}
                  placeholder="Choice B:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page4ChoiceC"
                  onChange={this.handlepage4ChoiceC}
                  type="textarea"
                  value={this.state.page4ChoiceC}
                  placeholder="Choice C:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page4ChoiceD"
                  onChange={this.handlepage4ChoiceD}
                  type="textarea"
                  value={this.state.page4ChoiceD}
                  placeholder="Choice D:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page4ChoiceE"
                  onChange={this.handlepage4ChoiceE}
                  type="textarea"
                  value={this.state.page4ChoiceE}
                  placeholder="Choice E:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page4ChoiceF"
                  onChange={this.handlepage4ChoiceF}
                  type="textarea"
                  value={this.state.page4ChoiceF}
                  placeholder="Choice F:"
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

export default Page4Choices;
