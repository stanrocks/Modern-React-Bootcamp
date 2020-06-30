import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('clicked!');
    console.log(e.target.className);
  }

  render() {
    return (
      <div
        className={this.props.className}
        // onClick={this.props.handleClick}
        onClick={this.handleClick}
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
  }
}

export default Box;
