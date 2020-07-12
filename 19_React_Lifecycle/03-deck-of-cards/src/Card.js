import React, { Component } from 'react';

class Card extends Component {
	render() {
		return <img src={this.props.cardImage} alt={this.props.desc} />;
	}
}

export default Card;
