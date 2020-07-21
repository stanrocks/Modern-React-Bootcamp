import React from 'react';
import Food from './Food';
import Meal from './Meal';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			<Switch>
				{/* Home route */}
				<Route exact path="/" render={() => <h1>Home Page!</h1>} />

				{/* ========== */}
				{/* URL params */}
				{/* ========== */}

				{/* <Food name="Kale" /> */}
				{/* <Route exact path="/food/:name" render={(routeProps) => <Food name={routeProps.match.params.name} />} /> */}
				{/* Have to spread 'match', 'location' and 'history' from props */}
				{/* <Route exact path="/food/:name" render={(routeProps) => <Food {...routeProps} />} /> */}
				{/* React automatically pass in to component 'match', 'location' and 'history' as props */}
				<Route exact path="/food/:name" component={Food} />
				{/* If we need to pass something, we use render: */}
				<Route exact path="/food/:name" render={(routeProps) => <Food authenticated={true} {...routeProps} />} />

				{/* ===================== */}
				{/* Multiple Route Params */}
				{/* ===================== */}

				{/* try visit this: http://localhost:3000/food/potato/drink/wine */}
				<Route exact path="/food/:foodName/drink/:drinkName" component={Meal} />

				{/* =================== */}
				{/* 404 Not Found Route */}
				{/* =================== */}
				{/* this is a route with no path declared */}
				{/* have to use a switch, or else 404 will always render  */}
				{/* that route should be at the end of switch, or it will intercept proper routes */}

				{/* try visit any random path like http://localhost:3000/jojk */}
				<Route render={() => <h1>Error! Not Found!</h1>} />
			</Switch>
		</div>
	);
}

export default App;
