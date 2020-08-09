import React from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import SimpleFormClass from './SimpleFormClass';
import SimpleFormHooks from './SimpleFormHooks';
import SimpleFormInputHook from './SimpleFormInputHook';
import Toggler from './Toggler';
import Clicker from './Clicker';

import './App.css';

function App() {
	return (
		<div className="App">
			<CounterClass />
			<CounterHooks />
			<Toggler />
			<SimpleFormClass />
			<SimpleFormHooks />
			<SimpleFormInputHook />
			<Clicker />
		</div>
	);
}

export default App;
