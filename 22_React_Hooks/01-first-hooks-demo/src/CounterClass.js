// classical approach - using class component
// a lot of this to do just to add button and counter that stores it's value in state

import React, { Component } from 'react';

class CounterClass extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		this.increment = this.increment.bind(this);
	}
	increment() {
		this.setState({ count: this.state.count + 1 });
	}
	render() {
		return (
			<div>
				<h1>The Count Is: {this.state.count}</h1>
				<button onClick={this.increment}>Add 1</button>
			</div>
		);
	}
}

export default CounterClass;
