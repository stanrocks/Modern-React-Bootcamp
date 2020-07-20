import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Soda from './Soda';
import './App.css';

function App() {
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
		</div>
	);
}

export default App;
