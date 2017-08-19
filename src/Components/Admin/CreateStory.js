import React, { Component } from 'react';
import '../../styles/admin.css';
const axios = require('axios');

class CreateStory extends Component {
  constructor(props) {
    super(props);

    this.handlePage1Title = this.handlePage1Title.bind(this);
    this.handlePage1ChoiceAInput = this.handlePage1ChoiceAInput.bind(this);
    this.handlePage1ChoiceBInput = this.handlePage1ChoiceBInput.bind(this);
    this.handlePage1ChoiceCInput = this.handlePage1ChoiceCInput.bind(this);
    this.handlePage2ResultAInput = this.handlePage2ResultAInput.bind(this);
    this.handlePage2ResultBInput = this.handlePage2ResultBInput.bind(this);
    this.handlePage2ResultCInput = this.handlePage2ResultCInput.bind(this);
    this.handlePage2ResultAChoiceAInput = this.handlePage2ResultAChoiceAInput.bind(this);
    this.handlePage2ResultAChoiceBInput = this.handlePage2ResultAChoiceBInput.bind(this);
    this.handlePage2ResultBChoiceAInput = this.handlePage2ResultBChoiceAInput.bind(this);
    this.handlePage2ResultBChoiceBInput = this.handlePage2ResultBChoiceBInput.bind(this);
    this.handlePage2ResultCChoiceAInput = this.handlePage2ResultCChoiceAInput.bind(this);
    this.handlePage2ResultCChoiceBInput = this.handlePage2ResultCChoiceBInput.bind(this);
    this.handlePage3ResultAInput = this.handlePage3ResultAInput.bind(this);
    this.handlePage3ResultBInput = this.handlePage3ResultBInput.bind(this);
    this.handlePage3ResultCInput = this.handlePage3ResultCInput.bind(this);
    this.handlePage3ResultDInput = this.handlePage3ResultDInput.bind(this);
    this.handlePage3ResultAChoiceAInput = this.handlePage3ResultAChoiceAInput.bind(this);
    this.handlePage3ResultAChoiceBInput = this.handlePage3ResultAChoiceBInput.bind(this);
    this.handlePage3ResultBChoiceAInput = this.handlePage3ResultBChoiceAInput.bind(this);
    this.handlePage3ResultBChoiceBInput = this.handlePage3ResultBChoiceBInput.bind(this);
    this.handlePage3ResultCChoiceAInput = this.handlePage3ResultCChoiceAInput.bind(this);
    this.handlePage3ResultCChoiceBInput = this.handlePage3ResultCChoiceBInput.bind(this);
    this.handlePage3ResultDChoiceAInput = this.handlePage3ResultDChoiceAInput.bind(this);
    this.handlePage3ResultDChoiceBInput = this.handlePage3ResultDChoiceBInput.bind(this);
    this.handlePage4ResultAInput = this.handlePage4ResultAInput.bind(this);
    this.handlePage4ResultBInput = this.handlePage4ResultBInput.bind(this);
    this.handlePage4ResultCInput = this.handlePage4ResultCInput.bind(this);
    this.handlePage4ResultAChoiceAInput = this.handlePage4ResultAChoiceAInput.bind(this);
    this.handlePage4ResultAChoiceBInput = this.handlePage4ResultAChoiceBInput.bind(this);
    this.handlePage4ResultBChoiceAInput = this.handlePage4ResultBChoiceAInput.bind(this);
    this.handlePage4ResultBChoiceBInput = this.handlePage4ResultBChoiceBInput.bind(this);
    this.handlePage4ResultCChoiceAInput = this.handlePage4ResultCChoiceAInput.bind(this);
    this.handlePage4ResultCChoiceBInput = this.handlePage4ResultCChoiceBInput.bind(this);
    this.handlePage5ResultInput = this.handlePage5ResultInput.bind(this);
    this.handlePage5ResultChoiceAInput = this.handlePage5ResultChoiceAInput.bind(this);
    this.handlePage5ResultChoiceBInput = this.handlePage5ResultChoiceBInput.bind(this);
    this.handlePage5ResultChoiceBInput = this.handlePage5ResultChoiceCInput.bind(this);
    this.handlePage6EndingAInput = this.handlePage6EndingAInput.bind(this);
    this.handlePage6EndingBInput = this.handlePage6EndingBInput.bind(this);
    this.handlePage6EndingCInput = this.handlePage6EndingCInput.bind(this);

    this.state = {
      Page1Title: '',
      Page1ChoiceAInput: '',
      Page1ChoiceBInput: '',
      Page1ChoiceCInput: '',
      Page2ResultAInput: '',
      Page2ResultBInput: '',
      Page2ResultCInput: '',
      Page2ResultAChoiceAInput: '',
      Page2ResultAChoiceBInput: '',
      Page2ResultBChoiceAInput: '',
      Page2ResultBChoiceBInput: '',
      Page2ResultCChoiceAInput: '',
      Page2ResultCChoiceBInput: '',
      Page3ResultAInput: '',
      Page3ResultBInput: '',
      Page3ResultCInput: '',
      Page3ResultDInput: '',
      Page3ResultAChoiceAInput: '',
      Page3ResultAChoiceBInput: '',
      Page3ResultBChoiceAInput: '',
      Page3ResultBChoiceBInput: '',
      Page3ResultCChoiceAInput: '',
      Page3ResultCChoiceBInput: '',
      Page3ResultDChoiceAInput: '',
      Page3ResultDChoiceBInput: '',
      Page4ResultAInput: '',
      Page4ResultBInput: '',
      Page4ResultCInput: '',
      Page4ResultAChoiceAInput: '',
      Page4ResultAChoiceBInput: '',
      Page4ResultBChoiceAInput: '',
      Page4ResultBChoiceBInput: '',
      Page4ResultCChoiceAInput: '',
      Page4ResultCChoiceBInput: '',
      Page5ResultInput: '',
      Page5ResultChoiceAInput: '',
      Page5ResultChoiceBInput: '',
      Page5ResultChoiceCInput: '',
      Page6EndingAInput: '',
      Page6EndingBInput: '',
      Page6EndingCInput: ''
    };
  }

