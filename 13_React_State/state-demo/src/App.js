import React, { Component } from 'react';
import Game from './Game';
import Button from './Button';
import BrokenClick from './BrokenClick';
import Rando from './Rando';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Rando maxNum={7} /> */}
				<Button />
				<BrokenClick />
			</div>
		);
	}
}

export default App;
