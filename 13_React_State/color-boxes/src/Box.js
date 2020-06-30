import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div
        className={this.props.className}
        onClick={this.props.handleClick}
      ></div>
    );
  }
}

export default Box;