  handlePage1Title(event) {
    this.setState({ Page1Title: event.target.value });
  }
  handlePage1ChoiceAInput(event) {
    this.setState({ Page1ChoiceAInput: event.target.value });
  }
  handlePage1ChoiceBInput(event) {
    this.setState({ Page1ChoiceBInput: event.target.value });
  }
  handlePage1ChoiceCInput(event) {
    this.setState({ Page1ChoiceCInput: event.target.value });
  }
  handlePage2ResultAInput(event) {
    this.setState({ Page2ResultAInput: event.target.value });
  }
  handlePage2ResultBInput(event) {
    this.setState({ Page2ResultBInput: event.target.value });
  }
  handlePage2ResultCInput(event) {
    this.setState({ Page2ResultCInput: event.target.value });
  }
  handlePage2ResultAChoiceAInput(event) {
    this.setState({ Page2ResultAChoiceAInput: event.target.value });
  }
  handlePage2ResultAChoiceBInput(event) {
    this.setState({ Page2ResultAChoiceBInput: event.target.value });
  }
  handlePage2ResultBChoiceAInput(event) {
    this.setState({ Page2ResultBChoiceAInput: event.target.value });
  }
  handlePage2ResultBChoiceBInput(event) {
    this.setState({ Page2ResultBChoiceBInput: event.target.value });
  }
  handlePage2ResultCChoiceAInput(event) {
    this.setState({ Page2ResultCChoiceAInput: event.target.value });
  }

  handlePage2ResultCChoiceBInput(event) {
    this.setState({ Page2ResultCChoiceBInput: event.target.value });
  }

  handlePage3ResultAInput(event) {
    this.setState({ Page3ResultAInput: event.target.value });
  }

