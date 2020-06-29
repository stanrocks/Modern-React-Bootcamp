import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
	render() {
		return (
			<div>
				<h1>Let's flip a coin!</h1>
				<Coin />
				<button>FLIP MEEEE</button>
				<p>Out of ... flips, there have been ... heads and 5 tails.</p>
			</div>
		);
	}
}

export default Flipper;
