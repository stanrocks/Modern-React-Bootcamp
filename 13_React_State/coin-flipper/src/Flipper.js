import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceUrl: '',
      countTotal: 0,
      countHead: 0,
      countTail: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    let coinSide = Math.round(Math.random());
    coinSide
      ? this.setState(this.incrementHead)
      : this.setState(this.incrementTail);
    this.setState(this.incrementTotal);
  }

  incrementHead(st) {
    return {
      countHead: st.countHead + 1,
      faceUrl: 'https://tinyurl.com/react-coin-heads-jpg',
    };
  }

  incrementTail(st) {
    return {
      countTail: st.countTail + 1,
      faceUrl: 'https://tinyurl.com/react-coin-tails-jpg',
    };
  }

  incrementTotal(st) {
    return { countTotal: st.countTotal + 1 };
  }

  handleClick() {
    this.flipCoin();
  }

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <Coin image={this.state.faceUrl} />
        <button onClick={this.handleClick}>FLIP MEEEE</button>
        <p>
          Out of {this.state.countTotal} flips, there have been
          {this.state.countHead} heads and {this.state.countTail} tails.
        </p>
      </div>
    );
  }
}

export default Flipper;
