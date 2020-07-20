import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './VendingMachine.css';
import vendingMachineImg from './VendingMachine.png';

class VendingMachine extends Component {
	render() {
		return (
			<div className="VendingMachine" style={{ backgroundImage: `url(${vendingMachineImg})` }}>
				<h1>hello i am a vending machine. what would you like to eat?</h1>

				<h1>
					<Link to="/soda">Soda</Link>
				</h1>
				<h1>
					<Link to="/chips">Chips</Link>
				</h1>
				<h1>
					<Link to="/sardines">Sardines</Link>
				</h1>
			</div>
		);
	}
}

export default VendingMachine;
