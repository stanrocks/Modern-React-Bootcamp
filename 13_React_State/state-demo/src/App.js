import React, { Component } from 'react';
import Game from './Game';
import Button from './Button';
import BrokenClick from './BrokenClick';
import BrokenClick2 from './BrokenClick2';
import Rando from './Rando';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Rando maxNum={7} /> */}
				<Button />
				<BrokenClick />
				<BrokenClick2 />
			</div>
		);
	}
}

export default App;
