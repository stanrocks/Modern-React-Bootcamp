import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component {
	render() {
		return (
			<div className="Chips">
				<h1>Chips</h1>
				<p>nom nom nom</p>
				<Link to="/">Go Back</Link>
			</div>
		);
	}
}

export default Chips;
