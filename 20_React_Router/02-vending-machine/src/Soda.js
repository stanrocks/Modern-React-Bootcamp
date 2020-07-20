import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Soda extends Component {
	render() {
		return (
			<div className="Soda">
				<h1>SODAAAAAA IS MY FAVORITE</h1>
				<h3>But now I drink sparkling water instead</h3>
				<p>I still miss Soda</p>
				<Link to="/">Go Back</Link>
			</div>
		);
	}
}

export default Soda;
