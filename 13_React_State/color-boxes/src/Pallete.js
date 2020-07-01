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
    console.log('clicked!');
    console.log(e.target.id);
    console.log(e.target.className);
    let BoxId = e.target.id.slice(4);
    console.log(BoxId);
    this.changeBoxColor(BoxId);
  }

  changeBoxColor(id) {
    const currColors = [...this.state.boxesColors];
    let newColor = this.getUniqueColor(id);
    currColors[id] = newColor;
    this.setState({ boxesColors: currColors });
  }

  getUniqueColor(id) {
    // make copy of current colors array
    const currColors = [...this.state.boxesColors];
    // generate new random color
    let newColor = this.randomColor();
    // if colors are the not same - assign color to box inside copy of array
    if (currColors[id] !== newColor) {
      return (currColors[id] = newColor);
    } else {
      // else - get unique color again recursively, until they are not same
      return this.getUniqueColor(id);
    }
  }

  randomColor() {
    return this.props.colorBase[
      Math.floor(Math.random() * this.props.colorBase.length)
    ];
  }

  generateInitColors() {
    let genColors = [];
    for (let i = 0; i < this.props.numBoxes; i++) {
      genColors.push(this.randomColor());
    }
    console.log('gen colors', genColors);
    return genColors;
  }

  initColors() {
    // breaking recursion (bad solution)
    if (this.state.boxesColors.length === 0) {
      this.setState({ boxesColors: this.generateInitColors() });
      console.log('init colors');
    }
  }

  generateLayout() {
    //   // breaking recursion (bad solution)
    // if (this.state.boxesColors.length === 0) {
    //   this.setState({ boxesColors: this.generateInitColors() });
    //   console.log('init colors');
    // }
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
        {this.initColors()}
        {this.generateLayout()}
      </div>
    );
  }
}

export default Pallete;
