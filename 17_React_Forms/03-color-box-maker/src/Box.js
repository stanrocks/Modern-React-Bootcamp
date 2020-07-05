import React, { Component } from 'react';

class Box extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(evt) {
		this.props.removeBox();
	}

	render() {
		return (
			<div>
				<div
					className="Box"
					style={{
						height: `${this.props.height}px`,
						width: `${this.props.width}px`,
						backgroundColor: this.props.color
					}}
				/>
				<button onClick={this.handleClick}>Remove The Box!</button>
			</div>
		);
	}
}

export default Box;
