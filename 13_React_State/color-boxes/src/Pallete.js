import React, { Component } from 'react';
import Box from './Box';

class Pallete extends Component {
  static defaultProps = {
    numBoxes: 18,
  };
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

  generateLayout() {
    let arr = [];
    for (let i = 0; i < this.props.numBoxes; i++) {
      arr.push(
        <Box handleClick={this.handleClick} className={`Box Box-${i + 1}`} />
      );
    }
    // console.log(arr);
    return arr;
  }

  render() {
    return (
      <div className="Box-Container">
        {this.generateLayout()}
        {/* <Box handleClick={this.handleClick} class={''} /> */}
      </div>
    );
  }
}

export default Pallete;
