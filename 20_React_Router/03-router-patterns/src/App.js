import React from 'react';
import Food from './Food';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			{/* <Food name="Kale" /> */}
			{/* <Route exact path="/food/:name" render={(routeProps) => <Food name={routeProps.match.params.name} />} /> */}
			{/* Have to spread 'match', 'location' and 'history' from props */}
			<Route exact path="/food/:name" render={(routeProps) => <Food {...routeProps} />} />
			{/* React automatically pass in to component 'match', 'location' and 'history' as props */}
			<Route exact path="/food/:name" component={Food} />
			{/* If we need to pass something, we use render: */}
			<Route exact path="/food/:name" render={(routeProps) => <Food authenticated={true} {...routeProps} />} />
		</div>
	);
}

export default App;
