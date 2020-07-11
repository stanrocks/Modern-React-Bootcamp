import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = { deck: '' };
	}
	componentDidMount() {
		axios.get('https://deckofcardsapi.com/api/deck/new/shuffle').then((response) => {
			this.setState({ deck: response.data });
		});
	}
	render() {
		return (
			<div>
				<h1>Deck</h1>
				Remaining: {this.state.deck.remaining}
				<Card />
			</div>
		);
	}
}

export default Deck;
