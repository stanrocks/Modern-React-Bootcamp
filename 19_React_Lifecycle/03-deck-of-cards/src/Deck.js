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
			this.setState({ deckId: response.data.deck_id, remaining: response.data.remaining });
		});
	}

	drawCard() {
		if (this.state.remaining > 0) {
			axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw`).then((response) => {
				// console.log(response.data.remaining);
				// console.log(response.data.cards[0].image);
				const card = response.data.cards[0];
				this.setState({
					remaining: response.data.remaining,
					cards: [ ...this.state.cards, { image: card.image, value: card.value, suit: card.suit } ]
				});
			});
		}
	}

	handleClick() {
		console.log('CLICKED');
		this.drawCard();
	}

	render() {
		const cards = this.state.cards.map((card) => (
			<Card cardImage={card.image} desc={`${card.value} ${card.suit}`} key={`${card.value} ${card.suit}`} />
		));
		const status = this.state.remaining === 0 ? `Deck is empty` : `Remaining: ${this.state.remaining}`;
		return (
			<div>
				<h1>Deck</h1>
				<button onClick={this.handleClick}>GIMME A CARD!</button>
				<div>{status}</div>
				<div>{cards}</div>
			</div>
		);
	}
}

export default Deck;
