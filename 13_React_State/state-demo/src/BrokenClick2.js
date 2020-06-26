import React, { Component } from 'react';

// Alternative syntax
class BrokenClick2 extends Component {
	state = { clicked: false };
	// using arrow function to add context to 'this'
	handleClick = (e) => {
		this.setState({ clicked: true });
	};
	render() {
		return (
			<div>
				<h1>{this.state.clicked ? 'Clicked!' : 'Not Clicked'}</h1>
				<button onClick={this.handleClick}>Click Me!</button>
			</div>
		);
	}
}

export default BrokenClick2;
