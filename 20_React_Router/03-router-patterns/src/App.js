import React from 'react';
import Food from './Food';
import Meal from './Meal';
import Navbar from './Navbar';
import FoodSearch from './FoodSearch';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className="App">
			{/* try to log in */}
			<Navbar />
			<Switch>
				{/* Home route */}
				{/* using render */}
				{/* <Route exact path="/" render={(routeProps) => <FoodSearch {...routeProps} />} /> */}
				{/* using component */}
				<Route exact path="/" component={FoodSearch} />

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
