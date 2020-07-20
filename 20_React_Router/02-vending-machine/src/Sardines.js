import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardines extends Component {
	render() {
		return (
			<div className="Sardines">
				<h1>You don't eat the sardines. The sardines, they eat you!</h1>
				<Link to="/">Go Back</Link>
			</div>
		);
	}
}

export default Sardines;
