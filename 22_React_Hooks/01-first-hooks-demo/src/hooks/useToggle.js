import { useState } from 'react';

// false by default
function useToggle(initialVal = false) {
	// call useState, "reserve piece of state"
	const [ state, setState ] = useState(initialVal);
	const toggle = () => {
		setState(!state);
	};
	// return piece of state and function to toggle it
	return [ state, toggle ];
}

export default useToggle;
