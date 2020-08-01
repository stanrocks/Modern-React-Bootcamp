import React from 'react';
import { ChromePicker } from 'react-color';

export default class Component extends React.Component {
	state = {
		background: '#fff'
	};

	handleChangeComplete = (color) => {
		console.log('Complete');
		console.log(color);
		this.setState({ background: color.hex });
	};

	handleChange = (color, event) => {
		console.log('Change');
		console.log(color.hex);
		console.log(event);
		this.setState({ background: color.hex });
	};

	render() {
		return (
			<ChromePicker
				color={this.state.background}
				onChangeComplete={this.handleChangeComplete}
				onChange={this.handleChange}
			/>
		);
	}
}
