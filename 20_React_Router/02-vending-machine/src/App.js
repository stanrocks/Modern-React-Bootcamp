import React, { Component } from 'react';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route exact path="/" render={() => <VendingMachine />} />
				<Route exact path="/chips" render={() => <Chips />} />
				<Route exact path="/sardines" render={() => <Sardines />} />
				<Route exact path="/soda" render={() => <Soda />} />
			</Switch>
			{/* <nav className="App-nav">
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
			</nav> */}
		</div>
	);
}

export default App;
