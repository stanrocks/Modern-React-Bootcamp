import React, { Component } from 'react';
import './Pokecard.css';
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'http://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

// id needs to be three digits (001, 002, 043, 523, etc)
let padToThree = (number) => (number <= 99 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
	render() {
		let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{this.props.name}</h1>
				<div className="Pokecard-image">
					<img src={imgSrc} alt={this.props.name} />
				</div>
				<div className="Pokecard-data">Type: {this.props.type}</div>
				<div className="Pokecard-data">EXP: {this.props.exp}</div>
			</div>
		);
	}
}

export default Pokecard;
