import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
	static defaultProps = {
		sides: [ 'one', 'two', 'three', 'four', 'five', 'six' ]
	};
	constructor(props) {
		super(props);
		this.state = {
			isAnimated: false,
			die1: 'one',
			die2: 'one'
		};
		// broken click fix (adding context to 'this'):
		this.roll = this.roll.bind(this);
	}

	getDieRandomNumber() {
		return this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
	}

	roll() {
		this.setState({ die1: this.getDieRandomNumber() });
		this.setState({ die2: this.getDieRandomNumber() });
	}

	render() {
		return (
			<div className="RollDice">
				<div className="RollDice-container">
					<Die face={this.state.die1} />
					<Die face={this.state.die2} />
				</div>
				<button onClick={this.roll}>Roll Dice!</button>
			</div>
		);
	}
}

export default RollDice;
