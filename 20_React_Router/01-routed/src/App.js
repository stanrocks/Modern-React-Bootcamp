import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import About from './About';
import Dog from './Dog';
import Contact from './Contact';
import './App.css';

const Hater = () => <h1>I ABSOLUTELY HATE DOGS!</h1>;

function App() {
	return (
		<div className="App">
			<nav className="App-nav">
				{/* link adds seamless experience - page doesn't reload */}
				<NavLink exact activeClassName="active-link" to="/">
					About
				</NavLink>
				<NavLink exact activeClassName="active-link" to="/dog">
					Dog
				</NavLink>
				<NavLink exact activeClassName="active-link" to="/dog/r">
					Dog(r)
				</NavLink>
				<NavLink exact activeClassName="active-link" to="/dog/c">
					Dog(c)
				</NavLink>
				<NavLink exact activeClassName="active-link" to="/contact">
					Contact
				</NavLink>
				{/* a uses GET request with page reloading*/}
				{/* <a href="/dog">Dog</a>
				<a href="/contact">Contact</a>
				<a href="/">About</a> */}
			</nav>
			{/* <Switch> */}
			<Route exact path="/" component={About} />
			{/* Component will instantiate a new Dog every time */}
			<Route exact path="/dog/c" component={() => <Dog name="Muffins" />} />
			{/* Render will re-use the existing dog component */}
			<Route exact path="/dog/r" render={() => <Dog name="Biscuits" />} />
			<Route exact path="/dog/hater" component={Hater} />
			<Route exact path="/contact" component={Contact} />
			{/* </Switch> */}
		</div>
	);
}

export default App;
