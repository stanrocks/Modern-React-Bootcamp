import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VendingMachine extends Component {
	render() {
		return (
			<div className="VendingMachine">
				<h1>Hello I am a vending machine. What would you like to eat?</h1>
				<Link to="/chips">Chips</Link>
				<Link to="/sardines">Sardines</Link>
				<Link to="/soda">Soda</Link>
			</div>
		);
	}
}

export default VendingMachine;
