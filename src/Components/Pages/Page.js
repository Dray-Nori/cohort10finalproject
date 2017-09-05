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
      allPages: [],
      allOptions: [],
      currentPage: "1",
      stats: [],
      text: [],
      art: "",
      options: []
    }
  }

  componentDidMount() {

    fetch('https://damp-reef-35552.herokuapp.com/api/v1/stories')
    .then(res => res.json())
    .then(storyList => {
      let ourStory = storyList.find(story => {
        return (story.name === this.props.match.params.name)
      })
      console.log('ourStory', ourStory, ourStory.id);
      fetch('https://damp-reef-35552.herokuapp.com/api/v1/pages')
      .then(res => res.json())
      .then(results => {
        let storyPages = results.filter(page => {
          return (page.story_id === ourStory.id)
        })
        fetch('https://damp-reef-35552.herokuapp.com/api/v1/options')
        .then(res => res.json())
        .then(options => {
          let currentPage = storyPages.find(cur => {
            return (cur.name === "1")
          })
          let currentOptions = options.filter(opt => {
            return (opt.page_id === currentPage.id)
          })
          console.log('currentPage', currentPage);
          console.log('currentOptions', currentOptions);
          this.setState({
            allPages: storyPages,
            allOptions: options,
            text: currentPage.text,
            art: currentPage.img,
            options: currentOptions
          })
        })
      })
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
        <button key={opt.next_page_id} value={opt.next} onClick={this.onButtonPress}>{opt.text}</button>
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
