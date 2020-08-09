import { useState } from 'react';

export default (initialVal) => {
	const [ value, setValue ] = useState(initialVal);
	// method to update output by translating from input
	const handleChange = (e) => {
		setValue(e.target.value);
	};
	// method to reset input field
	const reset = () => {
		setValue('');
	};
	// return piece of state and function to toggle it
	return [ value, handleChange, reset ];
};

// example:
// const [age, handleAgeChange, resetAge] = useFormState('')
