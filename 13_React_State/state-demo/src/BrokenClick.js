import React, { Component } from 'react';

class BrokenClick extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false
		};
		// broken click fix (adding context to 'this'):
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		this.setState({ clicked: true });
	}
	render() {
		return (
			<div>
				<h1>{this.state.clicked ? 'Clicked!' : 'Not Clicked'}</h1>
				<button onClick={this.handleClick}>Click Me!</button>
			</div>
		);
	}
}

export default BrokenClick;
