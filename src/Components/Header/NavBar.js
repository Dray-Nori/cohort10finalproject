import React, { Component } from 'react';
import '../../styles/header.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);

    this.state = {
      navigation: [
        {'name': 'Home', 'link': '/'},
        {'name': 'Admin', 'link': '/Admin'}
        ],
      rowsToDisplay : 0,
      expanded: false,
      }
  }

  showMore() {
    this.state.rowsToDisplay === 0 ?
    (this.setState({ rowsToDisplay: this.state.navigation.length, expanded: true })) :
    (this.setState({ rowsToDisplay: 0, expanded: false }))
  }

  render() {
    return (

      <div className= "navigationContainer">
        <div className="navigationColumn">
          <ul className="navigationList">
            {this.state.navigation.slice(0,this.state.rowsToDisplay).map((navigation, i) => <li key={i}>
            <a className="navigationListItem" href={navigation.link}>{navigation.name}</a></li>)}
          </ul>
          <a onClick={this.showMore}>
              {this.state.expanded ?
                (<span className="navigationShowMore">- Hide -(Click Me)</span>) : (<span className="navigationShowMore">Site Navigation+(Click Me)</span>)}
          </a>
        </div>
    </div>
    )
  }
}

export default NavBar;