  handlePage3ResultBInput(event) {
    this.setState({ Page3ResultBInput: event.target.value });
  }

  handlePage3ResultCInput(event) {
    this.setState({ Page3ResultCInput: event.target.value });
  }

  handlePage3ResultDInput(event) {
    this.setState({ Page3ResultDInput: event.target.value });
  }

  handlePage3ResultAChoiceAInput(event) {
    this.setState({ Page3ResultAChoiceAInput: event.target.value });
  }

  handlePage3ResultAChoiceBInput(event) {
    this.setState({ Page3ResultAChoiceBInput: event.target.value });
  }

  handlePage3ResultBChoiceAInput(event) {
    this.setState({ Page3ResultBChoiceAInput: event.target.value });
  }

  handlePage3ResultBChoiceBInput(event) {
    this.setState({ Page3ResultBChoiceBInput: event.target.value });
  }

  handlePage3ResultCChoiceAInput(event) {
    this.setState({ Page3ResultCChoiceAInput: event.target.value });
  }

  handlePage3ResultCChoiceBInput(event) {
    this.setState({ Page3ResultCChoiceBInput: event.target.value });
  }

  handlePage3ResultDChoiceAInput(event) {
    this.setState({ Page3ResultDChoiceAInput: event.target.value });
  }

  handlePage3ResultDChoiceBInput(event) {
    this.setState({ Page3ResultDChoiceBInput: event.target.value });
  }

  handlePage4ResultAInput(event) {
    this.setState({ Page4ResultAInput: event.target.value });
  }

  handlePage4ResultBInput(event) {
    this.setState({ Page4ResultBInput: event.target.value });
  }

  handlePage4ResultCInput(event) {
    this.setState({ Page4ResultCInput: event.target.value });
  }

  handlePage4ResultAChoiceAInput(event) {
    this.setState({ Page4ResultAChoiceAInput: event.target.value });
  }

  handlePage4ResultAChoiceBInput(event) {
    this.setState({ Page4ResultAChoiceBInput: event.target.value });
  }

  handlePage4ResultBChoiceAInput(event) {
    this.setState({ Page4ResultBChoiceAInput: event.target.value });
  }

  handlePage4ResultBChoiceBInput(event) {
    this.setState({ Page4ResultBChoiceBInput: event.target.value });
  }

  handlePage4ResultCChoiceAInput(event) {
    this.setState({ Page4ResultCChoiceAInput: event.target.value });
  }

  handlePage4ResultCChoiceBInput(event) {
    this.setState({ Page4ResultCChoiceBInput: event.target.value });
  }

  handlePage5ResultInput(event) {
    this.setState({ Page5ResultInput: event.target.value });
  }

  handlePage5ResultChoiceAInput(event) {
    this.setState({ Page5ResultChoiceAInput: event.target.value });
  }

  handlePage5ResultChoiceBInput(event) {
    this.setState({ Page5ResultChoiceBInput: event.target.value });
  }

  handlePage5ResultChoiceCInput(event) {
    this.setState({ Page5ResultChoiceCInput: event.target.value });
  }

  handlePage6EndingAInput(event) {
    this.setState({ Page6EndingAInput: event.target.value });
  }

  handlePage6EndingBInput(event) {
    this.setState({ Page6EndingBInput: event.target.value });
  }

  handlePage6EndingCInput(event) {
    this.setState({ Page6EndingCInput: event.target.value });
  }

