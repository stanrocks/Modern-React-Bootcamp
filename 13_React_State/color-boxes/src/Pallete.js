import React, { Component } from 'react';
import Box from './Box';

class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    console.log('clicked!');
    console.log(e);
  }

  render() {
    return (
      <div>
        Color boxes should be here
        <Box handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Pallete;
