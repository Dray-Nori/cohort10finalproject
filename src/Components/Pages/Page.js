import React, { Component } from 'react';

import StoryHeader from '../StudentHeader/StoryHeader'

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
    e.preventDefault()
    let effect = this.state.options.find((opt) => {
      if (opt.next === e.target.value) {
        return true
      }
      return false
    })
    let newStatBlock = this.state.stats;
    let newStat = newStatBlock.find((opt) => {
      if (opt.name === effect.effect.target) {
        return true
      }
      return false
    });
    let index = newStatBlock.indexOf(newStat);
    newStatBlock[index].value += effect.effect.value;

    let nextPage = require(`/${this.props.match.params.name}/${e.target.value}`);
    let nextImg = require(`/${this.props.match.params.name}/${nextPage.art}`)

    this.setState({
      stats: newStatBlock,
      text: nextPage.text,
      art: nextImg,
      options: nextPage.options
    })
  };

  render() {
    console.log('state', this.state);
    let options = this.state.options.map((opt) => {
      return (
        <button key={opt.next} value={opt.next} onClick={this.onButtonPress}>{opt.text}</button>
      )
    })
    return (
      <div className="storyPage">
        <StoryHeader stats={this.state.stats} />
        <br />
        <img src={this.state.art} alt="A relevant background image" />
        {this.state.text}
        <h6> Options </h6>
        {options}
      </div>
    )
  }
}

export default Page;
