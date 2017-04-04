import React from 'react';

class DigitalClicker extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      timesClicked: 0,
    }
  }

  handleClick() {
    let next = this.state.timesClicked + 1
    this.setState({
      timesClicked: next,
    })
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    );
  }

}

module.exports = DigitalClicker
