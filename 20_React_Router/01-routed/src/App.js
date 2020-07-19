import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
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
				<Link to="/">About</Link>
				<Link to="/dog">Dog</Link>
				<Link to="/contact">Contact</Link>
				{/* a uses GET request with page reloading*/}
				<a href="/dog">Dog</a>
				<a href="/contact">Contact</a>
				<a href="/">About</a>
			</nav>
			{/* <Switch> */}
			<Route exact path="/" component={About} />
			<Route exact path="/dog" component={Dog} />
			<Route exact path="/dog/hater" component={Hater} />
			<Route exact path="/contact" component={Contact} />
			{/* </Switch> */}
		</div>
	);
}

export default App;
