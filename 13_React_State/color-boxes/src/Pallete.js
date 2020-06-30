import React, { Component } from 'react';
import Box from './Box';

class Pallete extends Component {
  static defaultProps = {
    numBoxes: 18,
    colorBase: [
      'lavender',
      'thistle',
      'violet',
      'orchid',
      'magenta',
      'mediumpurple',
      'darkviolet',
      'darkorchid',
      'darkmagenta',
      'purple',
      'indigo',
      'pink',
      'hotpink',
      'deeppink',
      'slateblue',
      'midnightblue',
      'darkblue',
      'blue',
    ],
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
    let elements = [];
    for (let i = 0; i < this.props.numBoxes; i++) {
      let color = this.props.colorBase[
        Math.floor(Math.random() * this.props.colorBase.length)
      ];
      elements.push(
        <Box
          handleClick={this.handleClick}
          className={`Box Box-${i + 1}`}
          color={color}
        />
      );
    }
    // console.log(elements);
    return elements;
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
