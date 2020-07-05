import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: []
		};
		this.addBox = this.addBox.bind(this);
	}
	addBox(box) {
		this.setState((state) => ({
			boxes: [ ...state.boxes, box ]
		}));
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
				<NewBoxForm addBox={this.addBox} />
				{this.renderBoxes()}
			</div>
		);
	}
}

export default BoxList;
