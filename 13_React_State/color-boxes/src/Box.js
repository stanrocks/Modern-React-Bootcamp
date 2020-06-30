import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div
        className={this.props.className}
        id={this.props.id}
        onClick={this.props.handleClick}
        style={{ backgroundColor: this.props.color }}
      ></div>
    );
  }
}

export default Box;
