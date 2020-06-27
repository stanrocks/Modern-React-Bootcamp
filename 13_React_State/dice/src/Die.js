import React, { Component } from 'react';

class Die extends Component {
	render() {
		const suffix = [ 'one', 'two', 'three', 'four', 'five', 'six' ];
		const dieClass = 'fas fa-dice-' + suffix[this.props.value - 1];
		return <i className={dieClass} />;
	}
}

export default Die;
