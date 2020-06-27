import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAnimated: false,
			die1: 1,
			die2: 1
		};
		// broken click fix (adding context to 'this'):
		this.roll = this.roll.bind(this);
	}

	getDieRandomNumber() {
		return Math.floor(Math.random() * 6) + 1;
	}

	roll() {
		this.setState({ die1: this.getDieRandomNumber() });
		this.setState({ die2: this.getDieRandomNumber() });
	}

	render() {
		return (
			<div>
				<div>
					<Die value={this.state.die1} />
					<Die value={this.state.die2} />
				</div>
				<button onClick={this.roll}>Roll Dice!</button>
			</div>
		);
	}
}

export default RollDice;
