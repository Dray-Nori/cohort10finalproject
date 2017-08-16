import React, { Component } from 'react';

import Header from '../Header/Header'

// import children
// import "./Page.css";


class Page extends Component {
  constructor(props) {
    super(props);

    // register listeners
    this.onButtonPress = this.onButtonPress.bind(this);

    this.state = {
      stats: [],
      text: [],
      art: "",
      options: []
    }
  }

  componentDidMount() {
    let json = require(`/${this.props.match.params.name}/index.json`);
    let img = require(`/${this.props.match.params.name}/${json.art}`);
    this.setState({
      stats: json.stats,
      text: json.text,
      art: img,
      options: json.options
    })
  };


  onButtonPress = (e) => {
    // TODO stuff
    e.preventDefault()
    console.log('prior state', this.state);
    // console.log('event target', e.target);
    // console.log('event value', e.target.value);

    let nextPage = require(`/${this.props.match.params.name}/${e.target.value}`);
    let nextImg = require(`/${this.props.match.params.name}/${nextPage.art}`)
    console.log('next page', nextPage);

    this.setState({
      text: nextPage.text,
      art: nextImg,
      options: nextPage.options
    })
    console.log('new state', this.state);
  };

  render() {
    // console.log('state', this.state);
    let options = this.state.options.map((opt) => {
      return (
        <button key={opt.next} value={opt.next} onClick={this.onButtonPress}>{opt.text}</button>
      )
    })
    // let imgSrc = `Pages/${this.props.match.params.name}/${this.state.art}`;
    // console.log('image source', imgSrc);
    return (
      <div className="storyPage">
        <Header stats={this.state.stats} />
        <br />
        <img src={this.state.art} alt="this bullshit" />
        {this.state.text}
        <h6> Options </h6>
        {options}
      </div>
    )
  }
}

export default Page;
