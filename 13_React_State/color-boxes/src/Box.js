import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div>
        <div className="Box" onClick={this.props.handleClick}>
          Box 1
        </div>
        <div className="Box" onClick={this.props.handleClick}>
          Box 2
        </div>
      </div>
    );
  }
}

export default Box;
