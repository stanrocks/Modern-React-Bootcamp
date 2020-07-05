import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: []
		};
	}
	renderBoxes() {
		return (
			<div>
				{this.state.boxes.map((box) => (
					<div>
						<Box color={box.color} width={box.width} height={box.height} />
					</div>
				))}
			</div>
		);
	}
	render() {
		return (
			<div>
				<NewBoxForm />
				{this.renderBoxes()}
				{/* also all Boxes go here */}
				<Box />
			</div>
		);
	}
}
