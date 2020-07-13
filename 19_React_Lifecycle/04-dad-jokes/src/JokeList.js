import React, { Component } from 'react';
import Joke from './Joke';

class JokeList extends Component {
	render() {
		return (
			<div>
				JokeList:
				<Joke />
			</div>
		);
	}
}

export default JokeList;
