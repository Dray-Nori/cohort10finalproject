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

  addToProductList = event => {
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
        userId: this.state.userId,
        picture: this.state.picture,
        name: this.state.name,
        description: this.state.description,
        price: this.state.price
      })
      .then(response => {
        console.log(response, 'Item added!');
      })
      .catch(err => {
        console.log(err, 'Item not added, try again');
      });
    this.setState({
      userId: '',
      picture: '',
      name: '',
      description: '',
      price: ''
    });
  };

  addToUsers = event => {
    event.preventDefault();
    this.setState({
      userName: event.target.value,
      password: event.target.value
    });
    console.log('UserName is:     ' + this.state.username);
    console.log('Password is:     ' + this.state.password);

    axios
      .post('https://limitless-peak-19224.herokuapp.com/newuser', {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response, 'Hey it worked!');
      })
      .catch(err => {
        console.log(err, 'Something broke, try again!');
      });
    this.setState({ userName: '', password: '' });
  };

  render() {
    return (
      <div className="adminForms">
      <style>@import url('https://fonts.googleapis.com/css?family=Sanchez');</style>
        <form className="addProduct">
          <h1 className="productAddTitle">
            Add a Product:
          </h1>
          <ul>
            <div className="productEntryContainer">
              <li className="productAddList">
                <input
                  className="productAddForm"
                  name="userId"
                  onChange={this.handleuserId}
                  type="text"
                  value={this.state.userId}
                  placeholder="User ID:"
                />
              </li>
              <li className="productAddList">
                <input
                  className="productAddForm"
                  name="picture"
                  onChange={this.handlepicture}
                  type="text"
                  value={this.state.picture}
                  placeholder="Picture URL:"
                />
              </li>
              <li className="productAddList">
                <input
                  className="productAddForm"
                  name="name"
                  onChange={this.handlename}
                  type="text"
                  value={this.state.name}
                  placeholder="Name:"
                />
              </li>
              <li className="productAddList">
                <input
                  className="productAddForm"
                  name="description"
                  onChange={this.handledescription}
                  type="text"
                  value={this.state.description}
                  placeholder="Description:"
                />
              </li>
              <li className="productAddList">
                <input
                  className="productAddForm"
                  name="price"
                  onChange={this.handleprice}
                  type="text"
                  value={this.state.price}
                  placeholder="Price:"
                />
              </li>
              <li className="productAddList">
                <button
                  className="productAddSubButton"
                  type="submit"
                  onClick={this.addToProductList}
                >
                  Add Item<i className="submitButton" aria-hidden="true" />
                </button>
              </li>
            </div>
          </ul>
        </form>

        <form className="addUser">
          <h1 className="adminUsers">Add a User:</h1>
          <div className="addUsersContainer">
            <ul className="usersAddList">
              <li>
                <input
                  className="usersAddForm"
                  name="username"
                  onChange={this.handleUserName}
                  type="text"
                  value={this.state.username}
                  placeholder="Username:"
                />
              </li>
              <li>
                <input
                  className="usersAddForm"
                  name="password"
                  onChange={this.handlePassword}
                  type="text"
                  value={this.state.Password}
                  placeholder="Password:"
                />
              </li>
              <li><input className="usersAddButton" name="admin" type="checkbox" id="adminCheck" value="checkbox"></input>
                <label htmlFor="adminCheck">Admin</label></li>
              <li>
                <button
                  className="usersAddSubButton"
                  type="submit"
                  onClick={this.addToUsers}
                >
                  Add User<i className="submitButton" aria-hidden="true" />
                </button>
              </li>

            </ul>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateStory;
