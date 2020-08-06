import React, { useState } from 'react';
function CounterHooks() {
	// initializing default value as 0
	const [ count, setCount ] = useState(0);
	// and it returns two values:
	// 1. the piece of state (count)
	// 2. function to update that piece of state (setCount)
	return (
		<div>
			<h1>The Count Is: {count}</h1>
			<button onClick={() => setCount('HELLO')}>Add 1</button>
		</div>
	);
}

export default CounterHooks;
