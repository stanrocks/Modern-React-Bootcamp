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
      boxesColors: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.changeTile(e);
  }

  changeTile(e) {
    console.log('clicked!');
    console.log(e.target.id);
    console.log(e.target.className);
    let idx = e.target.id.slice(4);
    console.log(idx);
    let currColors = this.state.boxesColors;
    currColors[idx] = 'black';
    this.setState({ boxesColors: currColors });
  }

  generateColors() {
    let genColors = [];
    for (let i = 0; i < this.props.numBoxes; i++) {
      let color = this.props.colorBase[
        Math.floor(Math.random() * this.props.colorBase.length)
      ];
      genColors.push(color);
    }
    console.log('gen colors', genColors);
    return genColors;
  }

  initColors() {
    // breaking recursion (bad solution)
    if (this.state.boxesColors.length === 0) {
      this.setState({ boxesColors: this.generateColors() });
      console.log('init colors');
    }
  }

  generateLayout() {
    let elements = [];
    for (let i = 0; i < this.props.numBoxes; i++) {
      elements.push(
        <Box
          handleClick={this.handleClick}
          className={`Box`}
          id={`Box-${i}`}
          color={this.state.boxesColors[i]}
        />
      );
    }
    return elements;
  }

  render() {
    return (
      <div className="Box-Container">
        {(this.initColors(), this.generateLayout())}
      </div>
    );
  }
}

export default Pallete;
