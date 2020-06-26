import React, { Component } from 'react';

class ExerciseClicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 1,
			winner: false
		};
		this.tryLuck = this.tryLuck.bind(this);
	}

	tryLuck() {
		let rnd = Math.floor(Math.random() * 10);
		this.setState({ number: rnd });
		if (rnd === 7) {
			this.setState({ winner: true });
		}
	}

	render() {
		return (
			<div>
				<h1>Number is {this.state.number}</h1>
				{this.state.winner ? <h1>YOU WIN!</h1> : <button onClick={this.tryLuck}>Random Number</button>}
			</div>
		);
	}
}

export default ExerciseClicker;
