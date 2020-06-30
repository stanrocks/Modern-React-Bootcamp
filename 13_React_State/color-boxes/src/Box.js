import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div>
        <div
          className={this.props.className}
          onClick={this.props.handleClick}
        ></div>
      </div>
    );
  }
}

export default Box;
