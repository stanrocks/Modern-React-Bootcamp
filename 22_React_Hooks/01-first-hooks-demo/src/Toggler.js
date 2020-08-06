import React from 'react';
import useToggle from './hooks/useToggle';
function Toggler() {
	const [ isHappy, toggleIsHappy ] = useToggle(true);
	const [ isHeartBroken, toggleIsHeartBroken ] = useToggle(false);
	const [ isBanana, toggleIsBanana ] = useToggle(true);

	return (
		<div>
			<h1 onClick={toggleIsHappy}>{isHappy ? "I'm happy!" : "I'm sad..."}</h1>
			<h1 onClick={toggleIsHeartBroken}>{isHeartBroken ? "I'm heartbroken..." : "I'm happily in love!"}</h1>
			<h1 onClick={toggleIsBanana}>{isBanana ? 'SOOOO BANANA!!!' : 'No banana :('}</h1>
		</div>
	);
}
export default Toggler;