  addToStory = event => {
    event.preventDefault();
    this.setState({
      Page1Title: event.target.value,
      Page1ChoiceAInput: event.targe.value,
      Page1ChoiceBInput: event.targe.value,
      Page1ChoiceCInput: event.targe.value,
      Page2ResultAInput: event.targe.value,
      Page2ResultBInput: event.targe.value,
      Page2ResultCInput: event.targe.value,
      Page2ResultAChoiceAInput: event.targe.value,
      Page2ResultAChoiceBInput: event.targe.value,
      Page2ResultBChoiceAInput: event.targe.value,
      Page2ResultBChoiceBInput: event.targe.value,
      Page2ResultCChoiceAInput: event.targe.value,
      Page2ResultCChoiceBInput: event.targe.value,
      Page3ResultAInput: event.targe.value,
      Page3ResultBInput: event.targe.value,
      Page3ResultCInput: event.targe.value,
      Page3ResultDInput: event.targe.value,
      Page3ResultAChoiceAInput: event.targe.value,
      Page3ResultAChoiceBInput: event.targe.value,
      Page3ResultBChoiceAInput: event.targe.value,
      Page3ResultBChoiceBInput: event.targe.value,
      Page3ResultCChoiceAInput: event.targe.value,
      Page3ResultCChoiceBInput: event.targe.value,
      Page3ResultDChoiceAInput: event.targe.value,
      Page3ResultDChoiceBInput: event.targe.value,
      Page4ResultAInput: event.targe.value,
      Page4ResultBInput: event.targe.value,
      Page4ResultCInput: event.targe.value,
      Page4ResultAChoiceAInput: event.targe.value,
      Page4ResultAChoiceBInput: event.targe.value,
      Page4ResultBChoiceAInput: event.targe.value,
      Page4ResultBChoiceBInput: event.targe.value,
      Page4ResultCChoiceAInput: event.targe.value,
      Page4ResultCChoiceBInput: event.targe.value,
      Page5ResultInput: event.targe.value,
      Page5ResultChoiceAInput: event.targe.value,
      Page5ResultChoiceBInput: event.targe.value,
      Page5ResultChoiceCInput: event.targe.value,
      Page6EndingAInput: event.targe.value,
      Page6EndingBInput: event.targe.value,
      Page6EndingCInput: event.targe.value
    });
    console.log('Page 1 Title is:     ' + this.state.Page1Title);

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newproduct', {
        Page1Title: this.state.Page1Title,
        Page1ChoiceAInput: this.state.Page1ChoiceAInput,
        Page1ChoiceBInput: this.state.Page1ChoiceBInput,
        Page1ChoiceCInput: this.state.Page1ChoiceCInput,
        Page2ResultAInput: this.state.Page2ResultAInput,
        Page2ResultBInput: this.state.Page2ResultBInput,
        Page2ResultCInput: this.state.Page2ResultCInput,
        Page2ResultAChoiceAInput: this.state.Page2ResultAChoiceAInput,
        Page2ResultAChoiceBInput: this.state.Page2ResultAChoiceBInput,
        Page2ResultBChoiceAInput: this.state.Page2ResultBChoiceAInput,
        Page2ResultBChoiceBInput: this.state.Page2ResultBChoiceBInput,
        Page2ResultCChoiceAInput: this.state.Page2ResultCChoiceAInput,
        Page2ResultCChoiceBInput: this.state.Page2ResultCChoiceBInput,
        Page3ResultAInput: this.state.Page3ResultAInput,
        Page3ResultBInput: this.state.Page3ResultBInput,
        Page3ResultCInput: this.state.Page3ResultCInput,
        Page3ResultDInput: this.state.Page3ResultDInput,
        Page3ResultAChoiceAInput: this.state.Page3ResultAChoiceAInput,
        Page3ResultAChoiceBInput: this.state.Page3ResultAChoiceBInput,
        Page3ResultBChoiceAInput: this.state.Page3ResultBChoiceAInput,
        Page3ResultBChoiceBInput: this.state.Page3ResultBChoiceBInput,
        Page3ResultCChoiceAInput: this.state.Page3ResultCChoiceAInput,
        Page3ResultCChoiceBInput: this.state.Page3ResultCChoiceBInput,
        Page3ResultDChoiceAInput: this.state.Page3ResultDChoiceAInput,
        Page3ResultDChoiceBInput: this.state.Page3ResultDChoiceBInput,
        Page4ResultAInput: this.state.Page4ResultAInput,
        Page4ResultBInput: this.state.Page4ResultBInput,
        Page4ResultCInput: this.state.Page4ResultCInput,
        Page4ResultAChoiceAInput: this.state.Page4ResultAChoiceAInput,
        Page4ResultAChoiceBInput: this.state.Page4ResultAChoiceBInput,
        Page4ResultBChoiceAInput: this.state.Page4ResultBChoiceAInput,
        Page4ResultBChoiceBInput: this.state.Page4ResultBChoiceBInput,
        Page4ResultCChoiceAInput: this.state.Page4ResultCChoiceAInput,
        Page4ResultCChoiceBInput: this.state.Page4ResultCChoiceBInput,
        Page5ResultInput: this.state.Page5ResultInput,
        Page5ResultChoiceAInput: this.state.Page5ResultChoiceAInput,
        Page5ResultChoiceBInput: this.state.Page5ResultChoiceBInput,
        Page5ResultChoiceCInput: this.state.Page5ResultChoiceCInput,
        Page6EndingAInput: this.state.Page6EndingAInput,
        Page6EndingBInput: this.state.Page6EndingBInput,
        Page6EndingCInput: this.state.Page6EndingCInput
      })
      .then(response => {
        console.log(response, 'Story added!');
      })
      .catch(err => {
        console.log(err, 'Story not added, try again');
      });
    this.setState({
      Page1Title: '',
      Page1ChoiceAInput: '',
      Page1ChoiceBInput: '',
      Page1ChoiceCInput: '',
      Page2ResultAInput: '',
      Page2ResultBInput: '',
      Page2ResultCInput: '',
      Page2ResultAChoiceAInput: '',
      Page2ResultAChoiceBInput: '',
      Page2ResultBChoiceAInput: '',
      Page2ResultBChoiceBInput: '',
      Page2ResultCChoiceAInput: '',
      Page2ResultCChoiceBInput: '',
      Page3ResultAInput: '',
      Page3ResultBInput: '',
      Page3ResultCInput: '',
      Page3ResultDInput: '',
      Page3ResultAChoiceAInput: '',
      Page3ResultAChoiceBInput: '',
      Page3ResultBChoiceAInput: '',
      Page3ResultBChoiceBInput: '',
      Page3ResultCChoiceAInput: '',
      Page3ResultCChoiceBInput: '',
      Page3ResultDChoiceAInput: '',
      Page3ResultDChoiceBInput: '',
      Page4ResultAInput: '',
      Page4ResultBInput: '',
      Page4ResultCInput: '',
      Page4ResultAChoiceAInput: '',
      Page4ResultAChoiceBInput: '',
      Page4ResultBChoiceAInput: '',
      Page4ResultBChoiceBInput: '',
      Page4ResultCChoiceAInput: '',
      Page4ResultCChoiceBInput: '',
      Page5ResultInput: '',
      Page5ResultChoiceAInput: '',
      Page5ResultChoiceBInput: '',
      Page5ResultChoiceCInput: '',
      Page6EndingAInput: '',
      Page6EndingBInput: '',
      Page6EndingCInput: ''
    });
  };

  render() {
    return (
      <div className="">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="">
          <h1 className="">
            Add a Story:
          </h1>
          <ul>
            <div className="">
              <li className="">
                <input
                  className=""
                  name="Page1Title"
                  onChange={this.handlePage1Title}
                  type="text"
                  value={this.state.Page1Title}
                  placeholder="Page 1 Title:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page1ChoiceAInput"
                  onChange={this.handlePage1ChoiceAInput}
                  type="text"
                  value={this.state.Page1ChoiceAInput}
                  placeholder="Page 1 Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page1ChoiceBInput"
                  onChange={this.handlePage1ChoiceBInput}
                  type="text"
                  value={this.state.Page1ChoiceBInput}
                  placeholder="Page 1 Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page1ChoiceCInput"
                  onChange={this.handlePage1ChoiceCInput}
                  type="text"
                  value={this.state.Page1ChoiceCInput}
                  placeholder="Page 1 Choice C Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page2ResultAInput"
                  onChange={this.handlePage2ResultAInput}
                  type="text"
                  value={this.state.Page2ResultAInput}
                  placeholder="Page 2 Result A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page2ResultBInput"
                  onChange={this.handlePage2ResultBInput}
                  type="text"
                  value={this.state.Page2ResultBInput}
                  placeholder="Page 2 Result B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page2ResultCInput"
                  onChange={this.handlePage2ResultCInput}
                  type="text"
                  value={this.state.Page2ResultCInput}
                  placeholder="Page 2 Result C Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page2ResultAChoiceAInput"
                  onChange={this.handlePage2ResultAChoiceAInput}
                  type="text"
                  value={this.state.Page2ResultAChoiceAInput}
                  placeholder="Page 2 Result A Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page2ResultAChoiceBInput"
                  onChange={this.handlePage2ResultAChoiceBInput}
                  type="text"
                  value={this.state.Page2ResultAChoiceBInput}
                  placeholder="Page 2 Result A Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page2ResultBChoiceAInput"
                  onChange={this.handlePage2ResultBChoiceAInput}
                  type="text"
                  value={this.state.Page2ResultBChoiceAInput}
                  placeholder="Page 2 Result B Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page2ResultBChoiceBInput"
                  onChange={this.handlePage2ResultBChoiceBInput}
                  type="text"
                  value={this.state.Page2ResultBChoiceBInput}
                  placeholder="Page 2 Result B Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page2ResultCChoiceAInput"
                  onChange={this.handlePage2ResultCChoiceAInput}
                  type="text"
                  value={this.state.Page2ResultCChoiceAInput}
                  placeholder="Page 2 Result C Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page2ResultCChoiceBInput"
                  onChange={this.handlePage2ResultCChoiceBInput}
                  type="text"
                  value={this.state.Page2ResultCChoiceBInput}
                  placeholder="Page 2 Result C Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultAInput"
                  onChange={this.handlePage3ResultAInput}
                  type="text"
                  value={this.state.Page3ResultAInput}
                  placeholder="Page 3 Result A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultBInput"
                  onChange={this.handlePage3ResultBInput}
                  type="text"
                  value={this.state.Page3ResultBInput}
                  placeholder="Page 3 Result B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultCInput"
                  onChange={this.handlePage3ResultCInput}
                  type="text"
                  value={this.state.Page3ResultCInput}
                  placeholder="Page 3 Result C Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultDInput"
                  onChange={this.handlePage3ResultDInput}
                  type="text"
                  value={this.state.Page3ResultDInput}
                  placeholder="Page 3 Result D Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultAChoiceAInput"
                  onChange={this.handlePage3ResultAChoiceAInput}
                  type="text"
                  value={this.state.Page3ResultAChoiceAInput}
                  placeholder="Page 3 Result A Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultAChoiceBInput"
                  onChange={this.handlePage3ResultAChoiceBInput}
                  type="text"
                  value={this.state.Page3ResultAChoiceBInput}
                  placeholder="Page 3 Result A Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultBChoiceAInput"
                  onChange={this.handlePage3ResultBChoiceAInput}
                  type="text"
                  value={this.state.Page3ResultBChoiceAInput}
                  placeholder="Page 3 Result B Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultBChoiceBInput"
                  onChange={this.handlePage3ResultBChoiceBInput}
                  type="text"
                  value={this.state.Page3ResultBChoiceBInput}
                  placeholder="Page 3 Result B Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultCChoiceAInput"
                  onChange={this.handlePage3ResultCChoiceAInput}
                  type="text"
                  value={this.state.Page3ResultCChoiceAInput}
                  placeholder="Page 3 Result C Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultCChoiceBInput"
                  onChange={this.handlePage3ResultCChoiceBInput}
                  type="text"
                  value={this.state.Page3ResultCChoiceBInput}
                  placeholder="Page 3 Result C Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultDChoiceAInput"
                  onChange={this.handlePage3ResultDChoiceAInput}
                  type="text"
                  value={this.state.Page3ResultDChoiceAInput}
                  placeholder="Page 3 Result D Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page3ResultDChoiceBInput"
                  onChange={this.handlePage3ResultDChoiceBInput}
                  type="text"
                  value={this.state.Page3ResultDChoiceBInput}
                  placeholder="Page 3 Result D Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page4ResultAInput"
                  onChange={this.handlePage4ResultAInput}
                  type="text"
                  value={this.state.Page4ResultAInput}
                  placeholder="Page 4 Result A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page4ResultBInput"
                  onChange={this.handlePage4ResultBInput}
                  type="text"
                  value={this.state.Page4ResultBInput}
                  placeholder="Page 4 Result B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page4ResultCInput"
                  onChange={this.handlePage4ResultCInput}
                  type="text"
                  value={this.state.Page4ResultCInput}
                  placeholder="Page 4 Result C Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page4ResultAChoiceAInput"
                  onChange={this.handlePage4ResultAChoiceAInput}
                  type="text"
                  value={this.state.Page4ResultAChoiceAInput}
                  placeholder="Page 4 Result A Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page4ResultAChoiceBInput"
                  onChange={this.handlePage4ResultAChoiceBInput}
                  type="text"
                  value={this.state.Page4ResultAChoiceBInput}
                  placeholder="Page 4 Result A Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page4ResultBChoiceAInput"
                  onChange={this.handlePage4ResultBChoiceAInput}
                  type="text"
                  value={this.state.Page4ResultBChoiceAInput}
                  placeholder="Page 4 Result B Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page4ResultBChoiceBInput"
                  onChange={this.handlePage4ResultBChoiceBInput}
                  type="text"
                  value={this.state.Page4ResultBChoiceBInput}
                  placeholder="Page 4 Result B Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page4ResultCChoiceAInput"
                  onChange={this.handlePage4ResultCChoiceAInput}
                  type="text"
                  value={this.state.Page4ResultCChoiceAInput}
                  placeholder="Page 4 Result C Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page4ResultCChoiceBInput"
                  onChange={this.handlePage4ResultCChoiceBInput}
                  type="text"
                  value={this.state.Page4ResultCChoiceBInput}
                  placeholder="Page 4 Result C Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page5ResultInput"
                  onChange={this.handlePage5ResultInput}
                  type="text"
                  value={this.state.Page5ResultInput}
                  placeholder="Page 5 Result Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page5ResultChoiceAInput"
                  onChange={this.handlePage5ResultChoiceAInput}
                  type="text"
                  value={this.state.Page5ResultChoiceAInput}
                  placeholder="Page 5 Result Choice A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page5ResultChoiceBInput"
                  onChange={this.handlePage5ResultChoiceBInput}
                  type="text"
                  value={this.state.Page5ResultChoiceBInput}
                  placeholder="Page 5 Result Choice B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page5ResultChoiceCInput"
                  onChange={this.handlePage5ResultChoiceCInput}
                  type="text"
                  value={this.state.Page5ResultChoiceCInput}
                  placeholder="Page 5 Result Choice C Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page6EndingAInput"
                  onChange={this.handlePage6EndingAInput}
                  type="text"
                  value={this.state.Page6EndingAInput}
                  placeholder="Page 6 Ending A Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page6EndingBInput"
                  onChange={this.handlePage6EndingBInput}
                  type="text"
                  value={this.state.Page6EndingBInput}
                  placeholder="Page 6 Ending B Input:"
                />
              </li>
              <li className="">
                <input
                  className=""
                  name="Page6EndingCInput"
                  onChange={this.handlePage6EndingCInput}
                  type="text"
                  value={this.state.Page6EndingCInput}
                  placeholder="Page 6 Ending C Input:"
                />
              </li>
              <li className="">
                <button
                  className=""
                  type="submit"
                  onClick={this.addToStory}
                >
                  Add Story<i className="" aria-hidden="true" />
                </button>
              </li>
            </div>
          </ul>
        </form>
      </div>
    );
  }
}

export default CreateStory;
