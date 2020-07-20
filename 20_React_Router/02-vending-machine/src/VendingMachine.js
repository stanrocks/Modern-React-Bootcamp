import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import './App.css';

class VendingMachine extends Component {
	render() {
		return (
			<div className="App">
				<nav className="App-nav">
					<NavLink exact activeClassName="active-link" to="/">
						Home
					</NavLink>
					<NavLink exact activeClassName="active-link" to="/soda">
						Soda
					</NavLink>
					<NavLink exact activeClassName="active-link" to="/chips">
						Chips
					</NavLink>
					<NavLink exact activeClassName="active-link" to="/sardines">
						Sardines
					</NavLink>
				</nav>

				<Route exact path="/soda" component={Soda} />
				<Route exact path="/chips" component={Chips} />
				<Route exact path="/sardines" component={Sardines} />
			</div>
		);
	}
}

export default VendingMachine;
