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
		this.removeBox = this.removeBox.bind(this);
	}
	addBox(box) {
		this.setState((state) => ({
			boxes: [ ...state.boxes, box ]
		}));
	}
	removeBox(index) {
		const boxesCopy = [ ...this.state.boxes ];
		boxesCopy.splice(index, 1);
		this.setState({
			boxes: boxesCopy
		});
	}

	renderBoxes() {
		return (
			<div>
				{this.state.boxes.map((box, index) => (
					<div>
						<Box height={box.height} width={box.width} color={box.color} removeBox={() => this.removeBox(index)} />
					</div>
				))}
			</div>
		);
	}
	render() {
		return (
			<div>
				<h1>Box Maker Thingy</h1>
				<NewBoxForm addBox={this.addBox} />
				{this.renderBoxes()}
			</div>
		);
	}
}

export default BoxList;
