import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class Page3Choices extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);
    this.handlepage3ChoiceA = this.handlepage3ChoiceA.bind(this);
    this.handlepage3ChoiceB = this.handlepage3ChoiceB.bind(this);
    this.handlepage3ChoiceC = this.handlepage3ChoiceC.bind(this);
    this.handlepage3ChoiceD = this.handlepage3ChoiceD.bind(this);
    this.handlepage3ChoiceE = this.handlepage3ChoiceE.bind(this);
    this.handlepage3ChoiceF = this.handlepage3ChoiceF.bind(this);
    this.handlepage3ChoiceG = this.handlepage3ChoiceG.bind(this);
    this.handlepage3ChoiceH = this.handlepage3ChoiceH.bind(this);

    this.state = {
      navigation: [
        {name: 'Home', 'link': '/'},
        {name: 'Title and Summary', 'link': '/admin/createstory'},
        {name: 'Page 1 Choices', 'link': '/admin/page1choices'},
        {name: 'Page 2 Results', 'link': '/admin/page2results'},
        {name: 'Page 3 Results', 'link': '/admin/page3results'},
        {name: 'Page 4 Results', 'link': '/admin/page4results'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      page3ChoiceA: '',
      page3ChoiceB: '',
      page3ChoiceC: '',
      page3ChoiceD: '',
      page3ChoiceE: '',
      page3ChoiceF: '',
      page3ChoiceG: '',
      page3ChoiceH: ''
    }
  }

  handlepage3ChoiceA(event) {
    this.setState({ page3ChoiceA: event.target.value });
  }
  handlepage3ChoiceB(event) {
    this.setState({ page3ChoiceB: event.target.value });
  }
  handlepage3ChoiceC(event) {
    this.setState({ page3ChoiceC: event.target.value });
  }
  handlepage3ChoiceD(event) {
    this.setState({ page3ChoiceD: event.target.value });
  }
  handlepage3ChoiceE(event) {
    this.setState({ page3ChoiceE: event.target.value });
  }
  handlepage3ChoiceF(event) {
    this.setState({ page3ChoiceF: event.target.value });
  }
  handlepage3ChoiceG(event) {
    this.setState({ page3ChoiceG: event.target.value });
  }
  handlepage3ChoiceH(event) {
    this.setState({ page3ChoiceH: event.target.value });
  }



  showMore() {
    this.state.rowsToDisplay === 0 ?
    (this.setState({ rowsToDisplay: this.state.navigation.length, expanded: true })) :
    (this.setState({ rowsToDisplay: 0, expanded: false }))
  }

  addToStory = event => {
    event.preventDefault();
    this.setState({
      page3ChoiceA: event.target.value,
      page3ChoiceB: event.target.value,
      page3ChoiceC: event.target.value,
      page3ChoiceD: event.target.value,
      page3ChoiceE: event.target.value,
      page3ChoiceF: event.target.value,
      page3ChoiceG: event.target.value,
      page3ChoiceH: event.target.value
    });

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        page3ChoiceA: this.state.page2ChoiceA,
        page3ChoiceB: this.state.page2ChoiceB,
        page3ChoiceC: this.state.page2ChoiceC,
        page3ChoiceD: this.state.page2ChoiceD,
        page3ChoiceE: this.state.page2ChoiceE,
        page3ChoiceF: this.state.page2ChoiceF,
        page3ChoiceG: this.state.page2ChoiceG,
        page3ChoiceH: this.state.page2ChoiceH
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      page3ChoiceA: '',
      page3ChoiceB: '',
      page3ChoiceC: '',
      page3ChoiceD: '',
      page3ChoiceE: '',
      page3ChoiceF: '',
      page3ChoiceG: '',
      page3ChoiceH: ''
    });
  };


  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Page 3 Choices
          </h1>
          <h2 className="">
            Enter up to 4 Choices for Page 3:
          </h2>
          <ul>
            <div className="">
              <li className="">
                <input
                  className="inputForm"
                  name="page3ChoiceA"
                  onChange={this.handlepage3ChoiceA}
                  type="textarea"
                  value={this.state.page3ChoiceA}
                  placeholder="Choice A:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page3ChoiceB"
                  onChange={this.handlepage3ChoiceB}
                  type="textarea"
                  value={this.state.page3ChoiceB}
                  placeholder="Choice B:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page3ChoiceC"
                  onChange={this.handlepage3ChoiceC}
                  type="textarea"
                  value={this.state.page3ChoiceC}
                  placeholder="Choice C:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page3ChoiceD"
                  onChange={this.handlepage3ChoiceD}
                  type="textarea"
                  value={this.state.page3ChoiceD}
                  placeholder="Choice D:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page3ChoiceE"
                  onChange={this.handlepage3ChoiceE}
                  type="textarea"
                  value={this.state.page3ChoiceE}
                  placeholder="Choice E:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page3ChoiceF"
                  onChange={this.handlepage3ChoiceF}
                  type="textarea"
                  value={this.state.page3ChoiceF}
                  placeholder="Choice F:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page3ChoiceG"
                  onChange={this.handlepage3ChoiceG}
                  type="textarea"
                  value={this.state.page3ChoiceG}
                  placeholder="Choice G:"
                />
              </li>
              <li className="">
                <input
                  className="inputForm"
                  name="page3ChoiceH"
                  onChange={this.handlepage3ChoiceH}
                  type="textarea"
                  value={this.state.page3ChoiceH}
                  placeholder="Choice H:"
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

export default Page3Choices;
