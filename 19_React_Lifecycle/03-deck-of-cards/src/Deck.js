import React, { Component } from 'react';
import Card from './Card';
import axios from 'axios';

class Deck extends Component {
	constructor(props) {
		super(props);
		this.state = { deckId: '', cards: [], remaining: '' };
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		// create new deck (consists 'deck_id' and 'remaining')
		axios.get('https://deckofcardsapi.com/api/deck/new/shuffle').then((response) => {
			this.setState({ deckId: response.data.deck_id });
		});
	}

	drawCard() {
		axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw`).then((response) => {
			// console.log(response.data.remaining);
			// console.log(response.data.cards[0].image);
			this.setState({
				remaining: response.data.remaining,
				cards: [ ...this.state.cards, response.data.cards[0].image ]
			});
		});
	}

	handleClick() {
		console.log('CLICKED');
		this.drawCard();
	}

	render() {
		return (
			<div>
				<h1>Deck</h1>
				Remaining: {this.state.remaining}
				<button onClick={this.handleClick}>GIMME A CARD!</button>
				<Card />
			</div>
		);
	}
}

export default Deck;
