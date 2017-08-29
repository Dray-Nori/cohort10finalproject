import React, { Component } from 'react';
import '../../styles/header.css';

class Contributors extends Component {
  constructor(props) {
    super(props);

    this.showMore = this.showMore.bind(this, true);

    this.state = {
      contributors: [
        {
          name: 'Brad Broge',
          link: 'https://www.linkedin.com/in/brad-broge-10ba4873/'
        },
        {
          name: 'Ethan Jarrell',
          link: 'https://www.linkedin.com/in/ethan-jarrell-1226669/'
        },
        {
          name: 'Jason Grigg',
          link: 'https://www.linkedin.com/in/jasonmgrigg/'
        },
        {
          name: 'Oresti Arsi',
          link: 'https://www.linkedin.com/in/oresti-arsi-879873133/'
        },
      ],
      rowsToDisplay: 0,
      expanded: false,
      str: '',
      browse: <div />,
      status: this.props.status
    };
  }

  showMore() {
    this.state.rowsToDisplay === 0
      ? this.setState({
          rowsToDisplay: this.state.contributors.length,
          expanded: true
        })
      : this.setState({ rowsToDisplay: 0, expanded: false });
  }

  render() {
    return (
          <div className="contributorsContainer">
            <div className="contributorsColumn">
              <ul className="contributeList">
                {this.state.contributors
                  .slice(0, this.state.rowsToDisplay)
                  .map((contributors, i) =>
                    <li key={i}>
                      <a
                        className="contributorsListItem"
                        href={contributors.link}
                      >
                        {contributors.name}
                      </a>
                    </li>
                  )}
              </ul>
              <p>
                <a onClick={this.showMore}>
                  {this.state.expanded
                    ? <span className="contributorsShowMore">- Hide -(Click Me)</span>
                    : <span className="contributorsShowMore">About Us (Click Me)</span>}
                </a>
              </p>
            </div>
          </div>
    );
  }
}

export default Contributors;
